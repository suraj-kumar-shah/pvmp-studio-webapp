import React, { useState, useEffect } from 'react';
import { X, Calendar, MapPin, Sparkles, Phone, MessageSquare, CheckCircle2, ArrowRight, Camera } from 'lucide-react';
import '../../styles/components/QuickBookingModal.css';

export const QuickBookingModal = ({ isOpen, onClose, setActivePage }) => {
  const [service, setService] = useState('Wedding Photography');
  const [eventDate, setEventDate] = useState('');
  const [location, setLocation] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setIsSubmitted(false);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const services = [
    { id: 'wedding', label: 'Wedding' },
    { id: 'pre-wedding', label: 'Pre-Wedding' },
    { id: 'cinematography', label: 'Cinema' },
    { id: 'portrait', label: 'Portraits' },
    { id: 'commercial', label: 'Commercial' }
  ];

  const handleWhatsAppBooking = (e) => {
    e.preventDefault();
    const studioPhone = '919876543210';
    const message = `Hello PVMP Studio! I'd like to check availability:%0A• Service: ${service}%0A• Date: ${eventDate || 'TBD'}%0A• Location: ${location || 'TBD'}%0A• Name: ${name || 'Client'}%0A• Phone: ${phone || 'N/A'}`;
    window.open(`https://wa.me/${studioPhone}?text=${message}`, '_blank');
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="quick-booking-overlay" onClick={onClose}>
      <div className="quick-booking-modal" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="quick-booking-close" onClick={onClose} aria-label="Close modal">
          <X size={18} />
        </button>

        {!isSubmitted ? (
          <>
            {/* Header Lockup - Clean & Minimal */}
            <div className="quick-booking-header">
              <span className="quick-booking-tag">Direct Studio Booking</span>
              <h2 className="quick-booking-title">Check Availability</h2>
              <p className="quick-booking-subtitle">
                Select your service and date for instant availability & custom quote.
              </p>
            </div>

            {/* Interactive Form */}
            <form onSubmit={handleFormSubmit} className="quick-booking-form">
              {/* Service Chips */}
              <div className="form-group">
                <label className="form-label">Service</label>
                <div className="service-chips-grid">
                  {services.map((item) => {
                    const isSelected = service === item.label;
                    return (
                      <button
                        type="button"
                        key={item.id}
                        className={`service-chip ${isSelected ? 'active' : ''}`}
                        onClick={() => setService(item.label)}
                      >
                        <span className="service-chip-label">{item.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Date & Location Grid */}
              <div className="form-row-2">
                <div className="form-group">
                  <label className="form-label">Event Date</label>
                  <input
                    type="date"
                    className="form-input"
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">City / Destination</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="City, Venue, or Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Client Contact Details */}
              <div className="form-row-2">
                <div className="form-group">
                  <label className="form-label">Your Name</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Enter full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">WhatsApp / Mobile</label>
                  <input
                    type="tel"
                    className="form-input"
                    placeholder="Contact number (with country code)"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Primary Actions */}
              <div className="quick-booking-actions">
                <button
                  type="button"
                  onClick={handleWhatsAppBooking}
                  className="btn-whatsapp-instant"
                >
                  <MessageSquare size={16} />
                  <span>Instant WhatsApp Booking</span>
                </button>

                <button type="submit" className="btn-submit-booking">
                  <span>Submit Inquiry</span>
                  <ArrowRight size={15} />
                </button>
              </div>

              {/* Footer Link */}
              <div className="quick-booking-footer-links">
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    setActivePage?.('packages');
                  }}
                  className="link-view-packages"
                >
                  View Full Pricing Collections →
                </button>
              </div>
            </form>
          </>
        ) : (
          /* Submission Confirmation View */
          <div className="booking-success-view">
            <div className="success-icon-badge">
              <CheckCircle2 size={48} />
            </div>
            <h3 className="success-title">Booking Request Received!</h3>
            <p className="success-text">
              Thank you <strong>{name}</strong>! We have recorded your request for <strong>{service}</strong> on <strong>{eventDate}</strong> in <strong>{location}</strong>. Our director will contact you within 2 hours.
            </p>
            <div className="success-actions">
              <button
                type="button"
                onClick={handleWhatsAppBooking}
                className="btn-whatsapp-instant"
              >
                <MessageSquare size={17} />
                <span>Chat Instantly on WhatsApp</span>
              </button>
              <button
                type="button"
                onClick={onClose}
                className="btn-close-modal"
              >
                Back to Website
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuickBookingModal;
