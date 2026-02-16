
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-500 pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20 pb-16 border-b border-white/5">
          {/* Brand */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-900/20">
                <i className="fas fa-graduation-cap text-2xl"></i>
              </div>
              <div>
                <h2 className="text-2xl font-black text-white leading-none mb-1">NovaSkills</h2>
                <p className="text-[10px] text-blue-500 font-bold uppercase tracking-widest">Yaoundé Academy</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Une plateforme de formation fictive conçue pour démontrer les capacités de design moderne et d'intégration d'IA.
            </p>
            <div className="flex gap-4">
               {['facebook', 'twitter', 'linkedin', 'whatsapp'].map(s => (
                 <div key={s} className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center text-white/40 transition-all hover:bg-blue-600 hover:text-white cursor-help" title="Lien social fictif">
                   <i className={`fab fa-${s} text-lg`}></i>
                 </div>
               ))}
            </div>
          </div>

          {/* Formations */}
          <div>
            <h4 className="text-white font-black mb-8 uppercase tracking-[0.2em] text-xs">Formations</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                <span className="hover:text-blue-500 transition-colors">Développement Web</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                <span className="hover:text-blue-500 transition-colors">Data Science & IA</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                <span className="hover:text-blue-500 transition-colors">Marketing Digital</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                <span className="hover:text-blue-500 transition-colors">Cybersécurité</span>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-black mb-8 uppercase tracking-[0.2em] text-xs">Navigation</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#accueil" className="hover:text-white transition-colors">Accueil</a></li>
              <li><a href="#formations" className="hover:text-white transition-colors">Nos Formations</a></li>
              <li><a href="#financement" className="hover:text-white transition-colors">Financement</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Questions fréquentes</a></li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-white font-black mb-8 uppercase tracking-[0.2em] text-xs">Yaoundé Campus</h4>
            <ul className="space-y-5 text-sm">
              <li className="flex gap-4">
                <i className="fas fa-map-pin text-blue-500 mt-1"></i>
                <span>Immeuble Nkolmesseng, Avenue Monseigneur Vogt</span>
              </li>
              <li className="flex gap-4 font-bold text-white">
                <i className="fas fa-phone text-blue-500 mt-1"></i>
                <span>(+237) 699 87 65 43</span>
              </li>
              <li className="flex gap-4">
                <i className="fas fa-envelope text-blue-500 mt-1"></i>
                <span>contact@novaskills.cm</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-[10px] font-bold uppercase tracking-[0.25em]">
          <p>© 2024 NovaSkills Academy — Institut Fictif pour démonstration technique.</p>
          <div className="flex gap-10">
            <span className="hover:text-white cursor-help">Confidentialité</span>
            <span className="hover:text-white cursor-help">Mentions</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
