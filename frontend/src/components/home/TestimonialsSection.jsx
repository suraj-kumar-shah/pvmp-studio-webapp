import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import { TESTIMONIALS } from '../../data/testimonialData';

export const TestimonialsSection = () => {
  return (
    <section className="section" style={{ backgroundColor: '#ffffff' }}>
      <div className="container">
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
            Loved by Couples & Families
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
            Real reviews and feedback from happy brides, grooms, and families across India and Nepal.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem'
          }}
        >
          {TESTIMONIALS.map((test) => (
            <div
              key={test.id}
              className="card-luxury"
              style={{
                padding: '2.2rem',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                background: '#ffffff',
                border: '1px solid #e5e7eb',
                borderRadius: '12px',
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.04)'
              }}
            >
              {/* Quote Icon */}
              <Quote
                size={36}
                color="var(--accent-brand, #FF5500)"
                style={{ opacity: 0.2, marginBottom: '0.8rem' }}
              />

              {/* Rating Stars */}
              <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1.2rem' }}>
                {[...Array(test.rating)].map((_, i) => (
                  <Star key={i} size={15} fill="#f59e0b" color="#f59e0b" />
                ))}
              </div>

              {/* Quote Text */}
              <p
                style={{
                  fontSize: '0.92rem',
                  color: '#374151',
                  lineHeight: 1.7,
                  fontStyle: 'italic',
                  marginBottom: '1.8rem',
                  flex: 1
                }}
              >
                "{test.quote}"
              </p>

              {/* Author Info */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', borderTop: '1px solid #f0f2f5', paddingTop: '1.2rem' }}>
                <img
                  src={test.image}
                  alt={test.name}
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '1.5px solid var(--accent-brand, #FF5500)'
                  }}
                />

                <div>
                  <h4 style={{ fontSize: '1rem', color: '#111827', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.35rem', fontFamily: 'var(--font-serif)' }}>
                    {test.name}
                    {test.verified && <CheckCircle2 size={14} color="var(--accent-brand, #FF5500)" />}
                  </h4>
                  <span style={{ fontSize: '0.75rem', color: 'var(--accent-brand, #FF5500)', display: 'block', fontWeight: 600 }}>
                    {test.event}
                  </span>
                  <span style={{ fontSize: '0.7rem', color: '#6b7280' }}>
                    Commissioned: {test.packageChosen}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
