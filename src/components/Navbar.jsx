'use client';

import { useState, useEffect, useCallback } from 'react';
import { ArrowUpRightIcon, EnvelopeSimpleIcon } from '@phosphor-icons/react/dist/ssr';
import { WhatsAppIcon, InstagramIcon } from './icons/CustomIcons';
import { getWhatsAppUrl, WHATSAPP_MESSAGES, CONTACT_EMAIL, INSTAGRAM_URL } from '../utils/whatsapp';

const NAV_LINKS = [
  { href: '/#what-we-do', label: 'What We Do' },
  { href: '/#system', label: 'Process' },
  { href: '/#work', label: 'Work' },
  { href: '/#about', label: 'About' },
  { href: '/#faq', label: 'FAQ' },
];

// Fuller labels for the roomier mobile menu
const MOBILE_LABELS = { '/#work': 'Selected Work', '/#about': 'About Us' };

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  // Menu links: close the menu first, then scroll once the page is unlocked, so the
  // smooth scroll isn't cut short by the scroll lock being released mid-way.
  const handleMenuLink = useCallback((e, href) => {
    const target = document.getElementById(href.split('#')[1]);
    if (!target) {
      setMenuOpen(false); // e.g. on a legal page: let the browser go to the home page
      return;
    }
    e.preventDefault();
    setMenuOpen(false);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        window.history.pushState(null, '', href.slice(1));
      });
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.pageYOffset || window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
      setScrolled(y > 8);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  // While the menu is open: stop the page scrolling behind it, close on Escape,
  // and close if the window grows to the desktop layout.
  useEffect(() => {
    const root = document.documentElement;
    if (!menuOpen) {
      root.classList.remove('menu-open');
      return undefined;
    }

    root.classList.add('menu-open');
    const onKey = (e) => { if (e.key === 'Escape') setMenuOpen(false); };
    const desktop = window.matchMedia('(min-width: 1025px)');
    const onDesktop = (e) => { if (e.matches) setMenuOpen(false); };
    window.addEventListener('keydown', onKey);
    desktop.addEventListener('change', onDesktop);

    return () => {
      root.classList.remove('menu-open');
      window.removeEventListener('keydown', onKey);
      desktop.removeEventListener('change', onDesktop);
    };
  }, [menuOpen]);

  return (
    <>
      <header
        id="site-navbar"
        className={`navbar ${scrolled ? 'navbar-scrolled' : 'navbar-transparent'}${menuOpen ? ' navbar-menu-open' : ''}`}
        data-scrolled={scrolled ? 'true' : 'false'}
        role="banner"
      >
        <div className="container nav-inner">
          <a href="/" className="brand-mark" aria-label="MS ELITE — Digital Marketing & Creative Agency" onClick={closeMenu}>
            <span className="brand-name">MS ELITE</span>
            <span className="brand-descriptor">DIGITAL MARKETING · CREATIVE</span>
          </a>

          <nav aria-label="Primary Navigation">
            <ul className="nav-links">
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}><a href={href} className="nav-link">{label}</a></li>
              ))}
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
            type="button"
            className={`mobile-nav-toggle${menuOpen ? ' is-open' : ''}`}
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span className="menu-toggle-label" aria-hidden="true">{menuOpen ? 'Close' : 'Menu'}</span>
            <span className="menu-toggle-icon" aria-hidden="true">
              <span />
              <span />
            </span>
          </button>
        </div>
      </header>

      {/* Lives outside the header: the scrolled header's backdrop-filter would
          otherwise trap this fixed overlay inside the 70px bar. */}
      <div
        id="mobile-menu"
        className={`mobile-menu${menuOpen ? ' is-open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        inert={!menuOpen}
      >
        <div className="mobile-menu-inner">
          <nav className="mobile-menu-links" aria-label="Mobile Navigation">
            {NAV_LINKS.map(({ href, label }, i) => (
              <a
                key={href}
                href={href}
                className="mobile-menu-link"
                style={{ '--i': i }}
                onClick={(e) => handleMenuLink(e, href)}
              >
                <span className="mobile-menu-num">{String(i + 1).padStart(2, '0')}</span>
                <span className="mobile-menu-label">{MOBILE_LABELS[href] || label}</span>
                <ArrowUpRightIcon className="mobile-menu-arrow" size={20} weight="regular" aria-hidden="true" />
              </a>
            ))}
          </nav>

          <div className="mobile-menu-footer" style={{ '--i': NAV_LINKS.length }}>
            <a
              href={getWhatsAppUrl(WHATSAPP_MESSAGES.hero)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mobile-cta-btn"
              onClick={closeMenu}
            >
              <WhatsAppIcon size={20} />
              <span>Let's Build Your Brand</span>
            </a>

            <div className="mobile-menu-contact">
              <a href={`mailto:${CONTACT_EMAIL}`} className="mobile-menu-contact-link" aria-label={`Email ${CONTACT_EMAIL}`}>
                <EnvelopeSimpleIcon size={18} weight="regular" aria-hidden="true" />
                <span>Email</span>
              </a>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="mobile-menu-contact-link" aria-label="Instagram @ms_elite_growth">
                <InstagramIcon size={16} />
                <span>Instagram</span>
              </a>
              <span className="mobile-menu-place">Chennai, India</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
