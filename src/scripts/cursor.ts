import { lerp, isFinePointer } from './utils';

export function initCursor() {
  if (!isFinePointer()) return;

  const dot = document.querySelector<HTMLElement>('.cursor-dot');
  const ring = document.querySelector<HTMLElement>('.cursor-ring');
  if (!dot || !ring) return;

  const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  const dotPos = { x: mouse.x, y: mouse.y };
  const ringPos = { x: mouse.x, y: mouse.y };
  let active = false;
  let label: 'default' | 'view' = 'default';

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    if (!active) {
      dot.style.opacity = '1';
      ring.style.opacity = '1';
      active = true;
    }
  });

  window.addEventListener('mouseleave', () => {
    dot.style.opacity = '0';
    ring.style.opacity = '0';
    active = false;
  });

  // Hover states
  const setHover = (on: boolean) => {
    ring.classList.toggle('cursor-ring--hover', on);
  };
  const setView = (on: boolean) => {
    label = on ? 'view' : 'default';
    ring.classList.toggle('cursor-ring--view', on);
    ring.textContent = on ? 'VER' : '';
  };

  document.addEventListener('mouseover', (e) => {
    const t = e.target as HTMLElement;
    if (!t || !t.closest) return;
    if (t.closest('a, button, .interactive')) setHover(true);
    if (t.closest('[data-cursor="view"]')) setView(true);
  });
  document.addEventListener('mouseout', (e) => {
    const t = e.target as HTMLElement;
    if (!t || !t.closest) return;
    if (t.closest('a, button, .interactive')) setHover(false);
    if (t.closest('[data-cursor="view"]')) setView(false);
  });

  const tick = () => {
    dotPos.x = lerp(dotPos.x, mouse.x, 0.4);
    dotPos.y = lerp(dotPos.y, mouse.y, 0.4);
    ringPos.x = lerp(ringPos.x, mouse.x, 0.12);
    ringPos.y = lerp(ringPos.y, mouse.y, 0.12);
    dot.style.transform = `translate3d(${dotPos.x}px, ${dotPos.y}px, 0) translate(-50%, -50%)`;
    ring.style.transform = `translate3d(${ringPos.x}px, ${ringPos.y}px, 0) translate(-50%, -50%)`;
    requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
  void label;
}
