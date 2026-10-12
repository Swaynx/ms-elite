import { SITE_NAME, SEO_DESCRIPTION } from '../utils/site';

export default function manifest() {
  return {
    name: `${SITE_NAME} | Personal Branding & Content Agency`,
    short_name: SITE_NAME,
    description: SEO_DESCRIPTION,
    start_url: '/',
    display: 'standalone',
    background_color: '#0E0E10',
    theme_color: '#0E0E10',
    icons: [{ src: '/icon.svg', sizes: 'any', type: 'image/svg+xml' }],
  };
}
