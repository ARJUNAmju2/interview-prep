// study_check.js - Adds checkbox to mark studied questions, persists in localStorage
(function(){
var page=document.title.replace(/\s+/g,'_').toLowerCase();
var qs=document.querySelectorAll('.q');
var countEl=document.getElementById('count');

function updateCount(){
    var total=0,checked=0,visible=0;
    qs.forEach(function(q){
        total++;
        if(q.style.display!=='none')visible++;
        if(q.classList.contains('studied'))checked++;
    });
    var base=countEl.textContent.split('|')[0].trim();
    countEl.textContent=base+' | ✅ Studied: '+checked+'/'+total;
}

qs.forEach(function(q,idx){
    var title=q.querySelector('.q-title');
    var cb=document.createElement('input');
    cb.type='checkbox';
    cb.className='study-check';
    cb.title='Mark as studied';
    cb.onclick=function(e){
        e.stopPropagation();
        if(cb.checked){
            q.classList.add('studied');
            localStorage.setItem(page+'_q_'+idx,'1');
        }else{
            q.classList.remove('studied');
            localStorage.removeItem(page+'_q_'+idx);
        }
        updateCount();
    };
    // Restore state
    if(localStorage.getItem(page+'_q_'+idx)==='1'){
        cb.checked=true;
        q.classList.add('studied');
    }
    title.insertBefore(cb,title.firstChild);
});

updateCount();

// Add "Show unstudied only" filter button
var container=document.querySelector('.container');
var searchEl=document.getElementById('search');
var filterDiv=document.createElement('div');
filterDiv.style.cssText='text-align:center;margin-bottom:10px;';
var filterBtn=document.createElement('button');
filterBtn.textContent='📋 Show Unstudied Only';
filterBtn.className='filter-btn';
filterBtn.style.cssText='background:linear-gradient(135deg,#10b981,#059669);color:#fff;border:none;padding:6px 14px;border-radius:6px;font-size:.78rem;cursor:pointer;font-weight:600;margin-right:8px;';
var showAllBtn=document.createElement('button');
showAllBtn.textContent='📚 Show All';
showAllBtn.style.cssText='background:linear-gradient(135deg,#6366f1,#4f46e5);color:#fff;border:none;padding:6px 14px;border-radius:6px;font-size:.78rem;cursor:pointer;font-weight:600;margin-right:8px;';
var resetBtn=document.createElement('button');
resetBtn.textContent='🔄 Reset All';
resetBtn.style.cssText='background:linear-gradient(135deg,#ef4444,#dc2626);color:#fff;border:none;padding:6px 14px;border-radius:6px;font-size:.78rem;cursor:pointer;font-weight:600;';

filterBtn.onclick=function(){
    qs.forEach(function(q){q.style.display=q.classList.contains('studied')?'none':''});
    var v=0;qs.forEach(function(q){if(q.style.display!=='none')v++});
    countEl.textContent=v+'/'+qs.length+' Questions | ✅ Studied: '+document.querySelectorAll('.q.studied').length+'/'+qs.length;
};
showAllBtn.onclick=function(){
    qs.forEach(function(q){q.style.display=''});
    searchEl.value='';
    updateCount();
    countEl.textContent=qs.length+' Questions | ✅ Studied: '+document.querySelectorAll('.q.studied').length+'/'+qs.length;
};
resetBtn.onclick=function(){
    if(!confirm('Reset all studied marks for this page?'))return;
    qs.forEach(function(q,idx){
        q.classList.remove('studied');
        var cb=q.querySelector('.study-check');
        if(cb)cb.checked=false;
        localStorage.removeItem(page+'_q_'+idx);
    });
    updateCount();
};
filterDiv.appendChild(filterBtn);
filterDiv.appendChild(showAllBtn);
filterDiv.appendChild(resetBtn);
searchEl.after(filterDiv);
})();
