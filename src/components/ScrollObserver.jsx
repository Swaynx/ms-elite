'use client';

import { useEffect } from 'react';

// Longest reveal transition in globals.css is 0.9s; cleanup waits a little longer.
const REVEAL_DURATION_MS = 1000;

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

    const selectors = [
      '.hero-centered-content > *',
      '.proof-strip-header',
      '.section-title',
      '.section-subtext',
      '.mono-eyebrow',
      '.growth-eyebrow-clean',
      '.final-cta-eyebrow',
      '.service-row',
      '.growth-step-col',
      '.kinetic-offset-frame',
      '.kinetic-media-card',
      '.work-featured-grid',
      '.work-card-vertical',
      '.google-section-header',
      '.google-card',
      '.video-test-card',
      '.about-grid > *',
      '.trust-ribbon-title',
      '.trust-ribbon-subtext',
      '.trust-principle-card',
      '.trust-ribbon-action',
      '.faq-sticky',
      '.faq-item',
      '.final-cta-box',
      '.final-cta-title',
      '.final-cta-action-wrap'
    ];

    const elements = document.querySelectorAll(selectors.join(', '));

    elements.forEach((el) => {
      if (!el.classList.contains('scroll-reveal-item')) {
        el.classList.add('scroll-reveal-item');
      }
    });

    // Add staggered delay index for grid siblings
    const gridParents = document.querySelectorAll(
      '.hero-centered-content, .growth-steps-row, .work-grid-triplet, .video-test-grid, .trust-ribbon-triplet, .faq-list'
    );

    gridParents.forEach((parent) => {
      const children = parent.children;
      Array.from(children).forEach((child, idx) => {
        child.style.setProperty('--reveal-stagger', `${Math.min(idx * 0.08, 0.48)}s`);
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
