import React, { useState, useEffect, useRef } from 'react';
import { ShoppingBag, Menu, Globe, ChevronDown, Sparkles, Calendar, MessageSquare } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import MobileMenu from './MobileMenu';
import QuickBookingModal from '../common/QuickBookingModal';

export const Header = ({ activePage, setActivePage, setSelectedProjectId, setSelectedPackageId, setSelectedProductId }) => {
  const { totalItemsCount, setIsCartOpen, currency, setCurrency, currencies } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
  const [isQuickBookingOpen, setIsQuickBookingOpen] = useState(false);
  const currencyDropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (currencyDropdownRef.current && !currencyDropdownRef.current.contains(event.target)) {
        setIsCurrencyOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navItems = [
    { id: 'about', label: 'The Studio' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'packages', label: 'Packages' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    if (pageId === 'portfolio') setSelectedProjectId?.(null);
    if (pageId === 'packages') setSelectedPackageId?.(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCurrencyChange = (currKey) => {
    setCurrency(currKey);
    setIsCurrencyOpen(false);
  };

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '76px',
          zIndex: 1000,
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          backgroundColor: '#ffffff',
          boxShadow: isScrolled ? '0 4px 20px rgba(0, 0, 0, 0.04)' : 'none',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <div
          className="container-wide"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%'
          }}
        >
          {/* Brand Typographic Identity Lockup */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('home');
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              userSelect: 'none'
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.75rem',
                letterSpacing: '0.12em',
                fontWeight: 600,
                color: 'var(--accent-brand)',
                lineHeight: 1,
                display: 'inline-block'
              }}
            >
              PVMP STUDIO
            </span>
          </a>

          {/* Center Navigation Links */}
          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.8rem'
            }}
            className="desktop-nav"
          >
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  style={{
                    color: isActive ? 'var(--accent-brand)' : '#374151',
                    fontSize: '0.76rem',
                    fontWeight: isActive ? 700 : 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                    whiteSpace: 'nowrap',
                    position: 'relative',
                    padding: '0.55rem 0.2rem',
                    transition: 'color 0.2s ease',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) e.currentTarget.style.color = 'var(--accent-brand)';
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) e.currentTarget.style.color = '#374151';
                  }}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Actions: Currency, Cart, Book Consultation CTA */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.25rem'
            }}
          >
            {/* Currency Selector (Simple & Clean) */}
            <div style={{ position: 'relative' }} ref={currencyDropdownRef} className="desktop-currency">
              <button
                onClick={() => setIsCurrencyOpen(!isCurrencyOpen)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  padding: '0.4rem 0.2rem',
                  background: 'none',
                  border: 'none',
                  color: '#4b5563',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  letterSpacing: '0.04em',
                  whiteSpace: 'nowrap',
                  cursor: 'pointer',
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-brand)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#4b5563')}
              >
                <span>{currencies[currency]?.code || 'INR'} ({currencies[currency]?.symbol || '₹'})</span>
                <ChevronDown size={12} style={{ opacity: 0.6 }} />
              </button>

              {isCurrencyOpen && (
                <div
                  style={{
                    position: 'absolute',
                    top: 'calc(100% + 8px)',
                    right: 0,
                    minWidth: '150px',
                    background: '#ffffff',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                    boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
                    zIndex: 100,
                    overflow: 'hidden',
                    padding: '4px 0'
                  }}
                >
                  {Object.keys(currencies).map((currKey) => {
                    const isSelected = currency === currKey;
                    return (
                      <button
                        key={currKey}
                        onClick={() => handleCurrencyChange(currKey)}
                        style={{
                          width: '100%',
                          textAlign: 'left',
                          padding: '0.55rem 0.9rem',
                          fontSize: '0.76rem',
                          fontWeight: isSelected ? 700 : 500,
                          color: isSelected ? 'var(--accent-brand)' : '#1f2937',
                          background: isSelected ? 'rgba(255, 85, 0, 0.06)' : 'transparent',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          border: 'none',
                          cursor: 'pointer',
                          transition: 'background 0.15s ease'
                        }}
                        onMouseEnter={(e) => {
                          if (!isSelected) e.currentTarget.style.background = '#f9fafb';
                        }}
                        onMouseLeave={(e) => {
                          if (!isSelected) e.currentTarget.style.background = 'transparent';
                        }}
                      >
                        <span>{currencies[currKey].label}</span>
                        {isSelected && <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--accent-brand)' }} />}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Shopping / Booking Cart Bag Icon (Simple & Borderless) */}
            <button
              onClick={() => setIsCartOpen(true)}
              aria-label="Open Booking Cart"
              style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '32px',
                height: '32px',
                background: 'none',
                border: 'none',
                color: '#374151',
                cursor: 'pointer',
                transition: 'color 0.2s ease, transform 0.2s ease',
                padding: 0
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--accent-brand)';
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#374151';
                e.currentTarget.style.transform = 'none';
              }}
            >
              <ShoppingBag size={20} strokeWidth={1.75} />
              {totalItemsCount > 0 && (
                <span
                  style={{
                    position: 'absolute',
                    top: '-2px',
                    right: '-6px',
                    background: 'var(--accent-brand)',
                    color: '#ffffff',
                    fontSize: '0.62rem',
                    fontWeight: 700,
                    minWidth: '16px',
                    height: '16px',
                    padding: '0 3px',
                    borderRadius: '9999px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 2px 5px rgba(255, 85, 0, 0.35)'
                  }}
                >
                  {totalItemsCount}
                </span>
              )}
            </button>

            {/* Book Session CTA (Opens Interactive Date & Availability Modal) */}
            <button
              onClick={() => setIsQuickBookingOpen(true)}
              className="desktop-inquire-btn"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.4rem',
                padding: '0.55rem 1.25rem',
                backgroundColor: 'var(--accent-brand)',
                color: '#ffffff',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.8rem',
                fontWeight: 700,
                letterSpacing: '0.03em',
                whiteSpace: 'nowrap',
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                boxShadow: '0 2px 10px rgba(10, 102, 194, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--accent-brand-hover)';
                e.currentTarget.style.transform = 'translateY(-1px)';
                e.currentTarget.style.boxShadow = '0 6px 18px rgba(10, 102, 194, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--accent-brand)';
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = '0 2px 10px rgba(10, 102, 194, 0.3)';
              }}
            >
              <Calendar size={15} />
              <span>Book Session</span>
            </button>

            {/* Mobile Hamburger Drawer Trigger */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="mobile-hamburger-btn"
              aria-label="Toggle navigation menu"
              style={{
                display: 'none',
                alignItems: 'center',
                justifyContent: 'center',
                width: '36px',
                height: '36px',
                borderRadius: '6px',
                background: '#f9fafb',
                border: '1px solid #e5e7eb',
                color: '#111827',
                cursor: 'pointer'
              }}
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Interactive Quick Booking & Date Availability Modal */}
      <QuickBookingModal
        isOpen={isQuickBookingOpen}
        onClose={() => setIsQuickBookingOpen(false)}
        setActivePage={handleNavClick}
      />

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        activePage={activePage}
        setActivePage={handleNavClick}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenQuickBooking={() => setIsQuickBookingOpen(true)}
      />

      <style>{`
        @media (max-width: 1080px) {
          .desktop-nav {
            display: none !important;
          }
          .desktop-currency {
            display: none !important;
          }
          .desktop-inquire-btn {
            display: none !important;
          }
          .mobile-hamburger-btn {
            display: flex !important;
          }
        }
      `}</style>
    </>
  );
};

export default Header;
