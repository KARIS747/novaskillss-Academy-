
import React, { useState } from 'react';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Accueil', href: '#accueil' },
    { label: 'Formations', href: '#formations' },
    { label: 'Financement', href: '#financement' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 glass-card">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#accueil" className="flex items-center gap-3 group">
          <div className="bg-blue-600 text-white w-12 h-12 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
            <i className="fas fa-graduation-cap text-2xl"></i>
          </div>
          <div>
            <h1 className="text-xl font-extrabold text-slate-900 leading-tight">NovaSkills</h1>
            <p className="text-xs text-blue-600 font-semibold tracking-wider uppercase">Academy Yaoundé</p>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-slate-600 font-medium hover:text-blue-600 transition-colors py-2"
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center gap-2 text-blue-600 font-bold animate-pulse">
            <i className="fas fa-robot"></i>
            <span className="text-xs uppercase tracking-tighter">Assistant Live</span>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-2xl p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-slate-800`}></i>
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-screen py-6 opacity-100' : 'max-h-0 py-0 opacity-0'
        } bg-white border-t`}
      >
        <div className="container mx-auto px-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-lg font-medium text-slate-700 py-2 border-b border-slate-50"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="py-4 text-center bg-blue-50 rounded-xl">
            <p className="text-blue-600 font-bold flex items-center justify-center gap-2">
              <i className="fas fa-robot"></i>
              Contactez le Bot pour l'orientation
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};
