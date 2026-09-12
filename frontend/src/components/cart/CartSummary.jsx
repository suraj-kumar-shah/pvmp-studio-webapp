import React, { useState } from 'react';
import { ShieldCheck, Sparkles, Tag, ArrowRight, CheckCircle2, Lock, X } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useCart } from '../../context/CartContext';

export const CartSummary = ({ isDrawer = false, onCheckoutComplete }) => {
  const { subtotal, formatPrice, cartItems, clearCart, showToast } = useCart();
  const [couponCode, setCouponCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);
  const [isSubmittingOrder, setIsSubmittingOrder] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  // Form Fields for mock checkout
  const [customerInfo, setCustomerInfo] = useState({
    fullName: '',
    email: '',
    phone: '',
    eventDate: '',
    venueLocation: '',
    shippingAddress: '',
    notes: ''
  });

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (couponCode.trim().toUpperCase() === 'ROYAL10' || couponCode.trim().toUpperCase() === 'LUXURY10') {
      setDiscountPercent(10);
      showToast('10% Royal Atelier Courtesy Discount applied!');
    } else if (couponCode.trim().toUpperCase() === 'PRESTIGE15') {
      setDiscountPercent(15);
      showToast('15% Prestige Wedding Commission Discount applied!');
    } else {
      showToast('Invalid or expired coupon code. Try ROYAL10');
    }
  };

  const discountAmount = (subtotal * discountPercent) / 100;
  const finalTotal = subtotal - discountAmount;

  const handleProceedCheckout = () => {
    if (cartItems.length === 0) return;
    setIsCheckoutModalOpen(true);
  };

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    if (!customerInfo.fullName || !customerInfo.email || !customerInfo.phone) {
      showToast('Please fill in your name, email, and phone number.');
      return;
    }

    setIsSubmittingOrder(true);
    setTimeout(() => {
      setIsSubmittingOrder(false);
      setOrderConfirmed(true);

      // Launch golden confetti celebration
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#c5a880', '#dfb773', '#ffffff', '#e8e4dc']
        });
      } catch (err) {
        // silent fallback
      }

      showToast('Commission & Order Inquiry successfully submitted!');
      setTimeout(() => {
        clearCart();
        onCheckoutComplete?.();
      }, 3000);
    }, 1500);
  };

  return (
    <>
      <div
        style={{
          background: '#ffffff',
          border: '1px solid #e5e7eb',
          borderRadius: '12px',
          padding: isDrawer ? '1.25rem' : '1.8rem',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)'
        }}
      >
        <h3
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '1.4rem',
            color: '#111827',
            marginBottom: '1.2rem',
            borderBottom: '1px solid #f0f2f5',
            paddingBottom: '0.75rem'
          }}
        >
          Investment Summary
        </h3>

        {/* Breakdown */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.2rem', fontSize: '0.9rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', color: '#4b5563' }}>
            <span>Subtotal ({cartItems.length} items)</span>
            <span style={{ color: '#111827', fontWeight: 600 }}>{formatPrice(subtotal)}</span>
          </div>

          {discountPercent > 0 && (
            <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--accent-brand, #FF5500)' }}>
              <span>Courtesy Privilege ({discountPercent}%)</span>
              <span>-{formatPrice(discountAmount)}</span>
            </div>
          )}

          <div style={{ display: 'flex', justifyContent: 'space-between', color: '#4b5563' }}>
            <span>Insured Delivery (All India & Nepal)</span>
            <span style={{ color: 'var(--accent-brand, #FF5500)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>
              Complimentary
            </span>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', color: '#4b5563' }}>
            <span>Studio Concierge & Archive Guarantee</span>
            <span style={{ color: '#111827', fontSize: '0.8rem', fontWeight: 500 }}>Included (Lifetime)</span>
          </div>

          <div
            style={{
              borderTop: '1px solid #e5e7eb',
              paddingTop: '0.85rem',
              marginTop: '0.4rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline'
            }}
          >
            <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: '#111827' }}>
              Estimated Total
            </span>
            <span style={{ fontFamily: 'var(--font-sans)', fontSize: '1.4rem', fontWeight: 700, color: 'var(--accent-brand, #FF5500)' }}>
              {formatPrice(finalTotal)}
            </span>
          </div>
        </div>

        {/* Promo Code Input */}
        <form onSubmit={handleApplyCoupon} style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem' }}>
          <div style={{ position: 'relative', flex: 1 }}>
            <Tag size={14} color="var(--accent-brand, #FF5500)" style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)' }} />
            <input
              type="text"
              placeholder="Promo Code (e.g. ROYAL10)"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              style={{
                width: '100%',
                padding: '0.65rem 0.65rem 0.65rem 2rem',
                background: '#ffffff',
                border: '1.5px solid #d1d5db',
                borderRadius: '6px',
                color: '#111827',
                fontSize: '0.78rem'
              }}
            />
          </div>
          <button
            type="submit"
            className="btn-secondary"
            style={{ padding: '0.65rem 1rem', fontSize: '0.75rem', whiteSpace: 'nowrap' }}
          >
            Apply
          </button>
        </form>

        {/* Checkout Button */}
        <button
          onClick={handleProceedCheckout}
          disabled={cartItems.length === 0}
          className="btn-primary"
          style={{ width: '100%', padding: '0.95rem', fontSize: '0.85rem' }}
        >
          <span>Reserve Dates & Request Invoice</span>
          <ArrowRight size={16} />
        </button>

        {/* Guarantee Badge */}
        <div
          style={{
            marginTop: '1.2rem',
            paddingTop: '1rem',
            borderTop: '1px solid #f0f2f5',
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            color: '#6b7280',
            fontSize: '0.75rem'
          }}
        >
          <ShieldCheck size={18} color="var(--accent-brand, #FF5500)" style={{ flexShrink: 0 }} />
          <span>No instant card charge. Our studio concierge confirms date availability & customizes contracts directly.</span>
        </div>
      </div>

      {/* Checkout Modal Simulation */}
      {isCheckoutModalOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.45)',
            backdropFilter: 'blur(12px)',
            zIndex: 100000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
            overflowY: 'auto'
          }}
        >
          <div
            style={{
              background: '#ffffff',
              border: '1px solid #e5e7eb',
              borderRadius: '16px',
              maxWidth: '580px',
              width: '100%',
              padding: '2.2rem',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.15)',
              position: 'relative'
            }}
          >
            <button
              onClick={() => setIsCheckoutModalOpen(false)}
              aria-label="Close checkout modal"
              style={{
                position: 'absolute',
                top: '1.25rem',
                right: '1.25rem',
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

            {orderConfirmed ? (
              <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                <div
                  style={{
                    width: '68px',
                    height: '68px',
                    borderRadius: '50%',
                    background: 'rgba(255, 85, 0, 0.1)',
                    border: '2px solid var(--accent-brand, #FF5500)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.5rem'
                  }}
                >
                  <CheckCircle2 size={38} color="var(--accent-brand, #FF5500)" />
                </div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: '#111827', marginBottom: '0.8rem' }}>
                  Commission Inquiry Received
                </h3>
                <p style={{ color: '#4b5563', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                  Thank you, <strong>{customerInfo.fullName}</strong>. Our Master Director and Concierge team have received your order breakdown totaling <strong>{formatPrice(finalTotal)}</strong>. We will review your event date and contact you within 24 hours with the formal commission contract and invoice.
                </p>
                <div style={{ display: 'inline-block', padding: '0.5rem 1.2rem', background: '#f3f4f6', borderRadius: '6px', fontSize: '0.8rem', color: 'var(--accent-brand, #FF5500)', fontWeight: 600 }}>
                  Inquiry Reference ID: #PVMP-{Math.floor(100000 + Math.random() * 900000)}
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmitOrder}>
                <div style={{ marginBottom: '1.5rem' }}>
                  <span className="eyebrow no-prefix" style={{ fontSize: '0.7rem', color: 'var(--accent-brand, #FF5500)' }}>
                    PVMP Studio Private Concierge
                  </span>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.65rem', color: '#111827', marginTop: '0.25rem' }}>
                    Reserve Commission & Schedule Delivery
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: '#4b5563', marginTop: '0.35rem' }}>
                    Total Commitment: <strong style={{ color: 'var(--accent-brand, #FF5500)' }}>{formatPrice(finalTotal)}</strong> ({cartItems.length} items reserved)
                  </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', color: '#374151', fontWeight: 600, marginBottom: '0.35rem' }}>
                      Full Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Kabir Mehta"
                      value={customerInfo.fullName}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, fullName: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.7rem',
                        background: '#ffffff',
                        border: '1.5px solid #d1d5db',
                        borderRadius: '6px',
                        color: '#111827',
                        fontSize: '0.85rem'
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', color: '#374151', fontWeight: 600, marginBottom: '0.35rem' }}>
                      Email Address *
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="e.g. kabir@mehta.com"
                      value={customerInfo.email}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.7rem',
                        background: '#ffffff',
                        border: '1.5px solid #d1d5db',
                        borderRadius: '6px',
                        color: '#111827',
                        fontSize: '0.85rem'
                      }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', color: '#374151', fontWeight: 600, marginBottom: '0.35rem' }}>
                      Phone / WhatsApp *
                    </label>
                    <input
                      required
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={customerInfo.phone}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.7rem',
                        background: '#ffffff',
                        border: '1.5px solid #d1d5db',
                        borderRadius: '6px',
                        color: '#111827',
                        fontSize: '0.85rem'
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', color: '#374151', fontWeight: 600, marginBottom: '0.35rem' }}>
                      Wedding / Event Date
                    </label>
                    <input
                      type="date"
                      value={customerInfo.eventDate}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, eventDate: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.7rem',
                        background: '#ffffff',
                        border: '1.5px solid #d1d5db',
                        borderRadius: '6px',
                        color: '#111827',
                        fontSize: '0.85rem'
                      }}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ display: 'block', fontSize: '0.75rem', color: '#374151', fontWeight: 600, marginBottom: '0.35rem' }}>
                    Shipping / Atelier Delivery Address (For Albums & Prints)
                  </label>
                  <input
                    type="text"
                    placeholder="Street, City, Postal Code, Country"
                    value={customerInfo.shippingAddress}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, shippingAddress: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.7rem',
                      background: '#ffffff',
                      border: '1.5px solid #d1d5db',
                      borderRadius: '6px',
                      color: '#111827',
                      fontSize: '0.85rem'
                    }}
                  />
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', fontSize: '0.75rem', color: '#374151', fontWeight: 600, marginBottom: '0.35rem' }}>
                    Special Requests / Monogram Text / Notes
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Share any specific dates, venues, or embossing initials..."
                    value={customerInfo.notes}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, notes: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.7rem',
                      background: '#ffffff',
                      border: '1.5px solid #d1d5db',
                      borderRadius: '6px',
                      color: '#111827',
                      fontSize: '0.85rem'
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmittingOrder}
                  className="btn-primary"
                  style={{ width: '100%', padding: '0.95rem' }}
                >
                  <Lock size={16} />
                  <span>{isSubmittingOrder ? 'Submitting to Atelier Concierge...' : 'Submit Inquiry & Secure Hold'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default CartSummary;
