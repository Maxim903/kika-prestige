import React from 'react';
import { Gift, Heart, Sparkles, Briefcase } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: Heart,
      title: "Mariages & Réceptions",
      description: "Une expérience élégante et mémorable pour célébrer l'amour. Organisation complète, décoration raffinée et coordination impeccable."
    },
    {
      id: 2,
      icon: Sparkles,
      title: "Événements Privés",
      description: "Soirées anniversaire, célébrations familiales, réceptions privées. Créez des moments inoubliables en toute élégance."
    },
    {
      id: 3,
      icon: Briefcase,
      title: "Événements Corporate",
      description: "Séminaires, lancements produits, soirées d'entreprise. Valorisez votre image avec des événements premium et professionnels."
    },
    {
      id: 4,
      icon: Gift,
      title: "Décoration & Ambiance",
      description: "Des décors raffinés et modernes. Chaque détail crée l'atmosphère parfaite pour votre événement."
    }
  ];

  return (
    <section id="services" className="bg-neutral-900/50 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/30 rounded-full px-4 py-2 mb-6">
            <p className="text-amber-400 text-sm font-medium uppercase tracking-wider">Nos prestations</p>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Des services adaptés à <span className="text-amber-400">chaque événement</span>
          </h2>

          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Nous offrons une gamme complète de services pour transformer votre vision en réalité.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="group bg-neutral-950 border border-white/10 rounded-2xl p-8 hover:border-amber-400/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-400/10"
              >
                <div className="w-16 h-16 rounded-xl bg-amber-400/10 flex items-center justify-center mb-6 group-hover:bg-amber-400/20 transition-colors">
                  <IconComponent className="w-8 h-8 text-amber-400" />
                </div>

                <h3 className="text-xl font-semibold mb-3 group-hover:text-amber-400 transition-colors">
                  {service.title}
                </h3>

                <p className="text-neutral-400 leading-relaxed text-sm">
                  {service.description}
                </p>

                <div className="mt-6 inline-flex items-center text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm font-medium">En savoir plus</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;