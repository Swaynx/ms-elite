'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ArrowUpRightIcon } from '@phosphor-icons/react/dist/ssr';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { WhatsAppIcon } from './icons/CustomIcons';

// Touch screens have no hover, so there the first tap on a service opens its image
// and a tap on the opened image starts the WhatsApp chat. Desktop is unchanged:
// hover previews the image, click opens WhatsApp.
const isTouchScreen = () => window.matchMedia('(hover: none)').matches;

export default function ServiceList() {
  const [openRows, setOpenRows] = useState(() => new Set(['01']));
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(hover: none)');
    const update = () => setIsTouch(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  const handleRowClick = (e, num) => {
    if (!isTouchScreen()) return;
    if (openRows.has(num) && e.target.closest('.service-reveal-drawer')) return;
    e.preventDefault();
    setOpenRows((prev) => {
      const next = new Set(prev);
      if (next.has(num)) next.delete(num);
      else next.add(num);
      return next;
    });
  };

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
              className={`service-row${openRows.has(item.num) ? ' is-open' : ''}`}
              role="listitem"
              aria-label={`${item.name} — Inquire via WhatsApp`}
              aria-expanded={isTouch ? openRows.has(item.num) : undefined}
              onClick={(e) => handleRowClick(e, item.num)}
            >
              <span className="service-toggle-icon" aria-hidden="true" />
              <div className="service-row-main">
                <span className="service-num">{item.num}</span>
                <h3 className="service-name">{item.name}</h3>
                <p className="service-desc">{item.desc}</p>
                <div className="service-arrow">
                  <ArrowUpRightIcon size={18} weight="bold" aria-hidden="true" />
                </div>
              </div>

              {/* Image drawer: opens on hover (desktop) or tap (touch) */}
              <div className="service-reveal-drawer" aria-hidden="true">
                <div className="service-reveal-inner">
                  <div className="service-reveal-media">
                    <Image
                      src={item.image}
                      alt={`${item.name} visual`}
                      className="service-reveal-img"
                      width={1200}
                      height={600}
                      sizes="(max-width: 991px) 92vw, 1080px"
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
