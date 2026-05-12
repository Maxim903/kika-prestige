import React from 'react';
import { CheckCircle } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '100+', label: 'Événements réalisés' },
    { number: '15+', label: 'Années d\'expérience' },
    { number: '98%', label: 'Client satisfaits' },
    { number: '24/7', label: 'Support dédié' }
  ];

  const values = [
    'Excellence & Qualité',
    'Innovation & Créativité',
    'Ponctualité & Fiabilité',
    'Écoute & Personnalisation'
  ];

  return (
    <section id="about" className="max-w-7xl mx-auto px-6 py-24">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/30 rounded-full px-4 py-2 mb-6">
            <p className="text-amber-400 text-sm font-medium uppercase tracking-wider">À propos</p>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Une agence événementielle pensée pour l'<span className="text-amber-400">excellence</span>.
          </h2>

          <p className="text-neutral-300 leading-relaxed mb-6 text-lg">
            Chez Kika Prestige, chaque événement est conçu comme une expérience unique et mémorable. Nous combinons créativité, élégance et organisation stratégique pour transformer vos rêves en réalité.
          </p>

          <p className="text-neutral-400 leading-relaxed mb-10">
            Notre équipe expérimentée prend en charge l'ensemble du projet : concept créatif, décoration haut de gamme, coordination logistique et expérience client sans faille.
          </p>

          <div className="space-y-3">
            {values.map((value, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <span className="text-neutral-200">{value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1400&auto=format&fit=crop"
              alt="Event Planning"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>

          <div className="absolute -bottom-10 -left-6 bg-neutral-900 border border-white/10 rounded-2xl p-8 shadow-2xl max-w-xs">
            <div className="grid grid-cols-2 gap-6">
              {stats.slice(0, 2).map((stat, index) => (
                <div key={index}>
                  <p className="text-3xl font-bold text-amber-400 mb-1">{stat.number}</p>
                  <p className="text-sm text-neutral-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 border-t border-white/10">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <p className="text-4xl md:text-5xl font-bold text-amber-400 mb-2">{stat.number}</p>
            <p className="text-neutral-400 text-sm">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;