import React, { useState } from 'react';
import { ArrowLeft, Clock, Users, Camera, Film, BookOpen, HardDrive, Check, ShoppingBag, Calendar, ShieldCheck, Sparkles, Phone } from 'lucide-react';
import Badge from '../components/common/Badge';
import BookingCTA from '../components/home/BookingCTA';
import { PACKAGES } from '../data/packageData';
import { useCart } from '../context/CartContext';

export const PackageDetails = ({ packageId, setActivePage, setSelectedPackageId }) => {
  const { formatPrice, addPackageToCart } = useCart();
  const [eventDate, setEventDate] = useState('');
  const [specialNotes, setSpecialNotes] = useState('');

  const pkg = PACKAGES.find(p => p.id === packageId) || PACKAGES[1]; // Default to Signature Royal

  const handleBooking = () => {
    addPackageToCart(pkg, eventDate, specialNotes);
  };

  return (
    <div style={{ paddingTop: 'var(--header-height)', backgroundColor: '#ffffff' }}>
      {/* Top Breadcrumb */}
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
              setActivePage('packages');
              setSelectedPackageId(null);
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
            <span>Back to All Collections</span>
          </button>

          <Badge variant="gold">{pkg.categoryLabel}</Badge>
        </div>
      </div>

      {/* Package Hero & Overview */}
      <section className="section" style={{ backgroundColor: '#ffffff', paddingTop: '3.5rem' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
              gap: '3.5rem',
              alignItems: 'start'
            }}
          >
            {/* Left Column: Image & Feature Inclusions */}
            <div>
              <div
                style={{
                  borderRadius: '12px',
                  overflow: 'hidden',
                  height: '420px',
                  position: 'relative',
                  border: '1px solid #e5e7eb',
                  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                  marginBottom: '2rem'
                }}
              >
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(0, 0, 0, 0.75) 0%, transparent 50%)'
                  }}
                />
                <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem' }}>
                  {pkg.badge && <Badge variant="gold">{pkg.badge}</Badge>}
                  <h2 style={{ fontSize: '1.8rem', color: '#ffffff', marginTop: '0.4rem', fontFamily: 'var(--font-serif)' }}>
                    {pkg.name}
                  </h2>
                </div>
              </div>

              {/* Comprehensive Inclusions Checklist */}
              <div
                style={{
                  background: '#f8f9fa',
                  padding: '2rem',
                  borderRadius: '12px',
                  border: '1px solid #e5e7eb'
                }}
              >
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: '#111827', marginBottom: '1.2rem', fontWeight: 500 }}>
                  Complete Inclusions Breakdown
                </h3>

                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  {pkg.features.map((feat, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.9rem', color: '#4b5563' }}>
                      <Check size={16} color="var(--accent-brand, #FF5500)" style={{ flexShrink: 0, marginTop: '3px' }} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column: Pricing & Interactive Reservation Panel */}
            <div>
              <div
                style={{
                  background: '#ffffff',
                  border: '1px solid #e5e7eb',
                  borderRadius: '16px',
                  padding: '2.5rem',
                  boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
                  position: 'sticky',
                  top: '100px'
                }}
              >
                <span className="eyebrow no-prefix" style={{ fontSize: '0.72rem', color: 'var(--accent-brand, #FF5500)', fontWeight: 700 }}>
                  Commission Investment
                </span>

                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.85rem', marginTop: '0.4rem', marginBottom: '1.5rem' }}>
                  <span style={{ fontFamily: 'var(--font-sans)', fontSize: '2.5rem', fontWeight: 700, color: 'var(--accent-brand, #FF5500)' }}>
                    {formatPrice(pkg.price)}
                  </span>
                  {pkg.originalPrice && (
                    <span style={{ fontSize: '1.2rem', color: '#9ca3af', textDecoration: 'line-through' }}>
                      {formatPrice(pkg.originalPrice)}
                    </span>
                  )}
                </div>

                <p style={{ color: '#4b5563', fontSize: '0.92rem', lineHeight: 1.7, marginBottom: '1.8rem' }}>
                  {pkg.longDescription || pkg.shortDescription}
                </p>

                {/* Specs Box */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '1rem',
                    padding: '1.2rem',
                    background: '#f8f9fa',
                    borderRadius: '8px',
                    border: '1px solid #e5e7eb',
                    marginBottom: '1.8rem',
                    fontSize: '0.825rem'
                  }}
                >
                  <div>
                    <span style={{ color: '#6b7280', display: 'block', fontSize: '0.72rem', textTransform: 'uppercase', fontWeight: 600 }}>Duration</span>
                    <strong style={{ color: '#111827' }}>{pkg.duration}</strong>
                  </div>
                  <div>
                    <span style={{ color: '#6b7280', display: 'block', fontSize: '0.72rem', textTransform: 'uppercase', fontWeight: 600 }}>Crew Team</span>
                    <strong style={{ color: '#111827' }}>{pkg.team}</strong>
                  </div>
                  <div>
                    <span style={{ color: '#6b7280', display: 'block', fontSize: '0.72rem', textTransform: 'uppercase', fontWeight: 600 }}>Turnaround</span>
                    <strong style={{ color: 'var(--accent-brand, #FF5500)' }}>{pkg.turnaround}</strong>
                  </div>
                  <div>
                    <span style={{ color: '#6b7280', display: 'block', fontSize: '0.72rem', textTransform: 'uppercase', fontWeight: 600 }}>Physical Album</span>
                    <strong style={{ color: '#111827' }}>{pkg.albumIncluded ? 'Included' : 'Optional'}</strong>
                  </div>
                </div>

                {/* Interactive Date & Notes */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: '#111827', fontWeight: 600, marginBottom: '0.4rem' }}>
                    Select Tentative Event Date:
                  </label>
                  <input
                    type="date"
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      background: '#ffffff',
                      border: '1.5px solid #d1d5db',
                      borderRadius: '6px',
                      color: '#111827',
                      fontSize: '0.85rem',
                      outline: 'none',
                      marginBottom: '0.85rem'
                    }}
                  />

                  <label style={{ display: 'block', fontSize: '0.8rem', color: '#111827', fontWeight: 600, marginBottom: '0.4rem' }}>
                    Venue / City Location or Special Notes:
                  </label>
                  <input
                    type="text"
                    placeholder="City, venue, or special requests..."
                    value={specialNotes}
                    onChange={(e) => setSpecialNotes(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      background: '#ffffff',
                      border: '1.5px solid #d1d5db',
                      borderRadius: '6px',
                      color: '#111827',
                      fontSize: '0.85rem',
                      outline: 'none'
                    }}
                  />
                </div>

                {/* Reservation Action */}
                <button
                  onClick={handleBooking}
                  className="btn-primary"
                  style={{ width: '100%', padding: '1rem', fontSize: '0.875rem', marginBottom: '1rem' }}
                >
                  <ShoppingBag size={18} />
                  <span>Add Package to Bag & Hold Date</span>
                </button>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', color: '#6b7280', fontSize: '0.75rem' }}>
                  <ShieldCheck size={16} color="var(--accent-brand, #FF5500)" />
                  <span>Direct consultation call before any financial deposit</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BookingCTA setActivePage={setActivePage} />
    </div>
  );
};

export default PackageDetails;
