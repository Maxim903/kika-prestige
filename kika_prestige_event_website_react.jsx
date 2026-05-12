export default function KikaPrestigeWebsite() {
  const services = [
    {
      title: "Organisation d'événements",
      description:
        "Création et gestion d'événements privés et professionnels sur mesure avec une attention particulière aux détails.",
    },
    {
      title: "Mariages & Réceptions",
      description:
        "Une expérience élégante et mémorable pour célébrer les moments les plus importants de votre vie.",
    },
    {
      title: "Décoration & Ambiance",
      description:
        "Des décors raffinés, modernes et immersifs adaptés à chaque univers et chaque thème.",
    },
    {
      title: "Événements Corporate",
      description:
        "Séminaires, lancements de produits, soirées d'entreprise et événements premium pour valoriser votre image.",
    },
  ];

  const gallery = [
    "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=1600&auto=format&fit=crop",
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-white font-sans">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2000&auto=format&fit=crop)",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-neutral-950" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-28 lg:py-36">
          <div className="max-w-3xl">
            <p className="uppercase tracking-[0.35em] text-amber-400 text-sm mb-5">
              KIKA PRESTIGE
            </p>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
              L'art de créer des événements élégants et inoubliables.
            </h1>

            <p className="text-lg text-neutral-300 leading-relaxed mb-10 max-w-2xl">
              Kika Prestige accompagne particuliers, entreprises et marques dans la conception d'événements haut de gamme : mariages, soirées privées, événements corporate et expériences exclusives.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-amber-400 hover:bg-amber-300 text-black font-semibold px-7 py-4 rounded-2xl transition-all duration-300 shadow-2xl">
                Demander un devis
              </button>

              <button className="border border-white/20 hover:border-amber-400 hover:text-amber-400 px-7 py-4 rounded-2xl transition-all duration-300">
                Découvrir nos prestations
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-amber-400 uppercase tracking-[0.25em] text-sm mb-4">
            À propos
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Une agence événementielle pensée pour l'excellence.
          </h2>

          <p className="text-neutral-300 leading-relaxed mb-6 text-lg">
            Chez Kika Prestige, chaque événement est conçu comme une expérience unique. Nous combinons créativité, élégance et organisation stratégique afin d'offrir des moments exceptionnels et mémorables.
          </p>

          <p className="text-neutral-400 leading-relaxed">
            Notre équipe prend en charge l'ensemble du projet : concept, décoration, coordination, logistique et expérience client.
          </p>
        </div>

        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1400&auto=format&fit=crop"
            alt="Event"
            className="rounded-[2rem] shadow-2xl object-cover h-[520px] w-full"
          />

          <div className="absolute -bottom-8 -left-8 bg-neutral-900 border border-white/10 p-6 rounded-3xl shadow-2xl max-w-xs">
            <p className="text-4xl font-bold text-amber-400 mb-2">100+</p>
            <p className="text-neutral-300">
              événements organisés avec une expérience premium et personnalisée.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-neutral-900/70 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="text-center mb-16">
            <p className="text-amber-400 uppercase tracking-[0.25em] text-sm mb-4">
              Nos prestations
            </p>

            <h2 className="text-4xl lg:text-5xl font-bold">
              Des services adaptés à chaque événement.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-neutral-950 border border-white/10 rounded-[2rem] p-8 hover:border-amber-400/60 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-14 h-14 rounded-2xl bg-amber-400/10 flex items-center justify-center mb-6">
                  <div className="w-6 h-6 rounded-full bg-amber-400" />
                </div>

                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>

                <p className="text-neutral-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
          <div>
            <p className="text-amber-400 uppercase tracking-[0.25em] text-sm mb-4">
              Galerie
            </p>

            <h2 className="text-4xl lg:text-5xl font-bold max-w-2xl leading-tight">
              Des ambiances raffinées et des expériences mémorables.
            </h2>
          </div>

          <p className="text-neutral-400 max-w-xl leading-relaxed">
            Découvrez quelques inspirations visuelles représentant l'univers élégant et moderne de Kika Prestige.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {gallery.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-[2rem] group"
            >
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-[340px] object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto bg-gradient-to-r from-amber-400 to-yellow-300 rounded-[3rem] p-10 lg:p-16 text-black shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="uppercase tracking-[0.25em] text-sm mb-4 font-semibold">
                Contact
              </p>

              <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Donnez vie à votre prochain événement.
              </h2>

              <p className="text-black/70 text-lg leading-relaxed">
                Contactez Kika Prestige pour concevoir une expérience unique, élégante et parfaitement organisée.
              </p>
            </div>

            <div className="bg-white rounded-[2rem] p-8 shadow-xl">
              <div className="space-y-5">
                <input
                  type="text"
                  placeholder="Nom complet"
                  className="w-full border border-neutral-200 rounded-xl px-4 py-4 outline-none focus:border-black"
                />

                <input
                  type="email"
                  placeholder="Adresse email"
                  className="w-full border border-neutral-200 rounded-xl px-4 py-4 outline-none focus:border-black"
                />

                <textarea
                  rows={5}
                  placeholder="Décrivez votre événement"
                  className="w-full border border-neutral-200 rounded-xl px-4 py-4 outline-none focus:border-black"
                />

                <button className="w-full bg-black text-white py-4 rounded-xl font-semibold hover:opacity-90 transition-all duration-300">
                  Envoyer la demande
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold tracking-wide">
              KIKA <span className="text-amber-400">PRESTIGE</span>
            </h3>
            <p className="text-neutral-500 mt-2">
              Agence événementielle premium.
            </p>
          </div>

          <div className="flex gap-6 text-neutral-400 text-sm">
            <a href="#" className="hover:text-amber-400 transition-colors">
              Instagram
            </a>
            <a href="#" className="hover:text-amber-400 transition-colors">
              Facebook
            </a>
            <a href="#" className="hover:text-amber-400 transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
