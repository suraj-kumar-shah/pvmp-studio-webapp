import React, { useState } from 'react';
import PortfolioCard from './PortfolioCard';
import LightboxModal from '../common/LightboxModal';
import { PORTFOLIO_CATEGORIES } from '../../data/portfolioData';

export const PortfolioGrid = ({ projects = [], onSelectProject, showFilter = true, limit = null }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  const displayProjects = limit ? filteredProjects.slice(0, limit) : filteredProjects;

  const handleOpenLightbox = (project) => {
    if (project.gallery && project.gallery.length > 0) {
      setLightboxImages(project.gallery);
    } else {
      setLightboxImages([
        { url: project.coverImage, title: project.title, caption: project.tagline }
      ]);
    }
    setLightboxIndex(0);
    setLightboxOpen(true);
  };

  return (
    <div>
      {/* Category Filter Pills */}
      {showFilter && (
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.6rem',
            justifyContent: 'center',
            marginBottom: '2.5rem'
          }}
        >
          {PORTFOLIO_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  padding: '0.55rem 1.3rem',
                  fontSize: '0.85rem',
                  fontWeight: isActive ? 600 : 500,
                  borderRadius: '9999px',
                  border: isActive ? '1px solid #FF5500' : '1px solid #e5e7eb',
                  background: isActive ? '#FF5500' : '#ffffff',
                  color: isActive ? '#ffffff' : '#374151',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: isActive ? '0 2px 8px rgba(255, 85, 0, 0.25)' : '0 1px 3px rgba(0,0,0,0.04)'
                }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      )}

      {/* Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: '2rem'
        }}
      >
        {displayProjects.map((project) => (
          <PortfolioCard
            key={project.id}
            project={project}
            onSelectProject={onSelectProject}
            onOpenLightbox={handleOpenLightbox}
          />
        ))}
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={lightboxImages}
        currentIndex={lightboxIndex}
        setCurrentIndex={setLightboxIndex}
      />
    </div>
  );
};

export default PortfolioGrid;
