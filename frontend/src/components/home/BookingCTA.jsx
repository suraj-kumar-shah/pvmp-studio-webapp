import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

export const BookingCTA = ({ setActivePage }) => {
  return (
    <section
      style={{
        position: 'relative',
        padding: '5rem 0 5.5rem',
        backgroundColor: '#ffffff',
        overflow: 'hidden'
      }}
    >
      <div className="container" style={{ maxWidth: '1100px', textAlign: 'center', position: 'relative', zIndex: 2 }}>
        
        {/* Simple & Clear 1-Line Headline */}
        <h2
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2rem, 3.2vw, 2.85rem)',
            color: '#111827',
            marginTop: 0,
            marginBottom: '0.65rem',
            lineHeight: 1.25,
            fontWeight: 500
          }}
        >
          Book Your Wedding Shoot With PVMP Studio
        </h2>

        {/* Simple & Understandable 1-Line Description */}
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '1rem',
            color: '#6b7280',
            lineHeight: 1.5,
            marginBottom: '2.2rem',
            maxWidth: '600px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}
        >
          Contact us to check date availability and book your photo & video package.
        </p>

        {/* Refined Professional Action Buttons */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <button
            onClick={() => {
              setActivePage('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              height: '46px',
              padding: '0 1.8rem',
              background: 'var(--accent-brand, #FF5500)',
              color: '#ffffff',
              border: 'none',
              borderRadius: '6px',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.85rem',
              fontWeight: 600,
              letterSpacing: '0.02em',
              cursor: 'pointer',
              boxShadow: '0 2px 6px rgba(255, 85, 0, 0.2)',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--accent-brand-hover, #E04B00)';
              e.currentTarget.style.transform = 'translateY(-1px)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(255, 85, 0, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--accent-brand, #FF5500)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 2px 6px rgba(255, 85, 0, 0.2)';
            }}
          >
            <Calendar size={16} />
            <span>Book Your Dates</span>
            <ArrowRight size={14} />
          </button>

          <button
            onClick={() => {
              setActivePage('packages');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '46px',
              padding: '0 1.8rem',
              background: '#ffffff',
              color: '#1f2937',
              border: '1px solid #d1d5db',
              borderRadius: '6px',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.85rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#9ca3af';
              e.currentTarget.style.background = '#f9fafb';
              e.currentTarget.style.color = '#111827';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#d1d5db';
              e.currentTarget.style.background = '#ffffff';
              e.currentTarget.style.color = '#1f2937';
            }}
          >
            <span>View Packages</span>
          </button>
        </div>

      </div>
    </section>
  );
};

export default BookingCTA;
