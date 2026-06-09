// Readability Enhancement - Auto-formats theory answers
(function(){
    function enhanceReadability() {
        document.querySelectorAll('.q-ans pre').forEach(pre => {
            if (pre.dataset.enhanced) return;
            pre.dataset.enhanced = 'true';

            let text = pre.innerHTML;

            // Style ALL CAPS headings (like "ENCAPSULATION:", "ARRAY:", etc.)
            text = text.replace(/^([A-Z][A-Z\s&;/<>]+[A-Z])(\s*[-:(])/gm, '<span style="color:#38bdf8;font-weight:700;font-size:.92rem;display:block;margin-top:12px">$1</span>$2');
            text = text.replace(/^([A-Z][A-Z\s&;/<>]{3,}):?\s*$/gm, '<span style="color:#38bdf8;font-weight:700;font-size:.92rem;display:block;margin-top:14px;margin-bottom:4px;border-bottom:1px solid rgba(56,189,248,.15);padding-bottom:4px">$1</span>');

            // Style numbered headings (1. SOMETHING, Step 1:, etc.)
            text = text.replace(/^(\d+\.\s+[A-Z][A-Z\s]+:?)/gm, '<span style="color:#f59e0b;font-weight:700">$1</span>');
            text = text.replace(/^(Step \d+:)/gm, '<span style="color:#f59e0b;font-weight:700">$1</span>');

            // Style bullet points (- something)
            text = text.replace(/^(\s*-\s+)(.+)$/gm, function(match, dash, content) {
                // Check if it's a key:value pattern
                if (content.includes(':') && !content.startsWith('//') && !content.includes('=>') && !content.includes('http')) {
                    const parts = content.split(':');
                    const key = parts[0];
                    const val = parts.slice(1).join(':');
                    return `<span style="color:#64748b">  •</span> <span style="color:#10b981;font-weight:600">${key}</span>:<span style="color:#cbd5e1">${val}</span>`;
                }
                return `<span style="color:#64748b">  •</span> <span style="color:#cbd5e1">${content}</span>`;
            });

            // Style key: value patterns at start of line (not inside code)
            text = text.replace(/^([A-Z][a-zA-Z\s]+):\s*$/gm, '<span style="color:#a78bfa;font-weight:600;margin-top:8px;display:inline-block">$1:</span>');

            // Style table headers and separators
            text = text.replace(/^\|(.+)\|$/gm, function(match, content) {
                if (content.includes('---')) {
                    return `<span style="color:#1e3a5f">${match}</span>`;
                }
                // Check if header row (all caps or title case)
                const cells = content.split('|');
                const isHeader = cells.some(c => c.trim() === c.trim().replace(/\b\w/g, l => l.toUpperCase()));
                if (match === match.replace(/\|/g, '|')) {
                    return `<span style="color:#94a3b8;font-size:.82rem">${match}</span>`;
                }
                return match;
            });

            // Style code comments (// something)
            text = text.replace(/(\/\/[^\n]+)/g, '<span style="color:#6b7280;font-style:italic">$1</span>');

            // Style keywords in code
            const keywords = ['public','private','protected','class','interface','abstract','virtual','override','new','sealed','static','void','return','if','else','try','catch','finally','throw','using','var','int','string','bool','decimal','null','true','false','async','await','this','base','event','delegate'];
            keywords.forEach(kw => {
                const regex = new RegExp('\\b(' + kw + ')\\b(?![^<]*>)', 'g');
                text = text.replace(regex, '<span style="color:#c792ea">$1</span>');
            });

            // Style important notes (Note:, KEY:, Rule:, Best practice:)
            text = text.replace(/^(Note|KEY|Rule|Best practice|Benefits|Summary|Tips|IMPORTANT|Remember|Caution)s?:?\s*/gm, '<span style="color:#fbbf24;font-weight:700;background:rgba(251,191,36,.1);padding:1px 6px;border-radius:3px;margin-top:6px;display:inline-block">💡 $1:</span> ');

            // Style ✓ and ✗ and ? symbols
            text = text.replace(/✓/g, '<span style="color:#10b981">✓</span>');
            text = text.replace(/✗|❌/g, '<span style="color:#ef4444">✗</span>');
            text = text.replace(/→|?/g, '<span style="color:#38bdf8">→</span>');

            // Style section separators (===)
            text = text.replace(/^=+$/gm, '<hr style="border:none;border-top:1px solid rgba(255,255,255,.08);margin:12px 0">');
            text = text.replace(/^(={3,}.+={3,})$/gm, '<span style="color:#38bdf8;font-weight:700;text-align:center;display:block;margin:10px 0;font-size:.85rem">$1</span>');

            pre.innerHTML = text;
        });
    }

    // Run on page load and when questions are opened
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', enhanceReadability);
    } else {
        setTimeout(enhanceReadability, 500);
    }

    // Also run when a question is opened (clicked)
    document.addEventListener('click', function(e) {
        if (e.target.closest('.q-title')) {
            setTimeout(enhanceReadability, 100);
        }
    });
})();
