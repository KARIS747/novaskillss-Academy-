
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section id="accueil" className="relative pt-8 pb-16 lg:pt-20 lg:pb-32 overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[400px] h-[400px] lg:w-[800px] lg:h-[800px] bg-blue-600/5 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/4 w-[300px] h-[300px] lg:w-[600px] lg:h-[600px] bg-purple-600/5 rounded-full blur-[100px] -z-10"></div>

      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left z-10 order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-xs font-bold tracking-widest uppercase mb-8 border border-blue-100 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            Orientation & Excellence Numérique
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-black text-slate-900 leading-[1.1] mb-8 tracking-tight">
            Réinventez votre <br className="hidden xl:block" />
            <span className="gradient-text">carrière digitale</span>
          </h1>
          
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 mb-12 max-w-2xl leading-relaxed mx-auto lg:mx-0">
            Besoin d'aide pour choisir votre voie ? Pour toute orientation scolaire ou pour contacter l'institut, 
            <span className="text-blue-600 font-bold"> utilisez notre assistant virtuel intelligent </span> 
            disponible en bas de votre écran.
          </p>
          
          {/* Informational Status Badges */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-5">
            <div className="flex items-center justify-center gap-3 px-8 py-5 bg-slate-900 text-white rounded-3xl font-bold text-lg shadow-2xl transition-transform hover:scale-105">
              <i className="fas fa-university text-blue-400"></i>
              <span>Institut de Yaoundé</span>
            </div>
            <div className="flex items-center justify-center gap-3 px-8 py-5 bg-white text-blue-600 border-2 border-blue-50 rounded-3xl font-bold text-lg shadow-lg">
              <i className="fas fa-robot text-2xl animate-pulse"></i>
              <span>Bot d'Orientation Actif</span>
            </div>
          </div>
          
          <div className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-8 text-slate-400 font-bold text-xs uppercase tracking-[0.2em]">
            <span className="flex items-center gap-2"><i className="fas fa-shield-halved text-emerald-500"></i> Certifié</span>
            <span className="flex items-center gap-2"><i className="fas fa-clock text-emerald-500"></i> 24h/24 Support</span>
            <span className="flex items-center gap-2"><i className="fas fa-globe text-emerald-500"></i> Partout en Afrique</span>
          </div>
        </div>

        {/* Large Image Container */}
        <div className="flex-1 relative w-full lg:max-w-[55%] order-1 lg:order-2">
          <div className="relative z-10 rounded-[3rem] lg:rounded-[5rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] border-[12px] border-white transition-all duration-1000 group">
            <img
              src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=2070&auto=format&fit=crop"
              alt="Étudiants africains Tech NovaSkills"
              className="w-full h-auto min-h-[400px] lg:h-[700px] object-cover transition-transform duration-700 group-hover:scale-110"
              loading="eager"
            />
            {/* Soft Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 via-transparent to-transparent"></div>
          </div>
          
          {/* Decorative Floating Card */}
          <div className="absolute -bottom-6 -left-6 lg:-bottom-12 lg:-left-12 z-20 glass-card p-6 lg:p-10 rounded-[2.5rem] shadow-2xl border border-white/50 hidden sm:block animate-float">
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 lg:w-20 lg:h-20 rounded-[1.5rem] bg-blue-600 text-white flex items-center justify-center shadow-2xl shadow-blue-500/40">
                <i className="fas fa-code text-2xl lg:text-4xl"></i>
              </div>
              <div>
                <p className="text-slate-900 font-black text-xl lg:text-3xl leading-none mb-1">Expertise IT</p>
                <p className="text-slate-500 text-sm lg:text-base font-semibold">Cameroun & Diaspora</p>
              </div>
            </div>
          </div>

          {/* Statistics Badge */}
          <div className="absolute -top-6 -right-6 lg:-top-10 lg:-right-10 z-20 bg-white p-5 lg:p-8 rounded-[2rem] shadow-2xl border border-blue-50 hidden md:block transition-transform hover:rotate-3 cursor-default">
             <div className="text-center">
                <p className="text-4xl lg:text-6xl font-black text-blue-600 mb-1">98%</p>
                <p className="text-[10px] lg:text-xs text-slate-400 font-bold uppercase tracking-widest">Satisfaction Bot</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};
