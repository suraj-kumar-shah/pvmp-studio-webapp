import React, { useEffect } from 'react';
import { X, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import CartItem from './CartItem';
import CartSummary from './CartSummary';

export const CartDrawer = ({ setActivePage }) => {
  const { isCartOpen, setIsCartOpen, cartItems, clearCart } = useCart();

  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isCartOpen]);

  if (!isCartOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.45)',
        backdropFilter: 'blur(8px)',
        zIndex: 10000,
        display: 'flex',
        justifyContent: 'flex-end',
        animation: 'fadeIn 0.25s ease-out'
      }}
      onClick={() => setIsCartOpen(false)}
    >
      {/* Slide-over panel */}
      <div
        style={{
          width: '100%',
          maxWidth: '480px',
          height: '100%',
          backgroundColor: '#ffffff',
          borderLeft: '1px solid #e5e7eb',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '-10px 0 40px rgba(0, 0, 0, 0.12)',
          animation: 'slideLeft 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div
          style={{
            padding: '1.4rem 1.5rem',
            borderBottom: '1px solid #f0f2f5',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: '#ffffff'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <ShoppingBag size={20} color="var(--accent-brand, #FF5500)" />
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', color: '#111827', margin: 0 }}>
              Your Atelier Bag ({cartItems.length})
            </h3>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            {cartItems.length > 0 && (
              <button
                onClick={clearCart}
                style={{ fontSize: '0.75rem', color: '#6b7280', textDecoration: 'underline' }}
                onMouseEnter={(e) => (e.target.style.color = '#ef4444')}
                onMouseLeave={(e) => (e.target.style.color = '#6b7280')}
              >
                Clear All
              </button>
            )}

            <button
              onClick={() => setIsCartOpen(false)}
              aria-label="Close cart drawer"
              style={{
                background: '#f3f4f6',
                border: 'none',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#111827'
              }}
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Drawer Body - Items List */}
        <div
          style={{
            flex: 1,
            overflowY: 'auto',
            padding: '1.25rem',
            backgroundColor: '#ffffff'
          }}
        >
          {cartItems.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '4rem 1rem' }}>
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: '#f8f9fa',
                  border: '1px solid #e5e7eb',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.2rem',
                  color: '#9ca3af'
                }}
              >
                <ShoppingBag size={28} />
              </div>
              <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', color: '#111827', marginBottom: '0.5rem' }}>
                Your Bag is Empty
              </h4>
              <p style={{ color: '#6b7280', fontSize: '0.85rem', marginBottom: '1.8rem', lineHeight: 1.6 }}>
                Explore our wedding photography collections, bespoke packages, and services.
              </p>
              <button
                onClick={() => {
                  setIsCartOpen(false);
                  setActivePage('packages');
                }}
                className="btn-primary"
                style={{ fontSize: '0.8rem', padding: '0.75rem 1.6rem' }}
              >
                Explore Packages
              </button>
            </div>
          ) : (
            <div>
              {cartItems.map((item) => (
                <CartItem key={item.cartKey} item={item} />
              ))}
            </div>
          )}
        </div>

        {/* Drawer Footer - Summary & Actions */}
        {cartItems.length > 0 && (
          <div
            style={{
              padding: '1rem 1.25rem',
              borderTop: '1px solid #e5e7eb',
              background: '#f8f9fa'
            }}
          >
            <CartSummary isDrawer={true} onCheckoutComplete={() => setIsCartOpen(false)} />
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
