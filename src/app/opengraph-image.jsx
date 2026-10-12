import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

// Link-preview image for WhatsApp, Instagram, LinkedIn, X, etc. Generated at build time.
// If public/images/og-bg.jpg exists (1200x630 photo, no text), it is used as the background;
// otherwise the card falls back to a plain black-and-gold background.
export const alt = 'MS ELITE: Creating Lasting Impact Beyond Marketing. Personal branding and content agency in Chennai.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const GOLD = '#C9A55C';
const IVORY = '#F2EDE4';
const MUTED = '#B9B3A8';

async function loadBackground() {
  try {
    const file = await readFile(join(process.cwd(), 'public/images/og-bg.jpg'));
    return `data:image/jpeg;base64,${file.toString('base64')}`;
  } catch {
    return null;
  }
}

export default async function OpengraphImage() {
  const [extraBold, semiBold, background] = await Promise.all([
    readFile(join(process.cwd(), 'src/app/_og/manrope-800.woff')),
    readFile(join(process.cwd(), 'src/app/_og/manrope-600.woff')),
    loadBackground(),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          position: 'relative',
          backgroundColor: '#0E0E10',
          fontFamily: 'Manrope',
        }}
      >
        {background && (
          <img
            src={background}
            width={1200}
            height={630}
            style={{ position: 'absolute', top: 0, left: 0, width: 1200, height: 630, objectFit: 'cover' }}
          />
        )}

        {/* Darkens the left side for the text; leaves the right side of a photo visible */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: 1200,
            height: 630,
            display: 'flex',
            backgroundImage: background
              ? 'linear-gradient(90deg, rgba(10,10,11,0.96) 0%, rgba(10,10,11,0.88) 45%, rgba(10,10,11,0.35) 100%)'
              : 'radial-gradient(circle at 88% 12%, rgba(201,165,92,0.24) 0%, rgba(14,14,16,0) 55%)',
          }}
        />

        <div
          style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: '100%',
            height: '100%',
            padding: '64px 76px',
            border: '2px solid rgba(201,165,92,0.35)',
          }}
        >
          <div style={{ display: 'flex', fontSize: 22, fontWeight: 600, letterSpacing: 6, color: GOLD }}>
            CREATIVE AGENCY · CHENNAI
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', fontSize: 104, fontWeight: 800, letterSpacing: -2, color: IVORY, lineHeight: 1 }}>
              MS ELITE
            </div>
            <div style={{ display: 'flex', width: 96, height: 4, backgroundColor: GOLD, margin: '30px 0 26px' }} />
            <div style={{ display: 'flex', flexDirection: 'column', fontSize: 48, fontWeight: 800, letterSpacing: -1, lineHeight: 1.12 }}>
              <span style={{ color: IVORY }}>Creating Lasting Impact</span>
              <span style={{ color: GOLD }}>Beyond Marketing.</span>
            </div>
          </div>

          <div style={{ display: 'flex', fontSize: 23, fontWeight: 600, color: MUTED }}>
            Personal Branding · Reels &amp; Video Editing · Content Production · Meta Ads
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'Manrope', data: extraBold, weight: 800, style: 'normal' },
        { name: 'Manrope', data: semiBold, weight: 600, style: 'normal' },
      ],
    }
  );
}
