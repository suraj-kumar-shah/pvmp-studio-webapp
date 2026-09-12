import React from 'react';
import { Award, Camera, ShieldCheck, Heart, Sparkles, MapPin, ArrowRight } from 'lucide-react';
import SectionHeading from '../components/common/SectionHeading';
import BookingCTA from '../components/home/BookingCTA';
import { STUDIO_STATS } from '../data/testimonialData';

export const About = ({ setActivePage }) => {
  const milestones = [
    { year: '2012', title: 'Studio Inception', desc: 'Founded with a singular vision: to bring cinematic storytelling and high-fashion editorial lighting into traditional heritage wedding celebrations.' },
    { year: '2016', title: 'Pan India & Nepal Expansion', desc: 'Commissioned for royal destination weddings across Rajasthan palaces, Kathmandu heritage courtyards, and Himalayan retreats in Pokhara.' },
    { year: '2019', title: 'Luxury Album Bindery Atelier', desc: 'Established our in-house bindery partnership for handcrafted Italian leather flush-mount albums delivered throughout India and Nepal.' },
    { year: '2024', title: 'Top Studio Recognition', desc: 'Ranked Top Luxury Wedding Photography & Film Studio with 620+ immortalized love stories across India & Nepal.' }
  ];

  const gearArsenal = [
    { category: 'Cinema Cameras', items: 'RED Komodo 6K, Sony FX6 Full-Frame Cinema, Sony FX3' },
    { category: 'Medium Format & Stills', items: 'Phase One IQ4 150MP Medium Format, Sony Alpha 1, Leica SL2' },
    { category: 'Cine & Master Prime Glass', items: 'Cooke Anamorphic Lenses, Sony G-Master 35mm f/1.4, 50mm f/1.2, 85mm f/1.4, 135mm f/1.8' },
    { category: 'Aerial & Stabilization', items: 'DJI Inspire 3 8K Cinema Drone, DJI Ronin 4D 4-Axis Gimbal System' },
    { category: 'Sound Engineering', items: 'Sennheiser MKH416 Shotgun Mics & Tentacle Sync Timecode Wireless Systems' }
  ];

  return (
    <div style={{ paddingTop: 'var(--header-height)' }}>
      {/* Page Header */}
      <section
        style={{
          paddingTop: '3rem',
          paddingBottom: '2rem',
          backgroundColor: '#ffffff',
          position: 'relative',
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
            About PVMP Studio
          </h1>
          <p style={{ fontSize: '1rem', color: '#6b7280', lineHeight: 1.6, margin: '0 auto', maxWidth: '680px' }}>
            PVMP Studio is dedicated to capturing sacred heritage traditions, family emotions, and authentic weddings across India and Nepal.
          </p>
        </div>
      </section>

      {/* Founder & Atelier Story */}
      <section className="section" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
              gap: '4.5rem',
              alignItems: 'center'
            }}
          >
            <div>
              <SectionHeading
                eyebrow="The Master Artist"
                title="Pranav V. Mehta & The PVMP Collective"
                subtitle="With over 14 years behind the viewfinder, Pranav brings the dramatic chiaroscuro lighting of classical Renaissance oil paintings into modern luxury celebrations."
              />

              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.8, marginBottom: '1.4rem' }}>
                "We don't force our couples into stiff, robotic poses. Our role is to create a serene environment where you feel deeply connected to each other, surrounded by the warmth of your families. The laughter that makes your eyes crinkle, the silent tear from a father’s eye, the whirlwind energy of the sangeet—that is where real magic lives."
              </p>

              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.8, marginBottom: '2rem' }}>
                Every frame produced by PVMP Studio undergoes our proprietary 3-stage archival color grading process to ensure skin tones look radiant, natural, and timeless for fifty years to come.
              </p>

              <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                <div style={{ padding: '0.8rem 1.4rem', background: '#f8f9fa', border: '1px solid #e5e7eb', borderRadius: '8px' }}>
                  <span style={{ display: 'block', fontSize: '1.4rem', fontWeight: 700, color: 'var(--accent-brand, #FF5500)' }}>14+</span>
                  <span style={{ fontSize: '0.72rem', color: '#6b7280', textTransform: 'uppercase', fontWeight: 600 }}>Years of Mastery</span>
                </div>

                <div style={{ padding: '0.8rem 1.4rem', background: '#f8f9fa', border: '1px solid #e5e7eb', borderRadius: '8px' }}>
                  <span style={{ display: 'block', fontSize: '1.4rem', fontWeight: 700, color: 'var(--accent-brand, #FF5500)' }}>620+</span>
                  <span style={{ fontSize: '0.72rem', color: '#6b7280', textTransform: 'uppercase', fontWeight: 600 }}>Couples Commissioned</span>
                </div>
              </div>
            </div>

            {/* Founder Portrait Collage */}
            <div style={{ position: 'relative' }}>
              <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid #e5e7eb', boxShadow: '0 12px 36px rgba(0, 0, 0, 0.08)' }}>
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=85"
                  alt="PVMP Studio Founder and Lead Artist"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>

              <div
                style={{
                  position: 'absolute',
                  bottom: '-20px',
                  left: '-20px',
                  background: '#ffffff',
                  border: '1px solid #e5e7eb',
                  padding: '1.2rem 1.5rem',
                  borderRadius: '10px',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
                  maxWidth: '280px'
                }}
              >
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', color: '#111827', display: 'block', fontWeight: 600 }}>
                  Master Directory
                </span>
                <span style={{ fontSize: '0.75rem', color: 'var(--accent-brand, #FF5500)', fontWeight: 600 }}>
                  WPJA Gold Medalist & Fearless Awardee
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment & Cinema Technology */}
      <section className="section" style={{ backgroundColor: '#f8f9fa', borderTop: '1px solid #e5e7eb', borderBottom: '1px solid #e5e7eb' }}>
        <div className="container">
          <SectionHeading
            centered
            eyebrow="The Arsenal"
            title="Hollywood-Grade Cine Equipment & Master Glass"
            subtitle="We invest continuously in cinema lenses, 6K sensors, and professional audio gear so your memories match the visual grandeur of cinematic features."
          />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {gearArsenal.map((gear, idx) => (
              <div
                key={idx}
                className="card-luxury"
                style={{ padding: '1.8rem', display: 'flex', flexDirection: 'column', background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.8rem' }}>
                  <Camera size={18} color="var(--accent-brand, #FF5500)" />
                  <h4 style={{ fontSize: '1.05rem', color: '#111827', fontWeight: 600, fontFamily: 'var(--font-serif)' }}>
                    {gear.category}
                  </h4>
                </div>
                <p style={{ fontSize: '0.85rem', color: '#4b5563', lineHeight: 1.6, margin: 0 }}>
                  {gear.items}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Milestones */}
      <section className="section" style={{ backgroundColor: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <SectionHeading
            centered
            eyebrow="Legacy & Milestones"
            title="A Decade of Uncompromising Artistry"
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', position: 'relative' }}>
            {milestones.map((ms, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  gap: '2rem',
                  padding: '1.8rem',
                  background: '#f8f9fa',
                  border: '1px solid #e5e7eb',
                  borderRadius: '12px'
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.8rem',
                    color: 'var(--accent-brand, #FF5500)',
                    fontWeight: 700,
                    width: '90px',
                    flexShrink: 0
                  }}
                >
                  {ms.year}
                </div>
                <div>
                  <h4 style={{ fontSize: '1.2rem', color: '#111827', marginBottom: '0.4rem', fontFamily: 'var(--font-serif)', fontWeight: 600 }}>
                    {ms.title}
                  </h4>
                  <p style={{ fontSize: '0.875rem', color: '#4b5563', lineHeight: 1.6, margin: 0 }}>
                    {ms.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BookingCTA setActivePage={setActivePage} />
    </div>
  );
};

export default About;
