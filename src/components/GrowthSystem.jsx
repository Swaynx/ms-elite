'use client';

import React from 'react';
import { ArrowUpRightIcon } from '@phosphor-icons/react/dist/ssr';
import { WhatsAppIcon } from './icons/CustomIcons';
import {
  StrategyBlueprintIcon,
  StudioCameraIcon,
  TimelineEditingIcon,
  ConversionGrowthIcon
} from './icons/GrowthIcons';
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from '../utils/whatsapp';

export default function GrowthSystem() {
  const steps = [
    {
      num: "01",
      icon: StrategyBlueprintIcon,
      title: "Discovery & Strategy",
      highlight: "We learn about you, your audience and your goals, then plan your content direction."
    },
    {
      num: "02",
      icon: StudioCameraIcon,
      title: "Production",
      highlight: "Professional shoots and content creation, from video to static creatives."
    },
    {
      num: "03",
      icon: TimelineEditingIcon,
      title: "Editing",
      highlight: "Every reel and creative is edited, designed and refined to match your brand."
    },
    {
      num: "04",
      icon: ConversionGrowthIcon,
      title: "Delivery & Review",
      highlight: "Content delivered ready to publish, with performance reviewed to guide what comes next."
    }
  ];

  return (
    <section id="system" className="section-padding growth-system-section" aria-labelledby="system-title">
      <div className="container">
        {/* Section Header (Clean, unboxed, zero blinking dots) */}
        <div className="growth-section-header">
          <span className="growth-eyebrow-clean">OUR PROCESS</span>
          <h2 id="system-title" className="section-title">
            How We Build Your Brand.
          </h2>
          <p className="section-subtext">
            Discovery, strategy, production, editing and delivery: one clear process from first conversation to published content.
          </p>
        </div>

        {/* Cardless, Open Editorial Layout with Large Icons & Headings Down Below */}
        <div className="growth-steps-row" role="list">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === steps.length - 1;
            return (
              <div key={step.num} className="growth-step-col" role="listitem">
                {/* Step Number */}
                <div className="growth-step-num-wrap">
                  <span className="growth-step-num">{step.num}</span>
                </div>

                {/* Large, Prominent Illustrative Icon with Inter-Step Connector */}
                <div className="growth-step-icon-row">
                  <div className="growth-step-icon-wrap" aria-hidden="true">
                    <Icon size={80} />
                  </div>
                  {!isLast && (
                    <div className="growth-step-connector" aria-hidden="true">
                      <span className="growth-connector-line"></span>
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="growth-connector-arrow">
                        <path d="M3 2L6.5 5L3 8" stroke="var(--accent)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  )}
                </div>

                {/* Heading Down Below */}
                <h3 className="growth-step-heading">{step.title}</h3>

                {/* Clean, Unboxed Description */}
                <p className="growth-step-desc">{step.highlight}</p>
              </div>
            );
          })}
        </div>

        {/* Direct Action CTA */}
        <div className="growth-cta-wrap">
          <a
            href={getWhatsAppUrl(WHATSAPP_MESSAGES.hero)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary growth-action-btn"
          >
            <WhatsAppIcon size={20} />
            <span>Let's Build Your Brand</span>
            <ArrowUpRightIcon size={16} weight="bold" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
