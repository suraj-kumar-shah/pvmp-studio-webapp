import React from 'react';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import PackageCard from '../packages/PackageCard';
import { PACKAGES } from '../../data/packageData';

export const PackagesPreview = ({ setActivePage, setSelectedPackageId }) => {
  // Show 3 flagship packages on the homepage
  const featuredPkgs = PACKAGES.slice(0, 3);

  return (
    <section className="section" style={{ backgroundColor: '#ffffff', position: 'relative', paddingTop: '4rem', paddingBottom: '5rem' }}>
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
            Curated Wedding & Storytelling Packages
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
            Transparent investments crafted for discerning couples and families. Every collection is fully customizable.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.2rem',
            marginBottom: '3rem'
          }}
        >
          {featuredPkgs.map((pkg) => (
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

        <div style={{ textAlign: 'center' }}>
          <button
            onClick={() => {
              setActivePage('packages');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="btn-secondary"
            style={{ padding: '0.9rem 2.5rem' }}
          >
            <span>Compare All Packages & Custom Destination Tiers</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PackagesPreview;
