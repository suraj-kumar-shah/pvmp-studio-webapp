import React, { useState } from 'react';
import SectionHeading from '../components/common/SectionHeading';
import ProductCard from '../components/products/ProductCard';
import BookingCTA from '../components/home/BookingCTA';
import { PRODUCTS, PRODUCT_CATEGORIES } from '../data/productData';

export const Products = ({ setActivePage, setSelectedProductId }) => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProducts = activeCategory === 'all'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <div style={{ paddingTop: 'var(--header-height)' }}>
      {/* Header */}
      <section
        style={{
          paddingTop: '3rem',
          paddingBottom: '2rem',
          backgroundColor: '#ffffff',
          textAlign: 'center'
        }}
      >
        <div className="container" style={{ maxWidth: '850px' }}>
          <h1
            style={{
              fontSize: 'clamp(2rem, 3.5vw, 2.85rem)',
              color: '#111827',
              marginBottom: '0.6rem',
              fontFamily: 'var(--font-serif)',
              fontWeight: 400
            }}
          >
            Custom Wedding Photo Albums
          </h1>
          <p style={{ fontSize: '1rem', color: '#6b7280', lineHeight: 1.6, margin: '0 auto', maxWidth: '680px' }}>
            Archival leather photo books, custom wedding albums, and fine-art wooden keepsake boxes handcrafted for generations.
          </p>
        </div>
      </section>

      {/* Main Catalog Grid */}
      <section className="section" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          {/* Category Filter Pills */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.65rem',
              justifyContent: 'center',
              marginBottom: '3.5rem'
            }}
          >
            {PRODUCT_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  style={{
                    padding: '0.65rem 1.4rem',
                    fontSize: '0.82rem',
                    fontWeight: isActive ? 700 : 500,
                    letterSpacing: '0.04em',
                    borderRadius: '9999px',
                    border: isActive ? '1px solid var(--accent-brand, #FF5500)' : '1px solid #e5e7eb',
                    background: isActive ? 'var(--accent-brand, #FF5500)' : '#f8f9fa',
                    color: isActive ? '#ffffff' : '#374151',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Products Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
              gap: '2.5rem'
            }}
          >
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelectProduct={(id) => {
                  setSelectedProductId(id);
                  setActivePage('product-details');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              />
            ))}
          </div>
        </div>
      </section>

      <BookingCTA setActivePage={setActivePage} />
    </div>
  );
};

export default Products;
