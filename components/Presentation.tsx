
import React from 'react';

export const Presentation: React.FC = () => {
  const cards = [
    {
      icon: 'fa-robot',
      title: 'Orientation Scolaire',
      content: 'Utilisez notre assistant virtuel en bas à droite pour trouver la formation qui vous correspond le mieux.',
      color: 'blue'
    },
    {
      icon: 'fa-map-marker-alt',
      title: 'Notre Campus',
      content: 'Immeuble Nkolmesseng, Avenue Monseigneur Vogt, Yaoundé, Cameroun.',
      color: 'purple'
    },
    {
      icon: 'fa-headset',
      title: 'Contact Direct',
      content: 'Pour contacter l\'institut rapidement, posez vos questions directement au chatbot dédié.',
      color: 'emerald'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-extrabold text-slate-900 mb-6">
            📍 Présentation Générale
          </h2>
          <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full mb-8"></div>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Situé au cœur de Yaoundé, NovaSkills Academy est l'incubateur de talents 
            pour les leaders technologiques de demain.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <div 
              key={idx}
              className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:shadow-2xl hover:-translate-y-1 transition-all group"
            >
              <div className={`w-16 h-16 rounded-2xl bg-${card.color}-100 flex items-center justify-center text-${card.color}-600 mb-6 group-hover:scale-110 transition-transform`}>
                <i className={`fas ${card.icon} text-2xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{card.title}</h3>
              <p className="text-slate-600 leading-relaxed">{card.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
