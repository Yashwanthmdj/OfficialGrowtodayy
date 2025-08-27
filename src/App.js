import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import BrandingIntro from './components/BrandingIntro';
import SocialProof from './components/SocialProof';
import LeadCapture from './components/LeadCapture';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for smooth animations
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-primary flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-accent border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <h2 className="text-xl font-semibold text-white">Loading...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="App bg-primary min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <BrandingIntro />
        <Services />
        <SocialProof />
        <LeadCapture />
      </main>
      <Footer />
    </div>
  );
}

export default App;
