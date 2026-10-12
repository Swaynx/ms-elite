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
    page.jsx          Section order for the home page
    globals.css       All styles
  components/         One component per section (Hero, ServiceList, CaseStudy, FAQ, …)
    icons/            Brand icons (official WhatsApp / Instagram marks via simple-icons)
  utils/whatsapp.js   WhatsApp number, prefilled messages, email, Instagram URL
public/
  images/             Section imagery
  robots.txt, sitemap.xml
```

Icons: [Phosphor](https://phosphoricons.com) for UI icons, [Simple Icons](https://simpleicons.org) for brand logos.

## Editing content

- **Contact details** (WhatsApp, email, Instagram): `src/utils/whatsapp.js`
- **Page title, description, structured data, domain**: `src/app/layout.jsx` (`SITE_URL`)
- **Section copy**: the matching component in `src/components/`

## Pending from the client

The site only uses content the client has confirmed. These are still to come:

- Founder name, biography and photos
- Approved work samples / portfolio links (the reel cards in `CaseStudy.jsx` are hidden behind `SHOW_REEL_SAMPLES`)
- Genuine client testimonials (a testimonials section will be added in `page.jsx` once real ones exist)
- LinkedIn and YouTube URLs
- Final confirmation of services and packages
- Production domain (currently `https://mselite.com` in `layout.jsx`, `robots.txt` and `sitemap.xml`)
