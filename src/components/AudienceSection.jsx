import React from 'react';

export default function AudienceSection() {
  const groups = [
    {
      role: "Doctors & Medical Specialists",
      desc: "Educate patients, explain treatments clearly, and build a trusted public reputation in your specialty without sounding like a salesperson.",
      focus: "Patient Trust & Health Literacy"
    },
    {
      role: "Coaches & Consultants",
      desc: "Turn your coaching frameworks and client case studies into short-form video that attracts qualified inbound inquiries who already respect your methods.",
      focus: "Qualified Leads & Authority"
    },
    {
      role: "Founders & Business Owners",
      desc: "Put a face and a philosophy behind your company. Show behind-the-scenes decision making, industry opinions, and company culture to stand out.",
      focus: "Brand Equity & Industry Recall"
    }
  ];

  return (
    <section id="audience" className="section-padding" aria-labelledby="audience-title">
      <div className="container">
        <div className="section-header">
          <span className="mono-eyebrow">WHO IT IS FOR</span>
          <h2 id="audience-title" className="section-title">
            For People Who Have <br />
            Something Worth Saying.
          </h2>
          <p className="section-subtext">
            If your business depends on trust, your personal brand is part of the business.
            We work with people whose competence speaks for itself once properly presented.
          </p>
        </div>

        <div className="audience-grid">
          {groups.map((group) => (
            <div key={group.role} className="audience-block">
              <span className="audience-badge">{group.focus}</span>
              <h3 className="audience-role">{group.role}</h3>
              <p className="audience-copy">{group.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
