'use client';

import React from 'react';
import { ArrowUpRightIcon } from '@phosphor-icons/react/dist/ssr';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { WhatsAppIcon } from './icons/CustomIcons';

export default function ServiceList() {
  const services = [
    {
      num: "01",
      name: "Personal Branding",
      desc: "Shaping how you and your expertise show up online, so the right audience knows who you are and what you stand for.",
      query: "Hi MS ELITE, I'd like to discuss personal branding.",
      image: "/images/service-positioning.jpg"
    },
    {
      num: "02",
      name: "Short-Form Video Editing & Reels Production",
      desc: "Reels and short-form videos edited for social platforms and produced to match your brand.",
      query: "Hi MS ELITE, I'd like to discuss short-form video editing and reels production.",
      image: "/images/service-editing.jpg"
    },
    {
      num: "03",
      name: "Professional Shoots & Content Production",
      desc: "Planned shoots that turn your ideas and expertise into ready-to-use photo and video content.",
      query: "Hi MS ELITE, I'd like to discuss a professional shoot and content production.",
      image: "/images/service-production.jpg"
    },
    {
      num: "04",
      name: "Social Media Content Strategy",
      desc: "A clear direction for what to post, who it is for, and how it supports your business goals.",
      query: "Hi MS ELITE, I'd like to discuss a social media content strategy.",
      image: "/images/service-strategy.jpg"
    },
    {
      num: "05",
      name: "Static Creatives & Social Media Design",
      desc: "Posts, carousels and graphics designed to keep your feed consistent and recognisably yours.",
      query: "Hi MS ELITE, I'd like to discuss static creatives and social media design.",
      image: "/images/case-study-kairos.jpg"
    },
    {
      num: "06",
      name: "Meta Ads Management",
      desc: "Planning, setting up and managing ad campaigns across Facebook and Instagram.",
      query: "Hi MS ELITE, I'd like to discuss Meta Ads management.",
      image: "/images/service-multiplatform.jpg"
    },
    {
      num: "07",
      name: "Content Planning",
      desc: "Organised content calendars so your brand publishes consistently, week after week.",
      query: "Hi MS ELITE, I'd like to discuss content planning.",
      image: "/images/cta-bg.jpg"
    },
    {
      num: "08",
      name: "Performance Review",
      desc: "Regular reviews of how your content and campaigns perform, to guide what comes next.",
      query: "Hi MS ELITE, I'd like to know more about your performance reviews.",
      image: "/images/service-ai-workflow.jpg"
    }
  ];

  return (
    <section id="what-we-do" className="section-padding services-section" aria-labelledby="what-we-do-title">
      <div className="container">
        <div className="section-header">
          <span className="mono-eyebrow">WHAT WE DO</span>
          <h2 id="what-we-do-title" className="section-title">
            Build Your Personal Brand.
          </h2>
          <p className="section-subtext">
            Personal branding, content production, video editing and social media marketing, built around your expertise, your audience and your goals.
          </p>
        </div>

        <div className="services-list" role="list">
          {services.map((item) => (
            <a
              key={item.num}
              href={getWhatsAppUrl(item.query)}
              target="_blank"
              rel="noopener noreferrer"
              className="service-row"
              role="listitem"
              aria-label={`${item.name} — Inquire via WhatsApp`}
            >
              <div className="service-row-main">
                <span className="service-num">{item.num}</span>
                <h3 className="service-name">{item.name}</h3>
                <p className="service-desc">{item.desc}</p>
                <div className="service-arrow">
                  <ArrowUpRightIcon size={18} weight="bold" aria-hidden="true" />
                </div>
              </div>

              {/* Smooth Expanding Hover Image Reveal */}
              <div className="service-reveal-drawer" aria-hidden="true">
                <div className="service-reveal-inner">
                  <div className="service-reveal-media">
                    <img
                      src={item.image}
                      alt={`${item.name} visual`}
                      className="service-reveal-img"
                      loading="lazy"
                    />
                    <div className="service-reveal-overlay">
                      <span className="service-reveal-tag">Phase {item.num} Visual</span>
                      <span className="service-reveal-action">
                        <WhatsAppIcon size={13} />
                        <span>Discuss on WhatsApp</span>
                        <ArrowUpRightIcon size={14} weight="bold" aria-hidden="true" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
