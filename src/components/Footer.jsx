import React from 'react';
import { Instagram, Facebook, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, label: 'Instagram', href: '#' },
    { icon: Facebook, label: 'Facebook', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' }
  ];

  const quickLinks = [
    { label: 'Accueil', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Galerie', href: '#gallery' },
    { label: 'À propos', href: '#about' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="border-t border-white/10 bg-neutral-950/50">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold tracking-wider mb-4">
              KIKA <span className="text-amber-400">PRESTIGE</span>
            </h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Agence événementielle premium spécialisée dans la création d'expériences inoubliables.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-neutral-200">Liens Rapides</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-neutral-400 hover:text-amber-400 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-neutral-200">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-neutral-400 hover:text-amber-400 transition-colors text-sm">Mariages</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-amber-400 transition-colors text-sm">Événements Privés</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-amber-400 transition-colors text-sm">Corporate</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-amber-400 transition-colors text-sm">Décoration</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-neutral-200">Contact</h4>
            <div className="space-y-3">
              <a href="tel:+33123456789" className="flex items-center gap-2 text-neutral-400 hover:text-amber-400 transition-colors text-sm">
                <Phone size={16} />
                +33 (0)1 23 45 67 89
              </a>
              <a href="mailto:contact@kikaprestige.fr" className="flex items-center gap-2 text-neutral-400 hover:text-amber-400 transition-colors text-sm">
                <Mail size={16} />
                contact@kikaprestige.fr
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center hover:border-amber-400 hover:text-amber-400 transition-all"
                    title={social.label}
                  >
                    <IconComponent size={18} />
                  </a>
                );
              })}
            </div>

            <p className="text-neutral-500 text-sm text-center md:text-right">
              © {currentYear} Kika Prestige. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;