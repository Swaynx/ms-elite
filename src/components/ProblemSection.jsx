import React from 'react';

export default function ProblemSection() {
  return (
    <section id="problem" className="problem-section" aria-labelledby="problem-title">
      <div className="container">
        <div className="problem-layout">
          <div className="problem-quote-col">
            <span className="mono-eyebrow" style={{ marginBottom: '16px' }}>THE REALITY</span>
            <h2 id="problem-title" className="problem-headline">
              Your Expertise <br />
              Isn’t The Problem.
              <span className="serif-part">How people see it is.</span>
            </h2>
          </div>

          <div className="problem-body-col">
            <p className="problem-lead">
              You can be excellent at what you do and still be difficult to discover,
              understand or remember.
            </p>

            <p className="problem-paragraph">
              Most professionals post inconsistently, share generic advice, or let editing feel like
              a massive daily burden. Others stay invisible because they don’t know what to say on camera.
            </p>

            <p className="problem-paragraph">
              Your content should do far more than just fill a social feed. It should clearly communicate
              your perspective, prove your credibility, and make the right clients reach out to work with you.
            </p>

            <div className="problem-card">
              <div className="problem-card-title">The Solution</div>
              <p className="problem-card-text">
                Turn your daily clinical, coaching, or business insights into engaging videos and reels
                that feel authentic to your voice—without you spending hours editing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
