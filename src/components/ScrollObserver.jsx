'use client';

import { useEffect } from 'react';

// Longest reveal transition in globals.css is 1.2s; cleanup waits a little longer.
const REVEAL_DURATION_MS = 1300;

export default function ScrollObserver() {
  useEffect(() => {
    // Check for user's motion preference
    if (typeof window === 'undefined') return;
    // Tells the pre-paint script in layout.jsx that the observer is running
    document.documentElement.dataset.revealReady = 'true';
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      document.documentElement.classList.remove('js-reveal-active');
      return;
    }

    // The pre-paint script in layout.jsx turns reveals on and gives up after 4s if this
    // component hasn't loaded (slow phone or network). If it already gave up, the page
    // is fully visible; don't hide it again just to replay the entrances.
    if (!document.documentElement.classList.contains('js-reveal-active')) return;

    // Element -> entrance style. Styles live in globals.css under "ENTRANCE VARIANTS":
    // up (rise), blur (rise + unblur, for headings), left / right (slide in),
    // pop (scale up with a soft overshoot), zoom (image settles from a slight zoom).
    const revealMap = [
      ['.hero-centered-content > *', 'up'],
      ['.hero-headline', 'blur'],
      ['.hero-proof-card', 'pop'],
      ['.proof-strip-header', 'up'],
      ['.section-title', 'blur'],
      ['.section-subtext', 'up'],
      ['.mono-eyebrow', 'left'],
      ['.growth-eyebrow-clean', 'left'],
      ['.final-cta-eyebrow', 'up'],
      ['.service-row', 'left'],
      ['.growth-step-col', 'pop'],
      ['.kinetic-title', 'blur'],
      ['.kinetic-offset-frame', 'left'],
      ['.kinetic-media-card', 'right'],
      ['.work-featured-img-wrap', 'zoom'],
      ['.work-featured-info', 'right'],
      ['.work-card-vertical', 'pop'],
      ['.client-wall:not(.client-wall-clone) .client-card', 'pop'],
      ['.client-marquee', 'up'],
      ['.about-grid > :first-child', 'zoom'],
      ['.about-grid > :not(:first-child)', 'right'],
      ['.about-title', 'blur'],
      ['.trust-ribbon-title', 'blur'],
      ['.trust-ribbon-subtext', 'up'],
      ['.trust-principle-card', 'pop'],
      ['.trust-ribbon-action', 'up'],
      ['.faq-sticky', 'left'],
      ['.faq-item', 'right'],
      ['.final-cta-box', 'zoom'],
      ['.final-cta-title', 'blur'],
      ['.final-cta-action-wrap', 'up'],
      ['.footer-top > *', 'up'],
      ['.footer-bottom', 'up'],
      ['.legal-header > *', 'up'],
      ['.page-hero-content > *', 'up'],
      ['.page-hero-title', 'blur'],
      ['.about-intro-media', 'zoom'],
      ['.about-intro-text > *', 'up'],
      ['.journey-step', 'pop'],
      ['.journey-note', 'up'],
      ['.value-card', 'pop'],
      ['.offer-list li', 'left'],
      ['.audience-item', 'right'],
      ['.about-creators-cta', 'up'],
      ['.contact-cards li', 'left'],
      ['.next-steps', 'up'],
      ['.contact-form-card', 'right'],
    ];

    // Later entries win, so a heading inside the hero gets "blur" rather than "up".
    const elementSet = new Set();
    revealMap.forEach(([selector, variant]) => {
      document.querySelectorAll(selector).forEach((el) => {
        if (el.dataset.revealDone !== undefined) return; // already played (dev re-runs)
        el.dataset.reveal = variant;
        elementSet.add(el);
      });
    });
    const elements = Array.from(elementSet);

    elements.forEach((el) => {
      if (!el.classList.contains('scroll-reveal-item')) {
        el.classList.add('scroll-reveal-item');
      }
    });

    // Elements that come into view together enter one after another (top to bottom,
    // then left to right); an element scrolling in on its own enters straight away.
    // On phones the steps are shorter, because single-column stacks would otherwise
    // keep rows further down waiting.
    const isPhone = window.matchMedia('(max-width: 768px)').matches;
    const STAGGER_STEP = isPhone ? 0.06 : 0.08;
    const STAGGER_MAX = isPhone ? 0.36 : 0.56;

    // Once an element has finished its entrance, hand it back to its own styles.
    // While the reveal classes are present they override each element's own
    // transition and hover transform (card lifts, row slides, the kinetic tilt).
    const timers = new Set();
    const settle = (el) => {
      el.classList.remove('scroll-reveal-item', 'is-revealed');
      el.style.removeProperty('--reveal-stagger');
      delete el.dataset.reveal;
      el.dataset.revealDone = '';
    };
    const finishReveal = (el) => {
      const stagger = parseFloat(el.style.getPropertyValue('--reveal-stagger')) || 0;
      const timer = setTimeout(() => {
        timers.delete(timer);
        settle(el);
      }, REVEAL_DURATION_MS + stagger * 1000);
      timers.add(timer);
    };

    // Gold buttons inside a revealed block catch the light once as they appear
    const shineButtons = (el, delay) => {
      el.querySelectorAll('.btn-primary:not(.hero-btn-primary)').forEach((btn) => {
        btn.style.setProperty('--shine-delay', `${(delay + 0.55).toFixed(2)}s`);
        btn.classList.add('is-shine');
      });
    };

    const revealBatch = (batch) => {
      const pending = batch.filter((el) => !el.classList.contains('is-revealed'));
      const positions = new Map(pending.map((el) => [el, el.getBoundingClientRect()]));
      pending.sort((a, b) => {
        const ra = positions.get(a);
        const rb = positions.get(b);
        return Math.abs(ra.top - rb.top) > 8 ? ra.top - rb.top : ra.left - rb.left;
      });
      pending.forEach((el, i) => {
        const delay = Math.min(i * STAGGER_STEP, STAGGER_MAX);
        el.style.setProperty('--reveal-stagger', `${delay.toFixed(2)}s`);
        el.classList.add('is-revealed');
        shineButtons(el, delay);
        finishReveal(el);
        observer.unobserve(el);
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        revealBatch(entries.filter((entry) => entry.isIntersecting).map((entry) => entry.target));
      },
      {
        root: null,
        rootMargin: isPhone ? '0px 0px -24px 0px' : '0px 0px -40px 0px',
        threshold: isPhone ? 0.05 : 0.08,
      }
    );

    elements.forEach((el) => observer.observe(el));

    // Handle elements already in the viewport on initial load (e.g. Hero)
    const initialTimer = setTimeout(() => {
      revealBatch(elements.filter((el) => {
        const rect = el.getBoundingClientRect();
        return rect.top < window.innerHeight * 0.95 && rect.bottom > 0;
      }));
    }, 80);

    // Phones: the Client Results row scrolls sideways, so the first time it comes
    // into view it gives a small nudge to show there is more to swipe.
    let hintObserver;
    const scroller = isPhone ? document.querySelector('.results-grid') : null;
    if (scroller && scroller.scrollWidth > scroller.clientWidth + 8) {
      let touched = false;
      const markTouched = () => { touched = true; };
      scroller.addEventListener('pointerdown', markTouched, { once: true, passive: true });
      hintObserver = new IntersectionObserver((entries) => {
        if (!entries[0].isIntersecting) return;
        hintObserver.disconnect();
        const later = (fn, ms) => {
          const t = setTimeout(() => { timers.delete(t); fn(); }, ms);
          timers.add(t);
        };
        later(() => {
          if (touched) return;
          scroller.style.scrollSnapType = 'none';
          scroller.scrollBy({ left: 64, behavior: 'smooth' });
          later(() => {
            scroller.scrollBy({ left: -64, behavior: 'smooth' });
            later(() => { scroller.style.scrollSnapType = ''; }, 600);
          }, 650);
        }, 1200);
      }, { threshold: 0.6 });
      hintObserver.observe(scroller);
    }

    return () => {
      clearTimeout(initialTimer);
      timers.forEach((timer) => clearTimeout(timer));
      observer.disconnect();
      if (hintObserver) hintObserver.disconnect();
      // Never leave anything half-revealed: finish entrances already started and
      // un-hide the rest (if this effect runs again it hides them again).
      elements.forEach((el) => {
        if (el.classList.contains('is-revealed')) {
          settle(el);
        } else {
          el.classList.remove('scroll-reveal-item');
          el.style.removeProperty('--reveal-stagger');
          delete el.dataset.reveal;
        }
      });
    };
  }, []);

  return null;
}
