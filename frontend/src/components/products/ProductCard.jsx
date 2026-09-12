import React from 'react';
import { Star, ArrowRight, Sparkles, Sliders } from 'lucide-react';
import Badge from '../common/Badge';
import { useCart } from '../../context/CartContext';

export const ProductCard = ({ product, onSelectProduct }) => {
  const { formatPrice } = useCart();

  return (
    <div
      className="card-luxury"
      style={{
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        cursor: 'pointer',
        position: 'relative'
      }}
      onClick={() => onSelectProduct(product.id)}
    >
      {/* Product Image */}
      <div
        style={{
          position: 'relative',
          paddingTop: '75%',
          overflow: 'hidden',
          backgroundColor: '#f3f4f6'
        }}
      >
        <img
          src={product.images?.[0]}
          alt={product.name}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.5s ease'
          }}
          className="prod-img"
        />

        {product.badge && (
          <div style={{ position: 'absolute', top: '1rem', left: '1rem', zIndex: 2 }}>
            <Badge variant="gold">{product.badge}</Badge>
          </div>
        )}
      </div>

      {/* Info Section */}
      <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1, backgroundColor: '#ffffff' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
          <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent-brand, #FF5500)', fontWeight: 700 }}>
            {product.categoryLabel}
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: '#f59e0b', fontSize: '0.78rem' }}>
            <Star size={12} fill="#f59e0b" />
            <span style={{ fontWeight: 600, color: '#111827' }}>{product.rating}</span>
            <span style={{ color: '#6b7280', fontSize: '0.72rem' }}>({product.reviewCount})</span>
          </div>
        </div>

        <h3 style={{ fontSize: '1.2rem', color: '#111827', marginBottom: '0.5rem', lineHeight: 1.35, fontWeight: 500, fontFamily: 'var(--font-serif)' }}>
          {product.name}
        </h3>

        <p
          style={{
            fontSize: '0.85rem',
            color: '#4b5563',
            marginBottom: '1.25rem',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            lineHeight: 1.5
          }}
        >
          {product.shortDescription}
        </p>

        {/* Customizer Highlights */}
        {product.optionsConfig && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent-brand, #FF5500)', fontSize: '0.75rem', marginBottom: '1.2rem', fontWeight: 600 }}>
            <Sliders size={13} />
            <span>{product.optionsConfig.length} Bespoke Customization Options Available</span>
          </div>
        )}

        <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '0.85rem', borderTop: '1px solid #f0f2f5' }}>
          <div>
            <span style={{ fontSize: '0.7rem', color: '#6b7280', display: 'block', textTransform: 'uppercase', fontWeight: 600 }}>
              Base Price
            </span>
            <span style={{ fontFamily: 'var(--font-sans)', fontSize: '1.25rem', fontWeight: 700, color: '#111827' }}>
              {formatPrice(product.basePrice)}
            </span>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onSelectProduct(product.id);
            }}
            className="btn-secondary"
            style={{ padding: '0.55rem 1.1rem', fontSize: '0.75rem', gap: '0.4rem' }}
          >
            <span>Customize</span>
            <ArrowRight size={13} />
          </button>
        </div>
      </div>

      <style>{`
        .card-luxury:hover .prod-img {
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
};

export default ProductCard;
