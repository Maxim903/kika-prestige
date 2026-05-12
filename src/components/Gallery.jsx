import React, { useState } from 'react';
import { X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const gallery = [
    {
      id: 1,
      title: "Mariage Élégant",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1600&auto=format&fit=crop",
      category: "Mariages"
    },
    {
      id: 2,
      title: "Réception Privée",
      image: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=1600&auto=format&fit=crop",
      category: "Événements Privés"
    },
    {
      id: 3,
      title: "Gala Corporate",
      image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=1600&auto=format&fit=crop",
      category: "Corporate"
    },
    {
      id: 4,
      title: "Décoration Raffinée",
      image: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=1600&auto=format&fit=crop",
      category: "Ambiance"
    },
    {
      id: 5,
      title: "Soirée Prestige",
      image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1600&auto=format&fit=crop",
      category: "Événements Privés"
    },
    {
      id: 6,
      title: "Cérémonie Exclusive",
      image: "https://images.unsplash.com/photo-1520763185298-1b434c919afe?q=80&w=1600&auto=format&fit=crop",
      category: "Mariages"
    }
  ];

  return (
    <section id="gallery" className="max-w-7xl mx-auto px-6 py-24">
      <div className="mb-16">
        <div className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/30 rounded-full px-4 py-2 mb-6">
          <p className="text-amber-400 text-sm font-medium uppercase tracking-wider">Galerie</p>
        </div>

        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
          Des ambiances <span className="text-amber-400">raffinées</span> et des expériences mémorables.
        </h2>

        <p className="text-neutral-400 text-lg max-w-2xl">
          Découvrez quelques-unes de nos plus belles réalisations qui incarnent l'élégance et la qualité de nos services.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {gallery.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedImage(item)}
            className="group overflow-hidden rounded-2xl cursor-pointer relative h-80"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-amber-400 text-sm font-medium mb-2">{item.category}</p>
                <h3 className="text-xl font-semibold">{item.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-amber-400 transition-colors"
            >
              <X size={32} />
            </button>
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full rounded-2xl"
            />
            <div className="mt-4 text-center">
              <p className="text-amber-400 text-sm font-medium mb-2">{selectedImage.category}</p>
              <h3 className="text-2xl font-semibold">{selectedImage.title}</h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;