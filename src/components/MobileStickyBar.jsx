'use client';

import React, { useEffect, useState } from 'react';
import { WhatsAppIcon } from './icons/CustomIcons';
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from '../utils/whatsapp';

// Floating WhatsApp button (all screens, bottom right) + mobile WhatsApp bar (below 769px).
// On phones the floating button shows on the hero; once the visitor scrolls past it, the
// button docks into the bar as the bar slides up (and comes back out on the way up).
// The bar steps aside while the final CTA section is on screen.
export default function MobileStickyBar() {
  const [pastHero, setPastHero] = useState(false);
  const [ctaInView, setCtaInView] = useState(false);

  useEffect(() => {
    const onScroll = () => setPastHero(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    const cta = document.getElementById('cta');
    let observer;
    if (cta && 'IntersectionObserver' in window) {
      observer = new IntersectionObserver(([entry]) => setCtaInView(entry.isIntersecting), {
        threshold: 0.2,
      });
      observer.observe(cta);
    }

    return () => {
      window.removeEventListener('scroll', onScroll);
      observer?.disconnect();
    };
  }, []);

  const visible = pastHero && !ctaInView;

  return (
    <>
      <a
        href={getWhatsAppUrl(WHATSAPP_MESSAGES.general)}
        target="_blank"
        rel="noopener noreferrer"
        className={`wa-float${visible ? ' is-docked' : ''}`}
        aria-label="Chat with MS ELITE on WhatsApp"
      >
        <span className="wa-float-pulse" aria-hidden="true" />
        <WhatsAppIcon size={30} />
        <span className="wa-float-label" aria-hidden="true">Chat with us</span>
      </a>

      <div
        className={`mobile-sticky-bar${visible ? ' is-visible' : ''}`}
        aria-label="Quick WhatsApp contact"
        aria-hidden={!visible}
      >
        <a
          href={getWhatsAppUrl(WHATSAPP_MESSAGES.finalCta)}
          target="_blank"
          rel="noopener noreferrer"
          className="sticky-wa-btn"
          tabIndex={visible ? 0 : -1}
        >
          <WhatsAppIcon size={20} />
          <span>Let's Build Your Brand</span>
        </a>
      </div>
    </>
  );
}
