import React from 'react';
import HeroSection from '../components/home/HeroSection';
import BrandStory from '../components/home/BrandStory';
import FeaturedWork from '../components/home/FeaturedWork';
import PackagesPreview from '../components/home/PackagesPreview';
import CraftHighlights from '../components/home/CraftHighlights';
import TestimonialsSection from '../components/home/TestimonialsSection';
import FAQSection from '../components/home/FAQSection';

export const Home = ({ setActivePage, setSelectedProjectId, setSelectedPackageId, setSelectedProductId }) => {
  return (
    <div>
      <HeroSection
        setActivePage={setActivePage}
        setSelectedProjectId={setSelectedProjectId}
      />
      <FeaturedWork
        setActivePage={setActivePage}
        setSelectedProjectId={setSelectedProjectId}
      />
      <PackagesPreview
        setActivePage={setActivePage}
        setSelectedPackageId={setSelectedPackageId}
      />
      <BrandStory setActivePage={setActivePage} />
      <CraftHighlights />
      <TestimonialsSection />
      <FAQSection setActivePage={setActivePage} />
    </div>
  );
};

export default Home;
