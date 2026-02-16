
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Presentation } from './components/Presentation';
import { Courses } from './components/Courses';
import { Benefits } from './components/Benefits';
import { Financing } from './components/Financing';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const loadBot = () => {
      const injectScript = document.createElement('script');
      injectScript.src = "https://cdn.botpress.cloud/webchat/v3.6/inject.js";
      injectScript.async = true;
      document.body.appendChild(injectScript);

      injectScript.onload = () => {
        const configScript = document.createElement('script');
        configScript.src = "https://files.bpcontent.cloud/2026/01/15/00/20260115005427-YWGBVJ4O.js";
        configScript.async = true;
        document.body.appendChild(configScript);
      };
    };

    loadBot();

    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-x-hidden">
      {/* Test Page Disclaimer */}
      <div className="bg-amber-100 text-amber-800 text-center py-2 px-4 text-xs lg:text-sm font-medium border-b border-amber-200">
        <i className="fas fa-exclamation-triangle mr-2"></i>
        Ceci est une page de test : NovaSkills Academy est une école fictive.
      </div>

      <Header />
      
      <main className="flex-grow">
        <Hero />
        <Presentation />
        <Courses />
        <Benefits />
        <Financing />
        <FAQ />
        <Contact />
      </main>

      <Footer />

      {/* Back to top button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-40 bg-blue-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:bg-blue-700 hover:-translate-y-1 ${
          showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Back to top"
      >
        <i className="fas fa-arrow-up text-lg"></i>
      </button>
    </div>
  );
};

export default App;
