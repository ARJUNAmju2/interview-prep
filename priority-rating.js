// Priority Rating System - adds ★★★/★★/★ to questions
// ★★★ = Must Know (asked in almost every interview)
// ★★ = Important (frequently asked)  
// ★ = Good to Know (understand the concept)

(function(){
    const page = document.title.toLowerCase();

    // Priority maps: question numbers → rating (3=must, 2=important, 1=good to know)
    const priorities = {
        'oops': {
            3: [1,2,4,5,6,15,16,23,24,25,32,33,34,35,36,37,38,39,40,41,45,46,50,51,54,58,62,72,73,80,82,84,85,89,90,91,101,103],
            2: [3,7,8,9,11,14,17,18,22,26,27,28,30,31,42,43,47,48,55,57,59,60,61,63,64,66,67,69,70,74,75,76,77,78,79,81,83,86,87,92,94,97,98,99,100,102,104],
            1: [10,12,13,19,20,21,29,44,49,52,53,56,65,68,71,88,93,95,96]
        },
        'c#': {
            3: [1,2,3,4,5,6,7,8,9,10,11,12,15,16,17,18,19,20,23,36,37,51,52,53,54,55,86,87,88,89,90],
            2: [13,14,21,22,24,25,26,27,28,29,30,31,32,33,34,35,38,39,40,41,42,43,44,45,56,57,58,59,60,91,92,93,94,95],
            1: [46,47,48,49,50,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85]
        },
        'sql': {
            3: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,25,26,27,28,29,30,41,42,43,44,45],
            2: [18,19,20,21,22,23,24,31,32,33,34,35,36,37,38,39,40,46,47,48,49,50],
            1: [51,52]
        },
        'mvc': {
            3: [1,2,3,4,5,6,7,8,9,10,11,12,16,17,18,19,20,31,32,33,34,35,36,51,52,53,54,55],
            2: [13,14,15,21,22,23,24,25,26,27,28,29,30,37,38,39,40,41,42,43,44,45,46,47,48,49,50,56,57,58,59,60,71,72,73,74,75],
            1: [61,62,63,64,65,66,67,68,69,70,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115]
        },
        'asp.net': {
            3: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],
            2: [26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70],
            1: [71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115]
        },
        'web api': {
            3: [1,2,3,4,5,6,7,8,9,10],
            2: [11,12,13,14,15],
            1: []
        },
        'ef core': {
            3: [1,2,3,4,5,6],
            2: [7,8,9,10,11,12],
            1: []
        },
        'solid': {
            3: [1,2,3,4,5,6,7,8,9,10,11,12],
            2: [],
            1: []
        },
        'di': {
            3: [1,2,3,4,5,6,7,8],
            2: [],
            1: []
        },
        'git': {
            3: [1,2,3,4],
            2: [5,6,7,8,9,10,11,12],
            1: []
        },
        'javascript': {
            3: [1,2,3,4,5,6,7,8,9,10,11,12],
            2: [],
            1: []
        },
        'oracle': {
            3: [1,2,3,4,5,6,7,8,9,10],
            2: [11,12,13,14,15,16,17,18,19,20],
            1: [21,22,23,24,25,26,27,28,29,30]
        },
        'project': {
            3: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
            2: [16,17,18,19,20,21,22,23,24,25,26,27,28,29],
            1: []
        },
        'coding': {
            3: [1,2,3,4,5,6,7,8,9,10],
            2: [11,12,13,14,15,16,17,18,19,20],
            1: [21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40]
        }
    };

    function getRating(qNum) {
        const titleLower = document.title.toLowerCase();
        let matchedKey = null;
        
        // Match page title to priority key
        const titleMap = {
            'oops': ['oops'],
            'c#': ['c#', 'csharp', 'c sharp'],
            'sql': ['sql interview'],
            'mvc': ['mvc'],
            'asp.net': ['asp.net'],
            'web api': ['web api'],
            'ef core': ['ef core'],
            'solid': ['solid'],
            'di': ['dependency injection'],
            'git': ['git'],
            'javascript': ['javascript'],
            'oracle': ['oracle'],
            'project': ['project'],
            'coding': ['coding']
        };
        
        for (const [key, matches] of Object.entries(titleMap)) {
            if (matches.some(m => titleLower.includes(m))) {
                matchedKey = key;
                break;
            }
        }
        
        if (!matchedKey || !priorities[matchedKey]) return 0;
        const data = priorities[matchedKey];
        if (data[3] && data[3].includes(qNum)) return 3;
        if (data[2] && data[2].includes(qNum)) return 2;
        if (data[1] && data[1].includes(qNum)) return 1;
        return 2; // default
    }

    function getStarHTML(rating) {
        const colors = { 3: '#ef4444', 2: '#f59e0b', 1: '#10b981' };
        const labels = { 3: '★★★', 2: '★★', 1: '★' };
        const titles = { 3: 'Must Know - Asked in every interview', 2: 'Important - Frequently asked', 1: 'Good to Know - Understand concept' };
        if (!rating) return '';
        return `<span style="color:${colors[rating]};font-size:.7rem;font-weight:700;margin-left:8px;white-space:nowrap" title="${titles[rating]}">${labels[rating]}</span>`;
    }

    function addRatings() {
        // For pages with .q-title structure (oops, csharp, sql, etc.)
        document.querySelectorAll('.q').forEach((qDiv) => {
            const title = qDiv.querySelector('.q-title');
            if (!title || title.querySelector('.priority-star')) return;
            
            // Get question number from data-s attribute
            let qNum = 0;
            const dataS = qDiv.getAttribute('data-s') || '';
            const match = dataS.match(/q(\d+)/i);
            if (match) qNum = parseInt(match[1]);
            
            if (!qNum) {
                // Fallback: try from .num span
                const numEl = title.querySelector('.num');
                if (numEl) {
                    const m2 = numEl.textContent.match(/\d+/);
                    if (m2) qNum = parseInt(m2[0]);
                }
            }
            
            const rating = getRating(qNum);
            if (rating) {
                const star = document.createElement('span');
                star.className = 'priority-star';
                star.innerHTML = getStarHTML(rating);
                const arrow = title.querySelector('.arrow');
                if (arrow) title.insertBefore(star, arrow);
                else title.appendChild(star);
            }
        });

        // For pages with .card structure (oops-coding, coding)
        document.querySelectorAll('.card .title, .card-head .title').forEach((head, i) => {
            if (head.querySelector('.priority-star')) return;
            const qNum = i + 1;
            const rating = getRating(qNum);
            if (rating) {
                const star = document.createElement('span');
                star.className = 'priority-star';
                star.innerHTML = getStarHTML(rating);
                head.appendChild(star);
            }
        });
    }

    // Add legend at top
    function addLegend() {
        const container = document.querySelector('.container');
        if (!container) return;
        const existingLegend = container.querySelector('.priority-legend');
        if (existingLegend) return;

        const legend = document.createElement('div');
        legend.className = 'priority-legend';
        legend.style.cssText = 'display:flex;justify-content:center;gap:14px;margin-bottom:12px;font-size:.7rem;flex-wrap:wrap';
        legend.innerHTML = `
            <span style="display:flex;align-items:center;gap:4px"><span style="color:#ef4444;font-weight:700">★★★</span> Must Know</span>
            <span style="display:flex;align-items:center;gap:4px"><span style="color:#f59e0b;font-weight:700">★★</span> Important</span>
            <span style="display:flex;align-items:center;gap:4px"><span style="color:#10b981;font-weight:700">★</span> Good to Know</span>
        `;
        // Insert after first heading or progress bar
        const insertAfter = container.querySelector('h1, .prog, .info, .subtitle');
        if (insertAfter && insertAfter.nextSibling) {
            insertAfter.parentNode.insertBefore(legend, insertAfter.nextSibling);
        } else {
            container.insertBefore(legend, container.children[2] || container.firstChild);
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => { addLegend(); addRatings(); });
    } else {
        setTimeout(() => { addLegend(); addRatings(); }, 800);
    }
})();
