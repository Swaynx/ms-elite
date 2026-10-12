import React from 'react';
import {
  StethoscopeIcon,
  BarbellIcon,
  RocketLaunchIcon,
  SparkleIcon,
  StorefrontIcon,
  UserFocusIcon,
  FilmSlateIcon,
  CameraIcon,
  CompassIcon,
  PaintBrushIcon,
  MegaphoneIcon,
  CalendarCheckIcon,
  ChartLineUpIcon,
  StarFourIcon
} from '@phosphor-icons/react/dist/ssr';
import AudienceRotator from './AudienceRotator';

// Who MS ELITE works with (client brief: Target Clients)
const audiences = [
  { id: 'healthcare', icon: StethoscopeIcon, title: 'Doctors & Healthcare Professionals', short: 'Healthcare' },
  { id: 'coaches', icon: BarbellIcon, title: 'Fitness & Business Coaches', short: 'Coaches' },
  { id: 'founders', icon: RocketLaunchIcon, title: 'Founders & Entrepreneurs', short: 'Founders' },
  { id: 'creators', icon: SparkleIcon, title: 'Personal Brands & Influencers', short: 'Creators' },
  { id: 'business', icon: StorefrontIcon, title: 'Businesses Seeking Consistent Content', short: 'Businesses' }
];

// What MS ELITE delivers (client brief: Services)
const services = [
  { id: 'branding', icon: UserFocusIcon, title: 'Personal Branding' },
  { id: 'reels', icon: FilmSlateIcon, title: 'Short-Form Video Editing & Reels' },
  { id: 'shoots', icon: CameraIcon, title: 'Professional Shoots & Content Production' },
  { id: 'strategy', icon: CompassIcon, title: 'Social Media Content Strategy' },
  { id: 'design', icon: PaintBrushIcon, title: 'Static Creatives & Social Media Design' },
  { id: 'ads', icon: MegaphoneIcon, title: 'Meta Ads Management' },
  { id: 'planning', icon: CalendarCheckIcon, title: 'Content Planning' },
  { id: 'review', icon: ChartLineUpIcon, title: 'Performance Review' }
];

const TAGLINE = 'Creating Lasting Impact Beyond Marketing';

// A tape holds two identical halves so translateX(-50%) loops seamlessly.
function Tape({ variant, duration, reverse = false, children }) {
  return (
    <div className={`svc-tape svc-tape-${variant}`}>
      <div
        className={`svc-tape-track${reverse ? ' svc-tape-track-reverse' : ''}`}
        style={{ animationDuration: `${duration}s` }}
        aria-hidden="true"
      >
        <div className="svc-tape-half">{children}</div>
        <div className="svc-tape-half">{children}</div>
      </div>
    </div>
  );
}

// Server component: icons render here, so only the small rotator ships as client JS.
export default function TrustStrip() {
  const rotatorItems = audiences.map(({ id, icon: Icon, title, short }) => ({
    id,
    title,
    short,
    icon: <Icon weight="duotone" />
  }));

  // Services listed twice per tape half so each half overflows even ultra-wide screens
  const serviceItems = [...services, ...services].map(({ id, icon: Icon, title }, i) => (
    <span key={`${id}-${i}`} className="svc-tape-item">
      <Icon size={18} weight="duotone" className="svc-tape-icon" />
      <span>{title}</span>
      <StarFourIcon size={12} weight="fill" className="svc-tape-star" />
    </span>
  ));

  const taglineItems = Array.from({ length: 10 }, (_, i) => (
    <span key={i} className="svc-tape-item">
      <span>{TAGLINE}</span>
      <StarFourIcon size={10} weight="fill" className="svc-tape-star" />
    </span>
  ));

  return (
    <section className="proof-strip-section audience-showcase" aria-labelledby="audience-title">
      <AudienceRotator items={rotatorItems} />

      {/* Accessible, non-moving list of the services shown on the tape */}
      <ul className="audience-sr-only" aria-label="What we do">
        {services.map((s) => (
          <li key={s.id}>{s.title}</li>
        ))}
      </ul>

      <div className="svc-tapes">
        <Tape variant="back" duration={110} reverse>
          {taglineItems}
        </Tape>
        <Tape variant="front" duration={140}>
          {serviceItems}
        </Tape>
      </div>
    </section>
  );
}
