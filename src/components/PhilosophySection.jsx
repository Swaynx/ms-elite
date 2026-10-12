import React from 'react';

export default function PhilosophySection() {
  const principles = [
    {
      num: "01",
      title: "Clarity",
      desc: "People should understand who you help and why your approach works in under 60 seconds."
    },
    {
      num: "02",
      title: "Consistency",
      desc: "A recognizable visual rhythm, clean audio, and steady weekly publishing cadence."
    },
    {
      num: "03",
      title: "Credibility",
      desc: "Demonstrate real clinical or business depth instead of chasing hollow viral trends."
    }
  ];

  return (
    <section className="section-padding philosophy-section" aria-labelledby="philosophy-title">
      <div className="container">
        <div>
          <span className="mono-eyebrow">PHILOSOPHY</span>
          <h2 id="philosophy-title" className="philosophy-headline">
            Posting More <br />
            Isn’t The Goal.
          </h2>
          <p className="philosophy-sub">
            Being known for the right thing is.
          </p>
        </div>

        <div className="philosophy-triplet">
          {principles.map((item) => (
            <div key={item.title} className="philosophy-item">
              <span className="philosophy-item-num">{item.num}</span>
              <h3 className="philosophy-item-title">{item.title}</h3>
              <p className="philosophy-item-text">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
