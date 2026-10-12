# MS ELITE — Website

Website for **MS ELITE**, a digital marketing & creative agency in Chennai, Tamil Nadu.
_Creating Lasting Impact Beyond Marketing._

Built with Next.js 15 (App Router) and React 19. Single-page site; all enquiries go to WhatsApp.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## Project structure

```
src/
  app/
    layout.jsx        Metadata, structured data (JSON-LD), fonts
    opengraph-image.jsx  Link-preview image (WhatsApp, Instagram, LinkedIn…); add public/images/og-bg.jpg for a photo background
    icon.svg, apple-icon.jsx, manifest.js  Favicon, iPhone icon, web app manifest
    robots.js, sitemap.js  Generated robots.txt and sitemap.xml
    privacy-policy/, terms/, disclaimer/  Legal pages
    page.jsx          Section order for the home page
    globals.css       All styles
  components/         One component per section (Hero, ServiceList, CaseStudy, FAQ, …)
    icons/            Brand icons (official WhatsApp / Instagram marks via simple-icons)
  utils/whatsapp.js   WhatsApp number, prefilled messages, email, Instagram URL
  utils/site.js       Domain, SEO title/description, service list
  utils/faqs.js       FAQ content (used by the FAQ section and its structured data)
  utils/structuredData.js  Home page JSON-LD (business, services, FAQ)
public/
  images/             Section imagery
```

Icons: [Phosphor](https://phosphoricons.com) for UI icons, [Simple Icons](https://simpleicons.org) for brand logos.

## Editing content

- **Contact details** (WhatsApp, email, Instagram): `src/utils/whatsapp.js`
- **Domain, page title, description**: `src/utils/site.js`
- **Structured data (JSON-LD)**: `src/utils/structuredData.js`
- **Client result videos**: `RESULT_VIDEOS` in `src/components/VideoResults.jsx` (placeholders show until it has entries)
- **Legal pages**: `src/app/privacy-policy`, `src/app/terms`, `src/app/disclaimer` (date in `LEGAL_UPDATED`, `src/utils/site.js`)
- **FAQ questions and answers**: `src/utils/faqs.js`
- **Section copy**: the matching component in `src/components/`

## Pending from the client

The site only uses content the client has confirmed. These are still to come:

- Founder name, biography and photos
- Approved client result videos (with each client's permission)
- Approved work samples / portfolio links (the reel cards in `CaseStudy.jsx` are hidden behind `SHOW_REEL_SAMPLES`)
- Genuine client testimonials (a testimonials section will be added in `page.jsx` once real ones exist)
- LinkedIn and YouTube URLs
- Final confirmation of services and packages
- Production domain: the site uses Vercel's production URL automatically (`src/utils/site.js`); connect the custom domain in Vercel when it's ready
- A logo file (the favicon is a placeholder gold "M" monogram)
- Legal review of the Privacy Policy, Terms and Disclaimer
