// Text Highlighter v2 - Simple & Reliable
(function(){
    const page = document.title.replace(/[^a-zA-Z0-9]/g,'');
    
    function getHighlights() {
        return JSON.parse(localStorage.getItem('hl_' + page) || '[]');
    }
    function saveHighlights(data) {
        localStorage.setItem('hl_' + page, JSON.stringify(data));
    }

    // Create toolbar
    const toolbar = document.createElement('div');
    toolbar.id = 'hlToolbar';
    toolbar.innerHTML = '<span style="font-size:.68rem;color:#ccc;margin-right:6px">Mark:</span><span class="hlc" data-c="#b45309" style="background:#b45309"></span><span class="hlc" data-c="#047857" style="background:#047857"></span><span class="hlc" data-c="#be123c" style="background:#be123c"></span><span class="hlc" data-c="#1d4ed8" style="background:#1d4ed8"></span><span id="hlClear" style="color:#ff6b6b;font-size:.8rem;cursor:pointer;margin-left:6px" title="Remove">✕</span>';
    toolbar.style.cssText = 'display:none;position:absolute;z-index:99999;background:#1e293b;border:1px solid #475569;border-radius:8px;padding:6px 10px;box-shadow:0 4px 20px rgba(0,0,0,.5);align-items:center;gap:6px';
    
    // Style color buttons
    const style = document.createElement('style');
    style.textContent = '.hlc{width:22px;height:22px;border-radius:50%;cursor:pointer;display:inline-block;border:2px solid #fff3;transition:transform .15s}.hlc:hover{transform:scale(1.2);border-color:#fff}mark.hl,.hl,font[style*="background"]{color:#fff!important;font-weight:700!important;padding:1px 3px!important;border-radius:2px!important;cursor:pointer;text-shadow:0 1px 2px rgba(0,0,0,.5)!important}pre font,pre span[style*="background"],pre mark{color:#fff!important;font-weight:700!important;text-shadow:0 1px 2px rgba(0,0,0,.5)!important}';
    document.head.appendChild(style);
    document.body.appendChild(toolbar);

    // Show toolbar on selection
    document.addEventListener('mouseup', function(e) {
        if (e.target.closest('#hlToolbar')) return;
        setTimeout(function() {
            const sel = window.getSelection();
            const text = sel.toString().trim();
            if (text.length > 1) {
                const range = sel.getRangeAt(0);
                const rect = range.getBoundingClientRect();
                toolbar.style.display = 'flex';
                toolbar.style.top = (window.scrollY + rect.top - 40) + 'px';
                toolbar.style.left = (rect.left + rect.width/2 - 100) + 'px';
            } else {
                toolbar.style.display = 'none';
            }
        }, 50);
    });

    // Color click - highlight
    toolbar.querySelectorAll('.hlc').forEach(function(btn) {
        btn.addEventListener('mousedown', function(e) {
            e.preventDefault();
            const color = this.dataset.c;
            const sel = window.getSelection();
            const text = sel.toString().trim();
            if (!text || !sel.rangeCount) return;

            // Use execCommand to highlight
            document.execCommand('hiliteColor', false, color);
            
            // Now find the highlighted elements and add our class
            document.querySelectorAll('[style*="background-color: ' + color + '"]').forEach(function(el) {
                if (!el.classList.contains('hl')) {
                    el.classList.add('hl');
                    el.setAttribute('data-hl-text', el.textContent);
                    el.style.color = '#000';
                    el.style.fontWeight = '700';
                    el.style.padding = '1px 3px';
                    el.style.borderRadius = '2px';
                    el.style.cursor = 'pointer';
                }
            });

            // Save
            const highlights = getHighlights();
            highlights.push({ text: text, color: color });
            saveHighlights(highlights);
            updateCounter();
            
            sel.removeAllRanges();
            toolbar.style.display = 'none';
        });
    });

    // Clear button
    document.getElementById('hlClear').addEventListener('mousedown', function(e) {
        e.preventDefault();
        document.execCommand('removeFormat');
        const sel = window.getSelection();
        const text = sel.toString().trim();
        const highlights = getHighlights().filter(h => !text.includes(h.text) && !h.text.includes(text));
        saveHighlights(highlights);
        updateCounter();
        toolbar.style.display = 'none';
    });

    // Click highlighted text to remove
    document.addEventListener('click', function(e) {
        if (e.target.classList && e.target.classList.contains('hl')) {
            if (confirm('Remove highlight?')) {
                const text = e.target.getAttribute('data-hl-text') || e.target.textContent;
                const parent = e.target.parentNode;
                parent.replaceChild(document.createTextNode(e.target.textContent), e.target);
                parent.normalize();
                const highlights = getHighlights().filter(h => h.text !== text);
                saveHighlights(highlights);
                updateCounter();
            }
        }
    });

    // Counter
    function updateCounter() {
        const highlights = getHighlights();
        let counter = document.getElementById('hlCounter');
        if (!counter) {
            counter = document.createElement('div');
            counter.id = 'hlCounter';
            counter.style.cssText = 'position:fixed;bottom:15px;left:15px;background:#fbbf24;color:#000;padding:7px 14px;border-radius:20px;font-size:.72rem;font-weight:700;z-index:998;box-shadow:0 4px 12px rgba(0,0,0,.2);cursor:pointer';
            counter.onclick = function() {
                if (confirm('Remove ALL highlights?')) {
                    document.querySelectorAll('.hl').forEach(function(el) {
                        const parent = el.parentNode;
                        parent.replaceChild(document.createTextNode(el.textContent), el);
                        parent.normalize();
                    });
                    saveHighlights([]);
                    updateCounter();
                }
            };
            document.body.appendChild(counter);
        }
        counter.textContent = '\ud83d\udd8d\ufe0f ' + highlights.length + ' marked';
        counter.style.display = highlights.length > 0 ? 'block' : 'none';
    }

    // Make pre elements editable (needed for execCommand to work inside them)
    function enableHighlighting() {
        document.querySelectorAll('.q-ans pre, .q-ans, pre').forEach(function(el) {
            el.setAttribute('contenteditable', 'true');
            el.style.outline = 'none';
            el.addEventListener('keydown', function(e) { e.preventDefault(); }); // prevent typing
        });
    }

    // Restore saved highlights
    function restoreHighlights() {
        const highlights = getHighlights();
        if (!highlights.length) return;
        
        highlights.forEach(function(h) {
            const body = document.body.innerHTML;
            const idx = body.indexOf(h.text);
            if (idx === -1) return;
            
            // Find text node and highlight it
            const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
            while (walker.nextNode()) {
                const node = walker.currentNode;
                const textIdx = node.textContent.indexOf(h.text);
                if (textIdx >= 0 && !node.parentElement.classList.contains('hl')) {
                    try {
                        const range = document.createRange();
                        range.setStart(node, textIdx);
                        range.setEnd(node, textIdx + h.text.length);
                        const mark = document.createElement('mark');
                        mark.className = 'hl';
                        mark.setAttribute('data-hl-text', h.text);
                        mark.style.cssText = 'background-color:' + h.color + '!important;color:#000!important;font-weight:700!important;padding:1px 3px;border-radius:2px;cursor:pointer';
                        range.surroundContents(mark);
                    } catch(e) {}
                    break;
                }
            }
        });
    }

    // Init
    setTimeout(function() {
        enableHighlighting();
        restoreHighlights();
        updateCounter();
    }, 1500);
})();
