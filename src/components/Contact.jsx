import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Merci pour votre demande ! Nous vous recontacterons très bientôt.');
    setFormData({ name: '', email: '', phone: '', eventType: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'Téléphone',
      value: '+33 (0)1 23 45 67 89'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'contact@kikaprestige.fr'
    },
    {
      icon: MapPin,
      label: 'Adresse',
      value: 'Paris, France'
    }
  ];

  return (
    <section id="contact" className="bg-neutral-900/50 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <div className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/30 rounded-full px-4 py-2 mb-6">
              <p className="text-amber-400 text-sm font-medium uppercase tracking-wider">Contact</p>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Donnez vie à votre <span className="text-amber-400">prochain événement</span>.
            </h2>

            <p className="text-neutral-300 leading-relaxed mb-12 text-lg">
              Contactez notre équipe pour discuter de votre projet. Nous serons ravi de vous aider à créer une expérience unique et mémorable.
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-400/10 flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-amber-400" />
                    </div>
                    <div>
                      <p className="text-sm text-neutral-400 mb-1">{info.label}</p>
                      <p className="text-white font-medium">{info.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-neutral-950 border border-white/10 rounded-2xl p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-2">
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-neutral-900 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400 transition-colors"
                  placeholder="Jean Dupont"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-2">
                  Adresse email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-neutral-900 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400 transition-colors"
                  placeholder="jean@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-neutral-300 mb-2">
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-neutral-900 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400 transition-colors"
                  placeholder="+33 (0)X XX XX XX XX"
                />
              </div>

              <div>
                <label htmlFor="eventType" className="block text-sm font-medium text-neutral-300 mb-2">
                  Type d'événement
                </label>
                <select
                  id="eventType"
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  className="w-full bg-neutral-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-400 transition-colors"
                >
                  <option value="" disabled>
                    Sélectionnez un type d'événement
                  </option>
                  <option value="mariage">Mariage</option>
                  <option value="soiree-privee">Soirée Privée</option>
                  <option value="corporate">Événement Corporate</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-300 mb-2">
                  Décrivez votre événement
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full bg-neutral-900 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400 transition-colors resize-none"
                  placeholder="Parlez-nous de votre vision..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-400 to-yellow-300 hover:from-amber-300 hover:to-yellow-200 text-black font-semibold py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:shadow-amber-400/30"
              >
                Envoyer la demande
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;