import { WHATSAPP_DISPLAY, CONTACT_EMAIL } from './whatsapp';

// Shared by the visible FAQ section and the FAQPage structured data in layout.jsx,
// so the two can never drift apart.
export const FAQS = [
  {
    q: 'What does MS ELITE do?',
    a: 'MS ELITE is a digital marketing and creative agency focused on personal branding, professional content production, video editing, and social media marketing.'
  },
  {
    q: 'Which services do you offer?',
    a: 'Personal branding, short-form video editing and reels production, professional shoots and content production, social media content strategy, static creatives and social media design, Meta Ads management, content planning, and performance review.'
  },
  {
    q: 'Who do you work with?',
    a: 'Doctors and healthcare professionals, fitness and business coaches, founders and entrepreneurs, personal brands and influencers, and businesses that want consistent social media content.'
  },
  {
    q: 'How does the process work?',
    a: 'We follow five stages: discovery, strategy, production, editing, and delivery.'
  },
  {
    q: 'Where are you based?',
    a: 'MS ELITE is based in Chennai, Tamil Nadu, India.'
  },
  {
    q: 'How do I get started?',
    a: `Message us on WhatsApp at ${WHATSAPP_DISPLAY}, email ${CONTACT_EMAIL}, or reach us on Instagram at @ms_elite_growth.`
  }
];
