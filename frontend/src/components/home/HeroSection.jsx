import React from 'react';
import '../../styles/components/HeroSection.css';

export const HeroSection = ({ setActivePage, setSelectedProjectId }) => {
  const marqueeItems = [
    'WEDDING PHOTOGRAPHY',
    'LUXURY PORTRAITURE',
    'BRAND IDENTITY',
    'ROYAL CINEMATOGRAPHY',
    'DESTINATION WEDDINGS',
    'EDITORIAL FASHION',
    'FINE ART ALBUMS',
    'PRE-WEDDING SHOOTS'
  ];

  return (
    <section className="dark-editorial-hero" aria-label="PVMP Studio Luxury Photography">
      {/* Main Hero Visual Stage */}
      <div className="hero-visual-stage">
        {/* Ambient Warm Amber Glow */}
        <div className="hero-ambient-glow"></div>

        {/* Centered Photographer Portrait */}
        <div className="hero-portrait-wrapper">
          <img
            src="./homepage-image/homepage-photographer.jpg"
            alt="Lead Creative Director and Master Photographer - PVMP Studio"
            className="hero-portrait-img"
            loading="eager"
            onError={(e) => {
              e.currentTarget.src = './homepage-image/homepage-backgroundimage.webp';
            }}
          />
        </div>

        {/* Huge Bold Split Studio Typography Flanking the Photographer */}
        <div className="hero-split-brand-lockup">
          <span className="hero-brand-word hero-brand-left">PVMP</span>
          <span className="hero-brand-word hero-brand-right">STUDIO</span>
        </div>

        {/* Dynamic Infinite Ticker / Marquee Running After PVMP STUDIO Text */}
        <div className="hero-marquee-container">
          <div className="hero-marquee-track">
            {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((text, idx) => (
              <span key={idx} className="hero-marquee-item">
                <span className="marquee-dot">•</span>
                {text}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
