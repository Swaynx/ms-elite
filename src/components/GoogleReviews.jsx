'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, CheckCircle2, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { GoogleIcon } from './icons/CustomIcons';
import { getWhatsAppUrl } from '../utils/whatsapp';

export default function GoogleReviews() {
  const reviews = [
    {
      name: "Dr. A. Karthikeyan",
      role: "Medical Director & Clinic Founder",
      location: "Coimbatore",
      initial: "K",
      avatarBg: "#293E35",
      text: "Before working with Vijay, our reels had low engagement because we copied influencer trends that felt wrong for a doctor. Vijay gave our medical explanations a clean, trustworthy aesthetic that patients regularly compliment in our clinic."
    },
    {
      name: "Siddharth Menon",
      role: "Founder & Advisory Principal",
      location: "Chennai",
      initial: "S",
      avatarBg: "#E47752",
      text: "Vijay has a rare gift for listening to a complex 10-minute thesis and distilling it into a 50-second script that hits the exact pain point of our target founders. The video editing is razor sharp and turnaround is always on time."
    },
    {
      name: "Divya Natarajan",
      role: "Executive Leadership Coach & Author",
      location: "Chennai",
      initial: "D",
      avatarBg: "#4A6B5D",
      text: "The editing quality is superb. Quick turnaround, clean subtitles, and zero fluff. If you want reels that genuinely build authority and lead to high-value client inquiries, Vijay is the partner to hire."
    },
    {
      name: "Dr. Meera Sundaram",
      role: "Consultant Dermatologist & Aesthetician",
      location: "Madurai",
      initial: "M",
      avatarBg: "#C87A3E",
      text: "Patients come to consultations now already knowing my treatment philosophy from my Instagram reels. Vijay made filming so seamless that I only spend an hour a week on batch recording."
    },
    {
      name: "Rajesh V.",
      role: "Managing Partner, Commercial Realty",
      location: "Trichy",
      initial: "R",
      avatarBg: "#1F332A",
      text: "In real estate advisory, trust is everything. Vijay restructured how we explain property market trends on video. We now get qualified NRI investor inquiries directly via WhatsApp every week."
    },
    {
      name: "Anita Krishnan",
      role: "Chartered Accountant & Wealth Strategist",
      location: "Chennai",
      initial: "A",
      avatarBg: "#D96E49",
      text: "I was hesitant about video because tax and finance can easily sound dry. Vijay turned my case studies into engaging 60-second breakdowns. Our consultation calendar has never been this full."
    },
    {
      name: "Dr. R. Vignesh",
      role: "Orthopedic Surgeon & Sports Medicine",
      location: "Salem",
      initial: "V",
      avatarBg: "#5C4A3A",
      text: "Vijay's team handles everything from topic prompts to pacing and subtitles. The visual quality looks like a high-budget studio production, but requires almost none of my surgical hours."
    },
    {
      name: "S. Arvind Kumar",
      role: "B2B SaaS Founder & Angel Investor",
      location: "Bengaluru",
      initial: "A",
      avatarBg: "#385A4C",
      text: "Vijay understands positioning better than typical video editors. Every video clearly highlights our product thesis and founder story. It has directly unlocked advisory conversations and investor intros."
    }
  ];

  const totalOriginal = reviews.length;
  // Triple items array for seamless circular infinite transition
  const extendedReviews = [...reviews, ...reviews, ...reviews];

  const [visibleCount, setVisibleCount] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(totalOriginal);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);

  // Responsive cards per view
  useEffect(() => {
    const updateVisible = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1040) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };
    updateVisible();
    window.addEventListener('resize', updateVisible);
    return () => window.removeEventListener('resize', updateVisible);
  }, []);

  // 2.5-Second Smooth Auto Carousel
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev + 1);
    }, 2500);

    return () => clearInterval(interval);
  }, [isPaused]);

  // Seamless boundary wrap without visible jump
  const handleTransitionEnd = () => {
    if (currentIndex >= totalOriginal * 2) {
      setIsTransitioning(false);
      setCurrentIndex(currentIndex - totalOriginal);
    } else if (currentIndex < totalOriginal) {
      setIsTransitioning(false);
      setCurrentIndex(currentIndex + totalOriginal);
    }
  };

  const handleNext = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const handleDotClick = (idx) => {
    setIsTransitioning(true);
    setCurrentIndex(totalOriginal + idx);
  };

  // Touch Swipe Handlers for Mobile
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    setIsPaused(true);
  };

  const handleTouchEnd = (e) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 45) {
      handleNext();
    } else if (diff < -45) {
      handlePrev();
    }
    setIsPaused(false);
  };

  const activeDotIndex = currentIndex % totalOriginal;
  const gapPx = 20;

  return (
    <section id="reviews" className="section-padding google-reviews-section" aria-labelledby="google-reviews-title">
      <div className="container">
        {/* Google Trust Header (No Subtext as Requested) */}
        <div className="google-section-header">
          <div className="google-badge-pill">
            <GoogleIcon size={18} />
            <span className="google-badge-text">Google Reviews</span>
            <span className="google-badge-rating">5.0</span>
            <div className="google-stars-group" aria-label="5 out of 5 stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={13} fill="#F59E0B" stroke="#F59E0B" />
              ))}
            </div>
            <span className="google-review-count">(100% Verified)</span>
          </div>

          <h2 id="google-reviews-title" className="section-title">
            Trusted by Category Leaders.
          </h2>
        </div>

        {/* Smooth 2.5s Auto-Playing Carousel */}
        <div
          className="google-carousel-container"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="google-carousel-viewport">
            <div
              className="google-carousel-track"
              onTransitionEnd={handleTransitionEnd}
              style={{
                transform: `translateX(calc(-${currentIndex} * (100% + ${gapPx}px) / ${visibleCount}))`,
                transition: isTransitioning
                  ? 'transform 0.65s cubic-bezier(0.22, 1, 0.36, 1)'
                  : 'none'
              }}
            >
              {extendedReviews.map((rev, i) => (
                <div
                  key={`${rev.name}-${i}`}
                  className="google-carousel-slide"
                  style={{
                    flex: `0 0 calc((100% - ${(visibleCount - 1) * gapPx}px) / ${visibleCount})`,
                    maxWidth: `calc((100% - ${(visibleCount - 1) * gapPx}px) / ${visibleCount})`
                  }}
                >
                  <div className="google-card">
                    {/* Reviewer Header */}
                    <div className="google-card-header">
                      <div className="google-reviewer-info">
                        <div className="google-avatar" style={{ backgroundColor: rev.avatarBg }}>
                          {rev.initial}
                        </div>
                        <div>
                          <h3 className="google-reviewer-name">{rev.name}</h3>
                          <p className="google-reviewer-meta">{rev.role} · {rev.location}</p>
                        </div>
                      </div>
                      <div className="google-g-small" title="Google Verified Review">
                        <GoogleIcon size={16} />
                      </div>
                    </div>

                    {/* Rating Stars + Verified Only (Date Removed) */}
                    <div className="google-card-rating-row">
                      <div className="google-stars-group" aria-hidden="true">
                        {[...Array(5)].map((_, idx) => (
                          <Star key={idx} size={13} fill="#F59E0B" stroke="#F59E0B" />
                        ))}
                      </div>
                      <span className="google-verified-tag">
                        <CheckCircle2 size={13} strokeWidth={2.2} color="#34A853" />
                        <span>Verified</span>
                      </span>
                    </div>

                    {/* Review Body (No Takeaway Footer as Requested) */}
                    <p className="google-card-text">
                      “{rev.text}”
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls & Pagination Dots */}
          <div className="google-carousel-controls">
            <button
              onClick={handlePrev}
              className="google-carousel-nav-btn"
              aria-label="Previous Reviews"
            >
              <ChevronLeft size={20} strokeWidth={2.2} />
            </button>

            <div className="google-carousel-dots" role="tablist" aria-label="Review Carousel Dots">
              {reviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => handleDotClick(idx)}
                  className={`google-carousel-dot ${activeDotIndex === idx ? 'active' : ''}`}
                  aria-label={`Go to review ${idx + 1}`}
                  role="tab"
                  aria-selected={activeDotIndex === idx}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="google-carousel-nav-btn"
              aria-label="Next Reviews"
            >
              <ChevronRight size={20} strokeWidth={2.2} />
            </button>
          </div>
        </div>

        {/* WhatsApp Consultation Action */}
        <div style={{ textAlign: 'center', marginTop: '36px' }}>
          <a
            href={getWhatsAppUrl("Hi Vijay, I saw your Google client reviews and want to discuss working together.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            style={{ display: 'inline-flex', gap: '8px', fontSize: '0.875rem' }}
          >
            <span>Ask About Client Results on WhatsApp</span>
            <ArrowUpRight size={14} strokeWidth={2.2} />
          </a>
        </div>
      </div>
    </section>
  );
}
