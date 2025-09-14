function filterLectures(){
  const q=document.getElementById('q').value.toLowerCase().trim();
  document.querySelectorAll('[data-card]').forEach(c=>{
    const hay=(c.dataset.tags+' '+c.querySelector('h3').innerText+' '+c.querySelector('.desc')?.innerText).toLowerCase();
    c.style.display=hay.includes(q)?'':'';
  });
}