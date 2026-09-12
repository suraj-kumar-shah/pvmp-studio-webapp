import React from 'react';
import { ShoppingBag, ArrowLeft, ArrowRight, ShieldCheck, Clock, Sparkles } from 'lucide-react';
import SectionHeading from '../components/common/SectionHeading';
import CartItem from '../components/cart/CartItem';
import CartSummary from '../components/cart/CartSummary';
import { useCart } from '../context/CartContext';

export const Cart = ({ setActivePage }) => {
  const { cartItems, clearCart } = useCart();

  return (
    <div style={{ paddingTop: 'var(--header-height)', minHeight: '85vh' }}>
      {/* Page Header */}
      <section
        style={{
          paddingTop: '4.5rem',
          paddingBottom: '3rem',
          backgroundColor: '#ffffff',
          borderBottom: '1px solid #f0f2f5'
        }}
      >
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'var(--accent-brand, #FF5500)',
                  display: 'block',
                  marginBottom: '0.4rem'
                }}
              >
                Your Selection
              </span>
              <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.4rem)', color: '#111827', marginTop: '0.4rem', fontFamily: 'var(--font-serif)', fontWeight: 400 }}>
                Commission & Keepsake Bag ({cartItems.length})
              </h1>
            </div>

            <button
              onClick={() => {
                setActivePage('packages');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                color: 'var(--accent-brand, #FF5500)',
                fontSize: '0.85rem',
                fontWeight: 600,
                background: 'transparent',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              <ArrowLeft size={16} />
              <span>Continue Browsing</span>
            </button>
          </div>
        </div>
      </section>

      {/* Main Cart Content */}
      <section className="section" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="container">
          {cartItems.length === 0 ? (
            <div
              style={{
                textAlign: 'center',
                padding: '5rem 2rem',
                background: '#ffffff',
                border: '1px solid #e5e7eb',
                borderRadius: '16px',
                maxWidth: '680px',
                margin: '0 auto',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)'
              }}
            >
              <div
                style={{
                  width: '74px',
                  height: '74px',
                  borderRadius: '50%',
                  background: 'rgba(255, 85, 0, 0.08)',
                  border: '1px solid rgba(255, 85, 0, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-brand, #FF5500)',
                  margin: '0 auto 1.5rem'
                }}
              >
                <ShoppingBag size={32} />
              </div>

              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: '#111827', marginBottom: '0.75rem', fontWeight: 500 }}>
                Your Atelier Bag is Currently Empty
              </h3>

              <p style={{ color: '#4b5563', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '2.5rem' }}>
                You have not selected any photography packages yet. Explore our royal wedding collections and reserve your wedding date with our master directory.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
                <button
                  onClick={() => {
                    setActivePage('packages');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="btn-primary"
                  style={{ padding: '0.95rem 2.2rem', fontSize: '0.85rem' }}
                >
                  <span>Explore Wedding Packages</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
          ) : (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
                gap: '3.5rem',
                alignItems: 'start'
              }}
            >
              {/* Left Column: Items List */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '0.75rem' }}>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    Reserved Items & Customizations
                  </span>
                  <button
                    onClick={clearCart}
                    style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textDecoration: 'underline' }}
                    onMouseEnter={(e) => (e.target.style.color = '#ff6b6b')}
                    onMouseLeave={(e) => (e.target.style.color = 'var(--text-muted)')}
                  >
                    Clear All
                  </button>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {cartItems.map((item) => (
                    <CartItem key={item.cartKey} item={item} />
                  ))}
                </div>
              </div>

              {/* Right Column: Investment Summary */}
              <div>
                <CartSummary onCheckoutComplete={() => setActivePage('home')} />
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Cart;
