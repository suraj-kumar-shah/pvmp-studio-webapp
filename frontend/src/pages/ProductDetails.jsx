import React, { useState, useEffect } from 'react';
import { ArrowLeft, Star, ShoppingBag, Plus, Minus, ShieldCheck, Sparkles, Check, Truck, Clock } from 'lucide-react';
import Badge from '../components/common/Badge';
import ProductOptionSelector from '../components/products/ProductOptionSelector';
import BookingCTA from '../components/home/BookingCTA';
import { PRODUCTS } from '../data/productData';
import { useCart } from '../context/CartContext';

export const ProductDetails = ({ productId, setActivePage, setSelectedProductId }) => {
  const { formatPrice, addProductToCart } = useCart();

  const product = PRODUCTS.find(p => p.id === productId) || PRODUCTS[0];

  // Active Image Preview Index
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  // Selected Options state: { size: '12x12', coverMaterial: 'leather-cognac', ... }
  const [selectedOptions, setSelectedOptions] = useState(() => {
    const initial = {};
    if (product.optionsConfig) {
      product.optionsConfig.forEach(conf => {
        initial[conf.id] = conf.defaultValue || conf.options[0]?.value;
      });
    }
    return initial;
  });

  // Quantity State
  const [quantity, setQuantity] = useState(1);

  // Custom Engraving Text state
  const [customEngravingText, setCustomEngravingText] = useState('');

  // Reset selected options when product changes
  useEffect(() => {
    const initial = {};
    if (product.optionsConfig) {
      product.optionsConfig.forEach(conf => {
        initial[conf.id] = conf.defaultValue || conf.options[0]?.value;
      });
    }
    setSelectedOptions(initial);
    setActiveImageIdx(0);
    setQuantity(1);
    setCustomEngravingText('');
  }, [product.id]);

  const handleOptionChange = (optionId, value) => {
    setSelectedOptions(prev => ({
      ...prev,
      [optionId]: value
    }));
  };

  // Calculate Unit Price with Dynamic Option Deltas
  let calculatedUnitPrice = product.basePrice;
  const activeOptionBreakdown = [];

  if (product.optionsConfig) {
    product.optionsConfig.forEach(conf => {
      const selectedVal = selectedOptions[conf.id];
      const matchedOpt = conf.options.find(o => o.value === selectedVal);
      if (matchedOpt) {
        if (matchedOpt.priceDelta) {
          calculatedUnitPrice += matchedOpt.priceDelta;
        }
        activeOptionBreakdown.push({
          label: conf.label,
          valueName: matchedOpt.label,
          delta: matchedOpt.priceDelta || 0
        });
      }
    });
  }

  const calculatedTotal = calculatedUnitPrice * quantity;

  const handleAddToCart = () => {
    addProductToCart(product, selectedOptions, quantity, calculatedUnitPrice, customEngravingText);
  };

  const images = product.images || [product.image];

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
              setActivePage('products');
              setSelectedProductId(null);
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
            <span>Back to Fine Art Store</span>
          </button>

          <Badge variant="gold">{product.categoryLabel}</Badge>
        </div>
      </div>

      {/* Main Interactive Customizer Section */}
      <section className="section" style={{ backgroundColor: '#ffffff', paddingTop: '3.5rem' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
              gap: '4rem',
              alignItems: 'start'
            }}
          >
            {/* Left Column: Multi-Image Showcase */}
            <div>
              {/* Main Image */}
              <div
                style={{
                  borderRadius: '12px',
                  overflow: 'hidden',
                  height: '460px',
                  backgroundColor: '#f8f9fa',
                  border: '1px solid #e5e7eb',
                  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.06)',
                  marginBottom: '1rem',
                  position: 'relative'
                }}
              >
                <img
                  src={images[activeImageIdx]}
                  alt={product.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              {/* Thumbnails Row */}
              {images.length > 1 && (
                <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '2rem' }}>
                  {images.map((imgUrl, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIdx(idx)}
                      style={{
                        width: '80px',
                        height: '80px',
                        borderRadius: '8px',
                        overflow: 'hidden',
                        border: activeImageIdx === idx ? '2px solid var(--accent-brand, #FF5500)' : '1px solid #e5e7eb',
                        opacity: activeImageIdx === idx ? 1 : 0.65,
                        cursor: 'pointer',
                        padding: 0
                      }}
                    >
                      <img src={imgUrl} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </button>
                  ))}
                </div>
              )}

              {/* Product Specifications & Features */}
              <div
                style={{
                  background: '#f8f9fa',
                  padding: '2rem',
                  borderRadius: '12px',
                  border: '1px solid #e5e7eb'
                }}
              >
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', color: '#111827', marginBottom: '1rem', fontWeight: 500 }}>
                  Artisanal Craftsmanship Details
                </h3>
                <p style={{ color: '#4b5563', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                  {product.description}
                </p>

                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  {product.features?.map((feat, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.85rem', color: '#111827' }}>
                      <Check size={15} color="var(--accent-brand, #FF5500)" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column: Dynamic Price Engine & Customization Form */}
            <div>
              {/* Product Title & Rating */}
              <div style={{ marginBottom: '1.5rem', borderBottom: '1px solid #f0f2f5', paddingBottom: '1.2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '0.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: '#f59e0b', fontSize: '0.85rem' }}>
                    <Star size={14} fill="#f59e0b" />
                    <strong>{product.rating}</strong>
                  </div>
                  <span style={{ color: '#6b7280', fontSize: '0.8rem' }}>• {product.reviewCount} Verified Client Commissions</span>
                  <span style={{ color: 'var(--accent-brand, #FF5500)', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.3rem', marginLeft: 'auto', fontWeight: 600 }}>
                    <Clock size={13} /> {product.leadTime}
                  </span>
                </div>

                <h1 style={{ fontSize: '2.2rem', color: '#111827', lineHeight: 1.2, marginBottom: '0.6rem', fontFamily: 'var(--font-serif)', fontWeight: 400 }}>
                  {product.name}
                </h1>
                <p style={{ color: '#4b5563', fontSize: '0.95rem', lineHeight: 1.6 }}>
                  {product.shortDescription}
                </p>
              </div>

              {/* Dynamic Live Price Breakdown Tag */}
              <div
                style={{
                  background: 'rgba(255, 85, 0, 0.05)',
                  border: '1px solid rgba(255, 85, 0, 0.2)',
                  borderRadius: '10px',
                  padding: '1.2rem 1.5rem',
                  marginBottom: '2rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <div>
                  <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--accent-brand, #FF5500)', letterSpacing: '0.1em', display: 'block', fontWeight: 700 }}>
                    Calculated Custom Unit Price
                  </span>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.6rem', marginTop: '0.2rem' }}>
                    <span style={{ fontFamily: 'var(--font-sans)', fontSize: '2rem', fontWeight: 700, color: 'var(--accent-brand, #FF5500)' }}>
                      {formatPrice(calculatedUnitPrice)}
                    </span>
                    {calculatedUnitPrice !== product.basePrice && (
                      <span style={{ fontSize: '0.85rem', color: '#6b7280' }}>
                        (Base: {formatPrice(product.basePrice)})
                      </span>
                    )}
                  </div>
                </div>

                {quantity > 1 && (
                  <div style={{ textAlign: 'right' }}>
                    <span style={{ fontSize: '0.72rem', color: '#6b7280', textTransform: 'uppercase' }}>Subtotal ({quantity} items)</span>
                    <span style={{ display: 'block', fontSize: '1.4rem', fontWeight: 700, color: '#111827' }}>
                      {formatPrice(calculatedTotal)}
                    </span>
                  </div>
                )}
              </div>

              {/* Customizable Option Selectors */}
              <div style={{ marginBottom: '2rem' }}>
                <span className="eyebrow no-prefix" style={{ fontSize: '0.75rem', color: 'var(--accent-brand, #FF5500)', display: 'block', marginBottom: '1.2rem', fontWeight: 700 }}>
                  Bespoke Specifications & Finishes
                </span>

                {product.optionsConfig?.map((config) => (
                  <ProductOptionSelector
                    key={config.id}
                    config={config}
                    selectedValue={selectedOptions[config.id]}
                    onChange={(val) => handleOptionChange(config.id, val)}
                  />
                ))}

                {/* Custom Personalization Monogram / Engraving Field */}
                <div style={{ marginTop: '1.5rem', paddingTop: '1.2rem', borderTop: '1px solid #f0f2f5' }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#111827', marginBottom: '0.4rem' }}>
                    Custom Foil Monogram / Engraving Initials (Optional):
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. A & K | 14.02.2025"
                    value={customEngravingText}
                    onChange={(e) => setCustomEngravingText(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      background: '#ffffff',
                      border: '1.5px solid #d1d5db',
                      borderRadius: '8px',
                      color: '#111827',
                      fontSize: '0.85rem',
                      outline: 'none'
                    }}
                  />
                  <span style={{ fontSize: '0.72rem', color: '#6b7280', marginTop: '0.35rem', display: 'block' }}>
                    Embossed precisely using heated brass typography plates in gold or blind deboss.
                  </span>
                </div>
              </div>

              {/* Real-time Option Price Breakdown Summary */}
              <div
                style={{
                  background: '#f8f9fa',
                  border: '1px solid #e5e7eb',
                  borderRadius: '10px',
                  padding: '1.2rem',
                  marginBottom: '2rem',
                  fontSize: '0.8rem'
                }}
              >
                <div style={{ color: 'var(--accent-brand, #FF5500)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.6rem' }}>
                  Live Configuration Summary:
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: '#4b5563' }}>
                    <span>Base Archival Product</span>
                    <span style={{ color: '#111827', fontWeight: 600 }}>{formatPrice(product.basePrice)}</span>
                  </div>
                  {activeOptionBreakdown.map((item, idx) => (
                    <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', color: '#4b5563' }}>
                      <span>{item.label}: <strong style={{ color: '#111827' }}>{item.valueName}</strong></span>
                      <span style={{ fontWeight: 500, color: item.delta > 0 ? 'var(--accent-brand, #FF5500)' : '#111827' }}>{item.delta > 0 ? `+${formatPrice(item.delta)}` : item.delta < 0 ? `-${formatPrice(Math.abs(item.delta))}` : 'Included'}</span>
                    </div>
                  ))}
                  {customEngravingText && (
                    <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--accent-brand, #FF5500)', fontWeight: 600 }}>
                      <span>Monogram: "{customEngravingText}"</span>
                      <span>Included</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Quantity Selector & Add to Bag Trigger */}
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1.5rem' }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    background: '#ffffff',
                    border: '1.5px solid #d1d5db',
                    borderRadius: '8px',
                    padding: '0.2rem'
                  }}
                >
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    style={{ padding: '0.75rem 0.95rem', color: '#111827' }}
                    aria-label="Decrease quantity"
                  >
                    <Minus size={15} />
                  </button>
                  <span style={{ minWidth: '36px', textAlign: 'center', fontWeight: 700, fontSize: '0.95rem', color: '#111827' }}>
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    style={{ padding: '0.75rem 0.95rem', color: '#111827' }}
                    aria-label="Increase quantity"
                  >
                    <Plus size={15} />
                  </button>
                </div>

                <button
                  onClick={handleAddToCart}
                  className="btn-primary"
                  style={{ flex: 1, padding: '1rem 1.8rem', fontSize: '0.875rem' }}
                >
                  <ShoppingBag size={18} />
                  <span>Add Customized Item to Bag • {formatPrice(calculatedTotal)}</span>
                </button>
              </div>

              {/* Reassurance Features */}
              <div style={{ display: 'flex', gap: '1.5rem', color: '#6b7280', fontSize: '0.78rem', paddingTop: '1rem', borderTop: '1px solid #f0f2f5' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <ShieldCheck size={16} color="var(--accent-brand, #FF5500)" />
                  100-Year Archival Guarantee
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Truck size={16} color="var(--accent-brand, #FF5500)" />
                  Insured Atelier Delivery
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BookingCTA setActivePage={setActivePage} />
    </div>
  );
};

export default ProductDetails;
