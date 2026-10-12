'use client';

import React, { useEffect, useRef, useState } from 'react';

const SLIDE_MS = 3200;

// Rotating "Built for …" headline with story-style progress tabs.
// `items` come from the server with their icons already rendered:
// [{ id, title, short, icon: <svg element> }]
export default function AudienceRotator({ items }) {
  const [active, setActive] = useState(0);
  const [autoplay, setAutoplay] = useState(false);
  const [inView, setInView] = useState(false);
  const [paused, setPaused] = useState(false);
  const stageRef = useRef(null);

  useEffect(() => {
    // Auto-rotation only for visitors who allow motion; others use the tabs.
    setAutoplay(!window.matchMedia('(prefers-reduced-motion: reduce)').matches);

    const el = stageRef.current;
    if (!el || !('IntersectionObserver' in window)) {
      setInView(true);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      threshold: 0.3
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const count = items.length;
  const prev = (active - 1 + count) % count;
  const running = autoplay && inView && !paused;

  // The progress bar's CSS animation is the timer: it pauses with hover, focus and
  // off-screen for free, and advancing on animationend keeps bar and headline in sync.
  const handleFillEnd = (e) => {
    if (e.animationName === 'audFill') setActive((i) => (i + 1) % count);
  };

  return (
    <div
      ref={stageRef}
      className="proof-strip-header audience-stage"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <h2 id="audience-title" className="audience-title">
        <span className="audience-title-lead">Built for</span>
        <span className="audience-sr-only">{items.map((item) => item.title).join(', ')}.</span>
        <span className="audience-rotator" aria-hidden="true">
          {items.map(({ id, icon, title }, i) => {
            const state = i === active ? 'is-active' : i === prev ? 'is-prev' : 'is-next';
            return (
              <span key={id} className={`audience-phrase ${state}`}>
                <span className="audience-phrase-icon">{icon}</span>
                <span className="audience-phrase-text">{title}</span>
              </span>
            );
          })}
        </span>
      </h2>

      <div className="audience-tabs" role="group" aria-label="Choose who we work with">
        {items.map(({ id, title, short }, i) => {
          const isActive = i === active;
          return (
            <button
              key={id}
              type="button"
              className={`audience-tab${isActive ? ' is-active' : ''}`}
              onClick={() => setActive(i)}
              aria-label={`Show ${title}`}
              aria-pressed={isActive}
            >
              <span className="audience-tab-label">{short}</span>
              <span className="audience-tab-track">
                {isActive && (
                  <span
                    key={active}
                    className={`audience-tab-fill${autoplay ? ' is-running' : ' is-static'}`}
                    style={{
                      animationDuration: `${SLIDE_MS}ms`,
                      animationPlayState: running ? 'running' : 'paused'
                    }}
                    onAnimationEnd={autoplay ? handleFillEnd : undefined}
                  />
                )}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
