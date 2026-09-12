import React, { useState } from 'react';
import { Mail, Phone, MapPin, Award, ArrowUp, CheckCircle2 } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export const Footer = ({ setActivePage, setSelectedProjectId, setSelectedPackageId, setSelectedProductId }) => {
  const { showToast } = useCart();
  const [emailInput, setEmailInput] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!emailInput || !emailInput.includes('@')) {
      showToast('Please enter a valid email address.');
      return;
    }
    setIsSubscribed(true);
    showToast('Thank you for subscribing to PVMP Private Journal.');
    setEmailInput('');
  };

  const handleNav = (pageId, resetEntity) => {
    setActivePage(pageId);
    if (resetEntity === 'portfolio') setSelectedProjectId?.(null);
    if (resetEntity === 'packages') setSelectedPackageId?.(null);
    if (resetEntity === 'products') setSelectedProductId?.(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        backgroundColor: '#f8f9fa',
        borderTop: '1px solid #e5e7eb',
        paddingTop: '5rem',
        paddingBottom: '2.5rem',
        position: 'relative',
        color: '#111827'
      }}
    >
      <div className="container">
        {/* Main 4-Column Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '3.5rem',
            marginBottom: '4.5rem'
          }}
        >
          {/* Col 1: Brand & Philosophy */}
          <div style={{ maxWidth: '320px' }}>
            <div style={{ marginBottom: '1.2rem' }}>
              <span
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.85rem',
                  letterSpacing: '0.12em',
                  fontWeight: 600,
                  color: 'var(--accent-brand)',
                  display: 'block'
                }}
              >
                PVMP STUDIO
              </span>
            </div>

            <p style={{ fontSize: '0.875rem', color: '#4b5563', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              Crafting timeless visual heirlooms and cinema-grade wedding documentaries for discerning families across India and Nepal.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--accent-brand)', fontSize: '0.8rem', fontWeight: 600 }}>
              <Award size={18} />
              <span>Ranked Top Luxury Wedding Studio 2024</span>
            </div>
          </div>

          {/* Col 2: Navigation & Services */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.825rem',
                fontWeight: 700,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: '#111827',
                marginBottom: '1.4rem'
              }}
            >
              Our Services
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  style={{ color: '#4b5563', fontSize: '0.9rem', textAlign: 'left', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => (e.target.style.color = 'var(--accent-brand)')}
                  onMouseLeave={(e) => (e.target.style.color = '#4b5563')}
                >
                  Weddings Shoot
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  style={{ color: '#4b5563', fontSize: '0.9rem', textAlign: 'left' }}
                  onMouseEnter={(e) => (e.target.style.color = 'var(--accent-brand)')}
                  onMouseLeave={(e) => (e.target.style.color = '#4b5563')}
                >
                  Pre-Wedding Shoot
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  style={{ color: '#4b5563', fontSize: '0.9rem', textAlign: 'left' }}
                  onMouseEnter={(e) => (e.target.style.color = 'var(--accent-brand)')}
                  onMouseLeave={(e) => (e.target.style.color = '#4b5563')}
                >
                  Birthday Party Shoot
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  style={{ color: '#4b5563', fontSize: '0.9rem', textAlign: 'left' }}
                  onMouseEnter={(e) => (e.target.style.color = 'var(--accent-brand)')}
                  onMouseLeave={(e) => (e.target.style.color = '#4b5563')}
                >
                  Portrait Shoot
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  style={{ color: '#4b5563', fontSize: '0.9rem', textAlign: 'left' }}
                  onMouseEnter={(e) => (e.target.style.color = 'var(--accent-brand)')}
                  onMouseLeave={(e) => (e.target.style.color = '#4b5563')}
                >
                  Candid Photography
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  style={{ color: '#4b5563', fontSize: '0.9rem', textAlign: 'left' }}
                  onMouseEnter={(e) => (e.target.style.color = 'var(--accent-brand)')}
                  onMouseLeave={(e) => (e.target.style.color = '#4b5563')}
                >
                  Custom Wedding Albums
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Studio Location & Direct Booking */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.825rem',
                fontWeight: 700,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: '#111827',
                marginBottom: '1.4rem'
              }}
            >
              Studio Location & Booking
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: '#4b5563', fontSize: '0.875rem' }}>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <MapPin size={18} color="var(--accent-brand)" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span><strong>Studio:</strong> Pategna, Araria, Bihar</span>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <Phone size={17} color="var(--accent-brand)" style={{ flexShrink: 0, marginTop: '3px' }} />
                <div>
                  <span style={{ display: 'block', fontWeight: 600, color: '#111827' }}>Booking Open:</span>
                  <a href="tel:+916204792443" style={{ color: '#4b5563', textDecoration: 'none', display: 'block' }}>+91 6204792443</a>
                  <a href="tel:+917717705974" style={{ color: '#4b5563', textDecoration: 'none', display: 'block' }}>+91 7717705974</a>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <Mail size={17} color="var(--accent-brand)" style={{ flexShrink: 0 }} />
                <span>contact@pvmpstudio.com</span>
              </div>
            </div>
          </div>

          {/* Col 4: Private Journal Newsletter */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.825rem',
                fontWeight: 700,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: '#111827',
                marginBottom: '1.4rem'
              }}
            >
              Private Journal
            </h4>
            <p style={{ fontSize: '0.85rem', color: '#4b5563', marginBottom: '1.2rem', lineHeight: 1.6 }}>
              Receive exclusive wedding styling guides, date availability updates, and new print release previews.
            </p>

            {isSubscribed ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-brand)', fontSize: '0.85rem', fontWeight: 600 }}>
                <CheckCircle2 size={18} />
                <span>You are subscribed to the PVMP Journal.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  style={{
                    padding: '0.8rem 1rem',
                    background: '#ffffff',
                    border: '1px solid #d1d5db',
                    borderRadius: '4px',
                    color: '#111827',
                    fontSize: '0.85rem',
                    outline: 'none',
                    transition: 'border-color 0.2s'
                  }}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--accent-brand)')}
                  onBlur={(e) => (e.target.style.borderColor = '#d1d5db')}
                />
                <button
                  type="submit"
                  className="btn-primary"
                  style={{ padding: '0.75rem 1.4rem', fontSize: '0.78rem' }}
                >
                  Join Private List
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: '1px solid #e5e7eb',
            paddingTop: '2rem',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
            fontSize: '0.8rem',
            color: '#6b7280'
          }}
        >
          <div>
            © {new Date().getFullYear()} PVMP Studio Inc. All rights reserved. Master Archival Photography & Cinematography (India & Nepal).
          </div>

          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            <button
              onClick={() => handleNav('contact')}
              style={{ color: '#6b7280', fontSize: '0.8rem' }}
              onMouseEnter={(e) => (e.target.style.color = '#ff6600')}
              onMouseLeave={(e) => (e.target.style.color = '#6b7280')}
            >
              Privacy Policy
            </button>
            <button
              onClick={() => handleNav('contact')}
              style={{ color: '#6b7280', fontSize: '0.8rem' }}
              onMouseEnter={(e) => (e.target.style.color = '#ff6600')}
              onMouseLeave={(e) => (e.target.style.color = '#6b7280')}
            >
              Terms of Commission
            </button>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              aria-label="Scroll to top"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                color: '#ff6600',
                fontSize: '0.8rem',
                fontWeight: 600
              }}
            >
              <span>Back to Top</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
