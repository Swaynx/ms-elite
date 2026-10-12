import { SITE_URL, LEGAL_PAGES } from '../utils/site';

export default function sitemap() {
  return [
    {
      url: `${SITE_URL}/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...LEGAL_PAGES.map(({ path }) => ({
      url: `${SITE_URL}${path}`,
      lastModified: new Date('2026-10-12'),
      changeFrequency: 'yearly',
      priority: 0.3,
    })),
  ];
}
