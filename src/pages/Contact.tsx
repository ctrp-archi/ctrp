import React, { useState, useRef, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, ArrowRight, ChevronDown } from 'lucide-react';
import BannerImage from '../components/BannerImage';
import { useTranslation } from '../hooks/useTranslation';

// Composant Select personnalisé
const CustomSelect = ({ 
  id, 
  name, 
  required, 
  value, 
  onChange, 
  placeholder, 
  options, 
  className = "" 
}: {
  id: string;
  name: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  options: string[];
  className?: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState(value);
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setSearchValue(value);
  }, [value]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleOptionClick = (option: string) => {
    setSearchValue(option);
    onChange({ target: { name, value: option } } as React.ChangeEvent<HTMLInputElement>);
    setIsOpen(false);
  };

  const filteredOptions = options.filter(option =>
    option.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className={`relative ${className}`} ref={selectRef}>
      <div
        className="w-full px-0 py-4 bg-transparent border-0 border-b border-dark-800 text-white placeholder-accent-500 focus:border-accent-400 focus:outline-none transition-all duration-300 hover:border-accent-500 cursor-pointer flex items-center justify-between"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span style={{ color: searchValue ? 'white' : '#6b7280' }}>
          {searchValue || placeholder}
        </span>
        <ChevronDown 
          className={`w-4 h-4 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
          style={{ color: '#6b7280' }}
        />
      </div>
      
      {isOpen && (
        <div className="absolute top-full left-0 right-0 z-50 bg-dark-900 border border-dark-700 rounded-lg shadow-lg mt-1 max-h-60 overflow-y-auto">
          {filteredOptions.map((option, index) => (
            <div
              key={index}
              className="px-4 py-3 text-white hover:bg-dark-800 cursor-pointer transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const Contact = () => {
  const { t } = useTranslation();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    location: '',
    budget: '',
    description: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulaire soumis:', formData);
    alert('Message envoyé avec succès ! Nous vous recontacterons sous peu.');
  };

  const projectTypes = [
    t('contact.rehabilitation'),
    t('contact.newConstruction'),
    t('contact.apartment'),
    t('contact.house'),
    t('contact.consulting'),
    t('contact.evaluation'),
    t('contact.other')
  ];

  const budgetRanges = [
    t('contact.budget1'),
    t('contact.budget2'),
    t('contact.budget3'),
    t('contact.budget4'),
    t('contact.budget5'),
    t('contact.budgetTbd')
  ];

  return (
    <div className="bg-dark-950 text-white overflow-hidden">
      {/* Hero Section avec image bannière encadrée */}
      <section className="relative min-h-screen bg-dark-950 flex items-center">
        <div className="max-w-5xl mx-auto w-full px-6 sm:px-8 lg:px-12 py-20">
          {/* Image bannière encadrée + overlay + texte */}
          <div className="relative h-[70vh] overflow-hidden flex items-center justify-center">
              <BannerImage 
                className="w-full h-full"
                intervalMs={6000}
              />
              {/* Overlay sombre */}
              <div className="absolute inset-0 bg-black/40" />
              {/* Texte sur l'image */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                <h1 className="font-display font-light text-3xl md:text-5xl lg:text-6xl leading-none text-white mb-6 drop-shadow-lg">{t('contact.heroTitle')}</h1>
              </div>
            </div>
          </div>
        </section>

      {/* DESCRIPTION PRINCIPALE - Juste sous la bannière */}
      <section className="py-12 px-8 lg:px-12 bg-dark-950 relative" style={{marginTop: '-64px'}}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg md:text-2xl text-accent-400 leading-relaxed text-center max-w-2xl mx-auto">{t('contact.heroSubtitle')}</p>
        </div>
      </section>

      <section className="relative">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 relative" style={{paddingTop: 0, marginTop: 0}}>
          <div className="grid lg:grid-cols-2 gap-8" style={{ gap: 'calc(2rem + 140px)' }}>
            {/* Formulaire de Contact avec animations */}
            <div style={{ marginLeft: '30px' }}>
              <span className="font-display text-sm font-medium text-accent-400 uppercase tracking-[0.2em] mb-8 block">{t('contact.formLabel')}</span>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="group">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-0 py-4 bg-transparent border-0 border-b border-dark-800 text-white placeholder-accent-500 focus:border-accent-400 focus:outline-none transition-all duration-300 hover:border-accent-500"
                      placeholder={t('contact.namePlaceholder')}
                    />
                  </div>
                  
                  <div className="group">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-0 py-4 bg-transparent border-0 border-b border-dark-800 text-white placeholder-accent-500 focus:border-accent-400 focus:outline-none transition-all duration-300 hover:border-accent-500"
                      placeholder={t('contact.emailPlaceholder')}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="group">
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-0 py-4 bg-transparent border-0 border-b border-dark-800 text-white placeholder-accent-500 focus:border-accent-400 focus:outline-none transition-all duration-300 hover:border-accent-500"
                      placeholder={t('contact.phonePlaceholder')}
                    />
                  </div>
                  
                  <div className="group">
                    <CustomSelect
                      id="projectType"
                      name="projectType"
                      required
                      value={formData.projectType}
                      onChange={handleChange}
                      placeholder={t('contact.projectType')}
                      options={projectTypes}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="group">
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder={t('contact.locationPlaceholder')}
                      className="w-full px-0 py-4 bg-transparent border-0 border-b border-dark-800 text-white placeholder-accent-500 focus:border-accent-400 focus:outline-none transition-all duration-300 hover:border-accent-500"
                    />
                  </div>
                  
                  <div className="group">
                    <CustomSelect
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      placeholder={t('contact.estimatedBudget')}
                      options={budgetRanges}
                    />
                  </div>
                </div>

                <div className="group">
                  <textarea
                    id="description"
                    name="description"
                    required
                    rows={6}
                    value={formData.description}
                    onChange={handleChange}
                    placeholder={t('contact.descriptionPlaceholder')}
                    className="w-full px-0 py-4 bg-transparent border-0 border-b border-dark-800 text-white placeholder-accent-500 focus:border-accent-400 focus:outline-none transition-all duration-300 resize-none hover:border-accent-500"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="font-display group relative inline-flex items-center px-8 py-4 bg-white text-dark-950 hover:bg-accent-400 hover:text-white transition-all duration-300 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-accent-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                    <Send className="relative z-10 mr-4 h-5 w-5" />
                    <span className="relative z-10 font-display text-sm font-medium uppercase tracking-wider">{t('contact.sendMessage')}</span>
                    <ArrowRight className="relative z-10 ml-4 h-5 w-5 transition-all duration-300 group-hover:translate-x-2" />
                  </button>
                </div>
              </form>
            </div>

            {/* Informations de Contact ÉPURÉES - QR Code aligné avec pictogrammes */}
            <div>
              <span className="font-display text-sm font-medium text-accent-400 uppercase tracking-[0.2em] mb-8 block">{t('contact.informationLabel')}</span>
              
              {/* Coordonnées directes avec pictogrammes uniquement */}
              <div className="space-y-8">
                <div className="flex items-center space-x-6">
                  <Mail className="h-6 w-6 text-accent-500" />
                  <div className="flex flex-col space-y-2">
                    <a
                      href="mailto:ct@ctrp.pt" 
                      className="font-display text-accent-400 hover:text-white transition-colors duration-300 text-lg"
                    >
                      ct@ctrp.pt
                    </a>
                    <a
                      href="mailto:rp@ctrp.pt" 
                      className="font-display text-accent-400 hover:text-white transition-colors duration-300 text-lg"
                    >
                      rp@ctrp.pt
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-6">
                  <Phone className="h-6 w-6 text-accent-500" />
                  <a 
                    href="tel:+351916922022" 
                    className="font-display text-accent-400 hover:text-white transition-colors duration-300 text-lg"
                  >
                    +351 916 922 022
                  </a>
                </div>
                
                <div className="flex items-start space-x-6">
                  <MapPin className="h-6 w-6 text-accent-500 mt-1" />
                  <div className="font-display text-accent-400 text-lg leading-relaxed">
                    <p>Rua Cristóvão Figueiredo 11B</p>
                    <p>1600-049 Lisboa, Portugal</p>
                  </div>
                </div>

                {/* QR Code ALIGNÉ avec les pictogrammes */}
                <div className="flex items-start space-x-6">
                  {/* Espace pour aligner avec les pictogrammes (même largeur que les icônes) */}
                  <div className="w-6 flex justify-center">
                    <div className="w-1 h-1"></div> {/* Spacer invisible pour alignement parfait */}
                  </div>
                  <div>
                    <img
                      src="/images/ctrp-qr-code.png"
                      alt="QR Code pour contacter CTRP - Scannez pour accéder rapidement aux coordonnées de l'atelier d'architecture"
                      className="w-32 h-32 lg:w-36 lg:h-36 object-contain"
                    />
                  </div>
                </div>

                {/* Logos Google, Apple et Outlook alignés sous le QR code */}
                <div className="flex items-start space-x-6 mt-4">
                  {/* Espace pour aligner avec les pictogrammes (même largeur que les icônes) */}
                  <div className="w-6 flex justify-center">
                    <div className="w-1 h-1"></div> {/* Spacer invisible pour alignement parfait */}
                  </div>
                  <div className="flex space-x-6">
                  <a 
                    href="https://maps.google.com/?q=Rua+Cristóvão+Figueiredo+11B+1600-049+Lisboa+Portugal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity duration-300"
                  >
                    <img 
                      src="/images/google-logo.svg" 
                      alt="Google Maps - Voir l'adresse sur Google Maps" 
                      className="h-6 w-6 object-contain"
                    />
                  </a>
                  <a 
                    href="https://maps.apple.com/?q=Rua+Cristóvão+Figueiredo+11B+1600-049+Lisboa+Portugal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity duration-300"
                  >
                    <img 
                      src="/images/apple-logo.svg" 
                      alt="Apple Maps - Voir l'adresse sur Apple Maps" 
                      className="h-6 w-6 object-contain"
                    />
                  </a>
                  <a 
                    href="mailto:ct@ctrp.pt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity duration-300"
                  >
                    <img 
                      src="/images/outlook-logo.png?v=2" 
                      alt="Outlook - Envoyer un email" 
                      className="h-7 w-7 object-contain"
                      style={{ filter: 'grayscale(100%) brightness(0.8) invert(1)' }}
                    />
                  </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;