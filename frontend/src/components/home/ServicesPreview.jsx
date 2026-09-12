import React from 'react';
import { Camera, Heart, Film, BookOpen, Sparkles, HardDrive, UserCheck, Award, ArrowRight } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import { SERVICES } from '../../data/servicesData';
import { useCart } from '../../context/CartContext';

const ICON_MAP = {
  Camera,
  Heart,
  Film,
  BookOpen,
  Sparkles,
  HardDrive,
  UserCheck,
  Award
};

export const ServicesPreview = ({ setActivePage }) => {
  const { formatPrice } = useCart();

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
            Our Photography & Video Services
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
            Professional wedding photography, 4K video shoots, drone coverage, and custom photo albums.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1.8rem',
            marginBottom: '3rem'
          }}
        >
          {SERVICES.map((srv) => {
            const IconComp = ICON_MAP[srv.iconName] || Camera;
            return (
              <div
                key={srv.id}
                className="card-luxury"
                style={{
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  background: '#ffffff',
                  border: '1px solid #e5e7eb',
                  borderRadius: '12px',
                  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.04)'
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '8px',
                    background: 'rgba(255, 85, 0, 0.08)',
                    border: '1px solid rgba(255, 85, 0, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-brand, #FF5500)',
                    marginBottom: '1.25rem'
                  }}
                >
                  <IconComp size={22} strokeWidth={1.8} />
                </div>

                <h3 style={{ fontSize: '1.2rem', color: '#111827', marginBottom: '0.4rem', fontWeight: 500, fontFamily: 'var(--font-serif)' }}>
                  {srv.title}
                </h3>
                <span style={{ fontSize: '0.75rem', color: 'var(--accent-brand, #FF5500)', fontWeight: 600, marginBottom: '0.85rem' }}>
                  {srv.subtitle}
                </span>

                <p style={{ fontSize: '0.85rem', color: '#4b5563', lineHeight: 1.6, marginBottom: '1.5rem', flex: 1 }}>
                  {srv.description}
                </p>

                <div style={{ borderTop: '1px solid #f0f2f5', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <span style={{ fontSize: '0.68rem', color: '#6b7280', textTransform: 'uppercase', display: 'block', fontWeight: 600 }}>
                      Starting At
                    </span>
                    <span style={{ fontFamily: 'var(--font-sans)', fontSize: '1.1rem', fontWeight: 700, color: '#111827' }}>
                      {formatPrice(srv.startingPrice)}
                    </span>
                  </div>

                  <button
                    onClick={() => {
                      setActivePage('services');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    style={{ color: 'var(--accent-brand, #FF5500)', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.3rem', fontWeight: 600 }}
                  >
                    <span>Details</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div style={{ textAlign: 'center' }}>
          <button
            onClick={() => {
              setActivePage('services');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="btn-primary"
            style={{ padding: '0.9rem 2.5rem' }}
          >
            <span>Explore Complete Services & Deliverables Guide</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
