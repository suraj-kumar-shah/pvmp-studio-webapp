import React, { useState } from 'react';
import { ArrowLeft, MapPin, Calendar, Users, Camera, Film, Clock, Quote, Sparkles, Eye, ArrowRight } from 'lucide-react';
import Badge from '../components/common/Badge';
import LightboxModal from '../components/common/LightboxModal';
import BookingCTA from '../components/home/BookingCTA';
import { PORTFOLIO_PROJECTS } from '../data/portfolioData';

export const PortfolioDetails = ({ projectId, setActivePage, setSelectedProjectId }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const project = PORTFOLIO_PROJECTS.find(p => p.id === projectId) || PORTFOLIO_PROJECTS[0];

  const galleryImages = project.gallery || [
    { url: project.coverImage, title: project.title, caption: project.tagline }
  ];

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div style={{ paddingTop: 'var(--header-height)', backgroundColor: '#ffffff' }}>
      {/* Top Back Navigation Bar */}
      <div
        style={{
          padding: '1.25rem 0',
          backgroundColor: '#ffffff',
          borderBottom: '1px solid #f0f2f5'
        }}
      >
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <button
            onClick={() => {
              setActivePage('portfolio');
              setSelectedProjectId(null);
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: 'var(--accent-brand, #FF5500)',
              fontSize: '0.85rem',
              fontWeight: 600
            }}
          >
            <ArrowLeft size={16} />
            <span>Back to Portfolio Collection</span>
          </button>

          <Badge variant="gold">{project.categoryLabel}</Badge>
        </div>
      </div>

      {/* Project Hero Header */}
      <section
        style={{
          position: 'relative',
          paddingTop: '3.5rem',
          paddingBottom: '4rem',
          backgroundColor: '#ffffff'
        }}
      >
        <div className="container">
          <div style={{ maxWidth: '900px', marginBottom: '2.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', color: 'var(--accent-brand, #FF5500)', fontSize: '0.85rem', marginBottom: '0.75rem', fontWeight: 600 }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <MapPin size={15} />
                {project.location}
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Calendar size={15} />
                {project.date}
              </span>
            </div>

            <h1 style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)', color: '#111827', lineHeight: 1.15, marginBottom: '1.2rem', fontFamily: 'var(--font-serif)', fontWeight: 400 }}>
              {project.title}
            </h1>

            <p style={{ fontSize: '1.15rem', color: '#4b5563', lineHeight: 1.8 }}>
              {project.tagline}
            </p>
          </div>

          {/* Hero Main Feature Cover */}
          <div
            style={{
              borderRadius: '12px',
              overflow: 'hidden',
              height: '520px',
              position: 'relative',
              boxShadow: '0 12px 36px rgba(0, 0, 0, 0.08)',
              border: '1px solid #e5e7eb',
              cursor: 'pointer'
            }}
            onClick={() => openLightbox(0)}
          >
            <img
              src={project.coverImage}
              alt={project.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 50%)'
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: '1.5rem',
                right: '1.5rem',
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(10px)',
                border: '1px solid #e5e7eb',
                color: '#111827',
                padding: '0.65rem 1.2rem',
                borderRadius: '9999px',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.8rem',
                fontWeight: 600,
                boxShadow: '0 4px 14px rgba(0, 0, 0, 0.1)'
              }}
            >
              <Eye size={16} color="var(--accent-brand, #FF5500)" />
              <span>Click to Expand Fullscreen Lightbox</span>
            </div>
          </div>
        </div>
      </section>

      {/* Narrative & Stats Strip */}
      <section className="section-sm" style={{ backgroundColor: '#f8f9fa', borderTop: '1px solid #e5e7eb', borderBottom: '1px solid #e5e7eb' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '3.5rem',
              alignItems: 'start'
            }}
          >
            {/* Story & Client Quote */}
            <div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: '#111827', marginBottom: '1rem', fontWeight: 500 }}>
                The Celebration Narrative
              </h3>
              <p style={{ color: '#4b5563', fontSize: '0.95rem', lineHeight: 1.8, marginBottom: '2rem' }}>
                {project.summary}
              </p>

              {project.clientQuote && (
                <div
                  style={{
                    padding: '1.8rem',
                    background: '#ffffff',
                    borderLeft: '3px solid var(--accent-brand, #FF5500)',
                    border: '1px solid #e5e7eb',
                    borderLeftWidth: '3px',
                    borderRadius: '0 8px 8px 0',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)'
                  }}
                >
                  <Quote size={24} color="var(--accent-brand, #FF5500)" style={{ marginBottom: '0.5rem', opacity: 0.8 }} />
                  <p style={{ fontStyle: 'italic', color: '#111827', fontSize: '0.95rem', lineHeight: 1.7, margin: 0 }}>
                    "{project.clientQuote}"
                  </p>
                  <span style={{ display: 'block', fontSize: '0.78rem', color: 'var(--accent-brand, #FF5500)', marginTop: '0.75rem', fontWeight: 700 }}>
                    — The Couple
                  </span>
                </div>
              )}
            </div>

            {/* Production Specifications */}
            <div
              style={{
                background: '#ffffff',
                padding: '2rem',
                borderRadius: '12px',
                border: '1px solid #e5e7eb',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)'
              }}
            >
              <h4 style={{ fontSize: '1.1rem', color: '#111827', marginBottom: '1.2rem', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>
                Production Deliverables
              </h4>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.875rem' }}>
                {project.stats?.photosDelivered > 0 && (
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #f0f2f5', paddingBottom: '0.6rem' }}>
                    <span style={{ color: '#6b7280' }}>Photos Master Graded</span>
                    <strong style={{ color: '#111827' }}>{project.stats.photosDelivered}+ Frames</strong>
                  </div>
                )}
                {project.stats?.filmLength && (
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #f0f2f5', paddingBottom: '0.6rem' }}>
                    <span style={{ color: '#6b7280' }}>Cinema Film</span>
                    <strong style={{ color: '#111827' }}>{project.stats.filmLength}</strong>
                  </div>
                )}
                {project.stats?.teamSize && (
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #f0f2f5', paddingBottom: '0.6rem' }}>
                    <span style={{ color: '#6b7280' }}>Production Crew</span>
                    <strong style={{ color: '#111827' }}>{project.stats.teamSize}</strong>
                  </div>
                )}
                {project.stats?.turnaroundTime && (
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #f0f2f5', paddingBottom: '0.6rem' }}>
                    <span style={{ color: '#6b7280' }}>Full Delivery Turnaround</span>
                    <strong style={{ color: 'var(--accent-brand, #FF5500)' }}>{project.stats.turnaroundTime}</strong>
                  </div>
                )}
              </div>

              {/* Gear Used */}
              {project.gear && (
                <div style={{ marginTop: '1.5rem', paddingTop: '1.2rem', borderTop: '1px solid #f0f2f5' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--accent-brand, #FF5500)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700, display: 'block', marginBottom: '0.5rem' }}>
                    Master Gear Deployed:
                  </span>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {project.gear.map((g, i) => (
                      <span key={i} style={{ fontSize: '0.75rem', padding: '0.25rem 0.65rem', background: '#f3f4f6', borderRadius: '4px', color: '#4b5563', fontWeight: 500 }}>
                        {g}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery Grid */}
      <section className="section" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="eyebrow" style={{ color: 'var(--accent-brand, #FF5500)', fontWeight: 700 }}>Curated Frames</span>
            <h2 style={{ fontSize: '2.5rem', color: '#111827', fontFamily: 'var(--font-serif)', fontWeight: 400 }}>
              The Story in Motion & Stills
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
              gap: '1.5rem'
            }}
          >
            {galleryImages.map((img, idx) => (
              <div
                key={idx}
                style={{
                  borderRadius: '8px',
                  overflow: 'hidden',
                  height: '340px',
                  position: 'relative',
                  cursor: 'pointer',
                  border: '1px solid #e5e7eb',
                  boxShadow: '0 4px 14px rgba(0, 0, 0, 0.05)'
                }}
                className="card-luxury"
                onClick={() => openLightbox(idx)}
              >
                <img
                  src={img.url}
                  alt={img.title || `Gallery Frame ${idx + 1}`}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, transparent 60%)',
                    opacity: 0.9
                  }}
                />
                <div style={{ position: 'absolute', bottom: '1rem', left: '1rem', right: '1rem' }}>
                  <h4 style={{ fontSize: '1.05rem', color: '#ffffff', marginBottom: '0.2rem', fontFamily: 'var(--font-serif)' }}>
                    {img.title || `Frame #${idx + 1}`}
                  </h4>
                  {img.caption && (
                    <p style={{ fontSize: '0.78rem', color: 'rgba(255, 255, 255, 0.85)', margin: 0 }}>
                      {img.caption}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={galleryImages}
        currentIndex={lightboxIndex}
        setCurrentIndex={setLightboxIndex}
      />

      <BookingCTA setActivePage={setActivePage} />
    </div>
  );
};

export default PortfolioDetails;
