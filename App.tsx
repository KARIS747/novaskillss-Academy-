
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
      // Obscurcissement des URLs pour éviter le copier-coller facile depuis le code source
      const _a = "https://cdn.botpress.cloud/webchat/v3.6/inject.js";
      const _b = "https://files.bpcontent.cloud/2026/01/15/00/20260115005427-YWGBVJ4O.js";
      
      const injectScript = document.createElement('script');
      injectScript.src = _a;
      injectScript.async = true;
      document.body.appendChild(injectScript);

      injectScript.onload = () => {
        const configScript = document.createElement('script');
        configScript.src = _b;
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
    <div className="min-h-screen flex flex-col relative overflow-x-hidden selection:bg-blue-600 selection:text-white">
      {/* Banner Disclaimer for Fictitious School */}
      <div className="bg-slate-900 text-white text-center py-2.5 px-4 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] border-b border-white/10 z-[60]">
        <span className="opacity-70"><i className="fas fa-info-circle mr-2"></i> Page de démonstration — Institut Fictif</span>
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
        className={`fixed bottom-8 right-8 z-40 bg-blue-600 text-white p-4 rounded-2xl shadow-2xl transition-all duration-500 hover:bg-blue-700 hover:-translate-y-2 focus:outline-none ${
          showBackToTop ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-50 pointer-events-none'
        }`}
        aria-label="Retour en haut"
      >
        <i className="fas fa-chevron-up text-lg"></i>
      </button>
    </div>
  );
};

export default App;
