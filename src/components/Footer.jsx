import React from 'react';
import { EnvelopeSimpleIcon } from '@phosphor-icons/react/dist/ssr';
import { WhatsAppIcon, InstagramIcon } from './icons/CustomIcons';
import { getWhatsAppUrl, WHATSAPP_MESSAGES, WHATSAPP_DISPLAY, CONTACT_EMAIL, INSTAGRAM_URL } from '../utils/whatsapp';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-top">
          <div>
            <span className="footer-brand-title">MS ELITE</span>
            <p className="footer-brand-desc">
              Creating Lasting Impact Beyond Marketing. A digital marketing & creative agency for professionals, coaches, healthcare experts & businesses.
            </p>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-muted)', marginTop: '12px' }}>
              CHENNAI, TAMIL NADU, INDIA
            </div>
          </div>

          <div>
            <div className="footer-col-head">Navigation</div>
            <ul className="footer-list">
              <li><a href="/#what-we-do" className="footer-link-item">What We Do</a></li>
              <li><a href="/#work" className="footer-link-item">Selected Work</a></li>
              <li><a href="/#results" className="footer-link-item">Client Results</a></li>
              <li><a href="/#system" className="footer-link-item">Process</a></li>
              <li><a href="/#about" className="footer-link-item">About Us</a></li>
              <li><a href="/#faq" className="footer-link-item">FAQ</a></li>
            </ul>
          </div>

          <div>
            <div className="footer-col-head">Connect</div>
            <ul className="footer-list footer-connect-list">
              <li>
                <a
                  href={getWhatsAppUrl(WHATSAPP_MESSAGES.general)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link-item footer-connect-link"
                >
                  <span className="footer-connect-icon">
                    <WhatsAppIcon size={16} variant="brand" />
                  </span>
                  <span>{WHATSAPP_DISPLAY}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT_EMAIL}`} className="footer-link-item footer-connect-link">
                  <span className="footer-connect-icon footer-connect-icon-mail">
                    <EnvelopeSimpleIcon size={16} weight="duotone" aria-hidden="true" />
                  </span>
                  <span>{CONTACT_EMAIL}</span>
                </a>
              </li>
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link-item footer-connect-link"
                >
                  <span className="footer-connect-icon">
                    <InstagramIcon size={16} variant="brand" gradientId="ig-footer" />
                  </span>
                  <span>@ms_elite_growth</span>
                </a>
              </li>
              {/* LinkedIn and YouTube: add here once the client provides the URLs */}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {currentYear} MS ELITE. All rights reserved.</span>
          <nav className="footer-legal" aria-label="Legal">
            <a href="/privacy-policy" className="footer-legal-link">Privacy Policy</a>
            <a href="/terms" className="footer-legal-link">Terms of Service</a>
            <a href="/disclaimer" className="footer-legal-link">Disclaimer</a>
          </nav>
          <span>Digital Marketing & Creative Agency · Chennai, Tamil Nadu, India</span>
        </div>
      </div>
    </footer>
  );
}
