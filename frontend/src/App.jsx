import React, { useState, useEffect } from 'react';
import { CartProvider } from './context/CartContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import CartDrawer from './components/cart/CartDrawer';
import Toast from './components/common/Toast';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import PortfolioDetails from './pages/PortfolioDetails';
import Packages from './pages/Packages';
import PackageDetails from './pages/PackageDetails';
import Cart from './pages/Cart';
import Contact from './pages/Contact';

function MainApp() {
  const [activePage, setActivePage] = useState('home');
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [selectedPackageId, setSelectedPackageId] = useState(null);

  // Sync with window hash if needed
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        if (hash.startsWith('portfolio/')) {
          setSelectedProjectId(hash.replace('portfolio/', ''));
          setActivePage('portfolio-details');
        } else if (hash.startsWith('packages/')) {
          setSelectedPackageId(hash.replace('packages/', ''));
          setActivePage('package-details');
        } else if (hash.startsWith('products')) {
          setActivePage('packages');
        } else if (['home', 'about', 'services', 'portfolio', 'packages', 'cart', 'contact'].includes(hash)) {
          setActivePage(hash);
        }
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const navigateTo = (page, id = null) => {
    if (page === 'products' || page === 'product-details') {
      page = 'packages';
    }
    setActivePage(page);
    if (page === 'portfolio-details' && id) setSelectedProjectId(id);
    if (page === 'package-details' && id) setSelectedPackageId(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderCurrentPage = () => {
    switch (activePage) {
      case 'home':
        return (
          <Home
            setActivePage={navigateTo}
            setSelectedProjectId={setSelectedProjectId}
            setSelectedPackageId={setSelectedPackageId}
          />
        );
      case 'about':
        return <About setActivePage={navigateTo} />;
      case 'services':
        return (
          <Services
            setActivePage={navigateTo}
            setSelectedPackageId={setSelectedPackageId}
          />
        );
      case 'portfolio':
        return (
          <Portfolio
            setActivePage={navigateTo}
            setSelectedProjectId={setSelectedProjectId}
          />
        );
      case 'portfolio-details':
        return (
          <PortfolioDetails
            projectId={selectedProjectId}
            setActivePage={navigateTo}
            setSelectedProjectId={setSelectedProjectId}
          />
        );
      case 'packages':
        return (
          <Packages
            setActivePage={navigateTo}
            setSelectedPackageId={setSelectedPackageId}
          />
        );
      case 'package-details':
        return (
          <PackageDetails
            packageId={selectedPackageId}
            setActivePage={navigateTo}
            setSelectedPackageId={setSelectedPackageId}
          />
        );
      case 'cart':
        return <Cart setActivePage={navigateTo} />;
      case 'contact':
        return <Contact />;
      default:
        return (
          <Home
            setActivePage={navigateTo}
            setSelectedProjectId={setSelectedProjectId}
            setSelectedPackageId={setSelectedPackageId}
          />
        );
    }
  };

  return (
    <div className="app-layout" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--bg-primary)' }}>
      {/* Sticky Luxury Header */}
      <Header
        activePage={activePage}
        setActivePage={navigateTo}
        setSelectedProjectId={setSelectedProjectId}
        setSelectedPackageId={setSelectedPackageId}
      />

      {/* Main Rendered Page Content */}
      <main style={{ flex: 1, paddingTop: 'var(--header-height, 76px)' }}>
        {renderCurrentPage()}
      </main>

      {/* Global Slide-over Cart Drawer */}
      <CartDrawer setActivePage={navigateTo} />

      {/* Global Toast Notification */}
      <Toast />

      {/* Luxury Footer */}
      <Footer
        setActivePage={navigateTo}
        setSelectedProjectId={setSelectedProjectId}
        setSelectedPackageId={setSelectedPackageId}
      />
    </div>
  );
}

export function App() {
  return (
    <CartProvider>
      <MainApp />
    </CartProvider>
  );
}

export default App;
