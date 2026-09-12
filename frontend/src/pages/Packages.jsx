import React, { useState } from 'react';
import SectionHeading from '../components/common/SectionHeading';
import PackageCard from '../components/packages/PackageCard';
import PackageComparison from '../components/packages/PackageComparison';
import BookingCTA from '../components/home/BookingCTA';
import { PACKAGES, PACKAGE_CATEGORIES } from '../data/packageData';

export const Packages = ({ setActivePage, setSelectedPackageId }) => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredPackages = activeCategory === 'all'
    ? PACKAGES
    : PACKAGES.filter(p => p.category === activeCategory);

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
            Wedding Photography & Video Packages
          </h1>
          <p style={{ fontSize: '1rem', color: '#6b7280', lineHeight: 1.6, margin: '0 auto', maxWidth: '680px' }}>
            Simple, transparent packages for weddings, pre-wedding shoots, and 4K cinema coverage across India and Nepal.
          </p>
        </div>
      </section>

      {/* Main Packages Section */}
      <section className="section" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          {/* Category Filter Pills */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.65rem',
              justifyContent: 'center',
              marginBottom: '3rem'
            }}
          >
            {PACKAGE_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  style={{
                    padding: '0.65rem 1.4rem',
                    fontSize: '0.82rem',
                    fontWeight: isActive ? 700 : 500,
                    letterSpacing: '0.04em',
                    borderRadius: '9999px',
                    border: isActive ? '1px solid var(--accent-brand, #FF5500)' : '1px solid #e5e7eb',
                    background: isActive ? 'var(--accent-brand, #FF5500)' : '#f8f9fa',
                    color: isActive ? '#ffffff' : '#374151',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Package Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
              gap: '2.5rem',
              marginBottom: '5rem'
            }}
          >
            {filteredPackages.map((pkg) => (
              <PackageCard
                key={pkg.id}
                pkg={pkg}
                onSelectPackage={(id) => {
                  setSelectedPackageId(id);
                  setActivePage('package-details');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              />
            ))}
          </div>

          {/* Side-by-Side Comparison Matrix */}
          <div style={{ marginTop: '4rem' }}>
            <SectionHeading
              centered
              eyebrow="Side-by-Side Matrix"
              title="Compare Wedding Collection Inclusions"
              subtitle="Evaluate crew size, albums, drone coverage, and deliverable timelines across our tiers."
            />

            <PackageComparison
              packages={PACKAGES}
              onSelectPackage={(id) => {
                setSelectedPackageId(id);
                setActivePage('package-details');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          </div>
        </div>
      </section>

      <BookingCTA setActivePage={setActivePage} />
    </div>
  );
};

export default Packages;
