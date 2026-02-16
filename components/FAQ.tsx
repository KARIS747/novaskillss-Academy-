
import React, { useState } from 'react';

const faqItems = [
  {
    q: "Où se trouve exactement votre campus à Yaoundé ?",
    a: "Nous sommes situés à l'Immeuble Nkolmesseng, Avenue Monseigneur Vogt, au 3ème étage. C'est à proximité du Carrefour Biyem-Assi, facile d'accès en taxi ou en bus."
  },
  {
    q: "Dois-je avoir mon propre ordinateur pour la formation ?",
    a: "Pour les formations en présentiel, nous fournissons des ordinateurs en lab, mais il est fortement recommandé d'avoir son propre ordinateur pour travailler à la maison."
  },
  {
    q: "Acceptez-vous les paiements par Mobile Money ?",
    a: "Oui, nous acceptons Orange Money, MTN Mobile Money et PayPal pour les paiements en ligne."
  },
  {
    q: "Votre certificat est-il équivalent à un BTS ou Licence ?",
    a: "Non, c'est un certificat professionnel qui atteste de compétences pratiques, pas un diplôme d'État. Cependant, il est très valorisé par les employeurs."
  },
  {
    q: "La formation en ligne est-elle aussi efficace ?",
    a: "Le contenu est identique, mais l'expérience diffère. Nous ajoutons des sessions de mentorat en visio pour compenser le manque de présentiel."
  },
  {
    q: "Je ne suis pas satisfait de ma formation, que faire ?",
    a: "Notre responsable pédagogique est disponible pour écouter vos préoccupations et trouver une solution adaptée à votre situation."
  }
];

export const FAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-extrabold text-slate-900 mb-6">
            🧠 Questions & Réponses
          </h2>
          <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full mb-8"></div>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Les questions les plus fréquemment posées par nos futurs étudiants.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqItems.map((item, idx) => (
            <div 
              key={idx} 
              className={`rounded-3xl border transition-all duration-300 ${
                openIdx === idx ? 'border-blue-200 bg-blue-50/30' : 'border-slate-100 bg-white hover:border-blue-100'
              }`}
            >
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full text-left p-6 lg:p-8 flex items-center justify-between gap-4"
              >
                <span className="text-lg lg:text-xl font-bold text-slate-900 leading-tight">
                  {item.q}
                </span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                  openIdx === idx ? 'bg-blue-600 text-white rotate-180' : 'bg-slate-100 text-slate-500'
                }`}>
                  <i className="fas fa-chevron-down text-sm"></i>
                </div>
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${
                openIdx === idx ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="p-6 lg:p-8 pt-0 text-slate-600 leading-relaxed text-lg border-t border-blue-100/50">
                  {item.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
