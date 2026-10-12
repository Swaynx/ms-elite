import { SITE_URL } from '../utils/site';

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // Internal colour-palette comparison page, not for search results
      disallow: '/palette-preview',
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
