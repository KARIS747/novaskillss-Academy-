
import React from 'react';

export const Financing: React.FC = () => {
  return (
    <section id="financement" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500 via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-extrabold mb-6">
            💰 Prix & Financement
          </h2>
          <div className="w-24 h-1.5 bg-blue-500 mx-auto rounded-full mb-8"></div>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Nous proposons plusieurs options de financement pour rendre nos formations accessibles à tous.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Option 1 */}
          <div className="p-10 rounded-[3rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all hover:-translate-y-2">
            <div className="w-16 h-16 rounded-2xl bg-blue-500/20 flex items-center justify-center text-blue-400 mb-8">
              <i className="fas fa-money-bill-wave text-3xl"></i>
            </div>
            <h3 className="text-2xl font-bold mb-6">Options de Paiement</h3>
            <ul className="space-y-4">
              {[
                'Paiement unique : -5% de réduction',
                'Paiement échelonné : 50% + 50%',
                'Paiement mensuel : 3 ou 4 mensualités',
                'Financement partenaire'
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-4 text-slate-300">
                  <i className="fas fa-check-circle text-blue-500"></i>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Option 2 */}
          <div className="p-10 rounded-[3rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all hover:-translate-y-2">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 mb-8">
              <i className="fas fa-graduation-cap text-3xl"></i>
            </div>
            <h3 className="text-2xl font-bold mb-6">Bourses & Réductions</h3>
            <ul className="space-y-4">
              {[
                'Étudiants : -15% sur justificatif',
                'Groupe de 3+ : -10% par personne',
                'Anciens élèves : -20%',
                'Offres spéciales limitées'
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-4 text-slate-300">
                  <i className="fas fa-percent text-emerald-500"></i>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
