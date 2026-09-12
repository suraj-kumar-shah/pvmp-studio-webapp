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
          colors: ['#FF5500', '#111827', '#e5e7eb']
        });
      } catch (err) {}

      showToast('Message sent! We will contact you soon.');
    }, 800);
  };

  return (
    <div style={{ paddingTop: 'calc(var(--header-height) + 0.5rem)', paddingBottom: '3rem', backgroundColor: '#ffffff', minHeight: '100vh' }}>
      <div className="container" style={{ maxWidth: '1040px' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.85rem, 3vw, 2.5rem)',
              color: '#111827',
              fontWeight: 400,
              margin: '0 0 0.35rem 0'
            }}
          >
            Get In Touch
          </h1>
          <p style={{ color: '#6b7280', fontSize: '0.95rem', margin: 0 }}>
            Send an inquiry for your wedding dates or contact us directly.
          </p>
        </div>

        {/* 2-Column Balanced Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(330px, 1fr))',
            gap: '2rem',
            alignItems: 'stretch'
          }}
        >
          {/* Left Card: Clean Form */}
          <div
            style={{
              background: '#ffffff',
              border: '1px solid #e5e7eb',
              borderRadius: '12px',
              padding: '2.2rem',
              boxShadow: '0 2px 12px rgba(0, 0, 0, 0.03)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}
          >
            {isSubmitted ? (
              <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                <CheckCircle2 size={44} color="#FF5500" style={{ marginBottom: '1rem' }} />
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: '#111827', marginBottom: '0.5rem' }}>
                  Thank You!
                </h3>
                <p style={{ color: '#4b5563', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  We have received your message and will reach out to you shortly.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      fullName: '',
                      phone: '',
                      eventDate: '',
                      venueLocation: '',
                      packageInterest: 'Gold Wedding Package',
                      message: ''
                    });
                  }}
                  style={{
                    padding: '0.7rem 1.6rem',
                    fontSize: '0.88rem',
                    background: '#111827',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontWeight: 500
                  }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.9rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 500, color: '#374151', marginBottom: '0.3rem' }}>
                      Your Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Your full name"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.7rem 0.85rem',
                        border: '1px solid #d1d5db',
                        borderRadius: '6px',
                        fontSize: '0.88rem',
                        color: '#111827',
                        background: '#ffffff',
                        boxSizing: 'border-box',
                        outline: 'none'
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 500, color: '#374151', marginBottom: '0.3rem' }}>
                      Phone / WhatsApp *
                    </label>
                    <input
                      required
                      type="tel"
                      placeholder="Your contact number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.7rem 0.85rem',
                        border: '1px solid #d1d5db',
                        borderRadius: '6px',
                        fontSize: '0.88rem',
                        color: '#111827',
                        background: '#ffffff',
                        boxSizing: 'border-box',
                        outline: 'none'
                      }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.9rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 500, color: '#374151', marginBottom: '0.3rem' }}>
                      Wedding Date
                    </label>
                    <input
                      type="date"
                      value={formData.eventDate}
                      onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.7rem 0.85rem',
                        border: '1px solid #d1d5db',
                        borderRadius: '6px',
                        fontSize: '0.88rem',
                        color: '#111827',
                        background: '#ffffff',
                        boxSizing: 'border-box',
                        outline: 'none'
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 500, color: '#374151', marginBottom: '0.3rem' }}>
                      City / Location
                    </label>
                    <input
                      type="text"
                      placeholder="Event city or venue"
                      value={formData.venueLocation}
                      onChange={(e) => setFormData({ ...formData, venueLocation: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.7rem 0.85rem',
                        border: '1px solid #d1d5db',
                        borderRadius: '6px',
                        fontSize: '0.88rem',
                        color: '#111827',
                        background: '#ffffff',
                        boxSizing: 'border-box',
                        outline: 'none'
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 500, color: '#374151', marginBottom: '0.3rem' }}>
                    Package of Interest
                  </label>
                  <select
                    value={formData.packageInterest}
                    onChange={(e) => setFormData({ ...formData, packageInterest: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.7rem 0.85rem',
                      border: '1px solid #d1d5db',
                      borderRadius: '6px',
                      fontSize: '0.88rem',
                      color: '#111827',
                      background: '#ffffff',
                      boxSizing: 'border-box',
                      outline: 'none'
                    }}
                  >
                    <option value="Silver Wedding Package">Silver Wedding Package (2 Days Coverage)</option>
                    <option value="Gold Wedding Package">Gold Wedding Package (2 Days Coverage)</option>
                    <option value="Premium Wedding Package">Premium Wedding Package (2 Days Coverage)</option>
                    <option value="Pre-Wedding Shoot">Pre-Wedding Shoot & Film</option>
                    <option value="Custom Package">Custom Package</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 500, color: '#374151', marginBottom: '0.3rem' }}>
                    Message (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your wedding..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.7rem 0.85rem',
                      border: '1px solid #d1d5db',
                      borderRadius: '6px',
                      fontSize: '0.88rem',
                      color: '#111827',
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
                    padding: '0.85rem',
                    background: '#FF5500',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '6px',
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    cursor: 'pointer',
                    marginTop: '0.3rem'
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
              background: '#f9fafb',
              border: '1px solid #e5e7eb',
              borderRadius: '12px',
              padding: '2.2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.4rem',
                  color: '#111827',
                  fontWeight: 500,
                  margin: '0 0 0.4rem 0'
                }}
              >
                Direct Contact
              </h3>
              <p style={{ color: '#6b7280', fontSize: '0.88rem', margin: '0 0 1.8rem 0' }}>
                We are available to answer any questions regarding availability and coverage.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
                {/* WhatsApp & Phone */}
                <div style={{ display: 'flex', gap: '0.9rem', alignItems: 'flex-start' }}>
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '8px',
                      background: 'rgba(255, 85, 0, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <MessageCircle size={18} color="#FF5500" />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.78rem', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>
                      WhatsApp & Phone
                    </div>
                    <div style={{ color: '#111827', fontWeight: 500, fontSize: '0.9rem', marginTop: '0.2rem' }}>
                      Online consultations and instant chat available
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div style={{ display: 'flex', gap: '0.9rem', alignItems: 'flex-start' }}>
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '8px',
                      background: 'rgba(255, 85, 0, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <Mail size={18} color="#FF5500" />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.78rem', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>
                      Email
                    </div>
                    <div style={{ color: '#111827', fontWeight: 500, fontSize: '0.9rem', marginTop: '0.2rem' }}>
                      contact@pvmpstudio.com
                    </div>
                  </div>
                </div>

                {/* Coverage */}
                <div style={{ display: 'flex', gap: '0.9rem', alignItems: 'flex-start' }}>
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '8px',
                      background: 'rgba(255, 85, 0, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <MapPin size={18} color="#FF5500" />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.78rem', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>
                      Coverage
                    </div>
                    <div style={{ color: '#111827', fontWeight: 500, fontSize: '0.9rem', marginTop: '0.2rem' }}>
                      Available across India & Nepal
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Service Note */}
            <div
              style={{
                marginTop: '2rem',
                paddingTop: '1.2rem',
                borderTop: '1px solid #e5e7eb',
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                color: '#6b7280',
                fontSize: '0.82rem'
              }}
            >
              <Clock size={16} color="#FF5500" />
              <span>Response time: within 24 hours</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
