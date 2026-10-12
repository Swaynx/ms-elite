import React from 'react';

export default function InsightSection() {
  return (
    <section id="insight" className="insight-section" aria-labelledby="insight-title">
      <div className="container">
        <div className="insight-layout">
          <div className="insight-quote-column">
            <span className="mono-tag" style={{ marginBottom: '20px' }}>The Core Premise</span>
            <h2 id="insight-title" className="insight-headline">
              Being Good At <br />
              What You Do <br />
              Isn’t Enough.
            </h2>
            <div className="insight-annotation">
              Strategic Insight on Market Perception
            </div>
          </div>

          <div className="insight-body-column">
            <p className="insight-lead">
              You can hold fifteen years of relentless domain experience, build extraordinary companies,
              and still remain virtually invisible in the rooms where decisions are made.
            </p>

            <p className="insight-paragraph">
              The modern trap is believing that visibility requires relentless social media noise,
              hyperactive posting schedules, or chasing superficial viral trends. It doesn't.
            </p>

            <p className="insight-paragraph">
              The goal is not to post more. The goal is to make your genuine intellectual edge
              effortless to recognize, impossible to confuse, and simple for the right people to trust.
            </p>

            <div className="insight-box">
              <div className="insight-box-title">The Strategic Shift</div>
              <p className="insight-box-text">
                From broadcasting generic motivational aphorisms → to articulating a definitive point of view
                that establishes your category authority and attracts high-caliber opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
