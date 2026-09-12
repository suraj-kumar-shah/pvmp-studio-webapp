import React, { useState } from 'react';
import { Users, Camera, Film, BookOpen, HardDrive, Video, ArrowRight, ShoppingBag, Sparkles, Crown, Award } from 'lucide-react';
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

  // Determine Tier Identity with Consistent Single Signature Brand Colour
  const getTierInfo = () => {
    const singleBadgeStyle = {
      background: 'var(--accent-brand, #FF5500)',
      color: '#ffffff',
      border: 'none',
      boxShadow: '0 3px 10px rgba(255, 85, 0, 0.3)'
    };

    if (pkg.tier === 'silver' || pkg.id?.includes('essential')) {
      return {
        label: 'SILVER PACKAGE',
        sublabel: 'TIER I • ESSENTIAL HERITAGE',
        icon: Award,
        badgeStyle: singleBadgeStyle,
        cardBorder: isHovered ? '1px solid var(--accent-brand, #FF5500)' : '1px solid #e5e7eb',
        durationBg: 'rgba(255, 85, 0, 0.08)',
        durationColor: 'var(--accent-brand, #FF5500)'
      };
    }
    if (pkg.tier === 'gold' || pkg.featured || pkg.id?.includes('signature') || pkg.id?.includes('royal')) {
      return {
        label: 'GOLD PACKAGE',
        sublabel: 'TIER II • MOST POPULAR',
        icon: Crown,
        badgeStyle: singleBadgeStyle,
        cardBorder: isHovered ? '2px solid var(--accent-brand, #FF5500)' : '2px solid var(--accent-brand, #FF5500)',
        durationBg: 'rgba(255, 85, 0, 0.08)',
        durationColor: 'var(--accent-brand, #FF5500)'
      };
    }
    if (pkg.tier === 'premium' || pkg.id?.includes('destination') || pkg.id?.includes('himalayan')) {
      return {
        label: 'PREMIUM PACKAGE',
        sublabel: 'TIER III • ULTRA BESPOKE',
        icon: Sparkles,
        badgeStyle: singleBadgeStyle,
        cardBorder: isHovered ? '1px solid var(--accent-brand, #FF5500)' : '1px solid #e5e7eb',
        durationBg: 'rgba(255, 85, 0, 0.08)',
        durationColor: 'var(--accent-brand, #FF5500)'
      };
    }
    return {
      label: pkg.badge || 'SIGNATURE COLLECTION',
      sublabel: 'CURATED COLLECTION',
      icon: Sparkles,
      badgeStyle: singleBadgeStyle,
      cardBorder: isHovered ? '1px solid var(--accent-brand, #FF5500)' : '1px solid #e5e7eb',
      durationBg: 'rgba(255, 85, 0, 0.08)',
      durationColor: 'var(--accent-brand, #FF5500)'
    };
  };

  const tier = getTierInfo();
  const TierIcon = tier.icon;

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        background: '#ffffff',
        borderRadius: '16px',
        border: tier.cardBorder,
        boxShadow: pkg.featured
          ? isHovered ? '0 20px 45px rgba(255, 85, 0, 0.15)' : '0 8px 30px rgba(255, 85, 0, 0.08)'
          : isHovered ? '0 20px 40px rgba(0, 0, 0, 0.08)' : '0 4px 20px rgba(0, 0, 0, 0.03)',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        transform: isHovered ? 'translateY(-4px)' : 'none',
        position: 'relative'
      }}
    >
      {/* Visual Image Header with Unified Top Tier Badge */}
      <div
        style={{
          position: 'relative',
          height: '210px',
          overflow: 'hidden',
          backgroundColor: '#f3f4f6'
        }}
      >
        <img
          src={pkg.image}
          alt={pkg.name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
            transform: isHovered ? 'scale(1.05)' : 'scale(1)'
          }}
        />

        {/* Ambient Top & Bottom Gradients */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 50%, rgba(0,0,0,0.15) 100%)',
            pointerEvents: 'none'
          }}
        />

        {/* Floating Unified Signature Color Tier Pill Badge at Top */}
        <div
          style={{
            position: 'absolute',
            top: '14px',
            right: '14px',
            display: 'flex',
            alignItems: 'center',
            gap: '0.35rem',
            padding: '0.38rem 0.9rem',
            borderRadius: '9999px',
            fontSize: '0.72rem',
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            zIndex: 3,
            ...tier.badgeStyle
          }}
        >
          <TierIcon size={12} strokeWidth={2.4} />
          <span>{tier.label}</span>
        </div>
      </div>

      {/* Card Content */}
      <div style={{ padding: '1.6rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
        
        {/* Tier Sublabel Eyebrow */}
        <span
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.7rem',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--accent-brand, #FF5500)',
            marginBottom: '0.35rem',
            display: 'block'
          }}
        >
          {tier.sublabel}
        </span>

        {/* Package Title */}
        <h3
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '1.45rem',
            fontWeight: 600,
            color: '#111827',
            margin: '0 0 0.8rem 0',
            lineHeight: 1.25
          }}
        >
          {pkg.name}
        </h3>

        {/* Price & Duration Bar (Ensuring Clean Single-line Layout) */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '0.75rem',
            paddingBottom: '1.1rem',
            marginBottom: '1.1rem',
            borderBottom: '1px solid #f1f3f5'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', flexWrap: 'wrap' }}>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '1.65rem',
                fontWeight: 800,
                color: '#111827',
                letterSpacing: '-0.02em'
              }}
            >
              {formatPrice(pkg.price)}
            </span>
            {pkg.originalPrice && (
              <span style={{ fontSize: '0.85rem', color: '#9ca3af', textDecoration: 'line-through' }}>
                {formatPrice(pkg.originalPrice)}
              </span>
            )}
          </div>

          <span
            style={{
              fontSize: '0.75rem',
              fontWeight: 700,
              color: tier.durationColor,
              background: tier.durationBg,
              padding: '0.35rem 0.75rem',
              borderRadius: '6px',
              whiteSpace: 'nowrap',
              flexShrink: 0,
              letterSpacing: '0.02em'
            }}
          >
            {pkg.duration ? pkg.duration.split('(')[0].trim() : 'Bespoke Schedule'}
          </span>
        </div>

        {/* Clean, Minimal & Luxury Specs List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '1.6rem' }}>
          
          {pkg.team && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.84rem', color: '#374151' }}>
              <div style={{ width: '26px', height: '26px', borderRadius: '50%', background: 'rgba(255, 85, 0, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Users size={14} color="var(--accent-brand, #FF5500)" />
              </div>
              <span style={{ fontWeight: 500 }}>{pkg.team}</span>
            </div>
          )}

          {pkg.droneIncluded && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.84rem', color: '#374151' }}>
              <div style={{ width: '26px', height: '26px', borderRadius: '50%', background: 'rgba(255, 85, 0, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Video size={14} color="var(--accent-brand, #FF5500)" />
              </div>
              <span>{pkg.droneIncluded}</span>
            </div>
          )}

          {pkg.photosDeliverable && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.84rem', color: '#374151' }}>
              <div style={{ width: '26px', height: '26px', borderRadius: '50%', background: 'rgba(255, 85, 0, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Camera size={14} color="var(--accent-brand, #FF5500)" />
              </div>
              <span>{pkg.photosDeliverable}</span>
            </div>
          )}

          {pkg.videoDeliverable && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.84rem', color: '#374151' }}>
              <div style={{ width: '26px', height: '26px', borderRadius: '50%', background: 'rgba(255, 85, 0, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Film size={14} color="var(--accent-brand, #FF5500)" />
              </div>
              <span>{pkg.videoDeliverable}</span>
            </div>
          )}

          {pkg.albumIncluded && pkg.albumIncluded !== 'N/A' && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.84rem', color: '#374151' }}>
              <div style={{ width: '26px', height: '26px', borderRadius: '50%', background: 'rgba(255, 85, 0, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <BookOpen size={14} color="var(--accent-brand, #FF5500)" />
              </div>
              <span>{pkg.albumIncluded}</span>
            </div>
          )}

          {pkg.usbIncluded && pkg.usbIncluded !== 'N/A' && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.84rem', color: '#374151' }}>
              <div style={{ width: '26px', height: '26px', borderRadius: '50%', background: 'rgba(255, 85, 0, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <HardDrive size={14} color="var(--accent-brand, #FF5500)" />
              </div>
              <span>{pkg.usbIncluded}</span>
            </div>
          )}

        </div>

        {/* Action Buttons */}
        <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
          {showQuickBook ? (
            <div style={{ padding: '1rem', background: '#f8f9fa', borderRadius: '12px', border: '1px solid #e5e7eb' }}>
              <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: '#374151', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.4rem' }}>
                Select Wedding / Event Date:
              </label>
              <input
                type="date"
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.55rem 0.8rem',
                  background: '#ffffff',
                  border: '1px solid #d1d5db',
                  borderRadius: '6px',
                  color: '#111827',
                  fontSize: '0.84rem',
                  marginBottom: '0.75rem',
                  outline: 'none'
                }}
              />
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button
                  onClick={handleAddToCart}
                  style={{
                    flex: 1,
                    padding: '0.65rem',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    background: 'var(--accent-brand, #FF5500)',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    boxShadow: '0 2px 8px rgba(255, 85, 0, 0.25)'
                  }}
                >
                  Confirm & Add
                </button>
                <button
                  onClick={() => setShowQuickBook(false)}
                  style={{
                    padding: '0.65rem 0.95rem',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    background: '#ffffff',
                    color: '#4b5563',
                    border: '1px solid #d1d5db',
                    borderRadius: '6px',
                    cursor: 'pointer'
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.65rem' }}>
              <button
                onClick={() => onSelectPackage(pkg.id)}
                style={{
                  padding: '0.75rem',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  background: '#ffffff',
                  color: '#111827',
                  border: '1px solid #d1d5db',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.35rem',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent-brand, #FF5500)';
                  e.currentTarget.style.color = 'var(--accent-brand, #FF5500)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#d1d5db';
                  e.currentTarget.style.color = '#111827';
                }}
              >
                <span>Details</span>
                <ArrowRight size={14} />
              </button>
              
              <button
                onClick={() => setShowQuickBook(true)}
                style={{
                  padding: '0.75rem',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  background: 'var(--accent-brand, #FF5500)',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.4rem',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 2px 8px rgba(255, 85, 0, 0.25)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--accent-brand-hover, #E04B00)';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(255, 85, 0, 0.35)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'var(--accent-brand, #FF5500)';
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(255, 85, 0, 0.25)';
                }}
              >
                <ShoppingBag size={14} />
                <span>Book Now</span>
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default PackageCard;
