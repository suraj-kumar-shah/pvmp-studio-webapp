import React from 'react';
import { Check } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export const ProductOptionSelector = ({ config, selectedValue, onChange }) => {
  const { formatPrice } = useCart();

  const renderOptionDelta = (delta) => {
    if (!delta || delta === 0) return null;
    return (
      <span style={{ fontSize: '0.72rem', color: 'var(--accent-brand, #FF5500)', marginLeft: '0.4rem', fontWeight: 600 }}>
        {delta > 0 ? `(+${formatPrice(delta)})` : `(-${formatPrice(Math.abs(delta))})`}
      </span>
    );
  };

  return (
    <div style={{ marginBottom: '1.6rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.6rem' }}>
        <label style={{ fontSize: '0.85rem', fontWeight: 600, color: '#111827', letterSpacing: '0.02em' }}>
          {config.label}
        </label>
        {config.type === 'color-swatch' && (
          <span style={{ fontSize: '0.78rem', color: 'var(--accent-brand, #FF5500)', fontWeight: 600 }}>
            {config.options.find(o => o.value === selectedValue)?.label}
          </span>
        )}
      </div>

      {/* 1. Color / Material Swatches */}
      {config.type === 'color-swatch' && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem' }}>
          {config.options.map((opt) => {
            const isSelected = selectedValue === opt.value;
            return (
              <button
                key={opt.value}
                type="button"
                onClick={() => onChange(opt.value)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.45rem 0.85rem',
                  borderRadius: '6px',
                  background: isSelected ? 'rgba(255, 85, 0, 0.08)' : '#f8f9fa',
                  border: isSelected ? '1.5px solid var(--accent-brand, #FF5500)' : '1px solid #e5e7eb',
                  color: isSelected ? '#111827' : '#4b5563',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                <span
                  style={{
                    width: '18px',
                    height: '18px',
                    borderRadius: '50%',
                    backgroundColor: opt.colorHex,
                    border: '1px solid rgba(0, 0, 0, 0.15)',
                    flexShrink: 0
                  }}
                />
                <span style={{ fontSize: '0.78rem', fontWeight: isSelected ? 700 : 500 }}>
                  {opt.label}
                </span>
                {renderOptionDelta(opt.priceDelta)}
              </button>
            );
          })}
        </div>
      )}

      {/* 2. Select Dropdowns */}
      {config.type === 'select' && (
        <div style={{ position: 'relative' }}>
          <select
            value={selectedValue}
            onChange={(e) => onChange(e.target.value)}
            style={{
              width: '100%',
              padding: '0.85rem 1rem',
              backgroundColor: '#ffffff',
              color: '#111827',
              border: '1.5px solid #d1d5db',
              borderRadius: '8px',
              fontSize: '0.85rem',
              outline: 'none',
              cursor: 'pointer'
            }}
          >
            {config.options.map((opt) => (
              <option key={opt.value} value={opt.value} style={{ background: '#ffffff', color: '#111827' }}>
                {opt.label} {opt.priceDelta ? (opt.priceDelta > 0 ? ` (+${formatPrice(opt.priceDelta)})` : ` (-${formatPrice(Math.abs(opt.priceDelta))})`) : ''}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* 3. Radio Cards */}
      {config.type === 'radio' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.6rem' }}>
          {config.options.map((opt) => {
            const isSelected = selectedValue === opt.value;
            return (
              <button
                key={opt.value}
                type="button"
                onClick={() => onChange(opt.value)}
                style={{
                  padding: '0.8rem 1rem',
                  textAlign: 'left',
                  borderRadius: '8px',
                  background: isSelected ? 'rgba(255, 85, 0, 0.06)' : '#ffffff',
                  border: isSelected ? '1.5px solid var(--accent-brand, #FF5500)' : '1px solid #e5e7eb',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
              >
                <div>
                  <div style={{ fontSize: '0.82rem', fontWeight: isSelected ? 700 : 500, color: isSelected ? '#111827' : '#4b5563' }}>
                    {opt.label}
                  </div>
                  {renderOptionDelta(opt.priceDelta)}
                </div>
                {isSelected && <Check size={16} color="var(--accent-brand, #FF5500)" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ProductOptionSelector;
