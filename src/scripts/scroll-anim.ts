import { initGsap } from './gsap-init';
import { prefersReducedMotion } from './utils';

export function initScrollAnimations() {
  if (prefersReducedMotion()) {
    document.querySelectorAll<HTMLElement>('.manifesto__line-inner').forEach((el) => {
      el.style.clipPath = 'inset(0 0% 0 0)';
    });
    document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
    return;
  }

  const { gsap, ScrollTrigger } = initGsap();

  // Manifesto reveal — line by line clip-path.
  const manifestoLines = gsap.utils.toArray<HTMLElement>('.manifesto__line-inner');
  if (manifestoLines.length) {
    gsap.fromTo(
      manifestoLines,
      { clipPath: 'inset(0 100% 0 0)' },
      {
        clipPath: 'inset(0 0% 0 0)',
        duration: 1.2,
        ease: 'power4.out',
        stagger: 0.3,
        scrollTrigger: {
          trigger: '[data-manifesto]',
          start: 'top 70%',
        },
      }
    );
  }

  // Generic reveal-on-scroll for [data-reveal] elements
  const reveals = gsap.utils.toArray<HTMLElement>('[data-reveal]');
  reveals.forEach((el) => {
    const y = parseInt(el.dataset.revealY || '60', 10);
    const delay = parseFloat(el.dataset.revealDelay || '0');
    gsap.fromTo(
      el,
      { opacity: 0, y },
      {
        opacity: 1,
        y: 0,
        duration: 1.1,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
        },
      }
    );
  });

  // Generic counters via [data-counter-scroll]
  const counters = gsap.utils.toArray<HTMLElement>('[data-counter-scroll]');
  counters.forEach((el) => {
    const target = parseInt(el.dataset.counterScroll || '0', 10);
    const obj = { v: 0 };
    gsap.to(obj, {
      v: target,
      duration: 2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 80%',
      },
      onUpdate: () => {
        el.textContent = Math.round(obj.v).toLocaleString('es-CO');
      },
    });
  });

  // Parallax on .parallax-img
  gsap.utils.toArray<HTMLElement>('.parallax-img').forEach((img) => {
    const parent = img.parentElement;
    if (!parent) return;
    gsap.fromTo(
      img,
      { yPercent: -8 },
      {
        yPercent: 8,
        ease: 'none',
        scrollTrigger: {
          trigger: parent,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      }
    );
  });

  // Refresh after fonts/images settle
  if (document.fonts && 'ready' in document.fonts) {
    document.fonts.ready.then(() => ScrollTrigger.refresh());
  }
  window.addEventListener('load', () => ScrollTrigger.refresh(), { once: true });
}
