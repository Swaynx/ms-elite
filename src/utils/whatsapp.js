// WhatsApp Integration Utilities
export const WHATSAPP_PHONE = '918072966016'; // MS ELITE WhatsApp: +91 80729 66016
export const WHATSAPP_DISPLAY = '+91 80729 66016';

export function getWhatsAppUrl(message) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encoded}`;
}

export const WHATSAPP_MESSAGES = {
  hero: "Hi MS ELITE, I came across your website and would like to build my brand.",
  services: "Hi MS ELITE, I'd like to know more about your services.",
  project: "Hi MS ELITE, I'd like to discuss a project.",
  finalCta: "Hi MS ELITE, I'd like to build my brand. Can we talk?",
  general: "Hi MS ELITE, I'd like to discuss my brand and content."
};

// Client-confirmed contact details
export const CONTACT_EMAIL = 'mselitecontact@gmail.com';
export const INSTAGRAM_URL = 'https://www.instagram.com/ms_elite_growth/';
