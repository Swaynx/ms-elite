'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ArrowUpRightIcon, MapPinIcon, SquaresFourIcon, FilmSlateIcon, PathIcon } from '@phosphor-icons/react/dist/ssr';
import { WhatsAppIcon } from './icons/CustomIcons';
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from '../utils/whatsapp';

export default function Hero() {
  const slides = [
    {
      id: 'studio',
      src: '/images/hero-studio-filming.jpg',
      alt: 'Executive video recording studio with cinema camera and warm acoustic panels'
    },
    {
      id: 'editing',
      src: '/images/hero-editing-widescreen.jpg',
      alt: 'Video editing suite with color grading monitor and audio waveforms'
    },
    {
      id: 'strategy',
      src: '/images/cta-bg.jpg',
      alt: 'Personal branding strategy framework and digital portfolio'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    // Keep the first slide still for visitors who ask for reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [isPaused, slides.length]);

  return (
    <section
      id="hero"
      className="hero-section"
      aria-labelledby="hero-title"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* 2-3 Image Background Slider */}
      <div className="hero-slider-bg-wrap" aria-hidden="true">
        {slides.map((slide, idx) => (
          <div
            key={slide.id}
            className={`hero-slider-slide ${idx === currentSlide ? 'active' : ''}`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={idx === 0}
              className="hero-slider-img"
              sizes="100vw"
            />
          </div>
        ))}
        {/* Soft, light translucent warm overlay that keeps images clearly visible while maintaining sharp text readability */}
        <div className="hero-slider-overlay" />
      </div>

      <div className="container hero-container-relative">
        <div className="hero-centered-content">
          {/* Clean, Unboxed Editorial Eyebrow (No pill badge, no blinking dot) */}
          <span className="hero-eyebrow-clean scroll-reveal-item">
            DIGITAL MARKETING · PERSONAL BRANDING · CONTENT PRODUCTION
          </span>

          {/* Short, Direct, SEO-Friendly Headline */}
          <h1 id="hero-title" className="hero-headline scroll-reveal-item">
            Creating Lasting Impact <br />
            <span className="hero-pop-highlight">Beyond Marketing.</span>
          </h1>

          {/* Simple, Direct Subtext */}
          <p className="hero-subtext scroll-reveal-item">
            MS ELITE is a digital marketing and creative agency helping professionals, coaches,
            healthcare experts, and business owners build a stronger digital presence through
            consistent, high-quality content.
          </p>

          {/* Action CTAs */}
          <div className="hero-actions scroll-reveal-item">
            <a
              href={getWhatsAppUrl(WHATSAPP_MESSAGES.hero)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary hero-btn-primary"
            >
              <WhatsAppIcon size={20} />
              <span>Let's Build Your Brand</span>
              <ArrowUpRightIcon size={16} weight="bold" aria-hidden="true" />
            </a>

            <a
              href={getWhatsAppUrl(WHATSAPP_MESSAGES.project)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary hero-btn-secondary"
            >
              <WhatsAppIcon size={18} />
              <span>Discuss Your Project</span>
              <ArrowUpRightIcon size={14} weight="bold" aria-hidden="true" />
            </a>
          </div>

          {/* 4 Proof / Experience Cards (2x2 Grid on Mobile, 4-Col on Desktop) */}
          <div className="hero-proof-grid scroll-reveal-item" role="region" aria-label="Key Proof & Experience">
            <div className="hero-proof-card">
              <div className="hero-proof-icon-wrap" aria-hidden="true">
                <MapPinIcon size={18} weight="duotone" aria-hidden="true" />
              </div>
              <div className="hero-proof-content">
                <div className="hero-proof-stat">Chennai</div>
                <div className="hero-proof-label">Tamil Nadu, India</div>
              </div>
            </div>

            <div className="hero-proof-card">
              <div className="hero-proof-icon-wrap" aria-hidden="true">
                <SquaresFourIcon size={18} weight="duotone" aria-hidden="true" />
              </div>
              <div className="hero-proof-content">
                <div className="hero-proof-stat">8 Services</div>
                <div className="hero-proof-label">Branding to Meta Ads</div>
              </div>
            </div>

            <div className="hero-proof-card">
              <div className="hero-proof-icon-wrap" aria-hidden="true">
                <FilmSlateIcon size={18} weight="duotone" aria-hidden="true" />
              </div>
              <div className="hero-proof-content">
                <div className="hero-proof-stat">Editor-Led</div>
                <div className="hero-proof-label">Video Editing Roots</div>
              </div>
            </div>

            <div className="hero-proof-card">
              <div className="hero-proof-icon-wrap" aria-hidden="true">
                <PathIcon size={18} weight="duotone" aria-hidden="true" />
              </div>
              <div className="hero-proof-content">
                <div className="hero-proof-stat">End-to-End</div>
                <div className="hero-proof-label">Strategy to Delivery</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
