import React from 'react';
import SectionHeading from '../components/common/SectionHeading';
import PortfolioGrid from '../components/portfolio/PortfolioGrid';
import BookingCTA from '../components/home/BookingCTA';
import { PORTFOLIO_PROJECTS } from '../data/portfolioData';

export const Portfolio = ({ setActivePage, setSelectedProjectId }) => {
  return (
    <div style={{ paddingTop: 'var(--header-height)' }}>
      {/* Header */}
      <section
        style={{
          paddingTop: '3rem',
          paddingBottom: '2rem',
          backgroundColor: '#ffffff',
          textAlign: 'center'
        }}
      >
        <div className="container" style={{ maxWidth: '850px' }}>
          <h1
            style={{
              fontSize: 'clamp(2rem, 3.5vw, 2.85rem)',
              color: '#111827',
              marginBottom: '0.6rem',
              fontFamily: 'var(--font-serif)',
              fontWeight: 400
            }}
          >
            Wedding & Pre-Wedding Portfolio
          </h1>
          <p style={{ fontSize: '1rem', color: '#6b7280', lineHeight: 1.6, margin: '0 auto', maxWidth: '680px' }}>
            Browse through our portfolio of royal weddings, pre-wedding shoots, and cinematic films across India and Nepal.
          </p>
        </div>
      </section>

      {/* Main Gallery with Category Filters */}
      <section className="section" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <PortfolioGrid
            projects={PORTFOLIO_PROJECTS}
            onSelectProject={(id) => {
              setSelectedProjectId(id);
              setActivePage('portfolio-details');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            showFilter={true}
          />
        </div>
      </section>

      <BookingCTA setActivePage={setActivePage} />
    </div>
  );
};

export default Portfolio;
