import { ImageResponse } from 'next/og';

// Home-screen icon for iPhone / iPad. Same monogram as app/icon.svg (placeholder until the client's logo arrives).
export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0E0E10',
        }}
      >
        <svg width="120" height="120" viewBox="0 0 64 64">
          <path d="M17 46V21l15 15 15-15v25" fill="none" stroke="#C9A55C" strokeWidth="6" strokeLinecap="square" />
        </svg>
      </div>
    ),
    size
  );
}
