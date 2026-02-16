
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section id="accueil" className="relative pt-10 pb-16 lg:pt-16 lg:pb-24 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[300px] h-[300px] lg:w-[600px] lg:h-[600px] bg-blue-100/40 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-[250px] h-[250px] lg:w-[500px] lg:h-[500px] bg-purple-100/40 rounded-full blur-[100px] -z-10"></div>

      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <div className="flex-1 text-center lg:text-left z-10 order-2 lg:order-1">
          <span className="inline-block px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-xs lg:text-sm font-bold tracking-widest uppercase mb-6 shadow-sm border border-blue-100">
            Orientation & Excellence Numérique
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-slate-900 leading-[1.2] lg:leading-[1.1] mb-6 lg:mb-8">
            Réinventez votre <span className="gradient-text">carrière digitale</span> à Yaoundé
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 mb-10 max-w-2xl leading-relaxed mx-auto lg:mx-0">
            Besoin d'aide pour choisir votre voie ? Pour toute orientation scolaire ou pour contacter l'institut, 
            <span className="text-blue-600 font-bold"> utilisez notre assistant virtuel intelligent </span> 
            en bas à droite de votre écran.
          </p>
          
          {/* Informational Badges instead of empty buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-4">
            <div className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold text-base lg:text-lg shadow-lg flex items-center justify-center gap-3">
              <i className="fas fa-graduation-cap text-blue-400"></i>
              <span>École de Formation Tech</span>
            </div>
            <div className="px-8 py-4 bg-white text-blue-600 border-2 border-blue-50 rounded-2xl font-bold text-base lg:text-lg flex items-center justify-center gap-3 shadow-md">
              <i className="fas fa-robot text-2xl animate-pulse"></i>
              <span>Assistant Bot Actif</span>
            </div>
          </div>
          
          <div className="mt-8 lg:mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-4 lg:gap-6 text-slate-500 font-medium text-sm lg:text-base">
            <div className="flex items-center gap-2">
              <i className="fas fa-check-circle text-emerald-500"></i>
              <span>Support Bot 24/7</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fas fa-check-circle text-emerald-500"></i>
              <span>Orientation Personnalisée</span>
            </div>
          </div>
        </div>

        <div className="flex-1 relative w-full lg:max-w-[50%] order-1 lg:order-2 mb-8 lg:mb-0">
          <div className="relative z-10 rounded-[2.5rem] lg:rounded-[4rem] overflow-hidden shadow-[0_20px_50px_rgba(37,99,235,0.15)] border-[8px] border-white/50 backdrop-blur-sm transition-all duration-700 hover:scale-[1.02]">
            <img
              src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=2070&auto=format&fit=crop"
              alt="Étudiants africains en informatique NovaSkills Academy"
              className="w-full aspect-[4/3] lg:aspect-auto h-auto min-h-[350px] lg:h-[600px] object-cover"
              loading="lazy"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent pointer-events-none"></div>
          </div>
          
          {/* Floating Card - Responsive visibility */}
          <div className="absolute -bottom-4 -left-4 lg:-bottom-8 lg:-left-8 z-20 glass-card p-4 lg:p-7 rounded-3xl shadow-2xl border border-white/40 hidden sm:block animate-bounce-slow">
            <div className="flex items-center gap-4 lg:gap-5">
              <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-blue-200 shadow-xl">
                <i className="fas fa-laptop-code text-xl lg:text-3xl"></i>
              </div>
              <div>
                <p className="text-slate-900 font-extrabold text-base lg:text-xl">70% Pratique</p>
                <p className="text-slate-500 text-xs lg:text-sm font-medium">Apprendre en créant</p>
              </div>
            </div>
          </div>

          {/* Second Floating Badge */}
          <div className="absolute -top-4 -right-4 lg:-top-8 lg:-right-8 z-20 bg-white/90 backdrop-blur-md p-3 lg:p-5 rounded-2xl shadow-xl border border-white/40 hidden md:block">
            <div className="flex flex-col items-center">
              <span className="text-3xl lg:text-4xl font-black text-blue-600">100%</span>
              <span className="text-[10px] lg:text-xs text-slate-500 uppercase font-bold tracking-widest">Yaoundéen</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
