import React from 'react';
import { Eye, MapPin, Calendar, ArrowRight } from 'lucide-react';
import Badge from '../common/Badge';

export const PortfolioCard = ({ project, onSelectProject, onOpenLightbox }) => {
  return (
    <div
      className="card-luxury"
      style={{
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer'
      }}
      onClick={() => onSelectProject(project.id)}
    >
      {/* Cover Image Container */}
      <div
        style={{
          position: 'relative',
          paddingTop: '68%',
          overflow: 'hidden',
          backgroundColor: '#f3f4f6'
        }}
      >
        <img
          src={project.coverImage}
          alt={project.title}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
          className="portfolio-img-zoom"
        />

        {/* Dark Vignette Overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(0, 0, 0, 0.65) 0%, rgba(0, 0, 0, 0.1) 60%, transparent 100%)',
            pointerEvents: 'none'
          }}
        />

        {/* Top Badge */}
        <div style={{ position: 'absolute', top: '1rem', left: '1rem', zIndex: 2 }}>
          <Badge variant="gold">{project.categoryLabel}</Badge>
        </div>

        {/* Quick View Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onOpenLightbox(project);
          }}
          aria-label="View gallery"
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            background: 'rgba(255, 255, 255, 0.85)',
            border: '1px solid rgba(255, 255, 255, 0.9)',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#111827',
            backdropFilter: 'blur(8px)',
            transition: 'all 0.2s',
            zIndex: 2,
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'var(--accent-brand, #FF5500)';
            e.currentTarget.style.color = '#ffffff';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.85)';
            e.currentTarget.style.color = '#111827';
          }}
        >
          <Eye size={16} />
        </button>
      </div>

      {/* Content Info */}
      <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1, backgroundColor: '#ffffff' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#6b7280', fontSize: '0.78rem', marginBottom: '0.6rem' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: 'var(--accent-brand, #FF5500)', fontWeight: 600 }}>
            <MapPin size={13} />
            {project.location}
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
            <Calendar size={13} />
            {project.date}
          </span>
        </div>

        <h3
          style={{
            fontSize: '1.25rem',
            color: '#111827',
            marginBottom: '0.6rem',
            lineHeight: 1.35,
            fontWeight: 500,
            fontFamily: 'var(--font-serif)'
          }}
        >
          {project.title}
        </h3>

        <p
          style={{
            fontSize: '0.875rem',
            color: '#4b5563',
            marginBottom: '1.2rem',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            lineHeight: 1.6
          }}
        >
          {project.tagline || project.summary}
        </p>

        <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '0.8rem', borderTop: '1px solid #f0f2f5' }}>
          <span style={{ fontSize: '0.75rem', color: 'var(--accent-brand, #FF5500)', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            View Full Story ({project.gallery?.length || 4} Frames)
          </span>
          <ArrowRight size={15} color="var(--accent-brand, #FF5500)" />
        </div>
      </div>

      <style>{`
        .card-luxury:hover .portfolio-img-zoom {
          transform: scale(1.06);
        }
      `}</style>
    </div>
  );
};

export default PortfolioCard;
