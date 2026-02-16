
import React from 'react';

export const Contact: React.FC = () => {
  const contactInfo = [
    { icon: 'fa-map-marker-alt', title: 'Adresse', detail: 'Immeuble Nkolmesseng, Avenue Monseigneur Vogt, Yaoundé, Cameroun' },
    { icon: 'fa-phone-alt', title: 'Téléphone', detail: 'Adm: (+237) 233 44 56 78 | Tech: (+237) 699 87 65 44' },
    { icon: 'fa-whatsapp', title: 'WhatsApp', detail: '(+237) 655 44 33 22' },
    { icon: 'fa-envelope', title: 'Email', detail: 'contact@novaskills-yaounde.cm' },
    { icon: 'fa-clock', title: 'Horaires', detail: 'Lun-Ven: 8h-18h | Sam: 9h-13h' }
  ];

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="bg-white rounded-[3.5rem] shadow-2xl overflow-hidden border border-slate-100 flex flex-col lg:flex-row">
          {/* Left Column - Contact Method */}
          <div className="flex-1 p-10 lg:p-20">
            <h2 className="text-3xl lg:text-5xl font-extrabold text-slate-900 mb-8">
              Comment nous contacter ?
            </h2>
            <p className="text-slate-600 mb-12 text-lg">
              Pour une réponse immédiate et une orientation personnalisée, notre <span className="text-blue-600 font-bold">assistant virtuel intelligent</span> est votre meilleur allié.
            </p>

            <div className="space-y-8 bg-blue-50/50 p-8 rounded-[2rem] border border-blue-100 mb-12">
              <div className="flex gap-6 items-center">
                <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg animate-pulse">
                  <i className="fas fa-robot text-2xl"></i>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-1">Orientation Interactive</h4>
                  <p className="text-slate-500 text-sm leading-relaxed italic">
                    "Cliquez sur l'icône de chat en bas à droite pour démarrer votre orientation ou poser une question à l'institut."
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold text-slate-900 mb-6 uppercase tracking-wider text-sm opacity-50">Suivez l'institut</h4>
              <div className="flex flex-wrap gap-4">
                {['facebook-f', 'twitter', 'instagram', 'linkedin-in', 'whatsapp'].map((social) => (
                  <a 
                    key={social} 
                    href="#" 
                    className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-600 flex items-center justify-center hover:bg-blue-600 hover:text-white hover:-translate-y-1 transition-all shadow-sm"
                  >
                    <i className={`fab fa-${social} text-xl`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Info Box */}
          <div className="lg:w-[450px] bg-slate-900 p-10 lg:p-20 text-white flex flex-col">
            <h3 className="text-2xl font-bold mb-12">Administration</h3>
            <div className="space-y-10 flex-grow">
              {contactInfo.map((info, idx) => (
                <div key={idx} className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-blue-400 flex-shrink-0">
                    <i className={`fas ${info.icon} text-xl`}></i>
                  </div>
                  <div>
                    <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-1">{info.title}</p>
                    <p className="text-slate-300 leading-relaxed text-sm">{info.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-20 p-8 rounded-3xl bg-blue-600/20 border border-blue-500/30">
              <p className="text-sm text-blue-300 font-bold mb-2">Orientation 24h/24</p>
              <p className="text-white text-lg font-bold">L'assistant virtuel est prêt !</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
