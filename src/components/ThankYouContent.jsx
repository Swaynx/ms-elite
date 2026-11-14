'use client';

import { useEffect, useState } from 'react';
import { ArrowLeftIcon, ArrowUpRightIcon } from '@phosphor-icons/react/dist/ssr';
import { WhatsAppIcon, InstagramIcon } from './icons/CustomIcons';
import { ENQUIRY_STORAGE_KEY } from './ContactForm';
import { INSTAGRAM_URL } from '../utils/whatsapp';

export default function ThankYouContent() {
  const [enquiry, setEnquiry] = useState(null);

  useEffect(() => {
    try {
      const saved = JSON.parse(sessionStorage.getItem(ENQUIRY_STORAGE_KEY) || 'null');
      if (saved && typeof saved.url === 'string' && saved.url.startsWith('https://wa.me/')) setEnquiry(saved);
    } catch {
      // No stored enquiry (direct visit or storage blocked): show the general message
    }
  }, []);

  return (
    <div className="thanks-card">
      <span className="thanks-check" aria-hidden="true">
        <svg viewBox="0 0 64 64" width="72" height="72">
          <circle className="thanks-check-circle" cx="32" cy="32" r="29" />
          <path className="thanks-check-mark" d="M20 33.5l8 8 16-17" />
        </svg>
      </span>

      <span className="mono-eyebrow thanks-eyebrow">ENQUIRY RECEIVED</span>
      <h1 className="thanks-title">
        Thank You{enquiry?.name ? `, ${enquiry.name}` : ''}!
      </h1>
      <p className="thanks-text">
        {enquiry
          ? 'Your enquiry has opened in WhatsApp with all your details. Just press send there, and we’ll take it from there.'
          : 'Thanks for reaching out to MS ELITE. We’ll get back to you on WhatsApp or email.'}
      </p>

      <div className="thanks-actions">
        {enquiry && (
          <a href={enquiry.url} target="_blank" rel="noopener noreferrer" className="sticky-wa-btn thanks-wa-btn">
            <WhatsAppIcon size={20} />
            <span>Open WhatsApp Again</span>
          </a>
        )}
        <a href="/" className="btn-secondary">
          <ArrowLeftIcon size={16} weight="bold" aria-hidden="true" />
          <span>Back to Home</span>
        </a>
      </div>

      <ol className="thanks-steps">
        <li><span>1</span>Send the message in WhatsApp</li>
        <li><span>2</span>We review your goals</li>
        <li><span>3</span>We plan your content together</li>
      </ol>

      <p className="thanks-more">
        While you wait, see our latest work on{' '}
        <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
          <InstagramIcon size={14} variant="brand" gradientId="ig-thanks" /> Instagram
          <ArrowUpRightIcon size={12} weight="bold" aria-hidden="true" />
        </a>
        {' '}or read <a href="/about">our story</a>.
      </p>
    </div>
  );
}
