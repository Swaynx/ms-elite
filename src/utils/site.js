// Site-wide SEO details. SITE_URL is used by metadata, JSON-LD, robots.txt and sitemap.xml.
export const SITE_URL = 'https://mselite.com'; // TODO: confirm production domain with client
export const SITE_NAME = 'MS ELITE';
export const TAGLINE = 'Creating Lasting Impact Beyond Marketing.';

// ~55 characters: main service + city first, brand last, so it isn't cut off in results.
export const SEO_TITLE = 'Personal Branding & Content Agency in Chennai | MS ELITE';

// ~155 characters: who it's for, what we do, where.
export const SEO_DESCRIPTION =
  'MS ELITE helps doctors, coaches and founders in Chennai build a personal brand with reels, video editing, professional shoots, social content and Meta Ads.';

// Shorter, warmer copy for WhatsApp / Instagram / LinkedIn link previews.
export const SHARE_DESCRIPTION =
  "Personal branding, reels, shoots and social media content for doctors, coaches and founders. Let's build your brand.";

// Must match the services shown in ServiceList.jsx.
export const SERVICES = [
  'Personal Branding',
  'Short-Form Video Editing & Reels Production',
  'Professional Shoots & Content Production',
  'Social Media Content Strategy',
  'Static Creatives & Social Media Design',
  'Meta Ads Management',
  'Content Planning',
  'Performance Review',
];

// Legal pages. TODO: have a lawyer review the wording before launch.
export const LEGAL_UPDATED = '12 October 2026';

export const LEGAL_PAGES = [
  { path: '/privacy-policy', title: 'Privacy Policy' },
  { path: '/terms', title: 'Terms of Service' },
  { path: '/disclaimer', title: 'Disclaimer' },
];

// Metadata for a secondary page: own title, description, canonical URL and share text.
export function pageMetadata({ path, title, description }) {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url: `${SITE_URL}${path}`,
      siteName: SITE_NAME,
      locale: 'en_IN',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${SITE_NAME}`,
      description,
    },
  };
}
