// ============================================
// THEORY TOOLS v2 - Clean Implementation
// Features: Interview Answer, Highlighter, Quick Revision
// ============================================

// === INTERVIEW ANSWER BUTTON ===
(function(){
    function addInterviewButtons() {
        document.querySelectorAll('.q-ans').forEach(function(ans, idx) {
            if (ans.querySelector('.interview-ans-btn')) return;
            
            var btn = document.createElement('button');
            btn.className = 'interview-ans-btn';
            btn.textContent = '\ud83c\udfaf Test Yourself';
            btn.style.cssText = 'background:linear-gradient(135deg,#059669,#10b981);color:#fff;border:none;padding:7px 14px;border-radius:6px;font-size:.74rem;font-weight:600;cursor:pointer;margin-right:8px;margin-bottom:10px';
            
            var interviewDiv = document.createElement('div');
            interviewDiv.className = 'interview-ans-text';
            interviewDiv.style.cssText = 'display:none;background:linear-gradient(135deg,#f0fdf4,#dcfce7);border:1px solid #86efac;border-radius:10px;padding:16px;margin-bottom:12px;font-size:.84rem;line-height:1.8;color:#1e293b';
            
            btn.onclick = function(e) {
                e.stopPropagation();
                var pre = ans.querySelector('pre');
                if (interviewDiv.style.display === 'block') {
                    interviewDiv.style.display = 'none';
                    if (pre) pre.style.display = 'block';
                    btn.textContent = '\ud83c\udfaf Test Yourself';
                    btn.style.background = 'linear-gradient(135deg,#059669,#10b981)';
                } else {
                    if (pre) pre.style.display = 'none';
                    interviewDiv.style.display = 'block';
                    btn.textContent = '\ud83d\udcd6 Back to Detailed';
                    btn.style.background = 'linear-gradient(135deg,#6366f1,#818cf8)';
                    
                    if (!interviewDiv.dataset.generated) {
                        var answerText = pre ? pre.textContent : '';
                        var keywords = extractKeywords(answerText);
                        
                        var html = '<div style="margin-bottom:12px">';
                        html += '<div style="font-size:.75rem;color:#047857;font-weight:700;margin-bottom:8px">\ud83c\udfaf Write your answer (as you would say in interview):</div>';
                        html += '<textarea id="selfTest_'+idx+'" placeholder="Type your answer here... then click Evaluate" style="width:100%;height:100px;background:#fff;color:#1e293b;border:1px solid #86efac;border-radius:8px;padding:10px;font-family:Segoe UI,sans-serif;font-size:.82rem;resize:vertical;outline:none"></textarea>';
                        html += '<div style="display:flex;gap:8px;margin-top:8px">';
                        html += '<button onclick="evaluateSelfTest('+idx+')" style="background:linear-gradient(135deg,#059669,#10b981);color:#fff;border:none;padding:7px 16px;border-radius:6px;font-size:.75rem;font-weight:600;cursor:pointer">\ud83d\udcdd Evaluate</button>';
                        html += '<button onclick="showCorrectAnswer('+idx+')" style="background:linear-gradient(135deg,#f59e0b,#d97706);color:#fff;border:none;padding:7px 16px;border-radius:6px;font-size:.75rem;font-weight:600;cursor:pointer">\ud83d\udc41 Show Answer</button>';
                        html += '</div></div>';
                        html += '<div id="evalResult_'+idx+'" style="display:none"></div>';
                        html += '<div id="correctAns_'+idx+'" style="display:none"></div>';
                        
                        interviewDiv.innerHTML = html;
                        interviewDiv.dataset.keywords = JSON.stringify(keywords);
                        interviewDiv.dataset.answertext = answerText;
                        interviewDiv.dataset.generated = 'true';
                    }
                }
            };
            
            ans.insertBefore(interviewDiv, ans.querySelector('pre'));
            ans.insertBefore(btn, interviewDiv);
        });
    }

    function buildCustomHTML(text) {
        return '<div style="border-left:3px solid #059669;padding-left:12px"><div style="font-size:.7rem;color:#047857;font-weight:700;margin-bottom:6px">\ud83c\udfaf MY INTERVIEW ANSWER:</div><div style="color:#1e293b;line-height:1.9">' + text.replace(/\n/g,'<br>') + '</div></div>';
    }

    function generateInterviewAnswer(text) {
        if (!text || text.trim().length < 20) return '<span style="color:#64748b">No content.</span>';
        var lines = text.split('\n').map(function(l){return l.trim()}).filter(function(l){return l.length > 0});
        var points = [];
        for (var i = 0; i < lines.length; i++) {
            var line = lines[i];
            if (line.match(/^[\s{}();,\[\]]+$/)) continue;
            if (line.startsWith('===') || line.startsWith('+--')) continue;
            if (line.startsWith('using ') || line.startsWith('namespace')) continue;
            if (line.match(/^(public|private|protected|static|void|class|interface|abstract|override|virtual|sealed)\s+\w/) && (line.includes('{') || line.includes('(') || line.includes(';'))) continue;
            if (line.startsWith('Console.') || line.match(/^\s*\/\//)) continue;
            if (line === '{' || line === '}' || line.match(/^\s*[{}]\s*$/)) continue;
            if (line.match(/^(var|int|string|bool|decimal|double|float|char|long)\s+\w+\s*[=;]/)) continue;
            if (line.match(/^\w+\.\w+\(/) || line.match(/^new \w/) || line.startsWith('await ')) continue;
            if (line.match(/^(try|catch|finally|throw|if|else|foreach|for|while|switch|case|break|continue|return)\b/) && (line.includes('{') || line.includes('(') || line.includes(';') || line.length < 15)) continue;
            if (line.match(/^(List|Dictionary|HashSet|Task|Action|Func|IEnumerable|Array)(<|\[)/)) continue;
            if (line.match(/^\w+\s*=\s*/) && !line.includes(':')) continue;
            if (line.match(/^\w+\s*\+=/) || line.match(/^\w+\s*-=/)) continue;
            points.push(line);
        }
        var html = '<div style="border-left:3px solid #059669;padding-left:12px">';
        html += '<div style="font-size:.72rem;color:#047857;font-weight:700;margin-bottom:8px">\ud83c\udfaf INTERVIEW ANSWER (Full concept, no code):</div>';
        points.forEach(function(line) {
            if (line.match(/^[A-Z][A-Z\s]{3,}:?$/) || line.match(/^[A-Z][A-Z\s&]+:/)) {
                html += '<div style="color:#047857;font-weight:700;margin-top:10px;margin-bottom:4px;font-size:.82rem">' + line + '</div>';
            } else if (line.startsWith('- ')) {
                var content = line.substring(2);
                if (content.includes(':') && content.indexOf(':') < 30 && !content.includes('//') && !content.includes('=>')) {
                    var parts = content.split(':');
                    html += '<div style="padding:3px 0 3px 10px;border-left:2px solid #86efac;margin-bottom:3px"><span style="color:#047857;font-weight:600">\u25b8 ' + parts[0].trim() + '</span>: <span style="color:#334155">' + parts.slice(1).join(':').trim() + '</span></div>';
                } else {
                    html += '<div style="padding:3px 0 3px 10px;color:#334155;border-left:2px solid #86efac;margin-bottom:3px"><span style="color:#047857">\u25b8</span> ' + content + '</div>';
                }
            } else if (line.startsWith('|')) {
                html += '<div style="padding:2px 0;color:#475569;font-family:monospace;font-size:.72rem">' + line.replace(/</g,'&lt;').replace(/>/g,'&gt;') + '</div>';
            } else if (line.includes(':') && !line.includes('//') && !line.includes('=>') && !line.includes('http') && line.indexOf(':') > 2 && line.indexOf(':') < 30) {
                var parts = line.split(':');
                var key = parts[0].trim();
                var val = parts.slice(1).join(':').trim();
                if (key.length < 30 && val.length > 0) {
                    html += '<div style="padding:3px 0 3px 10px;border-left:2px solid #86efac;margin-bottom:3px"><span style="color:#047857;font-weight:600">' + key + '</span>: <span style="color:#334155">' + val + '</span></div>';
                } else {
                    html += '<div style="padding:3px 0;color:#334155">' + line + '</div>';
                }
            } else {
                html += '<div style="padding:3px 0;color:#334155">' + line + '</div>';
            }
        });
        html += '</div>';
        html += '<div style="margin-top:10px;padding:8px 12px;background:rgba(5,150,105,.08);border-radius:6px;font-size:.7rem;color:#047857">\ud83d\udca1 <strong>Tip:</strong> Explain concept clearly. Say "For example..." if they ask for depth.</div>';
        return html;
    }

    // Init
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() { setTimeout(addInterviewButtons, 600); });
    } else {
        setTimeout(addInterviewButtons, 600);
    }
    document.addEventListener('click', function(e) {
        if (e.target.closest('.q-title')) setTimeout(addInterviewButtons, 200);
    });
})();

// === QUICK REVISION MODE ===
(function(){
    setTimeout(function() {
        var container = document.querySelector('.container');
        if (!container || !document.querySelector('.q-ans')) return;
        
        var revBtn = document.createElement('button');
        revBtn.textContent = '\ud83d\udcda Quick Revision (Interview Answers Only)';
        revBtn.style.cssText = 'display:block;margin:10px auto;background:linear-gradient(135deg,#059669,#10b981);color:#fff;border:none;padding:8px 16px;border-radius:8px;font-size:.75rem;font-weight:600;cursor:pointer';
        var isRevMode = false;
        
        revBtn.onclick = function() {
            isRevMode = !isRevMode;
            if (isRevMode) {
                revBtn.textContent = '\u274c Exit Revision Mode';
                revBtn.style.background = 'linear-gradient(135deg,#ef4444,#dc2626)';
                document.querySelectorAll('.q').forEach(function(q) { q.classList.add('open'); });
                setTimeout(function() {
                    document.querySelectorAll('.interview-ans-btn').forEach(function(btn) {
                        if (btn.textContent.includes('Interview')) btn.click();
                    });
                }, 300);
            } else {
                revBtn.textContent = '\ud83d\udcda Quick Revision (Interview Answers Only)';
                revBtn.style.background = 'linear-gradient(135deg,#059669,#10b981)';
                document.querySelectorAll('.interview-ans-btn').forEach(function(btn) {
                    if (btn.textContent.includes('Back')) btn.click();
                });
                document.querySelectorAll('.q').forEach(function(q) { q.classList.remove('open'); });
            }
        };
        
        var searchEl = document.getElementById('search');
        if (searchEl) {
            searchEl.insertAdjacentElement('afterend', revBtn);
        } else {
            var firstQ = container.querySelector('.q');
            if (firstQ) container.insertBefore(revBtn, firstQ);
        }
    }, 1000);
})();

// === HIGHLIGHTER ===
(function(){
    var page = document.title.replace(/[^a-zA-Z0-9]/g,'');
    function getHL() { return JSON.parse(localStorage.getItem('hl_' + page) || '[]'); }
    function saveHL(d) { localStorage.setItem('hl_' + page, JSON.stringify(d)); }

    var toolbar = document.createElement('div');
    toolbar.id = 'hlToolbar';
    toolbar.innerHTML = '<span style="font-size:.68rem;color:#ccc;margin-right:6px">Mark:</span><span class="hlc" data-c="#b45309" style="background:#b45309"></span><span class="hlc" data-c="#047857" style="background:#047857"></span><span class="hlc" data-c="#be123c" style="background:#be123c"></span><span class="hlc" data-c="#1d4ed8" style="background:#1d4ed8"></span><span id="hlClear" style="color:#ff6b6b;font-size:.8rem;cursor:pointer;margin-left:6px">\u2715</span>';
    toolbar.style.cssText = 'display:none;position:absolute;z-index:99999;background:#1e293b;border:1px solid #475569;border-radius:8px;padding:6px 10px;box-shadow:0 4px 20px rgba(0,0,0,.5);align-items:center;gap:6px';

    var css = document.createElement('style');
    css.textContent = '.hlc{width:22px;height:22px;border-radius:50%;cursor:pointer;display:inline-block;border:2px solid #fff3}.hlc:hover{transform:scale(1.2);border-color:#fff}mark.hl{color:#fff!important;font-weight:700!important;padding:1px 3px!important;border-radius:2px!important;cursor:pointer;text-shadow:0 1px 2px rgba(0,0,0,.5)!important}';
    document.head.appendChild(css);
    document.body.appendChild(toolbar);

    document.addEventListener('mouseup', function(e) {
        if (e.target.closest('#hlToolbar')) return;
        setTimeout(function() {
            var sel = window.getSelection();
            var text = sel.toString().trim();
            if (text.length > 1) {
                var rect = sel.getRangeAt(0).getBoundingClientRect();
                toolbar.style.display = 'flex';
                toolbar.style.top = (window.scrollY + rect.top - 40) + 'px';
                toolbar.style.left = (rect.left + rect.width/2 - 100) + 'px';
            } else { toolbar.style.display = 'none'; }
        }, 50);
    });

    toolbar.querySelectorAll('.hlc').forEach(function(btn) {
        btn.addEventListener('mousedown', function(e) {
            e.preventDefault();
            var color = this.dataset.c;
            var sel = window.getSelection();
            var text = sel.toString().trim();
            if (!text || !sel.rangeCount) return;
            try {
                var range = sel.getRangeAt(0);
                var mark = document.createElement('mark');
                mark.className = 'hl';
                mark.setAttribute('data-hl-text', text);
                mark.style.cssText = 'background-color:' + color + '!important;color:#fff!important;font-weight:700!important;padding:1px 3px;border-radius:2px;cursor:pointer;text-shadow:0 1px 2px rgba(0,0,0,.5)';
                range.surroundContents(mark);
            } catch(err) {}
            var hl = getHL(); hl.push({text:text,color:color}); saveHL(hl);
            updateHLCount();
            sel.removeAllRanges();
            toolbar.style.display = 'none';
        });
    });

    document.getElementById('hlClear').addEventListener('mousedown', function(e) {
        e.preventDefault();
        var sel = window.getSelection();
        var text = sel.toString().trim();
        document.querySelectorAll('.hl').forEach(function(el) {
            if (text && (el.textContent.includes(text) || text.includes(el.textContent))) {
                el.parentNode.replaceChild(document.createTextNode(el.textContent), el);
            }
        });
        var hl = getHL().filter(function(h){return !text||(!text.includes(h.text)&&!h.text.includes(text))});
        saveHL(hl); updateHLCount(); toolbar.style.display = 'none';
    });

    document.addEventListener('click', function(e) {
        if (e.target.classList && e.target.classList.contains('hl')) {
            if (confirm('Remove highlight?')) {
                var text = e.target.getAttribute('data-hl-text');
                e.target.parentNode.replaceChild(document.createTextNode(e.target.textContent), e.target);
                var hl = getHL().filter(function(h){return h.text!==text}); saveHL(hl); updateHLCount();
            }
        }
    });

    function updateHLCount() {
        var hl = getHL();
        var c = document.getElementById('hlCounter');
        if (!c) {
            c = document.createElement('div'); c.id = 'hlCounter';
            c.style.cssText = 'position:fixed;bottom:15px;left:15px;background:#fbbf24;color:#000;padding:7px 14px;border-radius:20px;font-size:.72rem;font-weight:700;z-index:998;cursor:pointer';
            c.onclick = function(){
                if(confirm('OK=Export PDF | Cancel=Remove all')){exportHL()}else{if(confirm('Remove ALL?')){document.querySelectorAll('.hl').forEach(function(el){el.parentNode.replaceChild(document.createTextNode(el.textContent),el)});saveHL([]);updateHLCount()}}
            };
            document.body.appendChild(c);
        }
        c.textContent = '\ud83d\udd8d\ufe0f ' + hl.length + ' marked';
        c.style.display = hl.length > 0 ? 'block' : 'none';
    }

    function exportHL() {
        var hl = getHL();
        if (!hl.length) { alert('No highlights!'); return; }
        var html = '<html><head><title>Highlights - ' + document.title + '</title><style>body{font-family:Segoe UI,sans-serif;padding:30px;max-width:700px;margin:0 auto}.item{padding:10px 14px;margin-bottom:8px;border-radius:6px;font-size:.9rem}</style></head><body>';
        html += '<h2>\ud83d\udd8d\ufe0f My Highlights - ' + document.title + '</h2>';
        hl.forEach(function(h,i){ html += '<div class="item" style="background:'+h.color+'22;border-left:4px solid '+h.color+'">'+(i+1)+'. '+h.text+'</div>'; });
        html += '<script>window.print()<\/script></body></html>';
        var w = window.open('','_blank'); w.document.write(html); w.document.close();
    }

    function restoreHL() {
        var hl = getHL(); if (!hl.length) return;
        hl.forEach(function(h) {
            var exists = false;
            document.querySelectorAll('.hl').forEach(function(el){if(el.textContent===h.text)exists=true});
            if (exists) return;
            var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
            while (walker.nextNode()) {
                var node = walker.currentNode;
                var idx = node.textContent.indexOf(h.text);
                if (idx >= 0 && !node.parentElement.classList.contains('hl')) {
                    try {
                        var range = document.createRange();
                        range.setStart(node, idx); range.setEnd(node, idx + h.text.length);
                        var mark = document.createElement('mark'); mark.className = 'hl';
                        mark.setAttribute('data-hl-text', h.text);
                        mark.style.cssText = 'background-color:'+h.color+'!important;color:#fff!important;font-weight:700!important;padding:1px 3px;border-radius:2px;cursor:pointer;text-shadow:0 1px 2px rgba(0,0,0,.5)';
                        range.surroundContents(mark);
                    } catch(e) {}
                    break;
                }
            }
        });
    }

    setTimeout(function(){ restoreHL(); updateHLCount(); }, 1500);
    document.addEventListener('click', function(e) {
        if (e.target.closest('.q-title')) setTimeout(function(){ restoreHL(); updateHLCount(); }, 300);
    });
})();


// === PRIORITY RATING (★★★/★★/★) ===
(function(){
    var priorities = {
        'oops': {
            3: [1,2,4,5,6,15,16,23,24,25,32,33,34,35,36,37,38,39,40,41,45,46,50,51,54,58,62,72,73,80,82,84,85,89,90,91,101,103],
            2: [3,7,8,9,11,14,17,18,22,26,27,28,30,31,42,43,47,48,55,57,59,60,61,63,64,66,67,69,70,74,75,76,77,78,79,81,83,86,87,92,94,97,98,99,100,102,104],
            1: [10,12,13,19,20,21,29,44,49,52,53,56,65,68,71,88,93,95,96]
        },
        'c#': {3:[1,2,3,4,5,6,7,8,9,10,11,12,15,16,17,18,19,20,23,36,37,51,52,53,54,55,86,87,88,89,90],2:[13,14,21,22,24,25,26,27,28,29,30,31,32,33,34,35,38,39,40,41,42,43,44,45,56,57,58,59,60,91,92,93,94,95],1:[46,47,48,49,50,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85]},
        'sql': {3:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,25,26,27,28,29,30,41,42,43,44,45],2:[18,19,20,21,22,23,24,31,32,33,34,35,36,37,38,39,40,46,47,48,49,50],1:[51,52]},
        'mvc': {3:[1,2,3,4,5,6,7,8,9,10,11,12,16,17,18,19,20,31,32,33,34,35,36,51,52,53,54,55],2:[13,14,15,21,22,23,24,25,26,27,28,29,30,37,38,39,40,41,42,43,44,45,46,47,48,49,50,56,57,58,59,60,71,72,73,74,75],1:[]},
        'asp.net': {3:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],2:[26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70],1:[]},
        'web api': {3:[1,2,3,4,5,6,7,8,9,10],2:[11,12,13,14,15],1:[]},
        'ef core': {3:[1,2,3,4,5,6],2:[7,8,9,10,11,12],1:[]},
        'solid': {3:[1,2,3,4,5,6,7,8,9,10,11,12],2:[],1:[]},
        'di': {3:[1,2,3,4,5,6,7,8],2:[],1:[]},
        'git': {3:[1,2,3,4],2:[5,6,7,8,9,10,11,12],1:[]},
        'javascript': {3:[1,2,3,4,5,6,7,8,9,10,11,12],2:[],1:[]},
        'oracle': {3:[1,2,3,4,5,6,7,8,9,10],2:[11,12,13,14,15,16,17,18,19,20],1:[21,22,23,24,25,26,27,28,29,30]},
        'project': {3:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],2:[16,17,18,19,20,21,22,23,24,25,26,27,28,29],1:[]},
        'coding': {3:[1,2,3,4,5,6,7,8,9,10],2:[11,12,13,14,15,16,17,18,19,20],1:[21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40]}
    };

    var titleMap = {
        'oops':['oops'],'c#':['c#','csharp'],'sql':['sql interview'],'mvc':['mvc'],
        'asp.net':['asp.net'],'web api':['web api'],'ef core':['ef core'],
        'solid':['solid'],'di':['dependency injection'],'git':['git'],
        'javascript':['javascript'],'oracle':['oracle'],'project':['project'],'coding':['coding']
    };

    function getMatchedKey() {
        var title = document.title.toLowerCase();
        for (var key in titleMap) {
            var matches = titleMap[key];
            for (var i = 0; i < matches.length; i++) {
                if (title.includes(matches[i])) return key;
            }
        }
        return null;
    }

    function getRating(qNum) {
        var key = getMatchedKey();
        if (!key || !priorities[key]) return 0;
        var data = priorities[key];
        if (data[3] && data[3].indexOf(qNum) > -1) return 3;
        if (data[2] && data[2].indexOf(qNum) > -1) return 2;
        if (data[1] && data[1].indexOf(qNum) > -1) return 1;
        return 2;
    }

    function addRatings() {
        var key = getMatchedKey();
        if (!key) return;

        document.querySelectorAll('.q').forEach(function(qDiv) {
            var title = qDiv.querySelector('.q-title');
            if (!title || title.querySelector('.priority-star')) return;
            
            var qNum = 0;
            var dataS = qDiv.getAttribute('data-s') || '';
            var match = dataS.match(/q(\d+)/i);
            if (match) qNum = parseInt(match[1]);
            
            if (!qNum) {
                var numEl = title.querySelector('.num');
                if (numEl) { var m = numEl.textContent.match(/\d+/); if (m) qNum = parseInt(m[0]); }
            }
            
            var rating = getRating(qNum);
            if (rating) {
                var colors = {3:'#ef4444',2:'#f59e0b',1:'#10b981'};
                var labels = {3:'\u2605\u2605\u2605',2:'\u2605\u2605',1:'\u2605'};
                var titles = {3:'Must Know',2:'Important',1:'Good to Know'};
                var star = document.createElement('span');
                star.className = 'priority-star';
                star.style.cssText = 'color:'+colors[rating]+';font-size:.7rem;font-weight:700;margin-left:8px';
                star.textContent = labels[rating];
                star.title = titles[rating];
                var arrow = title.querySelector('.arrow');
                if (arrow) title.insertBefore(star, arrow);
                else title.appendChild(star);
            }
        });
    }

    function addLegend() {
        var key = getMatchedKey();
        if (!key) return;
        var container = document.querySelector('.container');
        if (!container || container.querySelector('.priority-legend')) return;

        var legend = document.createElement('div');
        legend.className = 'priority-legend';
        legend.style.cssText = 'display:flex;justify-content:center;gap:14px;margin-bottom:12px;font-size:.72rem;flex-wrap:wrap';
        legend.innerHTML = '<span style="color:#ef4444;font-weight:700">\u2605\u2605\u2605 Must Know</span><span style="color:#f59e0b;font-weight:700">\u2605\u2605 Important</span><span style="color:#10b981;font-weight:700">\u2605 Good to Know</span>';
        
        var searchEl = document.getElementById('search');
        if (searchEl) searchEl.insertAdjacentElement('afterend', legend);
    }

    setTimeout(function(){ addLegend(); addRatings(); }, 800);
})();


// === ASK AI (Opens ChatGPT/Copilot with question) ===
(function(){
    function addAIButtons() {
        document.querySelectorAll('.q-title').forEach(function(title) {
            if (title.querySelector('.ask-ai-btn')) return;
            
            // Get question text
            var txtEl = title.querySelector('.txt');
            var qText = txtEl ? txtEl.textContent.trim() : title.textContent.trim();
            
            var btn = document.createElement('button');
            btn.className = 'ask-ai-btn';
            btn.textContent = '\ud83e\udd16';
            btn.title = 'Ask AI (ChatGPT)';
            btn.style.cssText = 'background:none;border:none;font-size:1rem;cursor:pointer;margin-left:6px;opacity:.5;transition:opacity .2s';
            btn.onmouseover = function() { this.style.opacity = '1'; };
            btn.onmouseout = function() { this.style.opacity = '.5'; };
            
            btn.onclick = function(e) {
                e.stopPropagation();
                var topic = document.title.replace(' Interview Questions','').replace(' Principles','');
                var prompt = 'Explain this ' + topic + ' interview question in simple terms with example: "' + qText + '"';
                
                // Show options
                var choice = confirm('OK = Open ChatGPT\nCancel = Open Google Search');
                if (choice) {
                    window.open('https://chat.openai.com/?q=' + encodeURIComponent(prompt), '_blank');
                } else {
                    window.open('https://www.google.com/search?q=' + encodeURIComponent(qText + ' C# interview answer'), '_blank');
                }
            };
            
            var arrow = title.querySelector('.arrow');
            if (arrow) title.insertBefore(btn, arrow);
            else title.appendChild(btn);
        });
    }

    setTimeout(addAIButtons, 1200);
})();


// === SELF-TEST EVALUATION FUNCTIONS ===
function extractKeywords(text) {
    var lines = text.split('\n').map(function(l){return l.trim()}).filter(function(l){return l.length > 0});
    var keywords = [];
    
    // Important technical terms to look for in answers
    var importantTerms = ['object','class','encapsulation','inheritance','polymorphism','abstraction','data hiding','access modifier','private','public','protected','code reuse','overloading','overriding','compile-time','runtime','virtual','override','abstract','interface','sealed','static','constructor','destructor','method','property','getter','setter','value type','reference type','stack','heap','boxing','unboxing','immutable','mutable','delegate','event','publisher','subscriber','async','await','task','thread','linq','generic','collection','list','dictionary','exception','try-catch','finally','dispose','garbage collection','singleton','factory','repository','dependency injection','loose coupling','tight coupling','solid','single responsibility','open closed','liskov','interface segregation','dependency inversion','middleware','pipeline','transient','scoped','singleton','dbcontext','migration','code first','database first','lazy loading','eager loading','rest','http','get','post','put','delete','status code','jwt','cors','index','clustered','non-clustered','stored procedure','view','trigger','join','inner join','left join','group by','having','cte','normalization','transaction','acid','deadlock','primary key','foreign key'];
    
    // Extract from the answer text
    var lowerText = text.toLowerCase();
    importantTerms.forEach(function(term) {
        if (lowerText.includes(term)) {
            keywords.push(term);
        }
    });
    
    // Also extract key:value keys from bullet points
    lines.forEach(function(line) {
        if (line.startsWith('- ') && line.includes(':')) {
            var key = line.substring(2).split(':')[0].trim().toLowerCase();
            if (key.length > 2 && key.length < 25 && keywords.indexOf(key) === -1) {
                keywords.push(key);
            }
        }
    });
    
    // Remove duplicates
    keywords = keywords.filter(function(k,i,arr){return arr.indexOf(k) === i});
    
    return keywords.slice(0, 15);
}

function evaluateSelfTest(idx) {
    var textarea = document.getElementById('selfTest_' + idx);
    var resultDiv = document.getElementById('evalResult_' + idx);
    if (!textarea || !resultDiv) return;
    
    var userAnswer = textarea.value.trim();
    if (!userAnswer) { alert('Please write your answer first!'); return; }
    
    var interviewDiv = textarea.closest('.interview-ans-text');
    var answerText = interviewDiv.dataset.answertext || '';
    
    // Get API key
    var apiKey = localStorage.getItem('gemini_api_key');
    if (!apiKey) {
        apiKey = prompt('Enter your Gemini API Key (free from https://aistudio.google.com/apikey):');
        if (!apiKey || !apiKey.trim()) return;
        localStorage.setItem('gemini_api_key', apiKey.trim());
    }
    
    // Get question text
    var qDiv = interviewDiv.closest('.q');
    var qText = qDiv ? (qDiv.querySelector('.txt') || qDiv.querySelector('.q-title')).textContent.trim() : 'Unknown question';
    
    // Show loading
    resultDiv.style.display = 'block';
    resultDiv.innerHTML = '<div style="text-align:center;padding:16px;color:#64748b"><div style="font-size:1.2rem;margin-bottom:6px">\u23f3</div>Evaluating with AI...</div>';
    
    // Build prompt
    var prompt = 'You are an interview evaluator for a C#/.NET developer position.\n\n' +
        'Question: ' + qText + '\n\n' +
        'Correct Answer (reference): ' + answerText.substring(0, 1500) + '\n\n' +
        'Student\'s Answer: ' + userAnswer + '\n\n' +
        'Evaluate the student\'s answer and respond in this EXACT JSON format only:\n' +
        '{"score": <number 0-10>, "feedback": "<one line feedback>", "correct_points": ["<point they got right>", ...], "missed_points": ["<important point they missed>", ...], "ideal_answer": "<what a perfect 30-second interview answer would be>"}';
    
    // Call Gemini API
    fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=' + apiKey, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            contents: [{parts: [{text: prompt}]}],
            generationConfig: {temperature: 0.3}
        })
    })
    .then(function(res) { return res.json(); })
    .then(function(data) {
        try {
            if (data.error) {
                throw new Error(data.error.message || 'API Error');
            }
            var responseText = data.candidates[0].content.parts[0].text;
            // Clean response - remove markdown code blocks if present
            responseText = responseText.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
            // Extract JSON from response
            var jsonMatch = responseText.match(/\{[\s\S]*\}/);
            if (!jsonMatch) throw new Error('No JSON in response: ' + responseText.substring(0, 100));
            var result = JSON.parse(jsonMatch[0]);
            
            var score = result.score || 0;
            var color = score >= 7 ? '#059669' : score >= 4 ? '#d97706' : '#dc2626';
            var emoji = score >= 8 ? '\ud83d\udd25' : score >= 6 ? '\ud83d\udc4d' : score >= 4 ? '\ud83d\ude10' : '\ud83d\udcda';
            
            var html = '<div style="background:#fff;border:1px solid '+color+'40;border-radius:10px;padding:14px;margin-top:10px">';
            html += '<div style="display:flex;align-items:center;gap:12px;margin-bottom:10px">';
            html += '<span style="font-size:1.4rem;font-weight:700;color:'+color+';background:'+color+'12;padding:6px 14px;border-radius:8px;border:2px solid '+color+'">'+score+'/10</span>';
            html += '<span style="font-size:.85rem;color:#334155">'+emoji+' '+result.feedback+'</span></div>';
            
            if (result.correct_points && result.correct_points.length > 0) {
                html += '<div style="margin-bottom:8px"><div style="font-size:.72rem;color:#059669;font-weight:600;margin-bottom:4px">\u2705 What you got right:</div>';
                result.correct_points.forEach(function(p) {
                    html += '<div style="padding:2px 0 2px 10px;font-size:.78rem;color:#334155">\u2022 '+p+'</div>';
                });
                html += '</div>';
            }
            
            if (result.missed_points && result.missed_points.length > 0) {
                html += '<div style="margin-bottom:8px"><div style="font-size:.72rem;color:#dc2626;font-weight:600;margin-bottom:4px">\u274c What you missed:</div>';
                result.missed_points.forEach(function(p) {
                    html += '<div style="padding:2px 0 2px 10px;font-size:.78rem;color:#334155">\u2022 '+p+'</div>';
                });
                html += '</div>';
            }
            
            if (result.ideal_answer) {
                html += '<div style="margin-top:10px;background:#f0fdf4;border:1px solid #86efac;border-radius:8px;padding:10px">';
                html += '<div style="font-size:.72rem;color:#047857;font-weight:700;margin-bottom:4px">\ud83c\udfaf Perfect Answer:</div>';
                html += '<div style="font-size:.8rem;color:#1e293b;line-height:1.7">'+result.ideal_answer+'</div>';
                html += '</div>';
            }
            
            html += '</div>';
            resultDiv.innerHTML = html;
            
            // Save score
            var page = document.title.replace(/[^a-zA-Z0-9]/g,'');
            var scores = JSON.parse(localStorage.getItem('selftest_' + page) || '{}');
            scores['q' + idx] = score;
            localStorage.setItem('selftest_' + page, JSON.stringify(scores));
            
        } catch(e) {
            resultDiv.innerHTML = '<div style="color:#dc2626;padding:10px;font-size:.8rem">\u26a0\ufe0f Error parsing AI response. Try again. <br><small style="color:#64748b">'+e.message+'</small></div>';
        }
    })
    .catch(function(err) {
        if (err.message && err.message.includes('API')) {
            localStorage.removeItem('gemini_api_key');
            resultDiv.innerHTML = '<div style="color:#dc2626;padding:10px;font-size:.8rem">\u26a0\ufe0f Invalid API key. <a href="#" onclick="localStorage.removeItem(\'gemini_api_key\');location.reload();return false" style="color:#0ea5e9">Click to re-enter key</a></div>';
        } else {
            resultDiv.innerHTML = '<div style="color:#dc2626;padding:10px;font-size:.8rem">\u26a0\ufe0f Network error. Check internet connection.<br><small>'+err.message+'</small><br><a href="#" onclick="localStorage.removeItem(\'gemini_api_key\');location.reload();return false" style="color:#0ea5e9;font-size:.72rem">Reset API Key</a></div>';
        }
    });
}

function showCorrectAnswer(idx) {
    var correctDiv = document.getElementById('correctAns_' + idx);
    if (!correctDiv) return;
    
    if (correctDiv.style.display === 'block') {
        correctDiv.style.display = 'none';
        return;
    }
    
    var interviewDiv = correctDiv.closest('.interview-ans-text');
    var answerText = interviewDiv.dataset.answertext || '';
    var keywords = JSON.parse(interviewDiv.dataset.keywords || '[]');
    
    // Generate INTERVIEWER-EXPECTED answer (concise, structured)
    var lines = answerText.split('\n').map(function(l){return l.trim()}).filter(function(l){return l.length > 0});
    var definition = '';
    var keyPoints = [];
    
    lines.forEach(function(line) {
        // Skip code completely
        if (line.match(/^[\s{}();,\[\]]+$/)) return;
        if (line.startsWith('===') || line.startsWith('+--') || line.startsWith('//')) return;
        if (line.startsWith('using ') || line.startsWith('namespace')) return;
        if (line.match(/^(public|private|protected|static|void|class|interface|abstract|override|virtual|sealed)\s/)) return;
        if (line.startsWith('Console.') || line === '{' || line === '}') return;
        if (line.match(/^(var|int|string|bool|decimal|double|float)\s+\w+\s*[=;]/)) return;
        if (line.match(/^\w+\.\w+\(/) || line.match(/^new \w/) || line.startsWith('await ')) return;
        if (line.match(/^(try|catch|finally|throw|if|else|foreach|for|while|switch|case|break|continue|return)\b/)) return;
        if (line.match(/^\w+\s*[=+\-]/) && !line.includes(':')) return;
        if (line.match(/^(List|Dictionary|HashSet|Task|Action|Func)</)) return;
        if (line.startsWith('|') && line.includes('---')) return;
        
        // First meaningful line = definition
        if (!definition && line.length > 15 && !line.startsWith('-') && !line.startsWith('|') && !line.match(/^[A-Z]{3,}/)) {
            definition = line;
            return;
        }
        
        // Collect important points
        if (line.startsWith('- ')) {
            keyPoints.push(line.substring(2).trim());
        } else if (line.match(/^[A-Z][A-Z\s]{3,}:?$/)) {
            keyPoints.push('**' + line.replace(/:$/,'') + '**');
        } else if (line.includes(':') && line.indexOf(':') < 28 && line.indexOf(':') > 2 && !line.includes('//') && !line.includes('=>') && !line.includes('http')) {
            keyPoints.push(line);
        } else if (line.startsWith('|') && !line.includes('---')) {
            keyPoints.push(line);
        } else if (line.length > 10 && line.length < 120 && line.match(/^[A-Z]/)) {
            keyPoints.push(line);
        }
    });
    
    // Build the "What interviewer wants to hear" answer
    var html = '<div style="background:#fff;border:1px solid #059669;border-radius:10px;padding:14px;margin-top:10px">';
    html += '<div style="font-size:.75rem;color:#047857;font-weight:700;margin-bottom:10px;border-bottom:1px solid #dcfce7;padding-bottom:6px">\u2705 WHAT INTERVIEWER WANTS TO HEAR:</div>';
    
    // Definition
    if (definition) {
        html += '<div style="background:#f0fdf4;padding:8px 12px;border-radius:6px;margin-bottom:10px;font-size:.85rem;color:#1e293b;font-weight:600;border-left:3px solid #059669">' + definition + '</div>';
    }
    
    // Key points
    if (keyPoints.length > 0) {
        html += '<div style="font-size:.72rem;color:#047857;font-weight:600;margin-bottom:6px">Key points to mention:</div>';
        keyPoints.forEach(function(point) {
            if (point.startsWith('**')) {
                html += '<div style="color:#047857;font-weight:700;margin-top:8px;font-size:.8rem">' + point.replace(/\*\*/g,'') + '</div>';
            } else if (point.startsWith('|')) {
                html += '<div style="font-family:monospace;font-size:.7rem;color:#475569;padding:1px 0">' + point.replace(/</g,'&lt;').replace(/>/g,'&gt;') + '</div>';
            } else if (point.includes(':') && point.indexOf(':') < 28) {
                var parts = point.split(':');
                html += '<div style="padding:3px 0 3px 10px;border-left:2px solid #86efac;margin-bottom:3px;font-size:.82rem"><span style="color:#047857;font-weight:600">\u25b8 ' + parts[0].trim() + '</span>: <span style="color:#334155">' + parts.slice(1).join(':').trim() + '</span></div>';
            } else {
                html += '<div style="padding:3px 0 3px 10px;border-left:2px solid #86efac;margin-bottom:3px;font-size:.82rem;color:#334155"><span style="color:#059669">\u25b8</span> ' + point + '</div>';
            }
        });
    }
    
    // Keywords
    if (keywords.length > 0) {
        html += '<div style="margin-top:10px;padding:8px 10px;background:#f0fdf4;border-radius:6px;font-size:.7rem;color:#047857">\ud83d\udd11 <strong>Must-mention keywords:</strong> ' + keywords.join(', ') + '</div>';
    }
    
    html += '<div style="margin-top:8px;font-size:.68rem;color:#64748b;font-style:italic">\ud83d\udca1 Say the definition first \u2192 then key points \u2192 offer example if asked.</div>';
    html += '</div>';
    
    correctDiv.style.display = 'block';
    correctDiv.innerHTML = html;
}


// === GEMINI API KEY SETTINGS ===
(function(){
    setTimeout(function(){
        var container = document.querySelector('.container');
        if (!container || !document.querySelector('.q-ans')) return;
        
        var keyBtn = document.createElement('button');
        keyBtn.textContent = '\u2699\ufe0f AI Key';
        keyBtn.style.cssText = 'position:fixed;bottom:15px;right:60px;background:#6366f1;color:#fff;border:none;padding:6px 12px;border-radius:20px;font-size:.7rem;font-weight:600;cursor:pointer;z-index:998';
        keyBtn.onclick = function() {
            var current = localStorage.getItem('gemini_api_key') || '';
            var key = prompt('Enter Gemini API Key (get free from https://aistudio.google.com/apikey):', current);
            if (key !== null) {
                if (key.trim()) {
                    localStorage.setItem('gemini_api_key', key.trim());
                    alert('API Key saved! You can now use AI evaluation.');
                } else {
                    localStorage.removeItem('gemini_api_key');
                    alert('API Key removed.');
                }
            }
        };
        document.body.appendChild(keyBtn);
    }, 1500);
})();
