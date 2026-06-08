// Bookmark/Star Questions - works on all theory pages
(function(){
    const page = document.title.replace(/[^a-zA-Z]/g,'');
    
    function getStars() {
        return JSON.parse(localStorage.getItem('stars_' + page) || '[]');
    }
    function saveStars(stars) {
        localStorage.setItem('stars_' + page, JSON.stringify(stars));
    }

    // Add star buttons to all question cards/sections
    function addStarButtons() {
        // Target common question containers
        const selectors = ['.card-head', '.q-card-head', '.accordion-header', '.day-head'];
        let questions = [];
        
        // Try different selectors used across pages
        document.querySelectorAll('.card').forEach((card, i) => {
            const head = card.querySelector('.card-head') || card.querySelector('[onclick]');
            if (head && !head.querySelector('.star-btn')) {
                addStar(head, i);
            }
        });

        // For pages using section-based layout (like oops.html, csharp.html)
        document.querySelectorAll('.q-box, .question-card, .qa-item').forEach((item, i) => {
            if (!item.querySelector('.star-btn')) {
                const target = item.querySelector('.q-head, .q-title, h3') || item;
                addStar(target, 'sec_' + i);
            }
        });
    }

    function addStar(element, id) {
        const stars = getStars();
        const isStarred = stars.includes(String(id));
        const btn = document.createElement('span');
        btn.className = 'star-btn';
        btn.style.cssText = 'cursor:pointer;font-size:1.1rem;margin-left:8px;flex-shrink:0;transition:transform .2s;user-select:none';
        btn.textContent = isStarred ? '⭐' : '☆';
        btn.title = isStarred ? 'Remove bookmark' : 'Bookmark this question';
        btn.onclick = function(e) {
            e.stopPropagation();
            const s = getStars();
            const idx = s.indexOf(String(id));
            if (idx > -1) {
                s.splice(idx, 1);
                btn.textContent = '☆';
                btn.title = 'Bookmark this question';
            } else {
                s.push(String(id));
                btn.textContent = '⭐';
                btn.title = 'Remove bookmark';
                btn.style.transform = 'scale(1.3)';
                setTimeout(() => btn.style.transform = '', 200);
            }
            saveStars(s);
            updateCounter();
        };
        element.appendChild(btn);
    }

    function updateCounter() {
        const stars = getStars();
        let counter = document.getElementById('starCounter');
        if (!counter) {
            counter = document.createElement('div');
            counter.id = 'starCounter';
            counter.style.cssText = 'position:fixed;bottom:15px;right:15px;background:linear-gradient(135deg,#f59e0b,#fbbf24);color:#000;padding:8px 14px;border-radius:20px;font-size:.75rem;font-weight:700;z-index:998;box-shadow:0 4px 12px rgba(245,158,11,.3);cursor:pointer;transition:transform .2s';
            counter.title = 'Bookmarked questions';
            counter.onclick = function() { showStarredFilter(); };
            document.body.appendChild(counter);
        }
        counter.textContent = `⭐ ${stars.length} Starred`;
        counter.style.display = stars.length > 0 ? 'block' : 'none';
    }

    function showStarredFilter() {
        const stars = getStars();
        const cards = document.querySelectorAll('.card');
        const isFiltered = document.body.classList.toggle('show-starred-only');
        
        if (isFiltered && cards.length > 0) {
            cards.forEach((card, i) => {
                card.style.display = stars.includes(String(i)) ? '' : 'none';
            });
            document.getElementById('starCounter').textContent = `⭐ Showing ${stars.length} starred (click to show all)`;
        } else {
            cards.forEach(card => card.style.display = '');
            updateCounter();
        }
    }

    // Initialize after DOM loads
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => { addStarButtons(); updateCounter(); });
    } else {
        setTimeout(() => { addStarButtons(); updateCounter(); }, 500);
    }
})();
