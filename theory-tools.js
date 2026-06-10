// ============================================
// THEORY TOOLS - Combined JS for theory pages
// ============================================

// === SHORT ANSWER ===
(function(){
    function addShortAnswerButtons() {
        document.querySelectorAll('.q-ans').forEach(function(ans, idx) {
            if (ans.querySelector('.short-ans-btn')) return;
            
            const btn = document.createElement('button');
            btn.className = 'short-ans-btn';
            btn.textContent = '\ud83d\udcdd Short Answer';
            btn.style.cssText = 'background:linear-gradient(135deg,#0ea5e9,#38bdf8);color:#fff;border:none;padding:6px 14px;border-radius:6px;font-size:.73rem;font-weight:600;cursor:pointer;margin-right:8px;margin-bottom:10px';
            
            const shortDiv = document.createElement('div');
            shortDiv.className = 'short-ans-text';
            shortDiv.style.cssText = 'display:none;background:linear-gradient(135deg,#f0fdf4,#dcfce7);border:1px solid #86efac;border-radius:10px;padding:14px;margin-bottom:12px;font-size:.84rem;line-height:1.8;color:#1e293b';
            
            btn.onclick = function(e) {
                e.stopPropagation();
                const pre = ans.querySelector('pre');
                if (shortDiv.style.display === 'block') {
                    shortDiv.style.display = 'none';
                    if (pre) pre.style.display = 'block';
                    btn.textContent = '\ud83d\udcdd Short Answer';
                    btn.style.background = 'linear-gradient(135deg,#0ea5e9,#38bdf8)';
                } else {
                    if (pre) pre.style.display = 'none';
                    shortDiv.style.display = 'block';
                    btn.textContent = '\ud83d\udcd6 Full Answer';
                    btn.style.background = 'linear-gradient(135deg,#6366f1,#818cf8)';
                    if (!shortDiv.dataset.generated) {
                        var page = document.title.replace(/[^a-zA-Z0-9]/g,'');
                        var savedKey = 'custom_short_' + page + '_' + idx;
                        var saved = localStorage.getItem(savedKey);
                        if (saved) {
                            shortDiv.innerHTML = '<div style="border-left:3px solid #0ea5e9;padding-left:12px"><div style="font-size:.7rem;color:#0369a1;font-weight:700;margin-bottom:6px">\ud83c\udfaf MY ANSWER:</div><div style="color:#1e293b">' + saved.replace(/\n/g,'<br>') + '</div></div>';
                        } else {
                            shortDiv.innerHTML = generateShortAnswer(pre ? pre.textContent : '');
                        }
                        // Add Edit button
                        var editWrap = document.createElement('div');
                        editWrap.style.cssText = 'margin-top:10px;display:flex;gap:6px';
                        var editBtn = document.createElement('button');
                        editBtn.textContent = '\u270f\ufe0f Edit My Answer';
                        editBtn.style.cssText = 'background:#f59e0b;color:#000;border:none;padding:5px 12px;border-radius:5px;font-size:.7rem;cursor:pointer;font-weight:600';
                        editBtn.onclick = function(ev) {
                            ev.stopPropagation();
                            var current = localStorage.getItem(savedKey) || '';
                            var newAns = prompt('Write your short interview answer (2-4 lines):', current);
                            if (newAns !== null && newAns.trim()) {
                                localStorage.setItem(savedKey, newAns.trim());
                                shortDiv.innerHTML = '<div style="border-left:3px solid #0ea5e9;padding-left:12px"><div style="font-size:.7rem;color:#0369a1;font-weight:700;margin-bottom:6px">\ud83c\udfaf MY ANSWER:</div><div style="color:#1e293b">' + newAns.trim().replace(/\n/g,'<br>') + '</div></div>';
                                shortDiv.dataset.generated = 'true';
                            }
                        };
                        editWrap.appendChild(editBtn);
                        if (saved) {
                            var resetBtn = document.createElement('button');
                            resetBtn.textContent = '\ud83d\uddd1\ufe0f Reset';
                            resetBtn.style.cssText = 'background:#ef4444;color:#fff;border:none;padding:5px 12px;border-radius:5px;font-size:.7rem;cursor:pointer';
                            resetBtn.onclick = function(ev) {
                                ev.stopPropagation();
                                if (!confirm('Reset to auto-generated?')) return;
                                localStorage.removeItem(savedKey);
                                shortDiv.dataset.generated = '';
                                shortDiv.innerHTML = generateShortAnswer(pre ? pre.textContent : '');
                            };
                            editWrap.appendChild(resetBtn);
                        }
                        shortDiv.appendChild(editWrap);
                        shortDiv.dataset.generated = 'true';
                    }
                }
            };
            ans.insertBefore(shortDiv, ans.querySelector('pre'));
            ans.insertBefore(btn, shortDiv);
        });
    }

    function generateShortAnswer(text) {
        if (!text || text.trim().length < 20) return '<span style="color:#64748b">No content.</span>';
        var lines = text.split('\n').map(function(l){return l.trim()}).filter(function(l){return l.length > 0});
        var definition = '';
        var keyPoints = [];

        for (var i = 0; i < lines.length; i++) {
            var line = lines[i];
            if (isCodeLine(line) || line.startsWith('|') || line.startsWith('+--') || line.startsWith('===') || line.match(/^[\s{}();]+$/)) continue;
            if (!definition && line.length > 15 && !line.startsWith('-') && !line.startsWith('//')) {
                definition = line.replace(/[:]\s*$/, '');
                continue;
            }
            if (line.startsWith('- ') && keyPoints.length < 5) {
                var point = line.substring(2).trim();
                if (point.length > 10 && point.length < 150 && !isCodeLine(point)) keyPoints.push(point);
            } else if (line.includes(':') && !line.includes('//') && !line.includes('=>') && !line.includes('http') && line.indexOf(':') < 25 && keyPoints.length < 5) {
                var parts = line.split(':');
                var key = parts[0].trim();
                var val = parts.slice(1).join(':').trim();
                if (key.length > 2 && key.length < 25 && val.length > 5 && val.length < 120 && !isCodeLine(key) && !isCodeLine(val))
                    keyPoints.push('<strong>' + key + '</strong>: ' + val);
            } else if (line.length > 20 && line.length < 150 && !isCodeLine(line) && !line.startsWith('-') && keyPoints.length < 4 && line !== definition) {
                if (line.match(/^[A-Z]/) && !line.match(/^[A-Z]{3,}/)) keyPoints.push(line);
            }
        }

        var html = '<div style="border-left:3px solid #0ea5e9;padding-left:12px;margin-bottom:10px">';
        html += '<div style="font-size:.7rem;color:#0369a1;font-weight:700;margin-bottom:6px">\ud83c\udfaf INTERVIEW ANSWER:</div>';
        if (definition) html += '<div style="color:#1e293b;margin-bottom:8px">' + definition + '</div>';
        if (keyPoints.length > 0) {
            keyPoints.slice(0, 4).forEach(function(point) {
                html += '<div style="padding:3px 0 3px 10px;color:#334155;border-left:2px solid rgba(14,165,233,.3);margin-bottom:4px"><span style="color:#059669;margin-right:4px">\u25b8</span>' + point + '</div>';
            });
        }
        html += '</div>';
        html += '<div style="font-size:.7rem;color:#64748b;margin-top:8px;font-style:italic">\ud83d\udca1 Keep it under 60 seconds. If interviewer wants more, they\'ll ask.</div>';
        return html;
    }

    function isCodeLine(line) {
        var starts = ['public ','private ','protected ','//','{ ','}','using ','var ','int ','string ','class ','return ','if (','if(','else','Console.','await ','SELECT ','FROM ','WHERE ','INSERT ','UPDATE ','DELETE ','CREATE ','ALTER ','namespace','static ','void ','new ','try','catch','finally','throw ','decimal ','bool ','foreach','for (','while','switch','List<','Dictionary<','Task<'];
        for (var i = 0; i < starts.length; i++) { if (line.startsWith(starts[i])) return true; }
        if (line.match(/^[\s{}();,\[\]]+$/)) return true;
        return false;
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() { setTimeout(addShortAnswerButtons, 600); });
    } else {
        setTimeout(addShortAnswerButtons, 600);
    }
    document.addEventListener('click', function(e) {
        if (e.target.closest('.q-title')) setTimeout(addShortAnswerButtons, 200);
    });
})();

// === SPEAK ENHANCED ===
setTimeout(function(){
    window.showSpeak = function(idx, btn) {
        var sd = document.getElementById('speak_' + idx);
        var pre = btn.parentElement.querySelector('pre');
        if (sd.style.display === 'block') {
            sd.style.display = 'none';
            if (pre) pre.style.display = 'block';
            btn.classList.remove('active');
            btn.textContent = '\ud83d\udde3\ufe0f How to Speak';
            return;
        }
        if (pre) pre.style.display = 'none';
        btn.classList.add('active');
        sd.style.display = 'block';

        if (typeof SPEAK_DATA !== 'undefined' && SPEAK_DATA[idx]) {
            sd.innerHTML = formatSpeak(SPEAK_DATA[idx]);
            btn.textContent = '\u274c Hide Speaking Tips';
            return;
        }

        var text = pre ? pre.textContent : '';
        var lines = text.split('\n').filter(function(l) { return l.trim() && !l.startsWith('=') && !l.startsWith('|') && !l.startsWith('+--') && l.trim().length > 3; });
        var html = '<div style="background:#0d1b2a;border-radius:10px;padding:16px;border:1px solid rgba(255,255,255,.08)">';
        html += '<div style="background:rgba(56,189,248,.08);border-left:3px solid #38bdf8;padding:10px 14px;border-radius:0 8px 8px 0;margin-bottom:14px;font-size:.82rem;color:#38bdf8">\ud83c\udfaf <strong>How to explain:</strong></div>';
        html += '<div style="font-size:.84rem;line-height:1.8;color:#e2e8f0">';
        var count = 0;
        lines.forEach(function(line) {
            line = line.trim();
            if (line.length < 4) return;
            var codeStarts = ['public ','private ','protected ','//','{ ','}','using ','var ','int ','string ','class ','return ','Console.','await ','static ','void ','namespace','foreach','for ('];
            for (var i = 0; i < codeStarts.length; i++) { if (line.startsWith(codeStarts[i])) return; }
            if (line.match(/^[A-Z][A-Z\s]{3,}:?$/)) { html += '<div style="color:#f59e0b;font-weight:700;margin-top:10px">\ud83d\udccc ' + line + '</div>'; count = 0; return; }
            if (line.startsWith('- ')) { html += '<div style="padding:3px 0 3px 12px;color:#cbd5e1"><span style="color:#10b981">\u25b8</span> ' + line.substring(2) + '</div>'; return; }
            if (count++ < 12) html += '<div style="padding:3px 0;color:#cbd5e1">' + line + '</div>';
        });
        html += '</div><div style="background:rgba(16,185,129,.08);border-left:3px solid #10b981;padding:10px 14px;border-radius:0 8px 8px 0;margin-top:14px;font-size:.82rem;color:#10b981">\ud83d\udca1 <strong>End:</strong> "Would you like a code example?"</div></div>';
        sd.innerHTML = html;
        btn.textContent = '\u274c Hide Speaking Tips';
    };

    function formatSpeak(text) {
        var paragraphs = text.split('\n\n').filter(function(p) { return p.trim().length > 0; });
        var html = '<div style="background:#0d1b2a;border-radius:10px;padding:16px;border:1px solid rgba(255,255,255,.08)">';
        html += '<div style="background:rgba(56,189,248,.08);border-left:3px solid #38bdf8;padding:10px 14px;border-radius:0 8px 8px 0;margin-bottom:14px;font-size:.82rem;color:#38bdf8">\ud83c\udfaf <strong>How to explain:</strong></div>';
        html += '<div style="font-size:.84rem;line-height:1.8;color:#e2e8f0">';
        paragraphs.forEach(function(para) {
            para = para.trim();
            var sentences = para.split(/(?<=\.)\s+/).filter(function(s) { return s.trim().length > 5; });
            if (sentences.length > 1) {
                html += '<div style="margin:8px 0">';
                sentences.forEach(function(s) { html += '<div style="padding:4px 0 4px 12px;border-left:2px solid rgba(16,185,129,.2);margin-bottom:3px"><span style="color:#10b981">\u25b8</span> ' + s.trim() + '</div>'; });
                html += '</div>';
            } else {
                html += '<div style="padding:6px 0;color:#cbd5e1;border-bottom:1px solid rgba(255,255,255,.04)">' + para + '</div>';
            }
        });
        var wordCount = text.split(' ').length; var timeEst = Math.ceil(wordCount / 130 * 60); html += '</div><div style="display:flex;justify-content:space-between;align-items:center;margin-top:14px;gap:10px"><div style="background:rgba(16,185,129,.08);border-left:3px solid #10b981;padding:10px 14px;border-radius:0 8px 8px 0;font-size:.82rem;color:#10b981;flex:1">\ud83d\udca1 <strong>Tip:</strong> Keep under 60 seconds.</div><div style="text-align:center"><div style="font-size:.68rem;color:#64748b">\u23f1 ~' + timeEst + 's</div><button onclick="startSpeakTimer(this)" style="margin-top:3px;background:#6366f1;color:#fff;border:none;padding:5px 10px;border-radius:5px;font-size:.68rem;cursor:pointer;font-weight:600">\ud83c\udfa4 60s Timer</button></div></div></div>';
        return html;
    }
}, 1000);

// === HIGHLIGHTER ===
(function(){
    const page = document.title.replace(/[^a-zA-Z0-9]/g,'');
    function getHighlights() { return JSON.parse(localStorage.getItem('hl_' + page) || '[]'); }
    function saveHighlights(data) { localStorage.setItem('hl_' + page, JSON.stringify(data)); }

    const toolbar = document.createElement('div');
    toolbar.id = 'hlToolbar';
    toolbar.innerHTML = '<span style="font-size:.68rem;color:#ccc;margin-right:6px">Mark:</span><span class="hlc" data-c="#b45309" style="background:#b45309"></span><span class="hlc" data-c="#047857" style="background:#047857"></span><span class="hlc" data-c="#be123c" style="background:#be123c"></span><span class="hlc" data-c="#1d4ed8" style="background:#1d4ed8"></span><span id="hlClear" style="color:#ff6b6b;font-size:.8rem;cursor:pointer;margin-left:6px" title="Remove">\u2715</span>';
    toolbar.style.cssText = 'display:none;position:absolute;z-index:99999;background:#1e293b;border:1px solid #475569;border-radius:8px;padding:6px 10px;box-shadow:0 4px 20px rgba(0,0,0,.5);align-items:center;gap:6px';

    const style = document.createElement('style');
    style.textContent = '.hlc{width:22px;height:22px;border-radius:50%;cursor:pointer;display:inline-block;border:2px solid #fff3;transition:transform .15s}.hlc:hover{transform:scale(1.2);border-color:#fff}mark.hl,font[style*="background"]{color:#fff!important;font-weight:700!important;padding:1px 3px!important;border-radius:2px!important;cursor:pointer;text-shadow:0 1px 2px rgba(0,0,0,.5)!important}pre font,pre span[style*="background"],pre mark{color:#fff!important;font-weight:700!important;text-shadow:0 1px 2px rgba(0,0,0,.5)!important}';
    document.head.appendChild(style);
    document.body.appendChild(toolbar);

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
            } else { toolbar.style.display = 'none'; }
        }, 50);
    });

    toolbar.querySelectorAll('.hlc').forEach(function(btn) {
        btn.addEventListener('mousedown', function(e) {
            e.preventDefault();
            const color = this.dataset.c;
            const sel = window.getSelection();
            const text = sel.toString().trim();
            if (!text || !sel.rangeCount) return;
            try {
                const range = sel.getRangeAt(0);
                const mark = document.createElement('mark');
                mark.className = 'hl';
                mark.setAttribute('data-hl-text', text);
                mark.style.cssText = 'background-color:' + color + '!important;color:#fff!important;font-weight:700!important;padding:1px 3px;border-radius:2px;cursor:pointer;text-shadow:0 1px 2px rgba(0,0,0,.5)';
                range.surroundContents(mark);
            } catch(err) {}
            const highlights = getHighlights();
            highlights.push({ text: text, color: color });
            saveHighlights(highlights);
            updateCounter();
            sel.removeAllRanges();
            toolbar.style.display = 'none';
        });
    });

    document.getElementById('hlClear').addEventListener('mousedown', function(e) {
        e.preventDefault();
        const sel = window.getSelection();
        const text = sel.toString().trim();
        document.querySelectorAll('.hl').forEach(function(el) {
            if (text && (el.textContent.includes(text) || text.includes(el.textContent))) {
                el.parentNode.replaceChild(document.createTextNode(el.textContent), el);
                el.parentNode.normalize();
            }
        });
        const highlights = getHighlights().filter(function(h) { return !text || (!text.includes(h.text) && !h.text.includes(text)); });
        saveHighlights(highlights);
        updateCounter();
        toolbar.style.display = 'none';
    });

    document.addEventListener('click', function(e) {
        if (e.target.classList && e.target.classList.contains('hl')) {
            if (confirm('Remove highlight?')) {
                const text = e.target.getAttribute('data-hl-text') || e.target.textContent;
                e.target.parentNode.replaceChild(document.createTextNode(e.target.textContent), e.target);
                e.target.parentNode && e.target.parentNode.normalize && e.target.parentNode.normalize();
                const highlights = getHighlights().filter(function(h) { return h.text !== text; });
                saveHighlights(highlights);
                updateCounter();
            }
        }
    });

    function updateCounter() {
        const highlights = getHighlights();
        let counter = document.getElementById('hlCounter');
        if (!counter) {
            counter = document.createElement('div');
            counter.id = 'hlCounter';
            counter.style.cssText = 'position:fixed;bottom:15px;left:15px;background:#fbbf24;color:#000;padding:7px 14px;border-radius:20px;font-size:.72rem;font-weight:700;z-index:998;box-shadow:0 4px 12px rgba(0,0,0,.2);cursor:pointer';
            counter.onclick = function() {
                if (confirm('Remove ALL highlights?')) {
                    document.querySelectorAll('.hl').forEach(function(el) { el.parentNode.replaceChild(document.createTextNode(el.textContent), el); });
                    saveHighlights([]);
                    updateCounter();
                }
            };
            document.body.appendChild(counter);
        }
        counter.textContent = '\ud83d\udd8d\ufe0f ' + highlights.length + ' marked';
        counter.style.display = highlights.length > 0 ? 'block' : 'none';
    }

    function restoreHighlights() {
        const highlights = getHighlights();
        if (!highlights.length) return;
        highlights.forEach(function(h) {
            var exists = false;
            document.querySelectorAll('.hl').forEach(function(el) { if (el.textContent === h.text) exists = true; });
            if (exists) return;
            const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
            while (walker.nextNode()) {
                const node = walker.currentNode;
                const idx = node.textContent.indexOf(h.text);
                if (idx >= 0 && !node.parentElement.classList.contains('hl') && !node.parentElement.closest('.hl')) {
                    try {
                        const range = document.createRange();
                        range.setStart(node, idx);
                        range.setEnd(node, idx + h.text.length);
                        const mark = document.createElement('mark');
                        mark.className = 'hl';
                        mark.setAttribute('data-hl-text', h.text);
                        mark.style.cssText = 'background-color:' + h.color + '!important;color:#fff!important;font-weight:700!important;padding:1px 3px;border-radius:2px;cursor:pointer;text-shadow:0 1px 2px rgba(0,0,0,.5)';
                        range.surroundContents(mark);
                    } catch(e) {}
                    break;
                }
            }
        });
    }

    setTimeout(function() { restoreHighlights(); updateCounter(); }, 1500);
    document.addEventListener('click', function(e) {
        if (e.target.closest('.q-title')) setTimeout(function() { restoreHighlights(); updateCounter(); }, 300);
    });
})();


// === SPEAKING TIMER ===
function startSpeakTimer(btn) {
    var parent = btn.parentElement;
    var existing = parent.querySelector('.timer-display');
    if (existing) { existing.remove(); btn.textContent = '\ud83c\udfa4 60s Timer'; return; }
    
    var timerEl = document.createElement('div');
    timerEl.className = 'timer-display';
    timerEl.style.cssText = 'font-size:1.2rem;font-weight:700;color:#10b981;margin-top:6px';
    timerEl.textContent = '60';
    parent.appendChild(timerEl);
    btn.textContent = '\u23f9 Stop';
    
    var seconds = 60;
    var interval = setInterval(function() {
        seconds--;
        timerEl.textContent = seconds + 's';
        if (seconds <= 10) timerEl.style.color = '#ef4444';
        else if (seconds <= 30) timerEl.style.color = '#f59e0b';
        if (seconds <= 0) {
            clearInterval(interval);
            timerEl.textContent = '\u23f0 Time!';
            timerEl.style.color = '#ef4444';
            btn.textContent = '\ud83c\udfa4 60s Timer';
        }
    }, 1000);
    
    btn.onclick = function() {
        clearInterval(interval);
        timerEl.remove();
        btn.textContent = '\ud83c\udfa4 60s Timer';
        btn.onclick = function() { startSpeakTimer(btn); };
    };
}

// === SHOW ALL SHORT ANSWERS (Quick Revision Mode) ===
(function(){
    setTimeout(function() {
        var container = document.querySelector('.container');
        if (!container || !document.querySelector('.q-ans')) return;
        
        var revBtn = document.createElement('button');
        revBtn.textContent = '\ud83d\udcda Quick Revision (All Short Answers)';
        revBtn.style.cssText = 'display:block;margin:10px auto;background:linear-gradient(135deg,#10b981,#059669);color:#fff;border:none;padding:8px 16px;border-radius:8px;font-size:.75rem;font-weight:600;cursor:pointer';
        var isRevMode = false;
        
        revBtn.onclick = function() {
            isRevMode = !isRevMode;
            if (isRevMode) {
                revBtn.textContent = '\u274c Exit Revision Mode';
                revBtn.style.background = 'linear-gradient(135deg,#ef4444,#dc2626)';
                document.querySelectorAll('.q').forEach(function(q) { q.classList.add('open'); });
                setTimeout(function() {
                    document.querySelectorAll('.short-ans-btn').forEach(function(btn) {
                        if (btn.textContent.includes('Short')) btn.click();
                    });
                }, 300);
            } else {
                revBtn.textContent = '\ud83d\udcda Quick Revision (All Short Answers)';
                revBtn.style.background = 'linear-gradient(135deg,#10b981,#059669)';
                document.querySelectorAll('.short-ans-btn').forEach(function(btn) {
                    if (btn.textContent.includes('Full')) btn.click();
                });
                document.querySelectorAll('.q').forEach(function(q) { q.classList.remove('open'); });
            }
        };
        
        // Insert after search or at top of container
        var searchEl = document.getElementById('search');
        if (searchEl) {
            searchEl.insertAdjacentElement('afterend', revBtn);
        } else {
            var firstQ = container.querySelector('.q');
            if (firstQ) container.insertBefore(revBtn, firstQ);
        }
    }, 1000);
})();

// === EXPORT ALL HIGHLIGHTS AS PDF ===
(function(){
    setTimeout(function() {
        var counter = document.getElementById('hlCounter');
        if (!counter) return;
        
        var origClick = counter.onclick;
        counter.onclick = null;
        counter.onclick = function(e) {
            var choice = confirm('OK = Export highlights as PDF\nCancel = Remove all highlights');
            if (choice) {
                exportHighlightsPDF();
            } else {
                if (confirm('Sure? Remove ALL highlights?')) {
                    document.querySelectorAll('.hl').forEach(function(el) {
                        el.parentNode.replaceChild(document.createTextNode(el.textContent), el);
                    });
                    var page = document.title.replace(/[^a-zA-Z0-9]/g,'');
                    localStorage.setItem('hl_' + page, '[]');
                    location.reload();
                }
            }
        };
    }, 2000);
})();

function exportHighlightsPDF() {
    var page = document.title.replace(/[^a-zA-Z0-9]/g,'');
    var highlights = JSON.parse(localStorage.getItem('hl_' + page) || '[]');
    if (!highlights.length) { alert('No highlights to export!'); return; }
    
    var html = '<html><head><title>My Highlights - ' + document.title + '</title>';
    html += '<style>body{font-family:Segoe UI,sans-serif;padding:30px;max-width:700px;margin:0 auto}h1{color:#0369a1;font-size:1.3rem}';
    html += '.item{padding:10px 14px;margin-bottom:8px;border-radius:6px;font-size:.9rem;line-height:1.6}</style></head><body>';
    html += '<h1>\ud83d\udd8d\ufe0f My Highlights - ' + document.title + '</h1>';
    html += '<p style="color:#666;font-size:.8rem">Exported: ' + new Date().toLocaleDateString() + ' | Total: ' + highlights.length + ' highlights</p>';
    
    highlights.forEach(function(h, i) {
        html += '<div class="item" style="background-color:' + h.color + '22;border-left:4px solid ' + h.color + '">';
        html += '<span style="color:#333;font-weight:600">' + (i+1) + '.</span> ' + h.text;
        html += '</div>';
    });
    
    html += '<script>window.print();<\/script></body></html>';
    var w = window.open('', '_blank');
    w.document.write(html);
    w.document.close();
}

// (Edit functionality is now built into short answer button above)


