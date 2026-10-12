import React from 'react';
import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr';
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from '../utils/whatsapp';

export default function ProcessTimeline() {
  const steps = [
    {
      num: "01",
      title: "Discover",
      desc: "We understand your core expertise, your audience, what makes your business unique, and what commercial goals you want your personal brand to drive."
    },
    {
      num: "02",
      title: "Position",
      desc: "Define what you should be known for, the core ideas to emphasize, and the natural conversational tone that feels comfortable to you on camera."
    },
    {
      num: "03",
      title: "Plan",
      desc: "Build structured content pillars, reel formats, and recording outlines so you always know what to film without staring at a blank page."
    },
    {
      num: "04",
      title: "Create",
      desc: "You record quick talking-head clips; I handle full editing, audio cleanup, visual pacing, color, captions, and publishing-ready reels."
    },
    {
      num: "05",
      title: "Refine",
      desc: "Review which videos drive the most engagement, profile visits, and inbound inquiries—then double down on what works best."
    }
  ];

  return (
    <section id="process" className="section-padding process-section" aria-labelledby="process-title">
      <div className="container">
        <div className="process-layout">
          <div className="process-sticky">
            <span className="mono-eyebrow">THE PROCESS</span>
            <h2 id="process-title" className="section-title">
              From Expertise <br />
              To Consistent <br />
              Visibility.
            </h2>
            <p className="section-subtext" style={{ marginBottom: '28px' }}>
              A straightforward, sustainable workflow designed so you can maintain a high-quality personal brand without letting content take over your workweek.
            </p>

            <a
              href={getWhatsAppUrl(WHATSAPP_MESSAGES.hero)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <span>Discuss the Workflow</span>
              <ArrowUpRight size={16} weight="bold" />
            </a>
          </div>

          <div className="process-timeline" role="list">
            {steps.map((step) => (
              <div key={step.num} className="process-step" role="listitem">
                <div className="process-marker" aria-hidden="true"></div>
                <span className="process-num">PHASE {step.num}</span>
                <h3 className="process-step-title">{step.title}</h3>
                <p className="process-step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
