import React, { useState } from 'react';
import { Camera, Heart, Film, BookOpen, Sparkles, HardDrive, UserCheck, Award, ArrowRight, Check, ChevronDown, ChevronUp } from 'lucide-react';
import SectionHeading from '../components/common/SectionHeading';
import BookingCTA from '../components/home/BookingCTA';
import { SERVICES } from '../data/servicesData';
import { useCart } from '../context/CartContext';

const ICON_MAP = {
  Camera,
  Heart,
  Film,
  BookOpen,
  Sparkles,
  HardDrive,
  UserCheck,
  Award
};

export const Services = ({ setActivePage, setSelectedPackageId, setSelectedProductId }) => {
  const { formatPrice } = useCart();
  const [openFaq, setOpenFaq] = useState(null);

  const workflowSteps = [
    { num: '01', title: 'Consultation & Date Hold', desc: 'We discuss your wedding vision, venue aesthetics, and timing to curate a personalized crew structure and timeline.' },
    { num: '02', title: 'Creative Direction & Moodboard', desc: 'Prior to the event, we collaborate on lighting plans, family portrait shot lists, and music preferences for your film.' },
    { num: '03', title: 'Director-Led Event Capture', desc: 'Our master photographers and cinematographers capture every ritual and candid emotion with discrete elegance.' },
    { num: '04', title: 'Archival Grading & Sound Design', desc: 'Footage is processed in DaVinci Resolve and color graded frame-by-frame with licensed orchestral scores.' },
    { num: '05', title: 'Heirloom Delivery & Archiving', desc: 'Your Italian leather album is bound and delivered with digital master clouds and custom wooden USB drives.' }
  ];

  const serviceFaqs = [
    { q: 'How far in advance should we commission PVMP Studio?', a: 'Because we limit our calendar to 25 bespoke weddings per year, most couples book 4 to 10 months in advance, especially for peak wedding seasons in Udaipur, Jaipur, Goa, and Kathmandu.' },
    { q: 'Do you travel across all regions in India and Nepal?', a: 'Yes! We actively travel throughout India (Rajasthan palaces, Goa, Kerala, Delhi NCR, Mumbai, Hyderabad, Kolkata) and Nepal (Kathmandu heritage sites, Pokhara, Chitwan, Mustang, and Himalayan resorts). We handle all travel logistics, equipment permits, and team coordination seamlessly.' },
    { q: 'How long until we receive our photos and wedding film?', a: 'You receive an Express Sneak Peek (50 curated photos) within 48 hours for immediate sharing. Full high-resolution color-graded photo archives are delivered within 3 weeks, and cinematic 4K feature films within 4 weeks.' },
    { q: 'Can we customize the album materials and box engravings?', a: 'Absolutely. We offer complete customizability for album sizes (up to 12x18), Italian full-grain leather tones, Belgian linens, velvet covers, blind letterpress, and gold foil debossing monograms.' }
  ];

  return (
    <div style={{ paddingTop: 'var(--header-height)' }}>
      {/* Header Banner */}
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
            Wedding Photography & 4K Video Services
          </h1>
          <p style={{ fontSize: '1rem', color: '#6b7280', lineHeight: 1.6, margin: '0 auto', maxWidth: '680px' }}>
            Explore our complete photography, drone videography, and custom photo album services tailored for weddings and family events.
          </p>
        </div>
      </section>

      {/* Detailed Services Grid */}
      <section className="section" style={{ backgroundColor: '#ffffff', paddingTop: '3.5rem' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
            {SERVICES.map((srv, idx) => {
              const IconComp = ICON_MAP[srv.iconName] || Camera;
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={srv.id}
                  className="card-luxury"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '2.5rem',
                    padding: '2.5rem',
                    alignItems: 'center',
                    background: '#ffffff',
                    border: '1px solid #e5e7eb',
                    borderRadius: '16px',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)'
                  }}
                >
                  {/* Visual Image */}
                  <div
                    style={{
                      borderRadius: '12px',
                      overflow: 'hidden',
                      height: '320px',
                      position: 'relative',
                      order: isEven ? 1 : 2
                    }}
                  >
                    <img
                      src={srv.coverImage}
                      alt={srv.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 60%)'
                      }}
                    />
                    <div style={{ position: 'absolute', bottom: '1rem', left: '1rem' }}>
                      <span className="badge">{srv.badge}</span>
                    </div>
                  </div>

                  {/* Text Details */}
                  <div style={{ order: isEven ? 2 : 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.6rem' }}>
                      <div
                        style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: '50%',
                          background: 'rgba(255, 85, 0, 0.08)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'var(--accent-brand, #FF5500)'
                        }}
                      >
                        <IconComp size={20} />
                      </div>
                      <span style={{ fontSize: '0.78rem', color: 'var(--accent-brand, #FF5500)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700 }}>
                        {srv.subtitle}
                      </span>
                    </div>

                    <h2 style={{ fontSize: '1.85rem', color: '#111827', marginBottom: '0.85rem', fontFamily: 'var(--font-serif)', fontWeight: 400 }}>
                      {srv.title}
                    </h2>

                    <p style={{ color: '#4b5563', fontSize: '0.92rem', lineHeight: 1.7, marginBottom: '1.4rem' }}>
                      {srv.description}
                    </p>

                    <div style={{ marginBottom: '1.8rem' }}>
                      <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--accent-brand, #FF5500)', fontWeight: 700, display: 'block', marginBottom: '0.6rem' }}>
                        Deliverable Highlights:
                      </span>
                      <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                        {srv.deliverables.map((item, dIdx) => (
                          <li key={dIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#111827' }}>
                            <Check size={14} color="var(--accent-brand, #FF5500)" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center', paddingTop: '1.2rem', borderTop: '1px solid #f0f2f5' }}>
                      <div>
                        <span style={{ fontSize: '0.7rem', color: '#6b7280', textTransform: 'uppercase', display: 'block', fontWeight: 600 }}>
                          Investment From
                        </span>
                        <span style={{ fontFamily: 'var(--font-sans)', fontSize: '1.4rem', fontWeight: 700, color: 'var(--accent-brand, #FF5500)' }}>
                          {formatPrice(srv.startingPrice)}
                        </span>
                      </div>

                      <div style={{ marginLeft: 'auto', display: 'flex', gap: '0.6rem' }}>
                        <button
                          onClick={() => {
                            setActivePage('packages');
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }}
                          className="btn-primary"
                          style={{ padding: '0.65rem 1.4rem', fontSize: '0.78rem' }}
                        >
                          <span>View Packages</span>
                          <ArrowRight size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Production Workflow Section */}
      <section className="section" style={{ backgroundColor: '#f8f9fa', borderTop: '1px solid #e5e7eb' }}>
        <div className="container">
          <SectionHeading
            centered
            eyebrow="The Workflow"
            title="Our 5-Stage Editorial Production Standard"
            subtitle="From initial moodboard to final delivery in your hands, experience seamless concierge communication."
          />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
            {workflowSteps.map((step, idx) => (
              <div
                key={idx}
                className="card-luxury"
                style={{ padding: '2rem', position: 'relative', background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)' }}
              >
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2.4rem', fontWeight: 700, color: 'var(--accent-brand, #FF5500)', opacity: 0.8, marginBottom: '0.5rem' }}>
                  {step.num}
                </div>
                <h4 style={{ fontSize: '1.1rem', color: '#111827', marginBottom: '0.6rem', fontFamily: 'var(--font-serif)', fontWeight: 600 }}>
                  {step.title}
                </h4>
                <p style={{ fontSize: '0.85rem', color: '#4b5563', lineHeight: 1.6, margin: 0 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="section" style={{ backgroundColor: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '850px' }}>
          <SectionHeading
            centered
            eyebrow="Common Inquiries"
            title="Frequently Asked Questions"
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {serviceFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  style={{
                    background: '#f8f9fa',
                    border: isOpen ? '1.5px solid var(--accent-brand, #FF5500)' : '1px solid #e5e7eb',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    transition: 'all 0.2s'
                  }}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    style={{
                      width: '100%',
                      padding: '1.25rem 1.5rem',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      textAlign: 'left',
                      color: isOpen ? 'var(--accent-brand, #FF5500)' : '#111827',
                      fontSize: '1rem',
                      fontWeight: 600,
                      fontFamily: 'var(--font-serif)'
                    }}
                  >
                    <span>{faq.q}</span>
                    {isOpen ? <ChevronUp size={18} color="var(--accent-brand, #FF5500)" /> : <ChevronDown size={18} />}
                  </button>

                  {isOpen && (
                    <div style={{ padding: '0 1.5rem 1.25rem', color: '#4b5563', fontSize: '0.9rem', lineHeight: 1.7, borderTop: '1px solid #e5e7eb', paddingTop: '0.85rem' }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <BookingCTA setActivePage={setActivePage} />
    </div>
  );
};

export default Services;
