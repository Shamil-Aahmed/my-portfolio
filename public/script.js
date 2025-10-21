// soft scroll & console signature
console.log('%cShamil Ahmed Khan – Backend Engineer','color:#0066ff;font-size:16px');
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    e.preventDefault();
    document.querySelector(a.getAttribute('href')).scrollIntoView({behavior:'smooth'})
  })
})