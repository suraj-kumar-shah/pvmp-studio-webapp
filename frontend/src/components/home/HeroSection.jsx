import React from 'react';
import '../../styles/components/HeroSection.css';

export const HeroSection = () => {
  return (
    <section className="hero-section">
      {/* Full Bleed Background Cover Image */}
      <img
        src="./homepage-image/homepage-backgroundimage.webp"
        alt="Wedding Photo Shoot"
        className="hero-bg-image"
      />

      {/* Subtle Cinematic Contrast Overlay */}
      <div className="hero-overlay">
        <div className="hero-content">
          {/* Master Headline */}
          <h1 className="hero-headline">
            Wedding Photo Shoot
          </h1>

          {/* Professional Editorial Narrative Without Dot */}
          <p className="hero-subtitle">
            PVMP Studio Luxury Destination Wedding Photography, Royal Cinematography, and Heirloom Visual Storytelling Across India and Nepal
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
