import React, { useState } from 'react';
import { Plus, Minus, ArrowRight } from 'lucide-react';

const FAQS = [
  {
    question: 'How far in advance should we book our wedding shoot?',
    answer: 'We recommend booking 3 to 9 months in advance to secure your dates, especially for peak wedding seasons across India and Nepal.'
  },
  {
    question: 'Do you travel for destination weddings across India & Nepal?',
    answer: 'Yes. We regularly cover destination weddings in Udaipur, Jaipur, Goa, Delhi NCR, Kathmandu, Pokhara, and Himalayan venues. All travel logistics are handled seamlessly.'
  },
  {
    question: 'What is the delivery turnaround time for photos and films?',
    answer: 'You receive an Express 48-Hour Sneak Peek (50 curated photos) for social sharing. Master edited photo archives are delivered within 3 weeks, and 4K cinema films within 4 weeks.'
  },
  {
    question: 'Can we customize our package inclusions and album designs?',
    answer: 'Yes, every collection is fully customizable. You can add extra coverage days, drone cinematography, parent duplicate photo books, or custom leather finishes.'
  },
  {
    question: 'How does the booking and payment schedule work?',
    answer: 'After checking date availability, we hold a quick consultation call to finalize requirements. A date-reservation deposit locks your dates on our studio calendar.'
  },
  {
    question: 'What equipment and backup systems does your team use?',
    answer: 'We shoot on dual-slot cinema camera bodies with prime lenses, redundant audio gear, and 4K aerial drones, with on-site dual backup drives for complete zero-loss reliability.'
  }
];

export const FAQSection = ({ setActivePage }) => {
  // Store open status per question ID or allow multiple/single open
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      style={{
        paddingTop: '2.5rem',
        paddingBottom: '5rem',
        backgroundColor: '#ffffff',
        position: 'relative'
      }}
    >
      <div className="container" style={{ maxWidth: '1240px', margin: '0 auto' }}>
        {/* Top Header - Clean 2 Lines (Title + Subtitle) */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 2.5rem auto' }}>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2rem, 3.2vw, 2.85rem)',
              color: '#0f172a',
              fontWeight: 500,
              lineHeight: 1.2,
              margin: '0 0 0.6rem 0'
            }}
          >
            Frequently Asked Questions
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '1rem',
              color: '#64748b',
              lineHeight: 1.5,
              margin: '0 auto',
              maxWidth: '680px'
            }}
          >
            Transparent answers regarding our photography coverage, booking process, and delivery timelines across India & Nepal.
          </p>
        </div>

        {/* Bottom All FAQs in a Balanced 2-Column Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '1.15rem',
            alignItems: 'start'
          }}
          className="faq-two-col-grid"
        >
          {FAQS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                style={{
                  border: isOpen ? '1.5px solid #0A66C2' : '1px solid #e2e8f0',
                  borderRadius: '12px',
                  background: isOpen ? 'rgba(10, 102, 194, 0.015)' : '#ffffff',
                  boxShadow: isOpen
                    ? '0 4px 18px rgba(10, 102, 194, 0.08)'
                    : '0 1px 3px rgba(0, 0, 0, 0.02)',
                  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                  overflow: 'hidden'
                }}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  style={{
                    width: '100%',
                    padding: '1.2rem 1.35rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    background: 'none',
                    border: 'none',
                    textAlign: 'left',
                    cursor: 'pointer'
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.98rem',
                      fontWeight: isOpen ? 700 : 600,
                      color: isOpen ? '#0A66C2' : '#0f172a',
                      lineHeight: 1.4,
                      transition: 'color 0.2s ease'
                    }}
                  >
                    {item.question}
                  </span>

                  <div
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      background: isOpen ? '#0A66C2' : '#f1f5f9',
                      color: isOpen ? '#ffffff' : '#64748b',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {isOpen ? <Minus size={14} strokeWidth={2.5} /> : <Plus size={14} strokeWidth={2.5} />}
                  </div>
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: '0 1.35rem 1.25rem 1.35rem',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.9rem',
                      color: '#475569',
                      lineHeight: 1.65,
                      borderTop: '1px solid rgba(10, 102, 194, 0.08)'
                    }}
                  >
                    <div style={{ paddingTop: '0.8rem' }}>{item.answer}</div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
