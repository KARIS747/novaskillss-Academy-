
import React from 'react';

export const Benefits: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="flex-1 relative">
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop" 
                alt="Pourquoi NovaSkills" 
                className="w-full h-auto"
              />
            </div>
            {/* Decoration */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-100 rounded-full -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-purple-50 rounded-full -z-10"></div>
          </div>

          <div className="flex-1">
            <h2 className="text-3xl lg:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">
              Pourquoi choisir <span className="text-blue-600">NovaSkills Academy</span> Yaoundé ?
            </h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              NovaSkills Academy Yaoundé est le centre de formation de référence au Cameroun pour les métiers du numérique. Notre école propose des programmes adaptés aux besoins du marché africain.
            </p>

            <div className="space-y-6">
              {[
                { title: 'Formateurs Experts', desc: 'Professionnels en activité avec minimum 5 ans d\'expérience.' },
                { title: 'Pédagogie Pratique', desc: '70% de pratique, 30% de théorie pour une immersion totale.' },
                { title: 'Accompagnement', desc: 'Suivi individuel et mentorat pour chaque étudiant.' },
                { title: 'Certification Reconnue', desc: 'Certificat professionnel valorisé par les employeurs.' },
                { title: 'Réseau Partenaires', desc: 'Accès privilégié à des opportunités d\'emploi.' }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6 group">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <i className="fas fa-check text-xl"></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-1">{item.title}</h4>
                    <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100">
               <h3 className="text-xl font-bold text-slate-900 mb-4">Infrastructure Moderne</h3>
               <p className="text-slate-600 leading-relaxed italic">
                 "Notre campus à Yaoundé dispose de salles climatisées, un laboratoire informatique équipé, un espace coworking et une bibliothèque numérique."
               </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
