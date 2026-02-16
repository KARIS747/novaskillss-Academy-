
import React from 'react';

const courses = [
  {
    title: 'Développement Web Fullstack',
    subtitle: 'Formation intensive de 3 mois',
    duration: '3 mois intensifs',
    level: 'Débutant → Intermédiaire',
    details: [
      'HTML5, CSS3, JavaScript ES6+',
      'React.js & Node.js',
      'Bases de données (MongoDB, MySQL)',
      'Git, GitHub & déploiement',
      '3 projets professionnels portfolio'
    ],
    modality: 'Présentiel & En ligne',
    price: '250 000 FCFA',
    color: 'blue'
  },
  {
    title: 'Data Science & IA',
    subtitle: 'Formation avancée de 4 mois',
    duration: '4 mois intensifs',
    level: 'Intermédiaire',
    details: [
      'Python avancé (NumPy, Pandas)',
      'Analyse statistique & visualisation',
      'Machine Learning (Scikit-learn)',
      'Bases de Big Data & SQL',
      'Cas pratiques sur données réelles'
    ],
    modality: 'En ligne avec mentorat',
    price: '350 000 FCFA',
    color: 'purple'
  },
  {
    title: 'Marketing Digital',
    subtitle: 'Formation de 2 mois',
    duration: '2 mois',
    level: 'Débutant',
    details: [
      'Stratégie réseaux sociaux',
      'SEO/SEA (Google Ads)',
      'Content Marketing',
      'E-commerce (Shopify)',
      'Marketing d\'influence'
    ],
    modality: 'Présentiel & En ligne',
    price: '150 000 FCFA',
    color: 'pink'
  },
  {
    title: 'Cybersécurité',
    subtitle: 'Nouvelle formation de 3 mois',
    duration: '3 mois',
    level: 'Intermédiaire',
    details: [
      'Sécurité réseaux',
      'Ethical Hacking basics',
      'Sécurité des apps web',
      'Législation africaine',
      'Audit de vulnérabilité'
    ],
    modality: 'Présentiel uniquement',
    price: '400 000 FCFA',
    color: 'indigo'
  }
];

export const Courses: React.FC = () => {
  return (
    <section id="formations" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-extrabold text-slate-900 mb-6">
            📚 Nos Formations
          </h2>
          <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full mb-8"></div>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Programmes conçus avec des experts fictifs pour démontrer notre expertise numérique imaginaire.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {courses.map((course, idx) => (
            <div key={idx} className="group bg-white rounded-[2.5rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-slate-100 flex flex-col">
              <div className={`p-8 bg-${course.color}-600 text-white`}>
                <h3 className="text-2xl font-bold mb-2 leading-tight">{course.title}</h3>
                <p className="text-white/80 text-sm font-medium">{course.subtitle}</p>
              </div>
              
              <div className="p-8 flex-grow">
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <i className="fas fa-clock mt-1 text-slate-400"></i>
                    <p className="text-sm text-slate-600"><span className="font-bold">Durée :</span> {course.duration}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <i className="fas fa-signal mt-1 text-slate-400"></i>
                    <p className="text-sm text-slate-600"><span className="font-bold">Niveau :</span> {course.level}</p>
                  </div>
                </div>

                <div className="mb-8">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Programme</p>
                  <ul className="space-y-3">
                    {course.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-3 text-sm text-slate-700">
                        <i className={`fas fa-check-circle mt-0.5 text-${course.color}-500`}></i>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="p-8 pt-0 mt-auto">
                <div className={`w-full py-4 bg-slate-50 text-slate-800 rounded-2xl font-extrabold text-xl text-center border border-slate-100 group-hover:bg-slate-100 transition-colors`}>
                  {course.price}
                </div>
                <div className="mt-4 flex items-center justify-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-widest py-2">
                   <i className="fas fa-robot animate-pulse"></i>
                   Plus d'infos via le Bot
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
