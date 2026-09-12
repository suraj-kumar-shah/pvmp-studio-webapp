import React from 'react';
import { Check, Minus } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export const PackageComparison = ({ packages = [], onSelectPackage }) => {
  const { formatPrice } = useCart();

  const comparisonRows = [
    { label: 'Event Duration Coverage', getVal: (pkg) => pkg.duration },
    { label: 'Master Crew Team Size', getVal: (pkg) => pkg.team },
    { label: 'High-Res Edited Photos', getVal: (pkg) => pkg.photosDeliverable },
    { label: '4K Cinema Films Included', getVal: (pkg) => pkg.videoDeliverable },
    { label: 'Heirloom Albums & Mini-Books', getVal: (pkg) => pkg.albumIncluded },
    { label: 'Hardwood Engraved USB Box', getVal: (pkg) => pkg.usbIncluded },
    { label: 'Drone Aerial 4K Cinematography', getVal: (pkg) => (pkg.features?.some(f => f.toLowerCase().includes('drone')) ? 'Included' : 'Add-on') },
    { label: 'Express 48-Hour Social Sneak Peek', getVal: (pkg) => (pkg.turnaround?.toLowerCase().includes('sneak peek') || pkg.features?.some(f => f.toLowerCase().includes('sneak peek')) ? 'Included' : 'Add-on') },
    { label: 'Pre-Wedding Portrait Session', getVal: (pkg) => (pkg.id === 'pkg-signature-royal' || pkg.id === 'pkg-luxury-destination' || pkg.id === 'pkg-prewedding-cinematic' ? 'Included' : 'Add-on') },
    { label: 'Lifetime Private Cloud Archive', getVal: () => 'Included (All Collections)' }
  ];

  const weddingPackages = packages.filter(p => p.category === 'wedding');

  return (
    <div style={{ overflowX: 'auto', marginTop: '2rem' }}>
      <table
        style={{
          width: '100%',
          minWidth: '850px',
          borderCollapse: 'collapse',
          background: '#ffffff',
          border: '1px solid #e5e7eb',
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)'
        }}
      >
        <thead>
          <tr style={{ background: '#f8f9fa', borderBottom: '1px solid #e5e7eb' }}>
            <th style={{ padding: '1.5rem', textAlign: 'left', width: '28%', color: '#111827', fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 700 }}>
              Collection Features
            </th>
            {weddingPackages.map((pkg) => (
              <th
                key={pkg.id}
                style={{
                  padding: '1.5rem 1.2rem',
                  textAlign: 'center',
                  width: `${72 / weddingPackages.length}%`,
                  borderLeft: '1px solid #e5e7eb',
                  background: pkg.featured ? 'rgba(255, 85, 0, 0.04)' : 'transparent'
                }}
              >
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: '#111827', fontWeight: 600, marginBottom: '0.35rem' }}>
                  {pkg.name}
                </div>
                <div style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--accent-brand, #FF5500)' }}>
                  {formatPrice(pkg.price)}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {comparisonRows.map((row, idx) => (
            <tr
              key={idx}
              style={{
                borderBottom: '1px solid #f1f3f5',
                background: idx % 2 === 0 ? '#ffffff' : '#fafafa'
              }}
            >
              <td style={{ padding: '1.1rem 1.5rem', fontSize: '0.85rem', color: '#111827', fontWeight: 500 }}>
                {row.label}
              </td>
              {weddingPackages.map((pkg) => {
                const val = row.getVal(pkg);
                const isIncluded = val === 'Included' || (typeof val === 'string' && !val.includes('N/A') && !val.includes('Add-on'));
                return (
                  <td
                    key={pkg.id}
                    style={{
                      padding: '1.1rem 1.2rem',
                      textAlign: 'center',
                      fontSize: '0.82rem',
                      color: isIncluded ? '#111827' : '#6b7280',
                      fontWeight: isIncluded ? 600 : 400,
                      borderLeft: '1px solid #f1f3f5',
                      background: pkg.featured ? 'rgba(255, 85, 0, 0.02)' : 'transparent'
                    }}
                  >
                    {val}
                  </td>
                );
              })}
            </tr>
          ))}
          <tr style={{ background: '#f8f9fa' }}>
            <td style={{ padding: '1.5rem', textAlign: 'left', color: '#6b7280', fontSize: '0.8rem', fontWeight: 600 }}>
              Select Collection
            </td>
            {weddingPackages.map((pkg) => (
              <td key={pkg.id} style={{ padding: '1.5rem 1.2rem', textAlign: 'center', borderLeft: '1px solid #e5e7eb' }}>
                <button
                  onClick={() => onSelectPackage(pkg.id)}
                  className={pkg.featured ? 'btn-primary' : 'btn-secondary'}
                  style={{ padding: '0.75rem 1.2rem', fontSize: '0.78rem', width: '100%', fontWeight: 700 }}
                >
                  View Details & Book
                </button>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PackageComparison;
