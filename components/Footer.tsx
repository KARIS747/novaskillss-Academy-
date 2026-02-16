
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 pb-16 border-b border-slate-900">
          {/* Brand */}
          <div className="space-y-6">
            <a href="#accueil" className="flex items-center gap-3 group">
              <div className="bg-blue-600 text-white w-10 h-10 rounded-lg flex items-center justify-center shadow-lg">
                <i className="fas fa-graduation-cap text-xl"></i>
              </div>
              <h2 className="text-xl font-extrabold text-white leading-tight">NovaSkills</h2>
            </a>
            <p className="text-sm leading-relaxed">
              Centre de formation professionnelle spécialisé dans les métiers du numérique et du business, 
              situé au cœur de Yaoundé, Cameroun.
            </p>
            <div className="flex gap-4">
               {['facebook-f', 'twitter', 'linkedin-in'].map(s => (
                 <a key={s} href="#" className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                   <i className={`fab fa-${s}`}></i>
                 </a>
               ))}
            </div>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Formations</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#formations" className="hover:text-blue-500 transition-colors">Développement Web Fullstack</a></li>
              <li><a href="#formations" className="hover:text-blue-500 transition-colors">Data Science & IA</a></li>
              <li><a href="#formations" className="hover:text-blue-500 transition-colors">Marketing Digital</a></li>
              <li><a href="#formations" className="hover:text-blue-500 transition-colors">Cybersécurité</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Liens Rapides</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#accueil" className="hover:text-blue-500 transition-colors">Accueil</a></li>
              <li><a href="#formations" className="hover:text-blue-500 transition-colors">Nos Formations</a></li>
              <li><a href="#financement" className="hover:text-blue-500 transition-colors">Financement</a></li>
              <li><a href="#faq" className="hover:text-blue-500 transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Contact Direct</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3"><i className="fas fa-map-marker-alt text-blue-500"></i> Immeuble Nkolmesseng, Yaoundé</li>
              <li className="flex items-center gap-3"><i className="fas fa-phone-alt text-blue-500"></i> (+237) 699 87 65 43</li>
              <li className="flex items-center gap-3"><i className="fas fa-envelope text-blue-500"></i> contact@novaskills.cm</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-medium tracking-wider uppercase">
          <p>© 2024 NovaSkills Academy Yaoundé. Tous droits réservés.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white">Confidentialité</a>
            <a href="#" className="hover:text-white">Mentions Légales</a>
            <a href="#" className="hover:text-white">Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
