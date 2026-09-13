import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, MessageCircle, Clock } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useCart } from '../context/CartContext';

export const Contact = () => {
  const { showToast } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    eventDate: '',
    venueLocation: '',
    packageInterest: 'Gold Wedding Package',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) {
      showToast('Please enter your name and phone number.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      try {
        confetti({
          particleCount: 60,
          spread: 60,
          origin: { y: 0.6 },
          colors: ['#0A66C2', '#004182', '#378FE9', '#0f172a']
        });
      } catch (err) {}

      showToast('Message sent! We will contact you soon.');
    }, 800);
  };

  return (
    <div style={{ paddingTop: 'calc(var(--header-height) + 1rem)', paddingBottom: '4rem', backgroundColor: '#ffffff', minHeight: '100vh' }}>
      <div className="container" style={{ maxWidth: '1040px' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2rem, 3.2vw, 2.75rem)',
              color: '#0f172a',
              fontWeight: 500,
              margin: '0 0 0.5rem 0',
              lineHeight: 1.2
            }}
          >
            Get In Touch
          </h1>
          <p style={{ color: '#64748b', fontSize: '0.98rem', margin: 0, lineHeight: 1.5 }}>
            Send an inquiry for your wedding dates or contact us directly.
          </p>
        </div>

        {/* 2-Column Balanced Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(330px, 1fr))',
            gap: '2.2rem',
            alignItems: 'stretch'
          }}
        >
          {/* Left Card: Clean Form */}
          <div
            style={{
              background: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '16px',
              padding: '2.4rem',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}
          >
            {isSubmitted ? (
              <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                <CheckCircle2 size={48} color="#0A66C2" style={{ marginBottom: '1rem' }} />
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: '#0f172a', marginBottom: '0.5rem' }}>
                  Thank You!
                </h3>
                <p style={{ color: '#475569', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  We have received your message and our director will reach out to you shortly.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      fullName: '',
                      phone: '',
                      eventDate: '',
                      venueLocation: '',
                      packageInterest: 'Gold Signature',
                      message: ''
                    });
                  }}
                  style={{
                    padding: '0.75rem 1.6rem',
                    fontSize: '0.88rem',
                    background: '#0A66C2',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontWeight: 600,
                    boxShadow: '0 2px 8px rgba(10, 102, 194, 0.3)'
                  }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.9rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#334155', marginBottom: '0.35rem' }}>
                      Your Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Enter full name"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem 0.85rem',
                        border: '1px solid #cbd5e1',
                        borderRadius: '8px',
                        fontSize: '0.88rem',
                        color: '#0f172a',
                        background: '#ffffff',
                        boxSizing: 'border-box',
                        outline: 'none'
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#334155', marginBottom: '0.35rem' }}>
                      Phone / WhatsApp *
                    </label>
                    <input
                      required
                      type="tel"
                      placeholder="Contact number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem 0.85rem',
                        border: '1px solid #cbd5e1',
                        borderRadius: '8px',
                        fontSize: '0.88rem',
                        color: '#0f172a',
                        background: '#ffffff',
                        boxSizing: 'border-box',
                        outline: 'none'
                      }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.9rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#334155', marginBottom: '0.35rem' }}>
                      Wedding Date
                    </label>
                    <input
                      type="date"
                      value={formData.eventDate}
                      onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem 0.85rem',
                        border: '1px solid #cbd5e1',
                        borderRadius: '8px',
                        fontSize: '0.88rem',
                        color: '#0f172a',
                        background: '#ffffff',
                        boxSizing: 'border-box',
                        outline: 'none'
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#334155', marginBottom: '0.35rem' }}>
                      City / Location
                    </label>
                    <input
                      type="text"
                      placeholder="City or venue"
                      value={formData.venueLocation}
                      onChange={(e) => setFormData({ ...formData, venueLocation: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem 0.85rem',
                        border: '1px solid #cbd5e1',
                        borderRadius: '8px',
                        fontSize: '0.88rem',
                        color: '#0f172a',
                        background: '#ffffff',
                        boxSizing: 'border-box',
                        outline: 'none'
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#334155', marginBottom: '0.35rem' }}>
                    Service / Collection of Interest
                  </label>
                  <select
                    value={formData.packageInterest}
                    onChange={(e) => setFormData({ ...formData, packageInterest: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 0.85rem',
                      border: '1px solid #cbd5e1',
                      borderRadius: '8px',
                      fontSize: '0.88rem',
                      color: '#0f172a',
                      background: '#ffffff',
                      boxSizing: 'border-box',
                      outline: 'none'
                    }}
                  >
                    <option value="Silver Collection">Silver Collection</option>
                    <option value="Gold Signature">Gold Signature (Most Popular)</option>
                    <option value="Premium Bespoke">Premium Bespoke (Ultra Luxury)</option>
                    <option value="Romantic Pre-Wedding">Romantic Pre-Wedding & Teaser</option>
                    <option value="Pure Cinema 4K Documentary">Pure Cinema 4K Documentary</option>
                    <option value="Events & Celebrations">Events & Celebrations</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#334155', marginBottom: '0.35rem' }}>
                    Message (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Share your wedding dates, venue, or special requests..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 0.85rem',
                      border: '1px solid #cbd5e1',
                      borderRadius: '8px',
                      fontSize: '0.88rem',
                      color: '#0f172a',
                      background: '#ffffff',
                      boxSizing: 'border-box',
                      outline: 'none',
                      resize: 'none'
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    width: '100%',
                    padding: '0.9rem',
                    background: '#0A66C2',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '0.92rem',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    cursor: 'pointer',
                    marginTop: '0.3rem',
                    boxShadow: '0 4px 14px rgba(10, 102, 194, 0.3)',
                    transition: 'all 0.2s ease'
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
                  <Send size={16} />
                  <span>{isSubmitting ? 'Sending...' : 'Send Inquiry'}</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Card: Direct Contact Details */}
          <div
            style={{
              background: '#f8fafc',
              border: '1px solid #e2e8f0',
              borderRadius: '16px',
              padding: '2.4rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.02)'
            }}
          >
            <div>
              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.5rem',
                  color: '#0f172a',
                  fontWeight: 500,
                  margin: '0 0 0.4rem 0'
                }}
              >
                Direct Contact & Bookings
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.9rem', margin: '0 0 2rem 0', lineHeight: 1.5 }}>
                Booking Open for all weddings, pre-weddings, and destination events across India & Nepal.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {/* WhatsApp & Phone */}
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      background: 'rgba(10, 102, 194, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <Phone size={18} color="#0A66C2" />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.76rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 700 }}>
                      Call / WhatsApp Booking
                    </div>
                    <div style={{ marginTop: '0.35rem', display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                      <a href="tel:+916204792443" style={{ color: '#0f172a', fontWeight: 600, textDecoration: 'none', fontSize: '0.98rem' }}>
                        +91 6204792443
                      </a>
                      <a href="tel:+917717705974" style={{ color: '#0f172a', fontWeight: 600, textDecoration: 'none', fontSize: '0.98rem' }}>
                        +91 7717705974
                      </a>
                    </div>
                  </div>
                </div>

                {/* Studio Location */}
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      background: 'rgba(10, 102, 194, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <MapPin size={18} color="#0A66C2" />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.76rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 700 }}>
                      Studio Location
                    </div>
                    <div style={{ color: '#0f172a', fontWeight: 600, fontSize: '0.95rem', marginTop: '0.25rem' }}>
                      Pategna, Araria, Bihar
                    </div>
                    <div style={{ color: '#64748b', fontSize: '0.82rem', marginTop: '0.15rem' }}>
                      Available for shoots across India & Nepal
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      background: 'rgba(10, 102, 194, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <Mail size={18} color="#0A66C2" />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.76rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 700 }}>
                      Email
                    </div>
                    <a href="mailto:contact@pvmpstudio.com" style={{ color: '#0f172a', fontWeight: 600, fontSize: '0.92rem', marginTop: '0.25rem', textDecoration: 'none', display: 'block' }}>
                      contact@pvmpstudio.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Service Note */}
            <div
              style={{
                marginTop: '2.5rem',
                paddingTop: '1.2rem',
                borderTop: '1px solid #e2e8f0',
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                color: '#64748b',
                fontSize: '0.84rem'
              }}
            >
              <Clock size={16} color="#0A66C2" />
              <span>Direct Booking Lines Open Now</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
