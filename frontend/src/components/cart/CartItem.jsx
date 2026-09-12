import React from 'react';
import { Trash2, Plus, Minus, Calendar, Check, Sparkles } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export const CartItem = ({ item }) => {
  const { updateQuantity, removeItem, formatPrice } = useCart();

  const isPackage = item.type === 'package';

  return (
    <div
      style={{
        display: 'flex',
        gap: '1rem',
        padding: '1.25rem',
        background: '#ffffff',
        border: '1px solid #e5e7eb',
        borderRadius: '10px',
        marginBottom: '0.85rem',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.04)'
      }}
    >
      {/* Thumbnail */}
      <div
        style={{
          width: '84px',
          height: '84px',
          borderRadius: '8px',
          overflow: 'hidden',
          flexShrink: 0,
          background: '#f3f4f6',
          border: '1px solid #e5e7eb'
        }}
      >
        <img
          src={item.image}
          alt={item.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>

      {/* Details */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.35rem' }}>
          <div>
            <span
              style={{
                display: 'inline-block',
                fontSize: '0.68rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: 'var(--accent-brand, #FF5500)',
                fontWeight: 700,
                marginBottom: '2px'
              }}
            >
              {item.category}
            </span>
            <h4 style={{ fontSize: '0.95rem', color: '#111827', fontWeight: 600, lineHeight: 1.3 }}>
              {item.name}
            </h4>
          </div>

          <button
            onClick={() => removeItem(item.cartKey)}
            aria-label="Remove item"
            style={{
              color: '#9ca3af',
              padding: '4px',
              transition: 'color 0.2s',
              background: 'transparent'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#ef4444')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#9ca3af')}
          >
            <Trash2 size={16} />
          </button>
        </div>

        {/* Selected Options Display (For Physical Products) */}
        {item.selectedOptions && Object.keys(item.selectedOptions).length > 0 && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', margin: '0.4rem 0' }}>
            {Object.entries(item.selectedOptions).map(([key, val]) => (
              <span
                key={key}
                style={{
                  fontSize: '0.7rem',
                  padding: '0.15rem 0.5rem',
                  background: '#f8f9fa',
                  border: '1px solid #e5e7eb',
                  borderRadius: '4px',
                  color: '#4b5563'
                }}
              >
                <strong style={{ color: '#111827', textTransform: 'capitalize' }}>{key}:</strong> {val}
              </span>
            ))}
          </div>
        )}

        {/* Custom Text / Engraving if any */}
        {item.customText && (
          <p style={{ fontSize: '0.72rem', color: 'var(--accent-brand, #FF5500)', margin: '0.2rem 0', fontWeight: 600 }}>
            <Sparkles size={11} style={{ display: 'inline', marginRight: '3px' }} />
            Engraving: "{item.customText}"
          </p>
        )}

        {/* Booking Details (For Packages) */}
        {isPackage && item.details && (
          <div style={{ fontSize: '0.75rem', color: '#4b5563', margin: '0.3rem 0' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <Calendar size={13} color="var(--accent-brand, #FF5500)" />
              {item.details.eventDate} ({item.details.duration})
            </span>
          </div>
        )}

        {/* Price & Quantity Adjuster */}
        <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '0.5rem' }}>
          {/* Quantity Controls */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              background: '#f8f9fa',
              border: '1px solid #e5e7eb',
              borderRadius: '6px'
            }}
          >
            <button
              onClick={() => updateQuantity(item.cartKey, item.quantity - 1)}
              style={{ padding: '0.25rem 0.55rem', color: '#111827' }}
              aria-label="Decrease quantity"
            >
              <Minus size={13} />
            </button>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, padding: '0 0.5rem', minWidth: '24px', textAlign: 'center', color: '#111827' }}>
              {item.quantity}
            </span>
            <button
              onClick={() => updateQuantity(item.cartKey, item.quantity + 1)}
              style={{ padding: '0.25rem 0.55rem', color: '#111827' }}
              aria-label="Increase quantity"
            >
              <Plus size={13} />
            </button>
          </div>

          {/* Unit & Total Price */}
          <div style={{ textAlign: 'right' }}>
            <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', fontWeight: 700, color: 'var(--accent-brand, #FF5500)' }}>
              {formatPrice(item.unitPrice * item.quantity)}
            </span>
            {item.quantity > 1 && (
              <span style={{ display: 'block', fontSize: '0.7rem', color: '#6b7280' }}>
                ({formatPrice(item.unitPrice)} each)
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
