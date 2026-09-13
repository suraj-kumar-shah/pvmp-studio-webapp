import React, { useState } from 'react';
import { Users, Camera, Film, BookOpen, HardDrive, Video, ArrowRight, Check, Sparkles, Crown, Award, Calendar, CheckCircle2 } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export const PackageCard = ({ pkg, onSelectPackage }) => {
  const { formatPrice, addPackageToCart } = useCart();
  const [eventDate, setEventDate] = useState('');
  const [showQuickBook, setShowQuickBook] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addPackageToCart(pkg, eventDate);
    setShowQuickBook(false);
  };

  const isPopular = pkg.tier === 'gold' || pkg.featured || pkg.id?.includes('signature') || pkg.id?.includes('royal');

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        background: '#ffffff',
        borderRadius: '16px',
        border: isPopular ? '2px solid #0A66C2' : isHovered ? '1px solid #0A66C2' : '1px solid #e2e8f0',
        boxShadow: isPopular
          ? isHovered ? '0 25px 50px -12px rgba(10, 102, 194, 0.22)' : '0 12px 35px -8px rgba(10, 102, 194, 0.12)'
          : isHovered ? '0 20px 35px -10px rgba(0, 0, 0, 0.08)' : '0 4px 20px rgba(0, 0, 0, 0.04)',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        padding: '2.4rem 2rem 2rem 2rem',
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        transform: isHovered ? 'translateY(-4px)' : 'none',
        height: '100%',
        boxSizing: 'border-box'
      }}
    >
      {/* Top Floating Badge for Most Popular / Featured Package */}
      {isPopular && (
        <div
          style={{
            position: 'absolute',
            top: '-13px',
            left: '50%',
            transform: 'translateX(-50%)',
            background: '#0A66C2',
            color: '#ffffff',
            padding: '0.35rem 1.15rem',
            borderRadius: '9999px',
            fontSize: '0.72rem',
            fontWeight: 800,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            boxShadow: '0 4px 12px rgba(10, 102, 194, 0.35)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.35rem',
            whiteSpace: 'nowrap'
          }}
        >
          <Crown size={12} />
          <span>Recommended Choice</span>
        </div>
      )}

      {/* Eyebrow & Subtle Tag */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
        <span
          style={{
            fontSize: '0.72rem',
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: isPopular ? '#0A66C2' : '#64748b'
          }}
        >
          {pkg.categoryLabel ? pkg.categoryLabel.split('&')[0].trim() : 'Wedding Collection'}
        </span>

        {pkg.badge && (
          <span
            style={{
              padding: '0.22rem 0.65rem',
              borderRadius: '9999px',
              fontSize: '0.68rem',
              fontWeight: 700,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              background: isPopular ? 'rgba(10, 102, 194, 0.1)' : '#f1f5f9',
              color: isPopular ? '#0A66C2' : '#475569'
            }}
          >
            {pkg.badge}
          </span>
        )}
      </div>

      {/* Package Title */}
      <h3
        style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '1.75rem',
          fontWeight: 600,
          color: '#0f172a',
          margin: '0 0 0.5rem 0',
          lineHeight: 1.2
        }}
      >
        {pkg.name}
      </h3>

      {/* Short Narrative Description */}
      <p
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '0.86rem',
          color: '#64748b',
          lineHeight: 1.5,
          margin: '0 0 1.4rem 0',
          minHeight: '38px'
        }}
      >
        {pkg.shortDescription}
      </p>

      {/* Price & Duration Lockup */}
      <div
        style={{
          background: isPopular ? 'rgba(10, 102, 194, 0.04)' : '#f8fafc',
          borderRadius: '12px',
          padding: '1.1rem 1.25rem',
          marginBottom: '1.6rem',
          border: '1px solid #e2e8f0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.45rem' }}>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '2.1rem',
                fontWeight: 800,
                color: '#0f172a',
                letterSpacing: '-0.03em',
                lineHeight: 1
              }}
            >
              {formatPrice(pkg.price)}
            </span>
            {pkg.originalPrice && (
              <span style={{ fontSize: '0.88rem', color: '#94a3b8', textDecoration: 'line-through', fontWeight: 500 }}>
                {formatPrice(pkg.originalPrice)}
              </span>
            )}
          </div>
          <span style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: 500, marginTop: '2px', display: 'block' }}>
            All taxes & consultation included
          </span>
        </div>

        <span
          style={{
            fontSize: '0.75rem',
            fontWeight: 700,
            color: '#0A66C2',
            background: '#ffffff',
            padding: '0.45rem 0.8rem',
            borderRadius: '8px',
            border: '1px solid rgba(10, 102, 194, 0.2)',
            whiteSpace: 'nowrap',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.04)'
          }}
        >
          {pkg.duration ? pkg.duration.split('(')[0].trim() : '2 Days Coverage'}
        </span>
      </div>

      {/* Deliverables Section Label */}
      <div style={{ marginBottom: '1rem' }}>
        <span
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.74rem',
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: '#334155',
            display: 'block'
          }}
        >
          What's Included:
        </span>
      </div>

      {/* Deliverables Checklist with Clean Checkmarks */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '2rem' }}>
        {pkg.team && (
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.88rem', color: '#334155' }}>
            <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'rgba(10, 102, 194, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '1px' }}>
              <Check size={12} color="#0A66C2" strokeWidth={3} />
            </div>
            <span><strong>{pkg.team}</strong> on-site</span>
          </div>
        )}

        {pkg.droneIncluded && (
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.88rem', color: '#334155' }}>
            <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'rgba(10, 102, 194, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '1px' }}>
              <Check size={12} color="#0A66C2" strokeWidth={3} />
            </div>
            <span>{pkg.droneIncluded}</span>
          </div>
        )}

        {pkg.photosDeliverable && (
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.88rem', color: '#334155' }}>
            <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'rgba(10, 102, 194, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '1px' }}>
              <Check size={12} color="#0A66C2" strokeWidth={3} />
            </div>
            <span><strong>{pkg.photosDeliverable}</strong></span>
          </div>
        )}

        {pkg.videoDeliverable && (
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.88rem', color: '#334155' }}>
            <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'rgba(10, 102, 194, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '1px' }}>
              <Check size={12} color="#0A66C2" strokeWidth={3} />
            </div>
            <span>{pkg.videoDeliverable}</span>
          </div>
        )}

        {pkg.albumIncluded && pkg.albumIncluded !== 'N/A' && (
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.88rem', color: '#334155' }}>
            <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'rgba(10, 102, 194, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '1px' }}>
              <Check size={12} color="#0A66C2" strokeWidth={3} />
            </div>
            <span>{pkg.albumIncluded}</span>
          </div>
        )}

        {pkg.usbIncluded && pkg.usbIncluded !== 'N/A' && (
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.88rem', color: '#334155' }}>
            <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'rgba(10, 102, 194, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '1px' }}>
              <Check size={12} color="#0A66C2" strokeWidth={3} />
            </div>
            <span>{pkg.usbIncluded}</span>
          </div>
        )}
      </div>

      {/* Action Block */}
      <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {showQuickBook ? (
          <div style={{ padding: '1rem', background: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
            <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: '#334155', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.4rem' }}>
              Select Wedding / Event Date:
            </label>
            <input
              type="date"
              value={eventDate}
              onChange={(e) => setEventDate(e.target.value)}
              style={{
                width: '100%',
                padding: '0.6rem 0.85rem',
                background: '#ffffff',
                border: '1px solid #cbd5e1',
                borderRadius: '8px',
                color: '#0f172a',
                fontSize: '0.86rem',
                marginBottom: '0.75rem',
                outline: 'none'
              }}
            />
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button
                onClick={handleAddToCart}
                style={{
                  flex: 1,
                  padding: '0.75rem',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  background: '#0A66C2',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  boxShadow: '0 2px 8px rgba(10, 102, 194, 0.3)'
                }}
              >
                Confirm & Add
              </button>
              <button
                onClick={() => setShowQuickBook(false)}
                style={{
                  padding: '0.75rem 1rem',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  background: '#ffffff',
                  color: '#475569',
                  border: '1px solid #cbd5e1',
                  borderRadius: '8px',
                  cursor: 'pointer'
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <>
            {/* Primary Action Button */}
            <button
              onClick={() => setShowQuickBook(true)}
              style={{
                width: '100%',
                padding: '0.9rem 1.4rem',
                fontSize: '0.88rem',
                fontWeight: 700,
                background: '#0A66C2',
                color: '#ffffff',
                border: 'none',
                borderRadius: '10px',
                cursor: 'pointer',
                transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                boxShadow: isPopular
                  ? '0 4px 14px rgba(10, 102, 194, 0.35)'
                  : '0 2px 8px rgba(10, 102, 194, 0.25)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#004182';
                e.currentTarget.style.transform = 'translateY(-1px)';
                e.currentTarget.style.boxShadow = '0 6px 18px rgba(10, 102, 194, 0.45)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#0A66C2';
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = isPopular
                  ? '0 4px 14px rgba(10, 102, 194, 0.35)'
                  : '0 2px 8px rgba(10, 102, 194, 0.25)';
              }}
            >
              <Calendar size={16} />
              <span>Book This Package</span>
            </button>

            {/* Secondary Details Link */}
            <button
              onClick={() => onSelectPackage(pkg.id)}
              style={{
                width: '100%',
                padding: '0.55rem',
                fontSize: '0.82rem',
                fontWeight: 600,
                background: 'transparent',
                color: '#475569',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.35rem'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#0A66C2';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#475569';
              }}
            >
              <span>View Full Inclusions & Timeline</span>
              <ArrowRight size={13} />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default PackageCard;
