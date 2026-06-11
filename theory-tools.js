// THEORY TOOLS - Clean Rewrite
// Features: Test Yourself (Evaluate + Show Answer), Highlighter, Priority Rating, Ask AI

// === 1. TEST YOURSELF BUTTON ===
(function(){
    function init() {
        var answers = document.querySelectorAll('.q-ans');
        if (!answers.length) return;
        
        answers.forEach(function(ans, idx) {
            if (ans.querySelector('.test-btn')) return;
            var pre = ans.querySelector('pre');
            if (!pre) return;
            
            // Create button
            var btn = document.createElement('button');
            btn.className = 'test-btn';
            btn.innerHTML = '&#127919; Test Yourself';
            btn.style.cssText = 'background:linear-gradient(135deg,#059669,#10b981);color:#fff;border:none;padding:7px 14px;border-radius:6px;font-size:.74rem;font-weight:600;cursor:pointer;margin-bottom:10px;display:block';
            
            // Create test area
            var testArea = document.createElement('div');
            testArea.className = 'test-area';
            testArea.style.cssText = 'display:none;background:linear-gradient(135deg,#f0fdf4,#dcfce7);border:1px solid #86efac;border-radius:10px;padding:16px;margin-bottom:12px';
            
            var isOpen = false;
            btn.onclick = function(e) {
                e.stopPropagation();
                isOpen = !isOpen;
                if (isOpen) {
                    pre.style.display = 'none';
                    testArea.style.display = 'block';
                    btn.innerHTML = '&#128214; Back to Detailed';
                    btn.style.background = 'linear-gradient(135deg,#6366f1,#818cf8)';
                    
                    if (!testArea.innerHTML) {
                        testArea.innerHTML = '<div style="font-size:.75rem;color:#047857;font-weight:700;margin-bottom:8px">&#127919; Write or speak your answer:</div>' +
                            '<div style="position:relative"><textarea id="ta_' + idx + '" placeholder="Type or click mic to speak..." style="width:100%;height:90px;background:#fff;color:#1e293b;border:1px solid #86efac;border-radius:8px;padding:10px;padding-right:40px;font-family:Segoe UI,sans-serif;font-size:.82rem;resize:vertical;outline:none"></textarea>' +
                            '<button class="mic-btn" title="Voice input" style="position:absolute;right:8px;top:8px;background:none;border:none;font-size:1.3rem;cursor:pointer;opacity:.6">&#127908;</button></div>' +
                            '<div style="display:flex;gap:8px;margin-top:8px">' +
                            '<button class="eval-btn" style="background:linear-gradient(135deg,#059669,#10b981);color:#fff;border:none;padding:7px 16px;border-radius:6px;font-size:.75rem;font-weight:600;cursor:pointer">&#128221; Evaluate</button>' +
                            '<button class="show-btn" style="background:linear-gradient(135deg,#f59e0b,#d97706);color:#fff;border:none;padding:7px 16px;border-radius:6px;font-size:.75rem;font-weight:600;cursor:pointer">&#128065; Show Answer</button>' +
                            '</div>' +
                            '<div class="eval-result" style="margin-top:10px"></div>' +
                            '<div class="correct-ans" style="margin-top:10px"></div>';
                        
                        // Evaluate button
                        testArea.querySelector('.eval-btn').onclick = function(ev) {
                            ev.stopPropagation();
                            doEvaluate(idx, testArea, ans);
                        };
                        // Show answer button
                        testArea.querySelector('.show-btn').onclick = function(ev) {
                            ev.stopPropagation();
                            doShowAnswer(idx, testArea, ans);
                        };
                        // Mic button - voice input
                        testArea.querySelector('.mic-btn').onclick = function(ev) {
                            ev.stopPropagation();
                            startVoiceInput(testArea);
                        };
                    }
                } else {
                    pre.style.display = 'block';
                    testArea.style.display = 'none';
                    btn.innerHTML = '&#127919; Test Yourself';
                    btn.style.background = 'linear-gradient(135deg,#059669,#10b981)';
                }
            };
            
            ans.insertBefore(btn, pre);
            ans.insertBefore(testArea, pre);
        });
    }
    
    function doEvaluate(idx, testArea, ans) {
        var textarea = testArea.querySelector('textarea');
        var resultDiv = testArea.querySelector('.eval-result');
        var userAnswer = textarea.value.trim().toLowerCase();
        if (!userAnswer) { alert('Write your answer first!'); return; }
        
        // Get question number
        var qDiv = ans.closest('.q');
        var qNum = 0;
        if (qDiv) {
            var dataS = qDiv.getAttribute('data-s') || '';
            var match = dataS.match(/q(\d+)/i);
            if (match) qNum = parseInt(match[1]);
        }
        
        // Get correct answer data
        var page = document.title.replace(/\s+/g, '_').toLowerCase();
        var correctData = null;
        if (typeof INTERVIEW_ANSWERS !== 'undefined' && INTERVIEW_ANSWERS[page] && INTERVIEW_ANSWERS[page][qNum]) {
            correctData = INTERVIEW_ANSWERS[page][qNum];
        }
        
        if (!correctData) {
            resultDiv.innerHTML = '<div style="padding:10px;background:#fef3c7;border:1px solid #f59e0b;border-radius:6px;font-size:.78rem;color:#92400e">&#9888; Interview answer not available for Q' + qNum + ' yet. Click "Show Answer" to see detailed version.</div>';
            return;
        }
        
        // Match keywords
        var matched = [];
        var missed = [];
        correctData.keywords.forEach(function(kw) {
            var kwLower = kw.toLowerCase();
            var found = userAnswer.indexOf(kwLower) > -1;
            if (!found) {
                // Try without spaces/hyphens
                found = userAnswer.indexOf(kwLower.replace(/[\s-]/g, '')) > -1;
            }
            if (!found) {
                // Try each word separately for multi-word keywords
                var parts = kwLower.split(/[\s-]+/);
                if (parts.length > 1) {
                    found = parts.every(function(p) { return userAnswer.indexOf(p) > -1; });
                }
            }
            if (found) matched.push(kw);
            else missed.push(kw);
        });
        
        var score = Math.round((matched.length / correctData.keywords.length) * 10);
        var color = score >= 7 ? '#059669' : score >= 4 ? '#d97706' : '#dc2626';
        var emoji = score >= 8 ? '&#128293; Excellent!' : score >= 6 ? '&#128077; Good!' : score >= 4 ? '&#128528; Partial.' : '&#128218; Needs work.';
        
        var html = '<div style="background:#fff;border:2px solid ' + color + ';border-radius:10px;padding:14px">';
        html += '<div style="display:flex;align-items:center;gap:12px;margin-bottom:10px">';
        html += '<span style="font-size:1.5rem;font-weight:700;color:' + color + '">' + score + '/10</span>';
        html += '<span style="font-size:.85rem;color:#334155">' + emoji + '</span></div>';
        if (matched.length > 0) {
            html += '<div style="margin-bottom:6px"><span style="font-size:.72rem;color:#059669;font-weight:600">&#9989; Covered:</span> <span style="font-size:.78rem;color:#334155">' + matched.join(', ') + '</span></div>';
        }
        if (missed.length > 0) {
            html += '<div><span style="font-size:.72rem;color:#dc2626;font-weight:600">&#10060; Missed:</span> <span style="font-size:.78rem;color:#334155">' + missed.join(', ') + '</span></div>';
        }
        html += '</div>';
        resultDiv.innerHTML = html;
    }
    
    function doShowAnswer(idx, testArea, ans) {
        var correctDiv = testArea.querySelector('.correct-ans');
        
        if (correctDiv.innerHTML) {
            correctDiv.innerHTML = '';
            return;
        }
        
        // Get question number
        var qDiv = ans.closest('.q');
        var qNum = 0;
        if (qDiv) {
            var dataS = qDiv.getAttribute('data-s') || '';
            var match = dataS.match(/q(\d+)/i);
            if (match) qNum = parseInt(match[1]);
        }
        
        var page = document.title.replace(/\s+/g, '_').toLowerCase();
        var correctData = null;
        if (typeof INTERVIEW_ANSWERS !== 'undefined' && INTERVIEW_ANSWERS[page] && INTERVIEW_ANSWERS[page][qNum]) {
            correctData = INTERVIEW_ANSWERS[page][qNum];
        }
        
        var html = '<div style="background:#fff;border:2px solid #059669;border-radius:10px;padding:14px">';
        html += '<div style="font-size:.76rem;color:#047857;font-weight:700;margin-bottom:10px">&#9989; CORRECT INTERVIEW ANSWER:</div>';
        
        if (correctData) {
            var sentences = correctData.answer.split('. ');
            html += '<div style="font-size:.84rem;line-height:1.9;color:#1e293b">';
            sentences.forEach(function(s) {
                s = s.trim();
                if (!s) return;
                if (!s.endsWith('.')) s += '.';
                html += '<div style="padding:4px 0 4px 10px;border-left:2px solid #86efac;margin-bottom:4px"><span style="color:#059669">&#9656;</span> ' + s + '</div>';
            });
            html += '</div>';
            html += '<div style="margin-top:10px;padding:8px;background:#f0fdf4;border-radius:6px;font-size:.72rem;color:#047857">&#128273; <strong>Keywords:</strong> ' + correctData.keywords.join(', ') + '</div>';
        } else {
            html += '<div style="font-size:.8rem;color:#64748b">Interview answer not written for this question yet. Refer to the detailed answer.</div>';
        }
        
        html += '</div>';
        correctDiv.innerHTML = html;
    }
    
    // Run on load and on question click
    setTimeout(init, 800);
    setTimeout(init, 2000);
    document.addEventListener('click', function(e) {
        if (e.target.closest('.q-title') || e.target.closest('.q-head')) {
            setTimeout(init, 300);
        }
    });

    // Voice input using Web Speech API
    function startVoiceInput(testArea) {
        var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!SpeechRecognition) { alert('Speech Recognition not supported in this browser. Use Chrome.'); return; }
        var micBtn = testArea.querySelector('.mic-btn');
        var textarea = testArea.querySelector('textarea');
        var recognition = new SpeechRecognition();
        recognition.lang = 'en-US';
        recognition.interimResults = true;
        recognition.continuous = true;
        recognition.maxAlternatives = 1;

        micBtn.style.opacity = '1';
        micBtn.style.color = '#dc2626';
        micBtn.innerHTML = '&#128308;';
        micBtn.title = 'Listening... click to stop';

        var finalTranscript = textarea.value;
        recognition.onresult = function(event) {
            var interim = '';
            for (var i = event.resultIndex; i < event.results.length; i++) {
                if (event.results[i].isFinal) {
                    finalTranscript += event.results[i][0].transcript + ' ';
                } else {
                    interim += event.results[i][0].transcript;
                }
            }
            textarea.value = finalTranscript + interim;
        };

        recognition.onerror = function(event) {
            micBtn.innerHTML = '&#127908;';
            micBtn.style.color = '';
            micBtn.style.opacity = '.6';
            micBtn.title = 'Voice input';
            if (event.error !== 'aborted') alert('Speech error: ' + event.error);
        };

        recognition.onend = function() {
            micBtn.innerHTML = '&#127908;';
            micBtn.style.color = '';
            micBtn.style.opacity = '.6';
            micBtn.title = 'Voice input';
            textarea.value = finalTranscript.trim();
        };

        recognition.start();

        // Click mic again to stop
        micBtn.onclick = function(ev) {
            ev.stopPropagation();
            recognition.stop();
            micBtn.onclick = function(ev2) {
                ev2.stopPropagation();
                startVoiceInput(testArea);
            };
        };
    }
})();

// === 2. HIGHLIGHTER ===
(function(){
    var page = document.title.replace(/[^a-zA-Z0-9]/g, '');
    function getHL() { return JSON.parse(localStorage.getItem('hl_' + page) || '[]'); }
    function saveHL(d) { localStorage.setItem('hl_' + page, JSON.stringify(d)); }

    var toolbar = document.createElement('div');
    toolbar.id = 'hlToolbar';
    toolbar.innerHTML = '<span style="font-size:.68rem;color:#ccc;margin-right:6px">Mark:</span><span class="hlc" data-c="#b45309" style="background:#b45309"></span><span class="hlc" data-c="#047857" style="background:#047857"></span><span class="hlc" data-c="#be123c" style="background:#be123c"></span><span class="hlc" data-c="#1d4ed8" style="background:#1d4ed8"></span>';
    toolbar.style.cssText = 'display:none;position:absolute;z-index:99999;background:#1e293b;border:1px solid #475569;border-radius:8px;padding:6px 10px;box-shadow:0 4px 20px rgba(0,0,0,.5);align-items:center;gap:6px';

    var css = document.createElement('style');
    css.textContent = '.hlc{width:20px;height:20px;border-radius:50%;cursor:pointer;display:inline-block;border:2px solid #fff3}.hlc:hover{transform:scale(1.2);border-color:#fff}mark.hl{color:#fff!important;font-weight:700!important;padding:1px 3px!important;border-radius:2px!important;cursor:pointer;text-shadow:0 1px 2px rgba(0,0,0,.5)!important}';
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
                toolbar.style.top = (window.scrollY + rect.top - 38) + 'px';
                toolbar.style.left = (rect.left + rect.width / 2 - 80) + 'px';
            } else {
                toolbar.style.display = 'none';
            }
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
                var hl = getHL();
                hl.push({text: text, color: color});
                saveHL(hl);
            } catch (err) {}
            sel.removeAllRanges();
            toolbar.style.display = 'none';
        });
    });

    document.addEventListener('click', function(e) {
        if (e.target.classList && e.target.classList.contains('hl')) {
            if (confirm('Remove highlight?')) {
                var text = e.target.getAttribute('data-hl-text');
                e.target.parentNode.replaceChild(document.createTextNode(e.target.textContent), e.target);
                var hl = getHL().filter(function(h) { return h.text !== text; });
                saveHL(hl);
            }
        }
    });
})();

// === 3. PRIORITY RATING ===
(function(){
    var priorities = {
        'oops': {3:[1,2,4,5,6,15,16,23,24,25,32,33,34,35,36,37,38,39,40,41,45,46,50,51,54,58,62,72,73,80,82,84,85,89,90,91,101,103],2:[3,7,8,9,11,14,17,18,22,26,27,28,30,31,42,43,47,48,55,57,59,60,61,63,64,66,67,69,70,74,75,76,77,78,79,81,83,86,87,92,94,97,98,99,100,102,104],1:[10,12,13,19,20,21,29,44,49,52,53,56,65,68,71,88,93,95,96]},
        'c#': {3:[1,2,3,4,5,6,7,8,9,10,11,12,15,16,17,18,19,20,23,36,37,51,52,53,54,55,86,87,88,89,90],2:[13,14,21,22,24,25,26,27,28,29,30,31,32,33,34,35,38,39,40,41,42,43,44,45,56,57,58,59,60,91,92,93,94,95],1:[]},
        'sql': {3:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,25,26,27,28,29,30,41,42,43,44,45],2:[18,19,20,21,22,23,24,31,32,33,34,35,36,37,38,39,40,46,47,48,49,50],1:[]},
        'mvc': {3:[1,2,3,4,5,6,7,8,9,10,11,12,16,17,18,19,20,31,32,33,34,35,36,51,52,53,54,55],2:[13,14,15,21,22,23,24,25,26,27,28,29,30,37,38,39,40,41,42,43,44,45,46,47,48,49,50],1:[]},
        'asp.net': {3:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],2:[26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50],1:[]},
        'web api': {3:[1,2,3,4,5,6,7,8,9,10],2:[11,12,13,14,15],1:[]},
        'ef core': {3:[1,2,3,4,5,6],2:[7,8,9,10,11,12],1:[]},
        'solid': {3:[1,2,3,4,5,6,7,8,9,10,11,12],2:[],1:[]},
        'dependency': {3:[1,2,3,4,5,6,7,8],2:[],1:[]},
        'git': {3:[1,2,3,4],2:[5,6,7,8,9,10,11,12],1:[]},
        'javascript': {3:[1,2,3,4,5,6,7,8,9,10,11,12],2:[],1:[]},
        'oracle': {3:[1,2,3,4,5,6,7,8,9,10],2:[11,12,13,14,15,16,17,18,19,20],1:[]},
        'coding': {3:[1,2,3,4,5,6,7,8,9,10],2:[11,12,13,14,15,16,17,18,19,20],1:[]}
    };

    function getKey() {
        var title = document.title.toLowerCase();
        for (var key in priorities) {
            if (title.indexOf(key) > -1) return key;
        }
        return null;
    }

    function addRatings() {
        var key = getKey();
        if (!key) return;
        var data = priorities[key];
        
        document.querySelectorAll('.q').forEach(function(qDiv) {
            var title = qDiv.querySelector('.q-title');
            if (!title || title.querySelector('.pstar')) return;
            
            var qNum = 0;
            var dataS = qDiv.getAttribute('data-s') || '';
            var match = dataS.match(/q(\d+)/i);
            if (match) qNum = parseInt(match[1]);
            
            var rating = 0;
            if (data[3] && data[3].indexOf(qNum) > -1) rating = 3;
            else if (data[2] && data[2].indexOf(qNum) > -1) rating = 2;
            else if (data[1] && data[1].indexOf(qNum) > -1) rating = 1;
            else rating = 2;
            
            var colors = {3:'#ef4444', 2:'#f59e0b', 1:'#10b981'};
            var labels = {3:'\u2605\u2605\u2605', 2:'\u2605\u2605', 1:'\u2605'};
            var star = document.createElement('span');
            star.className = 'pstar';
            star.style.cssText = 'color:' + colors[rating] + ';font-size:.7rem;font-weight:700;margin-left:6px';
            star.textContent = labels[rating];
            var arrow = title.querySelector('.arrow');
            if (arrow) title.insertBefore(star, arrow);
            else title.appendChild(star);
        });
    }

    setTimeout(addRatings, 600);
})();

// === 4. ASK AI BUTTON ===
(function(){
    function addAI() {
        document.querySelectorAll('.q-title').forEach(function(title) {
            if (title.querySelector('.ai-btn')) return;
            var txt = (title.querySelector('.txt') || title).textContent.trim();
            var btn = document.createElement('span');
            btn.className = 'ai-btn';
            btn.textContent = '\ud83e\udd16';
            btn.title = 'Ask AI';
            btn.style.cssText = 'cursor:pointer;margin-left:4px;font-size:.9rem;opacity:.4;position:relative';
            btn.onmouseover = function() { this.style.opacity = '1'; };
            btn.onmouseout = function() { if(!this.querySelector('.ai-popup')) this.style.opacity = '.4'; };
            btn.onclick = function(e) {
                e.stopPropagation();
                var existing = this.querySelector('.ai-popup');
                if (existing) { existing.remove(); this.style.opacity = '.4'; return; }
                // Remove other popups
                document.querySelectorAll('.ai-popup').forEach(function(p){p.remove();});
                var topic = document.title.replace(' Interview Questions', '').replace(' Principles', '');
                var query = txt + ' ' + topic + ' interview answer';
                var popup = document.createElement('div');
                popup.className = 'ai-popup';
                popup.style.cssText = 'position:absolute;top:24px;right:0;background:#1e293b;border:1px solid #475569;border-radius:8px;padding:8px;display:flex;gap:6px;z-index:9999;box-shadow:0 4px 15px rgba(0,0,0,.5)';
                popup.innerHTML = '<a href="https://chat.openai.com/?q=' + encodeURIComponent(query) + '" target="_blank" style="background:#10a37f;color:#fff;padding:5px 10px;border-radius:5px;font-size:.7rem;font-weight:600;text-decoration:none;white-space:nowrap">ChatGPT</a>' +
                    '<a href="https://www.google.com/search?q=' + encodeURIComponent(query) + '" target="_blank" style="background:#4285f4;color:#fff;padding:5px 10px;border-radius:5px;font-size:.7rem;font-weight:600;text-decoration:none;white-space:nowrap">Google</a>';
                this.appendChild(popup);
                this.style.opacity = '1';
            };
            var arrow = title.querySelector('.arrow');
            if (arrow) title.insertBefore(btn, arrow);
            else title.appendChild(btn);
        });
    }
    // Close popup on outside click
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.ai-btn')) {
            document.querySelectorAll('.ai-popup').forEach(function(p){p.remove();});
        }
    });
    setTimeout(addAI, 1000);
})();
