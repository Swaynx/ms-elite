'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, CheckCircle2, Sparkles, Target, Video, TrendingUp } from 'lucide-react';
import { StrategyBlueprintIcon, StudioCameraIcon, TimelineEditingIcon, ConversionGrowthIcon } from '../../components/icons/GrowthIcons';

export default function PalettePreviewPage() {
  const [selectedTheme, setSelectedTheme] = useState('linen');

  const themes = [
    {
      id: 'linen',
      name: 'Option 1: Warm Executive Linen',
      badge: 'Recommended · Most Welcoming',
      vibe: 'Warm, organic luxury, grounded, human, and prestigious. (Aesop / Pentagram style)',
      bg: '#F8F7F4',
      cardBg: '#FFFFFF',
      textPrimary: '#1A1816',
      textSecondary: '#5C5852',
      border: 'rgba(28, 25, 22, 0.08)',
      accent: '#FF5733', // Electric Terracotta Coral
      accentHover: '#E64420',
      accentBg: 'rgba(255, 87, 51, 0.12)',
      swatches: [
        { name: 'Canvas', hex: '#F8F7F4', border: '#E6E2D8' },
        { name: 'Card', hex: '#FFFFFF', border: '#E6E2D8' },
        { name: 'Espresso Ink', hex: '#1A1816' },
        { name: 'Warm Slate', hex: '#5C5852' },
        { name: 'Terracotta Pop', hex: '#FF5733' },
        { name: 'Warm Amber', hex: '#D97706' }
      ]
    },
    {
      id: 'platinum',
      name: 'Option 2: Studio Platinum & Midnight Navy',
      badge: 'Sharp · High-Tech Creative Studio',
      vibe: 'Bright, modern creative video production agency feel. (Ali Abdaal / Vercel style)',
      bg: '#F5F7FA',
      cardBg: '#FFFFFF',
      textPrimary: '#0F172A',
      textSecondary: '#475569',
      border: 'rgba(15, 23, 42, 0.08)',
      accent: '#2563EB', // Electric Royal Blue
      accentHover: '#1D4ED8',
      accentBg: 'rgba(37, 99, 235, 0.10)',
      popSecondary: '#FF4A26', // Sunset Fire
      swatches: [
        { name: 'Porcelain Canvas', hex: '#F5F7FA', border: '#E2E8F0' },
        { name: 'Card', hex: '#FFFFFF', border: '#E2E8F0' },
        { name: 'Midnight Navy', hex: '#0F172A' },
        { name: 'Cool Slate', hex: '#475569' },
        { name: 'Electric Cobalt', hex: '#2563EB' },
        { name: 'Sunset Fire Pop', hex: '#FF4A26' }
      ]
    },
    {
      id: 'charcoal',
      name: 'Option 3: Cashmere Charcoal & Apricot Gold',
      badge: 'Not Pitch Black · Cozy Cinematic',
      vibe: 'Warm dual-tone luxury, cinema-grade video atmosphere, warm and inviting. (MasterClass style)',
      bg: '#181A1F',
      cardBg: '#21242C',
      textPrimary: '#FAF8F5',
      textSecondary: '#A39E96',
      border: 'rgba(250, 248, 245, 0.09)',
      accent: '#F59E0B', // Apricot Gold
      accentHover: '#D97706',
      accentBg: 'rgba(245, 158, 11, 0.14)',
      swatches: [
        { name: 'Cashmere Charcoal', hex: '#181A1F' },
        { name: 'Warm Card', hex: '#21242C' },
        { name: 'Milk White Text', hex: '#FAF8F5' },
        { name: 'Sandstone Text', hex: '#A39E96' },
        { name: 'Apricot Gold Pop', hex: '#F59E0B' },
        { name: 'Ember Flare', hex: '#FF6B4A' }
      ]
    },
    {
      id: 'sage',
      name: 'Option 4: Executive Sage & Mineral Sand',
      badge: 'Calm High-Trust · Doctors & Leadership',
      vibe: 'Organic, restorative, calming authority. Especially loved by medical leaders. (Oura / BetterUp style)',
      bg: '#F5F5F0',
      cardBg: '#FFFFFF',
      textPrimary: '#131C18',
      textSecondary: '#4A5852',
      border: 'rgba(19, 28, 24, 0.08)',
      accent: '#E65C00', // Tangerine Copper Pop
      accentHover: '#CC5200',
      accentBg: 'rgba(230, 92, 0, 0.10)',
      popSecondary: '#059669', // Forest Emerald
      swatches: [
        { name: 'Mineral Sand', hex: '#F5F5F0', border: '#E5E5DF' },
        { name: 'Pure Card', hex: '#FFFFFF', border: '#E5E5DF' },
        { name: 'Deep Forest Ink', hex: '#131C18' },
        { name: 'Sage Slate', hex: '#4A5852' },
        { name: 'Tangerine Pop', hex: '#E65C00' },
        { name: 'Forest Emerald', hex: '#059669' }
      ]
    }
  ];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0E1017', color: '#FFFFFF', padding: '40px 24px 80px', fontFamily: 'var(--font-ui, sans-serif)' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
        {/* Top Bar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '32px', flexWrap: 'wrap', gap: '16px' }}>
          <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#9CA3AF', textDecoration: 'none', fontSize: '0.875rem', fontWeight: 600 }}>
            <ArrowLeft size={16} />
            <span>Back to Live Website</span>
          </Link>
          <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', color: '#FF5722', background: 'rgba(255, 87, 34, 0.12)', padding: '6px 14px', borderRadius: '999px' }}>
            COLOR PALETTE VISUAL COMPARISON
          </span>
        </div>

        {/* Heading */}
        <div style={{ marginBottom: '40px', maxWidth: '780px' }}>
          <h1 style={{ fontSize: 'clamp(2rem, 3.8vw, 3rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: '16px', letterSpacing: '-0.02em' }}>
            Visual Color Palette Comparison
          </h1>
          <p style={{ color: '#9CA3AF', fontSize: '1.0625rem', lineHeight: 1.6 }}>
            Here are the 4 high-end color schemes designed specifically for personal branding websites. Each option provides a welcoming, grounded, and prestigious aesthetic with a vibrant pop accent.
          </p>
        </div>

        {/* 4 Color Palette Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
          {themes.map((theme, idx) => (
            <div
              key={theme.id}
              style={{
                backgroundColor: '#151722',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '24px',
                padding: '36px',
                boxShadow: '0 12px 36px rgba(0, 0, 0, 0.35)'
              }}
            >
              {/* Header */}
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '14px', marginBottom: '24px' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#FFFFFF', margin: 0 }}>
                      {theme.name}
                    </h2>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, padding: '4px 10px', borderRadius: '6px', backgroundColor: 'rgba(255, 255, 255, 0.08)', color: '#D1D5DB' }}>
                      {theme.badge}
                    </span>
                  </div>
                  <p style={{ color: '#9CA3AF', fontSize: '0.9375rem', margin: 0 }}>
                    {theme.vibe}
                  </p>
                </div>

                {/* Color Swatches Strip */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                  {theme.swatches.map((swatch, sIdx) => (
                    <div key={sIdx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                      <div
                        style={{
                          width: '42px',
                          height: '42px',
                          borderRadius: '10px',
                          backgroundColor: swatch.hex,
                          border: swatch.border ? `2px solid ${swatch.border}` : '1px solid rgba(255, 255, 255, 0.15)',
                          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)'
                        }}
                        title={`${swatch.name}: ${swatch.hex}`}
                      />
                      <span style={{ fontSize: '0.625rem', color: '#9CA3AF', fontWeight: 600 }}>{swatch.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* LIVE MINI-SITE COMPONENT PREVIEW IN THIS THEME */}
              <div
                style={{
                  backgroundColor: theme.bg,
                  borderRadius: '18px',
                  padding: '36px 32px',
                  border: `1px solid ${theme.border}`,
                  color: theme.textPrimary,
                  transition: 'all 0.3s ease'
                }}
              >
                {/* Mini Hero Mockup */}
                <div style={{ maxWidth: '680px', margin: '0 auto 36px', textAlign: 'center' }}>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: '999px', backgroundColor: theme.accentBg, border: `1px solid ${theme.accent}33`, marginBottom: '16px' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: theme.accent }} />
                    <span style={{ fontSize: '0.6875rem', fontWeight: 800, letterSpacing: '0.12em', color: theme.accent, textTransform: 'uppercase' }}>
                      PERSONAL BRANDING · CONTENT STRATEGY
                    </span>
                  </div>

                  <h3 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 800, color: theme.textPrimary, lineHeight: 1.18, marginBottom: '12px' }}>
                    Turn Your Expertise Into Content That Builds Trust. <br />
                    <span style={{ color: theme.accent }}>And Brings In Clients.</span>
                  </h3>

                  <p style={{ fontSize: '0.875rem', color: theme.textSecondary, lineHeight: 1.6, marginBottom: '20px' }}>
                    MS ELITE helps coaches, doctors, founders, and business owners turn what they know into clear, high-retention video content that builds authority.
                  </p>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
                    <button
                      style={{
                        padding: '12px 24px',
                        borderRadius: '999px',
                        backgroundColor: theme.accent,
                        color: '#FFFFFF',
                        border: 'none',
                        fontWeight: 700,
                        fontSize: '0.875rem',
                        boxShadow: `0 6px 20px ${theme.accent}40`,
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}
                    >
                      <span>Talk on WhatsApp</span>
                      <ArrowUpRight size={14} />
                    </button>
                    <button
                      style={{
                        padding: '12px 22px',
                        borderRadius: '999px',
                        backgroundColor: theme.cardBg,
                        color: theme.textPrimary,
                        border: `1px solid ${theme.border}`,
                        fontWeight: 600,
                        fontSize: '0.875rem',
                        cursor: 'pointer'
                      }}
                    >
                      <span>See Selected Work</span>
                    </button>
                  </div>
                </div>

                {/* Mini Growth System Cards Mockup */}
                <div style={{ borderTop: `1px solid ${theme.border}`, paddingTop: '28px' }}>
                  <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                    <span style={{ fontSize: '0.6875rem', fontWeight: 800, letterSpacing: '0.12em', color: theme.accent, textTransform: 'uppercase' }}>
                      THE GROWTH SYSTEM
                    </span>
                    <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: theme.textPrimary, marginTop: '4px' }}>
                      Turn Knowledge Into Clients.
                    </h4>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '16px' }}>
                    {[
                      { num: '01', title: 'Positioning & Strategy', pill: '12-Month Blueprint', Icon: StrategyBlueprintIcon },
                      { num: '02', title: '60-Min Batch Filming', pill: 'Only 60 mins/week', Icon: StudioCameraIcon },
                      { num: '03', title: 'Video Editing', pill: 'Studio retention & pacing', Icon: TimelineEditingIcon },
                      { num: '04', title: 'Client Conversion', pill: 'Direct WhatsApp leads', Icon: ConversionGrowthIcon }
                    ].map((step, i) => (
                      <div
                        key={i}
                        style={{
                          backgroundColor: theme.cardBg,
                          borderRadius: '16px',
                          padding: '20px',
                          border: `1px solid ${theme.border}`,
                          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.04)',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'space-between'
                        }}
                      >
                        <div>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                            <span style={{ fontSize: '0.625rem', fontWeight: 800, padding: '2px 6px', borderRadius: '4px', backgroundColor: theme.accentBg, color: theme.accent }}>
                              PHASE {step.num}
                            </span>
                            <span style={{ fontSize: '0.75rem', fontWeight: 800, color: theme.accent }}>{step.num}</span>
                          </div>
                          <div style={{ marginBottom: '12px' }}>
                            <step.Icon size={38} />
                          </div>
                          <h5 style={{ fontSize: '0.9375rem', fontWeight: 700, color: theme.textPrimary, margin: '0 0 16px', lineHeight: 1.3 }}>
                            {step.title}
                          </h5>
                        </div>
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.6875rem', fontWeight: 600, color: theme.textSecondary, paddingTop: '10px', borderTop: `1px solid ${theme.border}` }}>
                          <CheckCircle2 size={13} color={theme.accent} />
                          <span>{step.pill}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
