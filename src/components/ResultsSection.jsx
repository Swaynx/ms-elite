import React from 'react';

export default function ResultsSection() {
  return (
    <div className="results-strip" aria-label="Authentic Results Approach">
      <div className="container">
        <div className="results-grid">
          <div className="results-col">
            <div className="results-header">REAL CONTENT</div>
            <p className="results-text">
              Zero fake follower pods or engagement tricks. Every video and post is rooted in your real-world experience, patient cases, and client stories.
            </p>
          </div>

          <div className="results-col">
            <div className="results-header">REAL PEOPLE</div>
            <p className="results-text">
              Coaches, doctors, and business founders who care about dignity and professional respect, not sensationalist internet gimmicks.
            </p>
          </div>

          <div className="results-col">
            <div className="results-header">REAL CONVERSATIONS</div>
            <p className="results-text">
              The true metric of high-trust personal branding is qualified direct messages, referrals, and inbound client conversations that convert.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
