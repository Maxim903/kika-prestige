import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden pt-20">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2000&auto=format&fit=crop')"
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-neutral-950" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-36 lg:py-48">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/30 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
            <p className="text-amber-400 text-sm font-medium">AGENCE ÉVÉNEMENTIELLE PREMIUM</p>
          </div>

          <h1 className="text-5xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-6">
            L'art de créer des événements <span className="text-amber-400">élégants</span> et inoubliables.
          </h1>

          <p className="text-lg text-neutral-300 leading-relaxed mb-10 max-w-2xl">
            Kika Prestige conçoit des événements d'exception pour particuliers, entreprises et marques. Mariages, soirées privées, événements corporate : chaque occasion devient une expérience mémorable.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4">
            <button className="bg-amber-400 hover:bg-amber-300 text-black font-semibold px-8 py-4 rounded-2xl transition-all duration-300 shadow-2xl hover:shadow-amber-400/20 flex items-center gap-2">
              Demander un devis
              <ChevronRight size={20} />
            </button>

            <button className="border border-white/30 hover:border-amber-400 hover:text-amber-400 px-8 py-4 rounded-2xl transition-all duration-300">
              Découvrir nos prestations
            </button>
          </div>
        </div>
      </div>

      <div className="relative z-10 flex justify-center pb-8">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;