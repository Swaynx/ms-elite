import { Manrope, Instrument_Serif } from 'next/font/google';
import './globals.css';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
});

const instrumentSerif = Instrument_Serif({
  weight: ['400'],
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-instrument',
  display: 'swap',
});

const SITE_URL = 'https://mselite.com'; // TODO: confirm production domain with client

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'MS ELITE | Digital Marketing & Creative Agency in Chennai',
  description: 'MS ELITE is a digital marketing and creative agency in Chennai helping professionals, coaches, healthcare experts and business owners build a stronger digital presence through consistent, high-quality content.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'MS ELITE | Digital Marketing & Creative Agency in Chennai',
    description: 'Creating Lasting Impact Beyond Marketing. Personal branding, content production, video editing and social media marketing.',
    url: SITE_URL,
    siteName: 'MS ELITE',
    images: [
      {
        url: '/images/hero-studio-filming.jpg',
        width: 1200,
        height: 630,
        alt: 'MS ELITE — Digital Marketing & Creative Agency',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MS ELITE | Digital Marketing & Creative Agency in Chennai',
    description: 'Creating Lasting Impact Beyond Marketing.',
    images: ['/images/hero-studio-filming.jpg'],
  },
};

const faqItems = [
  ['What does MS ELITE do?', 'MS ELITE is a digital marketing and creative agency focused on personal branding, professional content production, video editing, and social media marketing.'],
  ['Which services do you offer?', 'Personal branding, short-form video editing and reels production, professional shoots and content production, social media content strategy, static creatives and social media design, Meta Ads management, content planning, and performance review.'],
  ['Who do you work with?', 'Doctors and healthcare professionals, fitness and business coaches, founders and entrepreneurs, personal brands and influencers, and businesses that want consistent social media content.'],
  ['How does the process work?', 'We follow five stages: discovery, strategy, production, editing, and delivery.'],
  ['Where are you based?', 'MS ELITE is based in Chennai, Tamil Nadu, India.'],
  ['How do I get started?', 'Message us on WhatsApp at +91 80729 66016, email mselitecontact@gmail.com, or reach us on Instagram at @ms_elite_growth.'],
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfessionalService',
      '@id': `${SITE_URL}/#organization`,
      name: 'MS ELITE',
      slogan: 'Creating Lasting Impact Beyond Marketing.',
      description: 'MS ELITE is a creative agency focused on personal branding, professional content production, video editing, and social media marketing.',
      url: SITE_URL,
      email: 'mselitecontact@gmail.com',
      telephone: '+918072966016',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Chennai',
        addressRegion: 'Tamil Nadu',
        addressCountry: 'IN',
      },
      sameAs: ['https://www.instagram.com/ms_elite_growth/'],
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqItems.map(([name, text]) => ({
        '@type': 'Question',
        name,
        acceptedAnswer: { '@type': 'Answer', text },
      })),
    },
  ],
};

// Runs before first paint so scroll-reveal items start hidden instead of flashing
// visible and then fading out on hydration. Skipped for reduced-motion visitors, and
// undone after 4s if ScrollObserver never mounts, so content can never stay hidden.
const revealScript = `(function(){var d=document.documentElement;try{if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches){d.classList.add('js-reveal-active');setTimeout(function(){if(!d.dataset.revealReady){d.classList.remove('js-reveal-active');}},4000);}}catch(e){}})();`;

import ScrollObserver from '../components/ScrollObserver';

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${manrope.variable} ${instrumentSerif.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: revealScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <ScrollObserver />
        {children}
      </body>
    </html>
  );
}
