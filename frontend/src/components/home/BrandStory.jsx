import React, { useState } from 'react';
import { ArrowRight, Sparkles, Check, Award, Camera, Film, BookOpen } from 'lucide-react';

export const BrandStory = ({ setActivePage }) => {
  return (
    <section 
      style={{ 
        backgroundColor: '#ffffff', 
        padding: '5.5rem 0 6rem',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div className="container" style={{ maxWidth: '1240px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '4rem',
            alignItems: 'center'
          }}
        >
          {/* Left: Luxury Editorial Arched-Top Single Image Frame */}
          <div style={{ position: 'relative' }}>
            <div
              style={{
                borderRadius: '200px 200px 20px 20px',
                overflow: 'hidden',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.08)',
                position: 'relative',
                aspectRatio: '4/5',
                backgroundColor: '#f3f4f6',
                border: '1px solid #f0f2f5'
              }}
            >
              <img
                src="./other-image/image4.webp"
                alt="PVMP Studio founder with camera"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%' }}
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.src = './other-image/image4.webp';
                }}
              />
            </div>
          </div>

          {/* Right: Refined Editorial Typography & Pillars */}
          <div style={{ paddingLeft: '0.5rem' }}>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.78rem',
                fontWeight: 700,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--accent-brand, #FF5500)',
                display: 'block',
                marginBottom: '0.8rem'
              }}
            >
              Studio Philosophy
            </span>

            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.1rem, 3.8vw, 3.2rem)',
                fontWeight: 400,
                color: '#111827',
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
                margin: '0 0 1.25rem 0'
              }}
            >
              We Don’t Just Take Photos. <br />
              <span style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', color: 'var(--accent-brand, #FF5500)' }}>
                We Craft Family Legacies.
              </span>
            </h2>

            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '1rem',
                color: '#4b5563',
                lineHeight: 1.7,
                marginBottom: '2rem'
              }}
            >
              Rooted in authentic emotion and timeless storytelling. We blend natural editorial portraiture with cinematic 4K films across wedding celebrations in India and Nepal.
            </p>

            {/* 3 Luxury Pillars */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}>
              
              {/* Pillar 1 */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.1rem' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.2rem',
                    fontWeight: 700,
                    color: 'var(--accent-brand, #FF5500)',
                    lineHeight: 1
                  }}
                >
                  01
                </span>
                <div>
                  <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', fontWeight: 700, color: '#111827', margin: '0 0 0.2rem' }}>
                    Cinema-Grade 4K Optics
                  </h4>
                  <p style={{ margin: 0, fontSize: '0.86rem', color: '#6b7280', lineHeight: 1.5 }}>
                    State-of-the-art camera sensors and cinema prime glass delivering filmic tones and rich color rendering.
                  </p>
                </div>
              </div>

              {/* Pillar 2 */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.1rem' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.2rem',
                    fontWeight: 700,
                    color: 'var(--accent-brand, #FF5500)',
                    lineHeight: 1
                  }}
                >
                  02
                </span>
                <div>
                  <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', fontWeight: 700, color: '#111827', margin: '0 0 0.2rem' }}>
                    Handcrafted Italian Leather Albums
                  </h4>
                  <p style={{ margin: 0, fontSize: '0.86rem', color: '#6b7280', lineHeight: 1.5 }}>
                    Master flush-mount albums bound in genuine Italian leather with lay-flat archival pages guaranteed for generations.
                  </p>
                </div>
              </div>

              {/* Pillar 3 */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.1rem' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.2rem',
                    fontWeight: 700,
                    color: 'var(--accent-brand, #FF5500)',
                    lineHeight: 1
                  }}
                >
                  03
                </span>
                <div>
                  <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', fontWeight: 700, color: '#111827', margin: '0 0 0.2rem' }}>
                    Unobtrusive Candid Presence
                  </h4>
                  <p style={{ margin: 0, fontSize: '0.86rem', color: '#6b7280', lineHeight: 1.5 }}>
                    Capturing sacred rituals, heartfelt tears, and joyful laughter naturally without awkward artificial staging.
                  </p>
                </div>
              </div>

            </div>

            {/* Signature Brand Color Luxury CTA Button (No Black Background) */}
            <button
              onClick={() => {
                setActivePage('about');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.85rem 2rem',
                borderRadius: '8px',
                background: 'var(--accent-brand, #FF5500)',
                color: '#ffffff',
                border: 'none',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.86rem',
                fontWeight: 700,
                letterSpacing: '0.03em',
                cursor: 'pointer',
                transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                boxShadow: '0 4px 14px rgba(255, 85, 0, 0.25)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--accent-brand-hover, #E04B00)';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(255, 85, 0, 0.35)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--accent-brand, #FF5500)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 14px rgba(255, 85, 0, 0.25)';
              }}
            >
              <span>Explore Our Story & Philosophy</span>
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
