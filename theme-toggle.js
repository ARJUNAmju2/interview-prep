// Theme Toggle - shared across all pages
(function() {
    const btn = document.createElement('button');
    btn.id = 'themeBtn';
    btn.style.cssText = 'position:fixed;top:15px;right:15px;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.2);color:#e2e8f0;padding:8px 12px;border-radius:20px;cursor:pointer;font-size:.75rem;z-index:999;transition:all .3s';
    btn.textContent = '🌙 Dark';
    document.body.appendChild(btn);

    // Create light theme stylesheet
    const style = document.createElement('style');
    style.id = 'lightThemeStyles';
    style.textContent = `
        body.light {
            background: linear-gradient(160deg, #f8fafc, #e8f0fe, #f0f9ff) !important;
            color: #1e293b !important;
        }
        body.light .container { color: #1e293b; }
        body.light h1, body.light h2, body.light h3 {
            -webkit-text-fill-color: initial !important;
            background: none !important;
            color: #0f172a !important;
        }
        body.light .subtitle, body.light .stat-label, body.light .topic-meta,
        body.light .q-number, body.light .last-studied {
            color: #64748b !important;
        }
        body.light p, body.light span, body.light label, body.light div {
            color: inherit;
        }
        body.light a.back, body.light a[style*="color:#38bdf8"] {
            color: #0369a1 !important;
        }
        /* Cards, sections, containers */
        body.light .section, body.light .card, body.light .config,
        body.light .question-area, body.light .score-card, body.light .result,
        body.light .tables-info, body.light .overall, body.light .topic-card,
        body.light .question-box, body.light .result-wrap, body.light .editor-wrap,
        body.light .schedule-info, body.light .due-section {
            background: #ffffff !important;
            border-color: #e2e8f0 !important;
            box-shadow: 0 1px 3px rgba(0,0,0,.08);
        }
        body.light .topic-row {
            background: #ffffff !important;
            border-color: #e2e8f0 !important;
        }
        /* Text colors */
        body.light .section h2, body.light .card-q {
            color: #0369a1 !important;
        }
        body.light .section h3 {
            color: #b45309 !important;
        }
        body.light .question-text {
            background: #f8fafc !important;
            color: #1e293b !important;
            border-left-color: #f97316 !important;
        }
        body.light .answer-area, body.light .correct-answer {
            background: #f0fdf4 !important;
            color: #1e293b !important;
            border-left-color: #10b981 !important;
        }
        body.light .answer-area strong, body.light .correct-answer strong {
            color: #047857 !important;
        }
        /* Code blocks */
        body.light pre, body.light #output {
            background: #1e293b !important;
            border-color: #334155 !important;
        }
        body.light code {
            color: #38bdf8 !important;
        }
        /* Textareas */
        body.light textarea {
            background: #f8fafc !important;
            color: #1e293b !important;
            border-color: #cbd5e1 !important;
        }
        body.light textarea:focus {
            border-color: #6366f1 !important;
        }
        /* Notes and tips */
        body.light .note {
            background: #f0f9ff !important;
            color: #334155 !important;
            border-left-color: #0ea5e9 !important;
        }
        body.light .tip {
            background: #fffbeb !important;
            color: #92400e !important;
        }
        body.light .info {
            background: #f0fdfa !important;
            color: #134e4a !important;
        }
        /* One-liners in cheat sheets */
        body.light .one-liner {
            background: #f8fafc !important;
            color: #334155 !important;
            border-left-color: #f59e0b !important;
        }
        body.light .one-liner strong {
            color: #b45309 !important;
        }
        body.light .item {
            background: #f8fafc !important;
            border-color: #e2e8f0 !important;
            color: #475569 !important;
        }
        body.light .item strong {
            color: #0369a1 !important;
        }
        /* Buttons - keep colorful */
        body.light .btn { color: #fff !important; }
        body.light .topic-btn {
            border-color: #cbd5e1 !important;
            color: #475569 !important;
            background: #f8fafc !important;
        }
        body.light .topic-btn.active {
            background: #0ea5e9 !important;
            border-color: #0ea5e9 !important;
            color: #fff !important;
        }
        body.light .sample-btn {
            background: #f0f0ff !important;
            border-color: #c7d2fe !important;
            color: #4338ca !important;
        }
        /* Options in quiz */
        body.light .option {
            background: #f8fafc !important;
            border-color: #e2e8f0 !important;
            color: #1e293b !important;
        }
        body.light .option:hover {
            border-color: #6366f1 !important;
            background: #eef2ff !important;
        }
        body.light .option-letter {
            background: #e2e8f0 !important;
            color: #475569 !important;
        }
        body.light .explanation {
            background: #f0fdf4 !important;
            color: #1e293b !important;
        }
        /* Table */
        body.light table { border-color: #e2e8f0 !important; }
        body.light th {
            background: #f1f5f9 !important;
            color: #0369a1 !important;
            border-color: #e2e8f0 !important;
        }
        body.light td {
            color: #334155 !important;
            border-color: #f1f5f9 !important;
        }
        body.light tr:nth-child(even) {
            background: #f8fafc !important;
        }
        /* Config row selects */
        body.light .config-row select {
            background: #f8fafc !important;
            color: #1e293b !important;
            border-color: #cbd5e1 !important;
        }
        /* Timer */
        body.light .timer { color: #1e293b !important; }
        body.light .timer.warning { color: #d97706 !important; }
        body.light .timer.danger { color: #dc2626 !important; }
        /* Eval result */
        body.light .eval-result { color: #1e293b; }
        body.light .eval-feedback { color: #475569 !important; }
        body.light .matched-keywords { color: #047857 !important; }
        body.light .missed-keywords { color: #dc2626 !important; }
        /* Progress ring */
        body.light .ring-bg { stroke: #e2e8f0 !important; }
        /* Cards in HR questions */
        body.light .card-header { color: #1e293b; }
        body.light .card-body { color: #334155 !important; }
        body.light .card-arrow { color: #94a3b8 !important; }
        body.light .template {
            background: #f8fafc !important;
            border-left-color: #ec4899 !important;
            color: #334155 !important;
        }
        body.light .template p { color: #334155 !important; }
        /* Breakdown */
        body.light .breakdown {
            background: #f8fafc !important;
            color: #1e293b !important;
        }
        body.light .breakdown-item {
            border-color: #e2e8f0 !important;
        }
        body.light .breakdown-q { color: #475569 !important; }
        /* Confidence buttons */
        body.light .conf-btn {
            border-color: #cbd5e1 !important;
            color: #475569 !important;
        }
        /* Tabs */
        body.light .tab {
            border-color: #cbd5e1 !important;
            color: #475569 !important;
            background: #f8fafc !important;
        }
        body.light .tab.active {
            color: #fff !important;
        }
        /* Streak, footer, misc */
        body.light .streak { color: #d97706 !important; }
        body.light .footer { color: #94a3b8 !important; }
        body.light .time { color: #0369a1 !important; }
        /* Quote box */
        body.light .quote-box {
            background: #ffffff !important;
            border-color: #e2e8f0 !important;
        }
        body.light .quote-text { color: #334155 !important; }
        body.light .quote-author { color: #0369a1 !important; }
        body.light .btn-refresh {
            border-color: #cbd5e1 !important;
            color: #64748b !important;
        }
        /* Link cards on index */
        body.light .link-desc { color: rgba(255,255,255,.9) !important; }
        /* Legend */
        body.light .legend { color: #64748b !important; }
        body.light .legend span { color: #64748b !important; }
        /* Status text */
        body.light .status { color: #64748b !important; }
        body.light .success { color: #047857 !important; background: #f0fdf4 !important; }
        body.light .error, body.light .error-out { color: #dc2626 !important; background: #fef2f2 !important; }
        /* Section title in HR */
        body.light .section-title { color: #0369a1 !important; border-left-color: #0369a1 !important; }
        /* Marks badge */
        body.light .marks-high { background: #dcfce7 !important; color: #047857 !important; border-color: #10b981 !important; }
        body.light .marks-med { background: #fef9c3 !important; color: #a16207 !important; border-color: #f59e0b !important; }
        body.light .marks-low { background: #fee2e2 !important; color: #dc2626 !important; border-color: #ef4444 !important; }
    `;
    document.head.appendChild(style);

    function applyTheme(theme) {
        const b = document.body;
        if (theme === 'light') {
            b.classList.add('light');
            btn.textContent = '☀️ Light';
            btn.style.background = 'rgba(0,0,0,.06)';
            btn.style.borderColor = 'rgba(0,0,0,.15)';
            btn.style.color = '#1e293b';
        } else {
            b.classList.remove('light');
            btn.textContent = '🌙 Dark';
            btn.style.background = 'rgba(255,255,255,.1)';
            btn.style.borderColor = 'rgba(255,255,255,.2)';
            btn.style.color = '#e2e8f0';
        }
    }

    btn.addEventListener('click', function() {
        const current = localStorage.getItem('theme') || 'dark';
        const next = current === 'dark' ? 'light' : 'dark';
        localStorage.setItem('theme', next);
        applyTheme(next);
    });

    // Apply saved theme on load
    const saved = localStorage.getItem('theme') || 'dark';
    if (saved === 'light') applyTheme('light');

    // Track last visited page
    const pageTitle = document.title;
    if (pageTitle !== 'My Prep Hub') {
        localStorage.setItem('lastVisitedPage', pageTitle);
        localStorage.setItem('lastVisitedTime', new Date().toLocaleString('en-US', {hour:'2-digit',minute:'2-digit',month:'short',day:'numeric'}));
    }
})();
