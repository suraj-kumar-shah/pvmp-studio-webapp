import React from 'react';
import HeroSection from '../components/home/HeroSection';
import BrandStory from '../components/home/BrandStory';
import FeaturedWork from '../components/home/FeaturedWork';
import ServicesPreview from '../components/home/ServicesPreview';
import PackagesPreview from '../components/home/PackagesPreview';
import CraftHighlights from '../components/home/CraftHighlights';
import TestimonialsSection from '../components/home/TestimonialsSection';
import BookingCTA from '../components/home/BookingCTA';

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
      <ServicesPreview setActivePage={setActivePage} />
      <CraftHighlights />
      <TestimonialsSection />
      <BookingCTA setActivePage={setActivePage} />
    </div>
  );
};

export default Home;
