import React, { useState } from 'react';
import { Mail, Phone, MapPin, Award, ArrowUp, CheckCircle2, ArrowRight } from 'lucide-react';
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
        backgroundColor: '#0A66C2',
        color: '#ffffff',
        paddingTop: '4.5rem',
        paddingBottom: '2.5rem',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* Main 4-Column Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '3rem',
            marginBottom: '4rem'
          }}
        >
          {/* Col 1: Brand & Philosophy */}
          <div style={{ maxWidth: '340px' }}>
            <div style={{ marginBottom: '1rem' }}>
              <span
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.9rem',
                  letterSpacing: '0.1em',
                  fontWeight: 600,
                  color: '#ffffff',
                  display: 'block'
                }}
              >
                PVMP STUDIO
              </span>
            </div>

            <p style={{ fontSize: '0.88rem', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.65, marginBottom: '1.4rem' }}>
              Crafting timeless visual heirlooms and cinema-grade wedding documentaries for discerning families across India and Nepal.
            </p>

            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.55rem',
                background: 'rgba(255, 255, 255, 0.12)',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                padding: '0.4rem 0.85rem',
                borderRadius: '9999px',
                color: '#ffffff',
                fontSize: '0.76rem',
                fontWeight: 600
              }}
            >
              <Award size={15} color="#ffffff" />
              <span>Ranked Top Luxury Wedding Studio 2024</span>
            </div>
          </div>

          {/* Col 2: Navigation & Services */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.8rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#ffffff',
                marginBottom: '1.25rem'
              }}
            >
              Our Services
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {[
                { label: 'Wedding Photography', page: 'services' },
                { label: 'Pre-Wedding & Teasers', page: 'services' },
                { label: 'Cinematography Films', page: 'services' },
                { label: 'Editorial Portraits', page: 'services' },
                { label: 'Events & Celebrations', page: 'services' },
                { label: 'Handcrafted Albums', page: 'packages' }
              ].map((item, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => handleNav(item.page)}
                    style={{
                      color: 'rgba(255, 255, 255, 0.85)',
                      fontSize: '0.88rem',
                      textAlign: 'left',
                      background: 'none',
                      border: 'none',
                      padding: 0,
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#ffffff';
                      e.currentTarget.style.transform = 'translateX(4px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'rgba(255, 255, 255, 0.85)';
                      e.currentTarget.style.transform = 'none';
                    }}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Studio Location & Direct Booking */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.8rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#ffffff',
                marginBottom: '1.25rem'
              }}
            >
              Studio Location & Booking
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: 'rgba(255, 255, 255, 0.9)', fontSize: '0.88rem' }}>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(255, 255, 255, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                  <MapPin size={14} color="#ffffff" />
                </div>
                <span><strong>Studio:</strong> Pategna, Araria, Bihar (Serving India & Nepal)</span>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(255, 255, 255, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                  <Phone size={14} color="#ffffff" />
                </div>
                <div>
                  <span style={{ display: 'block', fontWeight: 600, color: '#ffffff' }}>Direct Booking:</span>
                  <a href="tel:+916204792443" style={{ color: 'rgba(255, 255, 255, 0.9)', textDecoration: 'none', display: 'block', marginTop: '1px' }}>+91 6204792443</a>
                  <a href="tel:+917717705974" style={{ color: 'rgba(255, 255, 255, 0.9)', textDecoration: 'none', display: 'block' }}>+91 7717705974</a>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(255, 255, 255, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Mail size={14} color="#ffffff" />
                </div>
                <a href="mailto:contact@pvmpstudio.com" style={{ color: 'rgba(255, 255, 255, 0.9)', textDecoration: 'none' }}>
                  contact@pvmpstudio.com
                </a>
              </div>
            </div>
          </div>

          {/* Col 4: Private Journal Newsletter */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.8rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#ffffff',
                marginBottom: '1.25rem'
              }}
            >
              Private Journal
            </h4>
            <p style={{ fontSize: '0.86rem', color: 'rgba(255, 255, 255, 0.85)', marginBottom: '1.1rem', lineHeight: 1.55 }}>
              Receive exclusive wedding styling guides, date availability updates, and new gallery releases.
            </p>

            {isSubscribed ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#ffffff', fontSize: '0.85rem', fontWeight: 600, background: 'rgba(255, 255, 255, 0.15)', padding: '0.8rem', borderRadius: '8px' }}>
                <CheckCircle2 size={18} color="#ffffff" />
                <span>You are subscribed to the PVMP Journal.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  style={{
                    padding: '0.75rem 0.95rem',
                    background: '#ffffff',
                    border: 'none',
                    borderRadius: '8px',
                    color: '#0f172a',
                    fontSize: '0.86rem',
                    outline: 'none',
                    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.08)'
                  }}
                />
                <button
                  type="submit"
                  style={{
                    padding: '0.75rem 1.4rem',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    background: '#0A66C2',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    boxShadow: '0 4px 14px rgba(0, 0, 0, 0.15)',
                    transition: 'all 0.2s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.45rem'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#004182';
                    e.currentTarget.style.transform = 'translateY(-1px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#0A66C2';
                    e.currentTarget.style.transform = 'none';
                  }}
                >
                  <span>Join Private List</span>
                  <ArrowRight size={14} />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.2)',
            paddingTop: '1.8rem',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
            fontSize: '0.8rem',
            color: 'rgba(255, 255, 255, 0.8)'
          }}
        >
          <div>
            © {new Date().getFullYear()} PVMP Studio Inc. All rights reserved. Master Archival Photography & Cinematography (India & Nepal).
          </div>

          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            <button
              onClick={() => handleNav('contact')}
              style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '0.8rem', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
              onMouseEnter={(e) => (e.target.style.color = '#ffffff')}
              onMouseLeave={(e) => (e.target.style.color = 'rgba(255, 255, 255, 0.85)')}
            >
              Privacy Policy
            </button>
            <button
              onClick={() => handleNav('contact')}
              style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '0.8rem', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
              onMouseEnter={(e) => (e.target.style.color = '#ffffff')}
              onMouseLeave={(e) => (e.target.style.color = 'rgba(255, 255, 255, 0.85)')}
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
                color: '#ffffff',
                fontSize: '0.8rem',
                fontWeight: 700,
                background: 'rgba(255, 255, 255, 0.15)',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                padding: '0.35rem 0.75rem',
                borderRadius: '9999px',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#ffffff';
                e.currentTarget.style.color = '#0A66C2';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                e.currentTarget.style.color = '#ffffff';
              }}
            >
              <span>Back to Top</span>
              <ArrowUp size={13} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
