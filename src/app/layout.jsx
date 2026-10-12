import { Manrope, Instrument_Serif } from 'next/font/google';
import './globals.css';
import { SITE_URL, SITE_NAME, TAGLINE, SEO_TITLE, SEO_DESCRIPTION, SHARE_DESCRIPTION } from '../utils/site';

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

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SEO_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: SEO_DESCRIPTION,
  applicationName: SITE_NAME,
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: 'marketing',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  // The share image comes from app/opengraph-image.jsx (Next.js adds it automatically).
  openGraph: {
    title: `${SITE_NAME} | ${TAGLINE}`,
    description: SHARE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} | ${TAGLINE}`,
    description: SHARE_DESCRIPTION,
  },
};

export const viewport = {
  themeColor: '#0E0E10',
  colorScheme: 'dark',
};

// Runs before first paint so scroll-reveal items start hidden instead of flashing
// visible and then fading out on hydration. Skipped for reduced-motion visitors, and
// undone after 4s if ScrollObserver never mounts, so content can never stay hidden.
const revealScript = `(function(){var d=document.documentElement;try{if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches){d.classList.add('js-reveal-active');setTimeout(function(){if(!d.dataset.revealReady){d.classList.remove('js-reveal-active');}},4000);}}catch(e){}})();`;

import ScrollObserver from '../components/ScrollObserver';

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN" className={`${manrope.variable} ${instrumentSerif.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: revealScript }} />
      </head>
      <body>
        <ScrollObserver />
        {children}
      </body>
    </html>
  );
}
