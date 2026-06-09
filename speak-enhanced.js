// Enhanced Speaking Tips - overrides old showSpeak function
setTimeout(function(){
    // Override global showSpeak if it exists
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

        // Check for pre-written speak data
        if (typeof SPEAK_DATA !== 'undefined' && SPEAK_DATA[idx]) {
            sd.innerHTML = formatSpeak(SPEAK_DATA[idx]);
            btn.textContent = '\u274c Hide Speaking Tips';
            return;
        }

        // Auto-generate from answer text
        var text = pre ? pre.textContent : '';
        var lines = text.split('\n').filter(function(l) {
            return l.trim() && !l.startsWith('=') && !l.startsWith('|') && !l.startsWith('+--') && l.trim().length > 3;
        });

        var html = '<div style="background:#0d1b2a;border-radius:10px;padding:16px;border:1px solid rgba(255,255,255,.08)">';
        html += '<div style="background:rgba(56,189,248,.08);border-left:3px solid #38bdf8;padding:10px 14px;border-radius:0 8px 8px 0;margin-bottom:14px;font-size:.82rem;color:#38bdf8">\ud83c\udfaf <strong>Start:</strong> "Sure, let me explain this..."</div>';
        html += '<div style="font-size:.84rem;line-height:2;color:#e2e8f0">';

        var pointCount = 0;
        lines.forEach(function(line) {
            line = line.trim();
            if (line.length < 4) return;

            // Skip code lines
            if (isCodeLine(line)) return;

            // ALL CAPS heading
            if (line.match(/^[A-Z][A-Z\s]{3,}:?$/) || line.match(/^[A-Z][A-Z\s&]+[:(]/) || line.match(/^SECTION/)) {
                html += '<div style="color:#f59e0b;font-weight:700;margin-top:12px;margin-bottom:4px;font-size:.85rem">\ud83d\udccc ' + line.replace(/:/g, '') + '</div>';
                pointCount = 0;
                return;
            }

            // Bullet point with key:value
            if (line.startsWith('- ')) {
                var content = line.substring(2);
                if (content.includes(':') && !content.includes('=>') && !content.includes('http')) {
                    var parts = content.split(':');
                    html += '<div style="padding:4px 0 4px 12px;border-left:2px solid rgba(255,255,255,.06)"><span style="color:#10b981;font-weight:600">\u2022 ' + parts[0].trim() + '</span> \u2014 <span style="color:#cbd5e1">' + parts.slice(1).join(':').trim() + '</span></div>';
                } else {
                    html += '<div style="padding:3px 0 3px 12px;color:#cbd5e1"><span style="color:#64748b">\u2022</span> ' + content + '</div>';
                }
                return;
            }

            // Key: Value pattern
            if (line.includes(':') && !line.includes('//') && !line.includes('=>') && !line.includes('http') && line.indexOf(':') < 30) {
                var parts = line.split(':');
                var key = parts[0].trim();
                var val = parts.slice(1).join(':').trim();
                if (key.length < 35 && val.length > 0 && !key.includes('(') && !key.includes('{')) {
                    html += '<div style="padding:4px 0 4px 12px;border-left:2px solid rgba(255,255,255,.06)"><span style="color:#a78bfa;font-weight:600">' + key + '</span> \u2014 <span style="color:#cbd5e1">' + val + '</span></div>';
                    return;
                }
            }

            // Regular text (limit to avoid too much)
            pointCount++;
            if (pointCount <= 15) {
                html += '<div style="padding:3px 0;color:#cbd5e1">' + line + '</div>';
            }
        });

        html += '</div>';
        html += '<div style="background:rgba(16,185,129,.08);border-left:3px solid #10b981;padding:10px 14px;border-radius:0 8px 8px 0;margin-top:14px;font-size:.82rem;color:#10b981">\ud83d\udca1 <strong>End:</strong> "Would you like me to write a code example?"</div>';
        html += '</div>';

        sd.innerHTML = html;
        btn.textContent = '\u274c Hide Speaking Tips';
    };

    function isCodeLine(line) {
        var codeStarts = ['public ', 'private ', 'protected ', '//', '{', '}', 'using ', 'var ', 'int ', 'string ', 'class ', 'return ', 'if (', 'if(', 'else', 'Console.', 'await ', 'SELECT ', 'FROM ', 'WHERE ', 'INSERT ', 'UPDATE ', 'DELETE ', 'CREATE ', 'ALTER ', 'namespace', 'static ', 'void ', 'new ', 'try', 'catch', 'finally', 'throw ', 'decimal ', 'bool ', 'double ', 'float ', 'foreach', 'for (', 'while', 'switch', 'case ', 'break;', 'continue;', '.Add(', '.Remove(', '.Where(', '.Select(', '.OrderBy('];
        for (var i = 0; i < codeStarts.length; i++) {
            if (line.startsWith(codeStarts[i])) return true;
        }
        if (line.match(/^[\s{}();,\[\]]+$/)) return true;
        if (line.match(/^\w+\.\w+\(/)) return true;
        if (line.match(/^(List|Dictionary|HashSet|IEnumerable|Task|Action|Func)</)) return true;
        return false;
    }

    function formatSpeak(text) {
        var paragraphs = text.split('\n\n').filter(function(p) { return p.trim().length > 0; });
        var html = '<div style="background:#0d1b2a;border-radius:10px;padding:16px;border:1px solid rgba(255,255,255,.08)">';
        html += '<div style="background:rgba(56,189,248,.08);border-left:3px solid #38bdf8;padding:10px 14px;border-radius:0 8px 8px 0;margin-bottom:14px;font-size:.82rem;color:#38bdf8">\ud83c\udfaf <strong>How to explain in interview:</strong></div>';
        html += '<div style="font-size:.84rem;line-height:1.8;color:#e2e8f0">';
        
        paragraphs.forEach(function(para, pIdx) {
            para = para.trim();
            if (!para) return;
            
            // Split paragraph into sentences
            var sentences = para.split(/(?<=\.)\s+/).filter(function(s) { return s.trim().length > 5; });
            
            if (sentences.length > 1) {
                // Multiple sentences — show as bullet points
                html += '<div style="margin:10px 0">';
                sentences.forEach(function(sentence) {
                    sentence = sentence.trim();
                    if (!sentence) return;
                    html += '<div style="padding:5px 0 5px 14px;border-left:2px solid rgba(16,185,129,.2);margin-bottom:4px"><span style="color:#10b981;margin-right:6px">▸</span><span style="color:#cbd5e1">' + highlightKeywords(sentence) + '</span></div>';
                });
                html += '</div>';
            } else {
                // Single sentence or short text — show as paragraph
                html += '<div style="padding:8px 0;color:#cbd5e1;border-bottom:1px solid rgba(255,255,255,.04)">' + highlightKeywords(para) + '</div>';
            }
        });
        
        html += '</div>';
        html += '<div style="background:rgba(16,185,129,.08);border-left:3px solid #10b981;padding:10px 14px;border-radius:0 8px 8px 0;margin-top:14px;font-size:.82rem;color:#10b981">\ud83d\udca1 <strong>Tip:</strong> Speak confidently. Pause between points. Make eye contact.</div>';
        html += '</div>';
        return html;
    }
    
    function highlightKeywords(text) {
        // Highlight important technical terms
        var keywords = ['C#','ASP.NET','LINQ','async\/await','.NET','OOP','object-oriented','type-safe','garbage collection','polymorphism','encapsulation','inheritance','abstraction','interface','abstract','virtual','override','sealed','delegate','event','generic','nullable','Entity Framework','middleware','dependency injection','REST','API','MVC','SQL','JOIN','INDEX','stored procedure'];
        keywords.forEach(function(kw) {
            var regex = new RegExp('\\b(' + kw + ')\\b', 'gi');
            text = text.replace(regex, '<span style="color:#a78bfa;font-weight:600">$1</span>');
        });
        // Highlight version numbers
        text = text.replace(/(C#\s*\d+\.?\d*|.NET\s*\d+)/g, '<span style="color:#38bdf8;font-weight:600">$1</span>');
        return text;
    }
}, 1000);
