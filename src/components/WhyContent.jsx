import React from 'react';

export default function WhyContent() {
  const outcomes = [
    { title: "Attention", desc: "Get discovered by the exact clients looking for your help." },
    { title: "Trust", desc: "Show your real-world expertise before you ever jump on a call." },
    { title: "Recall", desc: "Stay top-of-mind so clients think of you first when they need help." },
    { title: "Conversations", desc: "Turn passive viewers into active inquiries and booked clients." }
  ];

  return (
    <section className="section-padding" aria-labelledby="why-content-title">
      <div className="container">
        <div className="section-header">
          <span className="mono-eyebrow">THE COMPOUND EFFECT</span>
          <h2 id="why-content-title" className="section-title">
            Your Content Should <br />
            Work While You Work.
          </h2>
          <p className="section-subtext">
            A well-structured personal brand doesn't just entertain—it builds long-term digital leverage for your business.
          </p>
        </div>

        <div className="why-content-grid">
          {outcomes.map((item) => (
            <div key={item.title} className="why-col">
              <h3 className="why-col-title">{item.title}</h3>
              <p className="why-col-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
