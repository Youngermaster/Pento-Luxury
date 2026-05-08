import { lerp, clamp, prefersReducedMotion } from './utils';

type Layer = { el: HTMLElement; depth: number };

let layers: Layer[] = [];
let target = { x: 0, y: 0 };
const current = { x: 0, y: 0 };
let started = false;
let mouseAttached = false;
let orientationAttached = false;

function tick() {
  current.x = lerp(current.x, target.x, 0.06);
  current.y = lerp(current.y, target.y, 0.06);
  for (const { el, depth } of layers) {
    const tx = current.x * depth;
    const ty = current.y * depth;
    el.style.transform = `translate3d(${tx.toFixed(2)}px, ${ty.toFixed(2)}px, 0)`;
  }
  requestAnimationFrame(tick);
}

function start() {
  if (started) return;
  started = true;
  requestAnimationFrame(tick);
}

function onMouseMove(e: MouseEvent) {
  const nx = (e.clientX / window.innerWidth) * 2 - 1;
  const ny = (e.clientY / window.innerHeight) * 2 - 1;
  target.x = -nx * 30;
  target.y = -ny * 22;
}

// Baseline calibrates on first orientation event so tilt origin is wherever
// the user is currently holding the phone. Avoids a hard 30° assumption.
let baseline: { gamma: number; beta: number } | null = null;

function onOrientation(e: DeviceOrientationEvent) {
  const g = e.gamma ?? 0;
  const b = e.beta ?? 0;
  if (!baseline) baseline = { gamma: g, beta: b };
  // Cap deflection to ±25° from baseline so motion stays subtle.
  const dg = clamp(g - baseline.gamma, -25, 25) / 25;
  const db = clamp(b - baseline.beta, -25, 25) / 25;
  target.x = -dg * 30;
  target.y = -db * 22;
}

export function initParallax(selector = '.parallax-layer') {
  if (prefersReducedMotion()) return;
  const els = Array.from(document.querySelectorAll<HTMLElement>(selector));
  if (els.length === 0) return;
  layers = els.map((el) => {
    const depth = parseFloat(el.dataset.depth ?? '1');
    return { el, depth: Number.isFinite(depth) ? depth : 1 };
  });
  start();
  attachMouseSource();
}

export function attachMouseSource() {
  if (mouseAttached) return;
  if (!matchMedia('(hover: hover) and (pointer: fine)').matches) return;
  window.addEventListener('mousemove', onMouseMove, { passive: true });
  mouseAttached = true;
}

export function attachOrientationSource() {
  if (orientationAttached) return;
  window.addEventListener('deviceorientation', onOrientation, { passive: true });
  orientationAttached = true;
}

export function stopParallax() {
  if (mouseAttached) {
    window.removeEventListener('mousemove', onMouseMove);
    mouseAttached = false;
  }
  if (orientationAttached) {
    window.removeEventListener('deviceorientation', onOrientation);
    orientationAttached = false;
  }
}
