import React from 'react';
import { Sparkles, Film, BookOpen, ShieldCheck } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import { BRAND_PILLARS } from '../../data/testimonialData';

const PILLAR_ICONS = {
  Sparkles,
  Film,
  BookOpen,
  ShieldCheck
};

export const CraftHighlights = () => {
  return (
    <section className="section" style={{ backgroundColor: '#ffffff', position: 'relative', overflow: 'hidden' }}>
      {/* Decorative Brand Ambient Glow */}
      <div
        style={{
          position: 'absolute',
          top: '30%',
          right: '5%',
          width: '450px',
          height: '450px',
          background: 'radial-gradient(circle, rgba(255, 85, 0, 0.05) 0%, rgba(255, 85, 0, 0) 70%)',
          filter: 'blur(50px)',
          pointerEvents: 'none'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ textAlign: 'center', maxWidth: '1100px', margin: '0 auto 3rem auto' }}>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2rem, 3.2vw, 2.85rem)',
              color: '#111827',
              fontWeight: 400,
              lineHeight: 1.2,
              marginBottom: '0.6rem'
            }}
          >
            Why Couples & Families Trust PVMP Studio
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '1rem',
              color: '#6b7280',
              lineHeight: 1.5,
              margin: 0
            }}
          >
            Dedicated to capturing authentic moments, 4K wedding films, and long-lasting photo albums.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '2rem'
          }}
        >
          {BRAND_PILLARS.map((pillar, idx) => {
            const IconComp = PILLAR_ICONS[pillar.icon] || Sparkles;
            return (
              <div
                key={idx}
                style={{
                  padding: '2.2rem',
                  background: '#ffffff',
                  border: '1px solid #e5e7eb',
                  borderRadius: '12px',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.04)'
                }}
                className="card-luxury"
              >
                <div
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '50%',
                    background: 'rgba(255, 85, 0, 0.08)',
                    border: '1px solid rgba(255, 85, 0, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-brand, #FF5500)',
                    marginBottom: '1.4rem'
                  }}
                >
                  <IconComp size={24} strokeWidth={1.75} />
                </div>

                <h3 style={{ fontSize: '1.25rem', color: '#111827', marginBottom: '0.65rem', fontWeight: 500, fontFamily: 'var(--font-serif)' }}>
                  {pillar.title}
                </h3>

                <p style={{ fontSize: '0.875rem', color: '#4b5563', lineHeight: 1.7, margin: 0 }}>
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CraftHighlights;
