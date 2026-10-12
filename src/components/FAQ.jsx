'use client';

import React, { useState } from 'react';
import { PlusIcon, ArrowUpRightIcon } from '@phosphor-icons/react/dist/ssr';
import { WhatsAppIcon } from './icons/CustomIcons';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { FAQS } from '../utils/faqs';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="section-padding" aria-labelledby="faq-title">
      <div className="container">
        <div className="faq-layout">
          <div className="faq-sticky">
            <span className="mono-eyebrow">FAQ</span>
            <h2 id="faq-title" className="section-title">
              Frequently Asked <br />
              Questions.
            </h2>
            <p className="section-subtext" style={{ marginBottom: '24px' }}>
              Everything you need to know about our services, process, and working together.
            </p>
            <div>
              <a
                href={getWhatsAppUrl("Hi MS ELITE, I have a quick question before starting.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ fontSize: '0.8125rem', padding: '10px 18px' }}
              >
                <WhatsAppIcon size={15} />
                <span>Ask Us on WhatsApp</span>
                <ArrowUpRightIcon size={13} weight="bold" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="faq-list" role="region" aria-label="FAQ Accordion">
            {FAQS.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} className={`faq-item ${isOpen ? 'open' : ''}`}>
                  <button
                    className="faq-btn"
                    onClick={() => toggle(index)}
                    aria-expanded={isOpen}
                    id={`faq-btn-${index}`}
                    aria-controls={`faq-ans-${index}`}
                  >
                    <span>{faq.q}</span>
                    <PlusIcon size={18} className="faq-icon" weight="bold" aria-hidden="true" />
                  </button>
                  <div
                    id={`faq-ans-${index}`}
                    role="region"
                    aria-labelledby={`faq-btn-${index}`}
                    aria-hidden={!isOpen}
                    inert={!isOpen}
                    className="faq-ans-wrap"
                  >
                    <div className="faq-ans-inner">
                      <div className="faq-ans">{faq.a}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
