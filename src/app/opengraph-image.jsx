import { ImageResponse } from 'next/og';

// Link-preview image for WhatsApp, Instagram, LinkedIn, X, etc. Generated at build time.
export const alt = 'MS ELITE: Creating Lasting Impact Beyond Marketing. Personal branding and content agency in Chennai.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const GOLD = '#C9A55C';
const IVORY = '#F2EDE4';
const MUTED = '#B9B3A8';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          backgroundColor: '#0E0E10',
          backgroundImage: 'radial-gradient(circle at 85% 15%, rgba(201,165,92,0.22) 0%, rgba(14,14,16,0) 55%)',
          border: `2px solid rgba(201,165,92,0.35)`,
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', fontSize: 24, letterSpacing: 6, color: GOLD }}>
          CREATIVE AGENCY · CHENNAI
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', fontSize: 120, letterSpacing: 4, color: IVORY, lineHeight: 1 }}>
            MS ELITE
          </div>
          <div style={{ display: 'flex', width: 120, height: 4, backgroundColor: GOLD, margin: '36px 0 30px' }} />
          <div style={{ display: 'flex', fontSize: 46, color: GOLD, lineHeight: 1.2 }}>
            Creating Lasting Impact Beyond Marketing.
          </div>
        </div>

        <div style={{ display: 'flex', fontSize: 26, color: MUTED }}>
          Personal Branding · Reels &amp; Video Editing · Content Production · Meta Ads
        </div>
      </div>
    ),
    size
  );
}
