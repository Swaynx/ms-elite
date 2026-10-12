import React from 'react';
import { PlayIcon } from '@phosphor-icons/react/dist/ssr';

// Client result videos. Add one entry per video once the client approves it for the website.
// Put files in /public/videos (MP4, vertical 9:16, ideally under 10 MB) and a poster frame in /public/images.
// Example:
// {
//   client: 'Physiora',
//   category: 'Healthcare',
//   title: 'Physiotherapy reels series',
//   result: 'Short, factual line about the result the client has approved',
//   src: '/videos/physiora.mp4',
//   poster: '/images/physiora-poster.jpg',
// },
const RESULT_VIDEOS = [];

// Shown in place of videos until the client sends approved ones.
const PLACEHOLDERS = ['Healthcare', 'Coaching', 'Founder Brand'];

export default function VideoResults() {
  const hasVideos = RESULT_VIDEOS.length > 0;

  return (
    <section id="results" className="section-padding results-section" aria-labelledby="results-title">
      <div className="container">
        <div className="section-header">
          <span className="mono-eyebrow">CLIENT RESULTS</span>
          <h2 id="results-title" className="section-title">
            The Work, <br />
            On Screen.
          </h2>
          <p className="section-subtext">
            {hasVideos
              ? 'Real reels and stories from brands we create content for.'
              : 'Client videos and results will be shared here, with each client’s approval.'}
          </p>
        </div>

        <div className="results-grid">
          {hasVideos
            ? RESULT_VIDEOS.map((video) => (
                <article key={video.src} className="work-card-vertical results-card">
                  <div className="work-reel-thumb-wrap">
                    <video
                      className="work-reel-thumb"
                      src={video.src}
                      poster={video.poster}
                      controls
                      playsInline
                      preload="none"
                      aria-label={`${video.client}: ${video.title}`}
                    />
                  </div>
                  <div className="work-card-body">
                    <span className="work-meta-tag">{video.category}</span>
                    <h3 className="work-card-title">{video.title}</h3>
                    {video.result && <p className="work-card-desc">{video.result}</p>}
                    <p className="results-client">{video.client}</p>
                  </div>
                </article>
              ))
            : PLACEHOLDERS.map((category) => (
                <div key={category} className="work-card-vertical results-card results-card-placeholder">
                  <div className="work-reel-thumb-wrap results-placeholder-frame" aria-hidden="true">
                    <span className="results-play">
                      <PlayIcon size={22} weight="fill" />
                    </span>
                  </div>
                  <div className="work-card-body">
                    <span className="work-meta-tag">{category}</span>
                    <p className="work-card-title">Client video coming soon</p>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
}
