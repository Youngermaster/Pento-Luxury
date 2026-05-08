import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { Flip } from 'gsap/Flip';

let registered = false;

export function initGsap() {
  if (registered) return { gsap, ScrollTrigger, SplitText, Flip };
  gsap.registerPlugin(ScrollTrigger, SplitText, Flip);
  gsap.config({ nullTargetWarn: false });
  ScrollTrigger.defaults({
    markers: false,
    toggleActions: 'play none none none',
  });
  registered = true;
  return { gsap, ScrollTrigger, SplitText, Flip };
}

export { gsap, ScrollTrigger, SplitText, Flip };
