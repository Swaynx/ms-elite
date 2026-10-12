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

    // Enable CSS animation system
    document.documentElement.classList.add('js-reveal-active');

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
    ];

    // Later entries win, so a heading inside the hero gets "blur" rather than "up".
    const elementSet = new Set();
    revealMap.forEach(([selector, variant]) => {
      document.querySelectorAll(selector).forEach((el) => {
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

    // Staggered delays for siblings: [parent selector, start delay in seconds, cycle].
    // Long vertical lists use a short cycle so rows further down don't wait for earlier ones.
    const staggerParents = [
      ['.hero-centered-content', 0],
      ['.hero-proof-grid', 0.45],
      ['.services-list', 0, 3],
      ['.growth-steps-row', 0],
      ['.work-grid-triplet', 0],
      ['.results-grid', 0],
      ['.about-grid', 0],
      ['.trust-ribbon-triplet', 0],
      ['.faq-list', 0.1, 3],
      ['.footer-top', 0],
      ['.legal-header', 0],
    ];

    staggerParents.forEach(([selector, base, cycle = 7]) => {
      document.querySelectorAll(selector).forEach((parent) => {
        Array.from(parent.children).forEach((child, idx) => {
          child.style.setProperty('--reveal-stagger', `${(base + (idx % cycle) * 0.09).toFixed(2)}s`);
        });
      });
    });

    // Once an element has finished its entrance, hand it back to its own styles.
    // While the reveal classes are present they override each element's own
    // transition and hover transform (card lifts, row slides, the kinetic tilt).
    const timers = new Set();
    const finishReveal = (el) => {
      const stagger = parseFloat(el.style.getPropertyValue('--reveal-stagger')) || 0;
      const timer = setTimeout(() => {
        timers.delete(timer);
        el.classList.remove('scroll-reveal-item', 'is-revealed');
        el.style.removeProperty('--reveal-stagger');
        delete el.dataset.reveal;
      }, REVEAL_DURATION_MS + stagger * 1000);
      timers.add(timer);
    };

    const reveal = (el) => {
      if (el.classList.contains('is-revealed')) return;
      el.classList.add('is-revealed');
      finishReveal(el);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -40px 0px',
        threshold: 0.08,
      }
    );

    elements.forEach((el) => observer.observe(el));

    // Handle elements already in the viewport on initial load (e.g. Hero)
    const initialTimer = setTimeout(() => {
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.95 && rect.bottom > 0) {
          reveal(el);
          observer.unobserve(el);
        }
      });
    }, 80);

    return () => {
      clearTimeout(initialTimer);
      timers.forEach((timer) => clearTimeout(timer));
      observer.disconnect();
    };
  }, []);

  return null;
}
