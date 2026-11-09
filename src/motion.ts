const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
const targets = document.querySelectorAll<HTMLElement>('.section-heading,.service-card,.org-grid article,.quote-card,.blog-card,.project-card,.steps article,.about-grid,.contact-grid');
let observer: IntersectionObserver | undefined;
function setupReveal() {
  observer?.disconnect();
  targets.forEach(el=>el.classList.remove('reveal-pending'));
  if(reduced.matches || !('IntersectionObserver' in window)) return;
  observer = new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.remove('reveal-pending');observer?.unobserve(entry.target);}});},{threshold:0.08});
  targets.forEach(el=>{if(el.getBoundingClientRect().top>window.innerHeight){el.classList.add('reveal-pending');observer!.observe(el);}});
}
setupReveal();
reduced.addEventListener('change',setupReveal);
document.querySelectorAll<HTMLElement>('[data-tilt],.blog-image').forEach(el=>{
  let frame=0;
  const reset=()=>{cancelAnimationFrame(frame);el.style.setProperty('--rx','0deg');el.style.setProperty('--ry','0deg');el.classList.remove('is-tilting');};
  el.addEventListener('pointermove',event=>{
    if(reduced.matches||!finePointer.matches||event.pointerType==='touch')return;
    const rect=el.getBoundingClientRect();
    const x=(event.clientX-rect.left)/rect.width-.5;
    const y=(event.clientY-rect.top)/rect.height-.5;
    cancelAnimationFrame(frame);
    frame=requestAnimationFrame(()=>{el.style.setProperty('--rx',`${-y*9}deg`);el.style.setProperty('--ry',`${x*12}deg`);el.classList.add('is-tilting');});
  });
  el.addEventListener('pointerleave',reset);
  el.addEventListener('pointercancel',reset);
  reduced.addEventListener('change',reset);
});
