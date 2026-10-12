'use client';

import React, { useState, useEffect } from 'react';
import { ListIcon, XIcon, ArrowUpRightIcon } from '@phosphor-icons/react/dist/ssr';
import { WhatsAppIcon } from './icons/CustomIcons';
import { getWhatsAppUrl, WHATSAPP_MESSAGES, WHATSAPP_DISPLAY } from '../utils/whatsapp';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.pageYOffset || window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
      setScrolled(y > 8);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <header
      id="site-navbar"
      className={`navbar ${scrolled ? 'navbar-scrolled' : 'navbar-transparent'}`}
      data-scrolled={scrolled ? "true" : "false"}
      role="banner"
    >
      <div className="container nav-inner">
        <a href="#hero" className="brand-mark" aria-label="MS ELITE — Digital Marketing & Creative Agency">
          <span className="brand-name">MS ELITE</span>
          <span className="brand-descriptor">DIGITAL MARKETING · CREATIVE</span>
        </a>

        <nav aria-label="Primary Navigation">
          <ul className="nav-links">
            <li><a href="#what-we-do" className="nav-link">What We Do</a></li>
            <li><a href="#system" className="nav-link">Process</a></li>
            <li><a href="#work" className="nav-link">Work</a></li>
            <li><a href="#about" className="nav-link">About</a></li>
            <li><a href="#faq" className="nav-link">FAQ</a></li>
          </ul>
        </nav>

        <div className="nav-cta-wrap">
          <a
            href={getWhatsAppUrl(WHATSAPP_MESSAGES.hero)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary nav-action-btn"
          >
            <WhatsAppIcon size={16} />
            <span>Let's Build Your Brand</span>
            <ArrowUpRightIcon size={14} weight="bold" aria-hidden="true" />
          </a>
        </div>

        <button
          className="mobile-nav-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <XIcon size={24} weight="regular" aria-hidden="true" /> : <ListIcon size={24} weight="regular" aria-hidden="true" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="mobile-menu-overlay open" role="dialog" aria-modal="true">
          <div className="mobile-menu-inner">
            <nav className="mobile-menu-links">
              <a href="#what-we-do" className="mobile-menu-link" onClick={() => setMobileMenuOpen(false)}>
                <span>What We Do</span>
                <ArrowUpRightIcon size={18} weight="regular" aria-hidden="true" />
              </a>
              <a href="#system" className="mobile-menu-link" onClick={() => setMobileMenuOpen(false)}>
                <span>Process</span>
                <ArrowUpRightIcon size={18} weight="regular" aria-hidden="true" />
              </a>
              <a href="#work" className="mobile-menu-link" onClick={() => setMobileMenuOpen(false)}>
                <span>Selected Work</span>
                <ArrowUpRightIcon size={18} weight="regular" aria-hidden="true" />
              </a>
              <a href="#about" className="mobile-menu-link" onClick={() => setMobileMenuOpen(false)}>
                <span>About Us</span>
                <ArrowUpRightIcon size={18} weight="regular" aria-hidden="true" />
              </a>
              <a href="#faq" className="mobile-menu-link" onClick={() => setMobileMenuOpen(false)}>
                <span>FAQ</span>
                <ArrowUpRightIcon size={18} weight="regular" aria-hidden="true" />
              </a>
            </nav>
            
            <div className="mobile-menu-cta">
              <a
                href={getWhatsAppUrl(WHATSAPP_MESSAGES.hero)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mobile-cta-btn"
                onClick={() => setMobileMenuOpen(false)}
              >
                <WhatsAppIcon size={20} />
                <span>Let's Build Your Brand</span>
                <ArrowUpRightIcon size={16} weight="bold" aria-hidden="true" />
              </a>
              <p className="mobile-menu-subnote">WhatsApp {WHATSAPP_DISPLAY} · Chennai, Tamil Nadu</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
