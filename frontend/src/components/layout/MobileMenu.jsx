import React from 'react';
import { X, ShoppingBag, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export const MobileMenu = ({
  isOpen,
  onClose,
  activePage,
  setActivePage,
  onOpenCart,
  onOpenQuickBooking
}) => {
  const { totalItemsCount, currency, setCurrency, currencies } = useCart();

  if (!isOpen) return null;

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'The Studio' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'packages', label: 'Packages & Pricing' },
    { id: 'contact', label: 'Contact & Inquire' }
  ];

  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    onClose();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: '#ffffff',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        padding: '1.5rem',
        overflowY: 'auto'
      }}
    >
      {/* Top Bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', letterSpacing: '0.12em', color: 'var(--accent-brand)', fontWeight: 600 }}>
            PVMP STUDIO
          </span>
        </div>

        <button
          onClick={onClose}
          aria-label="Close menu"
          style={{
            background: '#f3f4f6',
            border: '1px solid #e5e7eb',
            width: '42px',
            height: '42px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#111827'
          }}
        >
          <X size={22} />
        </button>
      </div>

      {/* Book Session CTA for Mobile */}
      <button
        onClick={() => {
          onClose();
          onOpenQuickBooking?.();
        }}
        style={{
          width: '100%',
          padding: '0.85rem 1.2rem',
          backgroundColor: 'var(--accent-brand)',
          color: '#ffffff',
          borderRadius: '8px',
          fontFamily: 'var(--font-sans)',
          fontSize: '0.9rem',
          fontWeight: 700,
          border: 'none',
          cursor: 'pointer',
          marginBottom: '1.8rem',
          boxShadow: '0 4px 14px rgba(10, 102, 194, 0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5rem'
        }}
      >
        <span>⚡ Instant Date Check & Booking</span>
      </button>

      {/* Nav List */}
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
        {navLinks.map((item) => {
          const isActive = activePage === item.id;
          return (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0.6rem 0',
                borderBottom: '1px solid #f3f4f6',
                color: isActive ? 'var(--accent-brand)' : '#111827',
                fontFamily: 'var(--font-serif)',
                fontSize: '1.45rem',
                fontWeight: isActive ? 600 : 400,
                textAlign: 'left'
              }}
            >
              <span>{item.label}</span>
              {isActive && <ArrowRight size={18} color="var(--accent-brand)" />}
            </button>
          );
        })}
      </nav>

      {/* Currency & Cart Bar */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem', background: '#f9fafb', borderRadius: '8px', border: '1px solid #e5e7eb', marginBottom: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ fontSize: '0.8rem', color: '#6b7280' }}>Currency:</span>
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--accent-brand)',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.85rem',
              fontWeight: 700,
              cursor: 'pointer'
            }}
          >
            {Object.keys(currencies).map(c => (
              <option key={c} value={c} style={{ background: '#ffffff', color: '#111827' }}>
                {currencies[c].label}
              </option>
            ))}
          </select>
        </div>

        <button
          onClick={() => {
            onClose();
            onOpenCart();
          }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            color: '#111827',
            fontSize: '0.85rem',
            fontWeight: 600
          }}
        >
          <ShoppingBag size={18} color="var(--accent-brand)" />
          <span>Bag ({totalItemsCount})</span>
        </button>
      </div>

      {/* Contact Quick Info */}
      <div style={{ marginTop: 'auto', paddingTop: '1.5rem', borderTop: '1px solid #e5e7eb' }}>
        <p style={{ fontSize: '0.75rem', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
          ATELIER CONCIERGE (INDIA & NEPAL):
        </p>
        <p style={{ fontSize: '0.85rem', color: '#111827', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.3rem' }}>
          <Phone size={14} color="var(--accent-brand)" /> India: +91 98765 43210 | Nepal: +977 98012 34567
        </p>
        <p style={{ fontSize: '0.85rem', color: '#111827', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Mail size={14} color="var(--accent-brand)" /> concierge@pvmpstudio.com
        </p>
      </div>
    </div>
  );
};

export default MobileMenu;
