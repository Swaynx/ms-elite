import React from 'react';
import { ArrowUpRightIcon } from '@phosphor-icons/react/dist/ssr';
import { WhatsAppIcon } from './icons/CustomIcons';
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from '../utils/whatsapp';
import MobileStickyBar from './MobileStickyBar';

export default function WhatsAppCTA() {
  return (
    <>
      <section id="cta" className="final-cta-section" aria-labelledby="cta-title">
        <div className="container">
          <div className="final-cta-box">
            <span className="final-cta-eyebrow">START THE CONVERSATION</span>

            <h2 id="cta-title" className="final-cta-title">
              Make your expertise <br />
              easier to discover.
            </h2>

            <div className="final-cta-action-wrap">
              <a
                href={getWhatsAppUrl(WHATSAPP_MESSAGES.finalCta)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary final-cta-btn"
              >
                <WhatsAppIcon size={22} />
                <span>Let's Build Your Brand</span>
                <ArrowUpRightIcon size={18} weight="bold" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Sticky WhatsApp Bar */}
      <MobileStickyBar />
    </>
  );
}
