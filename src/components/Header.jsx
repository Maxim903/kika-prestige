import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Accueil', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Galerie', href: '#gallery' },
    { label: 'À propos', href: '#about' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <header className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold tracking-wider">
              KIKA <span className="text-amber-400">PRESTIGE</span>
            </h1>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-neutral-300 hover:text-amber-400 transition-colors text-sm uppercase tracking-wide"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button className="hidden md:block bg-amber-400 hover:bg-amber-300 text-black font-semibold px-6 py-2 rounded-lg transition-all">
            Devis
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <nav className="md:hidden mt-4 space-y-3 pb-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-neutral-300 hover:text-amber-400 transition-colors text-sm uppercase tracking-wide"
              >
                {item.label}
              </a>
            ))}
            <button className="w-full bg-amber-400 hover:bg-amber-300 text-black font-semibold px-6 py-2 rounded-lg transition-all mt-4">
              Demander un devis
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;