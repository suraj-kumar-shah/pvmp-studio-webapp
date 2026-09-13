import React, { useState, useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import '../../styles/components/EditorialGallery.css';

export const FeaturedWork = ({ setActivePage, setSelectedProjectId }) => {
  const cardsRef = useRef([]);
  const [activeLightboxIndex, setActiveLightboxIndex] = useState(null);

  const weddingStories = [
    {
      id: 'ananya-kabir-udaipur',
      couple: 'Anshul & Ishita',
      scriptTag: 'Classic Wedding',
      location: 'Taj Lake Palace • Udaipur',
      image: '/other-image/image1.webp',
      height: '440px'
    },
    {
      id: 'prerana-rohan-kathmandu',
      couple: 'Kamakhya & Avirook',
      scriptTag: 'Casual Wedding',
      location: 'Heritage Fort • Rajasthan',
      image: '/other-image/image2.webp',
      height: '500px'
    },
    {
      id: 'subani-abhay-jaipur',
      couple: 'Subani & Abhay',
      scriptTag: 'Royal Wedding',
      location: 'Udaivilas • Udaipur',
      image: '/other-image/image3.webp',
      height: '440px'
    },
    {
      id: 'maneet-prabhjyot-delhi',
      couple: 'Maneet & Prabhjyot',
      scriptTag: 'Casual Wedding',
      location: 'Dwarika’s Courtyard • Kathmandu',
      image: '/other-image/image4.webp',
      height: '500px'
    },
    {
      id: 'kriti-sanchit-agra',
      couple: 'Kriti & Sanchit',
      scriptTag: 'Classic Wedding',
      location: 'The Leela Palace • Jaipur',
      image: '/other-image/image5.webp',
      height: '500px'
    },
    {
      id: 'riya-aditya-pokhara',
      couple: 'Riya & Aditya',
      scriptTag: 'Destination Story',
      location: 'Annapurna Vista • Nepal',
      image: '/other-image/image6.webp',
      height: '440px'
    },
    {
      id: 'aman-kamakshi-jodhpur',
      couple: 'Aman & Kamakshi',
      scriptTag: 'Casual Wedding',
      location: 'Umaid Bhawan • Jodhpur',
      image: '/other-image/image7.webp',
      height: '500px'
    },
    {
      id: 'devika-siddharth-nepal',
      couple: 'Devika & Siddharth',
      scriptTag: 'Heritage Wedding',
      location: 'Patan Durbar • Kathmandu',
      image: '/other-image/image8.webp',
      height: '440px'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeLightboxIndex === null) return;
      if (e.key === 'Escape') setActiveLightboxIndex(null);
      if (e.key === 'ArrowRight') {
        setActiveLightboxIndex((prev) => (prev + 1) % weddingStories.length);
      }
      if (e.key === 'ArrowLeft') {
        setActiveLightboxIndex((prev) => (prev - 1 + weddingStories.length) % weddingStories.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxIndex, weddingStories.length]);

  const handleOpenFullStory = (id) => {
    setActiveLightboxIndex(null);
    setSelectedProjectId?.(id);
    setActivePage('portfolio-details');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentLightboxStory = activeLightboxIndex !== null ? weddingStories[activeLightboxIndex] : null;

  return (
    <section className="editorial-gallery-section">
      {/* Editorial Header */}
      <div className="editorial-gallery-header">
        <h2 className="editorial-gallery-title">
          Signature Destination Weddings & Royal Ceremonies
        </h2>
      </div>

      {/* Staggered Masonry Photo Grid */}
      <div className="editorial-masonry-grid">
        {weddingStories.map((story, index) => (
          <div
            key={story.id}
            ref={(el) => (cardsRef.current[index] = el)}
            className="editorial-story-card"
            style={{ transitionDelay: `${(index % 4) * 0.1}s` }}
            onClick={() => setActiveLightboxIndex(index)}
          >
            {/* Wedding Photograph Frame */}
            <div
              className="editorial-photo-frame"
              style={{ height: story.height }}
            >
              <img
                src={story.image}
                alt={story.couple}
                loading="lazy"
              />
            </div>

            {/* Typography Lockup Underneath */}
            <div className="editorial-meta-box">
              {/* Script Cursive Watermark */}
              <div className="editorial-script-watermark">
                {story.scriptTag}
              </div>

              {/* Serif Couple Name */}
              <h3 className="editorial-couple-name">
                {story.couple}
              </h3>

              {/* View Details Link */}
              <span className="editorial-view-link">
                View Details
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Luxury Full-Screen Lightbox Modal */}
      {currentLightboxStory && (
        <div
          className="lightbox-backdrop"
          onClick={() => setActiveLightboxIndex(null)}
        >
          {/* Top Bar */}
          <div className="lightbox-top-bar" onClick={(e) => e.stopPropagation()}>
            <div className="lightbox-counter">
              Story {activeLightboxIndex + 1} / {weddingStories.length}
            </div>
            <button
              className="lightbox-close-btn"
              onClick={() => setActiveLightboxIndex(null)}
              aria-label="Close Lightbox"
            >
              <X size={22} />
            </button>
          </div>

          {/* Main Photo Viewing Area */}
          <div className="lightbox-content-area" onClick={(e) => e.stopPropagation()}>
            <button
              className="lightbox-nav-btn prev"
              onClick={() => setActiveLightboxIndex((prev) => (prev - 1 + weddingStories.length) % weddingStories.length)}
              aria-label="Previous Story"
            >
              <ChevronLeft size={28} />
            </button>

            <img
              key={currentLightboxStory.id}
              src={currentLightboxStory.image}
              alt={currentLightboxStory.couple}
              className="lightbox-main-img"
            />

            <button
              className="lightbox-nav-btn next"
              onClick={() => setActiveLightboxIndex((prev) => (prev + 1) % weddingStories.length)}
              aria-label="Next Story"
            >
              <ChevronRight size={28} />
            </button>
          </div>

          {/* Bottom Bar */}
          <div className="lightbox-bottom-bar" onClick={(e) => e.stopPropagation()}>
            <div className="lightbox-info">
              <h3>{currentLightboxStory.couple}</h3>
              <p>{currentLightboxStory.scriptTag} • {currentLightboxStory.location}</p>
            </div>

            <button
              className="lightbox-cta-btn"
              onClick={() => handleOpenFullStory(currentLightboxStory.id)}
            >
              <span>Explore Wedding Story</span>
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default FeaturedWork;
