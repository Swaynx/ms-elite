'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { PaperPlaneTiltIcon } from '@phosphor-icons/react/dist/ssr';
import { WhatsAppIcon } from './icons/CustomIcons';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { SERVICES } from '../utils/site';
import { AUDIENCES } from '../utils/content';

// The enquiry form doesn't store anything: on submit it opens WhatsApp with the
// answers written out as a message, then shows /thank-you. The thank-you page reads
// the name and WhatsApp link from sessionStorage to offer an "open again" button.
export const ENQUIRY_STORAGE_KEY = 'ms-elite-enquiry';

const EMPTY = { name: '', phone: '', email: '', brand: '', role: '', services: [], message: '' };

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = 'Please enter your name.';
  const digits = values.phone.replace(/[^\d]/g, '');
  if (!digits) errors.phone = 'Please enter your phone or WhatsApp number.';
  else if (digits.length < 10 || digits.length > 15) errors.phone = 'Please enter a valid phone number.';
  if (values.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address.';
  }
  if (!values.message.trim()) errors.message = 'Please tell us a little about your project.';
  return errors;
}

function buildMessage(v) {
  const lines = [
    "Hi MS ELITE, I'd like to discuss a project.",
    '',
    `Name: ${v.name.trim()}`,
    `Phone: ${v.phone.trim()}`,
  ];
  if (v.email.trim()) lines.push(`Email: ${v.email.trim()}`);
  if (v.brand.trim()) lines.push(`Brand / business: ${v.brand.trim()}`);
  if (v.role) lines.push(`I am: ${v.role}`);
  if (v.services.length) lines.push(`Interested in: ${v.services.join(', ')}`);
  lines.push('', `About my project: ${v.message.trim()}`);
  return lines.join('\n');
}

export default function ContactForm() {
  const router = useRouter();
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);

  const update = (field) => (e) => {
    const value = e.target.value;
    setValues((v) => ({ ...v, [field]: value }));
    if (errors[field]) setErrors((err) => ({ ...err, [field]: undefined }));
  };

  const toggleService = (service) => {
    setValues((v) => ({
      ...v,
      services: v.services.includes(service)
        ? v.services.filter((s) => s !== service)
        : [...v.services, service],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    const firstError = Object.keys(found)[0];
    if (firstError) {
      document.getElementById(`cf-${firstError}`)?.focus();
      return;
    }

    setSending(true);
    const url = getWhatsAppUrl(buildMessage(values));
    try {
      sessionStorage.setItem(ENQUIRY_STORAGE_KEY, JSON.stringify({ name: values.name.trim().split(' ')[0], url }));
    } catch {
      // Private mode or storage blocked: the thank-you page still works without it
    }
    const win = window.open(url, '_blank');
    if (win) win.opener = null;
    router.push('/thank-you');
  };

  const fieldProps = (field) => ({
    id: `cf-${field}`,
    name: field,
    value: values[field],
    onChange: update(field),
    'aria-invalid': errors[field] ? true : undefined,
    'aria-describedby': errors[field] ? `cf-${field}-error` : undefined,
  });

  const errorText = (field) =>
    errors[field] ? (
      <span className="cf-error" id={`cf-${field}-error`} role="alert">{errors[field]}</span>
    ) : null;

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="cf-row">
        <div className={`cf-field${errors.name ? ' has-error' : ''}`}>
          <label htmlFor="cf-name">Your name <span aria-hidden="true">*</span></label>
          <input type="text" autoComplete="name" placeholder="Full name" {...fieldProps('name')} />
          {errorText('name')}
        </div>
        <div className={`cf-field${errors.phone ? ' has-error' : ''}`}>
          <label htmlFor="cf-phone">Phone / WhatsApp <span aria-hidden="true">*</span></label>
          <input type="tel" autoComplete="tel" inputMode="tel" placeholder="+91" {...fieldProps('phone')} />
          {errorText('phone')}
        </div>
      </div>

      <div className="cf-row">
        <div className={`cf-field${errors.email ? ' has-error' : ''}`}>
          <label htmlFor="cf-email">Email <span className="cf-optional">(optional)</span></label>
          <input type="email" autoComplete="email" placeholder="you@example.com" {...fieldProps('email')} />
          {errorText('email')}
        </div>
        <div className="cf-field">
          <label htmlFor="cf-brand">Brand / business <span className="cf-optional">(optional)</span></label>
          <input type="text" autoComplete="organization" placeholder="Your brand or practice" {...fieldProps('brand')} />
        </div>
      </div>

      <div className="cf-field">
        <label htmlFor="cf-role">I am a…</label>
        <select {...fieldProps('role')}>
          <option value="">Choose one (optional)</option>
          {AUDIENCES.map((a) => (
            <option key={a} value={a}>{a}</option>
          ))}
          <option value="Other">Other</option>
        </select>
      </div>

      <fieldset className="cf-field cf-services">
        <legend>
          What can we help with?{' '}
          <span className="cf-optional" aria-live="polite">
            {values.services.length ? `(${values.services.length} selected)` : '(choose any)'}
          </span>
        </legend>
        <div className="cf-chips">
          {SERVICES.map((service) => {
            const checked = values.services.includes(service);
            return (
              <label key={service} className={`cf-chip${checked ? ' is-checked' : ''}`}>
                <input type="checkbox" checked={checked} onChange={() => toggleService(service)} />
                <span className="cf-chip-check" aria-hidden="true">
                  <svg viewBox="0 0 16 16" width="12" height="12">
                    <path d="M3.5 8.5l3 3 6-7" />
                  </svg>
                </span>
                <span className="cf-chip-text">{service}</span>
              </label>
            );
          })}
        </div>
      </fieldset>

      <div className={`cf-field${errors.message ? ' has-error' : ''}`}>
        <label htmlFor="cf-message">About your project <span aria-hidden="true">*</span></label>
        <textarea rows={5} placeholder="Tell us about your goals, your audience and what you'd like to create." {...fieldProps('message')} />
        {errorText('message')}
      </div>

      <div className="cf-submit-row">
        <button type="submit" className="btn-primary cf-submit" disabled={sending}>
          <PaperPlaneTiltIcon size={18} weight="fill" aria-hidden="true" />
          <span>{sending ? 'Opening WhatsApp…' : 'Send Enquiry'}</span>
        </button>
        <p className="cf-note">
          <WhatsAppIcon size={14} />
          <span>Your enquiry opens in WhatsApp, ready to send. Fields marked * are required.</span>
        </p>
      </div>
    </form>
  );
}
