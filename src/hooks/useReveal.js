import { useLayoutEffect } from 'react';

// Blocks that fade up into view on scroll. Siblings that match get a small stagger.
const SELECTORS = [
  '.card > .section-header',
  '.about__intro',
  '.trust__stat',
  '.trust__logos',
  '.feature',
  '.step',
  '.promo-card',
  '.route',
  '.deal',
  '.testi',
  '.guide',
  '.cta-card',
  '.faq-layout__intro',
  '.faq__item',
  '.dest',
  '.featured-grid > .overlay-card',
  '.featured-grid__side > .overlay-card',
  '.region-tile',
  '.coupon',
  '.price-alert > *',
  '.story__left',
  '.story__right',
  '.timeline li',
  '.member',
  '.careers > *',
  '.contact-form',
  '.contact-side > *',
  '.office',
  '.world-map',
  '.fleet__showcase',
  '.fleet__controls',
  '.deal-week',
  '.site-footer__top',
  '.site-footer__wordmark',
].join(',');

const STAGGER_MS = 80;
const MAX_STAGGER = 6;

/**
 * Adds a subtle fade-up reveal to page blocks as they scroll into view.
 * Classes are added before paint (layout effect) so nothing flashes, and removed
 * once the reveal finishes so hover transitions stay snappy.
 */
export default function useReveal() {
  useLayoutEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const els = [...document.querySelectorAll(SELECTORS)].filter((el) => !el.dataset.revealed);
    const pending = new Set(els);
    const timers = [];

    // Final state: drop the helper classes so normal hover transitions take over.
    const finish = (el) => {
      el.classList.remove('reveal', 'is-in');
      el.style.removeProperty('--reveal-delay');
      el.dataset.revealed = '1';
    };

    const play = (el) => {
      if (!pending.delete(el)) return;
      io.unobserve(el);
      el.classList.add('is-in');
      const onEnd = (e) => {
        if (e.target !== el || e.propertyName !== 'transform') return;
        el.removeEventListener('transitionend', onEnd);
        finish(el);
      };
      el.addEventListener('transitionend', onEnd);
      // Safety net in case transitionend never fires (e.g. background tab).
      timers.push(setTimeout(() => finish(el), 1800));
    };

    // Blocks the user has already scrolled past appear instantly (no late pop-in above them).
    const skip = (el) => {
      if (!pending.delete(el)) return;
      io.unobserve(el);
      finish(el);
    };

    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && play(e.target)),
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    );

    // Fast scrolls and anchor jumps can carry a block from below to above the viewport
    // without a single intersecting frame, which the observer never reports. Catch those.
    let ticking = false;
    const onScroll = () => {
      if (ticking || !pending.size) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        pending.forEach((el) => {
          const r = el.getBoundingClientRect();
          if (r.bottom < 0) skip(el);
          else if (r.top < window.innerHeight * 0.94) play(el);
        });
      });
    };

    els.forEach((el) => {
      const siblings = [...el.parentElement.children].filter((c) => c.matches(SELECTORS));
      const idx = Math.max(0, siblings.indexOf(el));
      el.style.setProperty('--reveal-delay', `${Math.min(idx, MAX_STAGGER) * STAGGER_MS}ms`);
      el.classList.add('reveal');
      io.observe(el);
    });
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      // Reset without marking as revealed, so a re-run (StrictMode, remount) animates again.
      io.disconnect();
      window.removeEventListener('scroll', onScroll);
      timers.forEach(clearTimeout);
      els.forEach((el) => {
        el.classList.remove('reveal', 'is-in');
        el.style.removeProperty('--reveal-delay');
      });
    };
  }, []);
}
