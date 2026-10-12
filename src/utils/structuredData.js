import { SITE_URL, SITE_NAME, TAGLINE, SEO_DESCRIPTION, SERVICES } from './site';
import { FAQS } from './faqs';
import { getWhatsAppUrl, WHATSAPP_MESSAGES, CONTACT_EMAIL, INSTAGRAM_URL } from './whatsapp';

// JSON-LD for the home page: website, business details, services and the visible FAQ.
const ORG_ID = `${SITE_URL}/#organization`;

export const homeJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description: SEO_DESCRIPTION,
      inLanguage: 'en-IN',
      publisher: { '@id': ORG_ID },
    },
    {
      '@type': 'ProfessionalService',
      '@id': ORG_ID,
      name: SITE_NAME,
      slogan: TAGLINE,
      description: 'MS ELITE is a digital marketing and creative agency in Chennai focused on personal branding, professional content production, video editing and social media marketing for doctors, coaches, founders and businesses.',
      url: SITE_URL,
      image: `${SITE_URL}/images/hero-studio-filming.jpg`,
      email: CONTACT_EMAIL,
      telephone: '+918072966016',
      // City-level only: no street address has been confirmed by the client.
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Chennai',
        addressRegion: 'Tamil Nadu',
        addressCountry: 'IN',
      },
      areaServed: { '@type': 'City', name: 'Chennai' },
      knowsAbout: [
        'Personal branding',
        'Short-form video editing',
        'Instagram Reels production',
        'Content production',
        'Social media marketing',
        'Social media content strategy',
        'Meta Ads',
        'Content planning',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        telephone: '+918072966016',
        email: CONTACT_EMAIL,
        url: getWhatsAppUrl(WHATSAPP_MESSAGES.general),
      },
      sameAs: [INSTAGRAM_URL],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Services',
        itemListElement: SERVICES.map((name) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name, provider: { '@id': ORG_ID } },
        })),
      },
    },
    {
      '@type': 'FAQPage',
      '@id': `${SITE_URL}/#faq`,
      mainEntity: FAQS.map(({ q, a }) => ({
        '@type': 'Question',
        name: q,
        acceptedAnswer: { '@type': 'Answer', text: a },
      })),
    },
  ],
};
