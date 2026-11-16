import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown, MessageCircle, FileText, HardHat } from 'lucide-react';
import BannerImage from '../components/BannerImage';
import { useTranslation } from '../hooks/useTranslation';
import { useLanguage } from '../contexts/LanguageContext';

interface ServiceItem {
  title: string;
  description: string;
  points?: string[];
}

interface ServiceSection {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  items: ServiceItem[];
  // Sous-titre « NOTES » (avertissement) affiché après les points x.1, x.2, x.3.
  // Vide tant que le client n'a pas fourni le texte (Pastel n° 19).
  notes?: string;
}

const Services = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (id: string) => {
    setOpenSection(openSection === id ? null : id);
  };

  const getNavPath = () => {
    const paths = { pt: '/contacto', fr: '/contact', en: '/contact' };
    return paths[language as keyof typeof paths];
  };

  const serviceSections: ServiceSection[] = [
    {
      id: 'conseil',
      number: '01',
      title: t('services.axis1Title'),
      subtitle: t('services.axis1Subtitle'),
      icon: <MessageCircle className="h-6 w-6" />,
      items: [
        {
          title: t('services.conseil1Title'),
          description: t('services.conseil1Desc'),
          points: [
            t('services.conseil1Point1'),
            t('services.conseil1Point2'),
            t('services.conseil1Point3')
          ]
        },
        {
          title: t('services.conseil2Title'),
          description: t('services.conseil2Desc'),
          points: [
            t('services.conseil2Point1'),
            t('services.conseil2Point2'),
            t('services.conseil2Point3')
          ]
        },
        {
          title: t('services.conseil3Title'),
          description: t('services.conseil3Desc'),
          points: [
            t('services.conseil3Point1'),
            t('services.conseil3Point2'),
            t('services.conseil3Point3')
          ]
        }
      ]
    },
    {
      id: 'projet',
      number: '02',
      title: t('services.axis2Title'),
      subtitle: t('services.axis2Subtitle'),
      icon: <FileText className="h-6 w-6" />,
      items: [
        {
          title: t('services.projet1Title'),
          description: t('services.projet1Desc'),
          points: [
            t('services.projet1Point1'),
            t('services.projet1Point2'),
            t('services.projet1Point3')
          ]
        },
        {
          title: t('services.projet2Title'),
          description: t('services.projet2Desc'),
          points: [
            t('services.projet2Point1'),
            t('services.projet2Point2'),
            t('services.projet2Point3')
          ]
        },
        {
          title: t('services.projet3Title'),
          description: t('services.projet3Desc'),
          points: [
            t('services.projet3Point1'),
            t('services.projet3Point2'),
            t('services.projet3Point3')
          ]
        }
      ]
    },
    {
      id: 'chantier',
      number: '03',
      title: t('services.axis3Title'),
      subtitle: t('services.axis3Subtitle'),
      icon: <HardHat className="h-6 w-6" />,
      items: [
        {
          title: t('services.chantier1Title'),
          description: t('services.chantier1Desc'),
          points: [
            t('services.chantier1Point1'),
            t('services.chantier1Point2'),
            t('services.chantier1Point3')
          ]
        },
        {
          title: t('services.chantier2Title'),
          description: t('services.chantier2Desc'),
          points: [
            t('services.chantier2Point1'),
            t('services.chantier2Point2'),
            t('services.chantier2Point3')
          ]
        },
        {
          title: t('services.chantier3Title'),
          description: t('services.chantier3Desc'),
          points: [
            t('services.chantier3Point1'),
            t('services.chantier3Point2'),
            t('services.chantier3Point3')
          ]
        }
      ]
    }
  ];

  return (
    <div className="bg-dark-950 text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-dark-950 flex items-center">
        <div className="max-w-5xl mx-auto w-full px-6 sm:px-8 lg:px-12 py-20">
          <div className="relative h-[70vh] overflow-hidden flex items-center justify-center">
            <BannerImage
              className="w-full h-full"
              intervalMs={9000}
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
              <h1 className="font-display font-light text-3xl md:text-5xl lg:text-6xl leading-none text-white mb-6 drop-shadow-lg">
                {t('services.heroTitle')}
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-12 px-8 lg:px-12 bg-dark-950 relative" style={{marginTop: '-64px'}}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg md:text-2xl text-accent-400 leading-relaxed">
            {t('services.heroSubtitle')}
          </p>
        </div>
      </section>

      {/* Accordéons Services */}
      <section className="py-12 bg-dark-950">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="space-y-4">
            {serviceSections.map((section) => (
              <div
                key={section.id}
                className="border border-dark-800 overflow-hidden transition-all duration-300"
              >
                {/* En-tête accordéon */}
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full px-6 py-6 flex items-center justify-between bg-dark-900/50 hover:bg-dark-800/50 transition-colors duration-300"
                >
                  <div className="flex items-center space-x-6">
                    <span className="font-display text-2xl font-light text-accent-500">
                      {section.number}
                    </span>
                    <div className="text-left">
                      <h2 className="font-display text-xl md:text-2xl font-medium text-white">
                        {section.title}
                      </h2>
                      <p className="text-sm text-accent-400 mt-1">
                        {section.subtitle}
                      </p>
                    </div>
                  </div>
                  <ChevronDown
                    className={`h-6 w-6 text-accent-400 transition-transform duration-300 ${
                      openSection === section.id ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Contenu accordéon */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openSection === section.id ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 py-8 bg-dark-950 border-t border-dark-800">
                    <div className="space-y-8">
                      {section.items.map((item, index) => (
                        <div
                          key={index}
                          className="pl-6 border-l-2 border-accent-500/30 hover:border-accent-500 transition-colors duration-300"
                        >
                          <h3 className="font-display text-lg font-medium text-white mb-2">
                            {section.number}.{index + 1} {item.title}
                          </h3>
                          <p className="text-accent-400 leading-relaxed mb-4">
                            {item.description}
                          </p>
                          {item.points && (
                            <ul className="space-y-2">
                              {item.points.map((point, pointIndex) => (
                                <li
                                  key={pointIndex}
                                  className="flex items-start text-sm text-accent-400"
                                >
                                  <span className="w-1.5 h-1.5 bg-accent-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                  {point}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                      {section.notes && (
                        <div className="pl-6 border-l-2 border-accent-500/30">
                          <h3 className="font-display text-lg font-medium text-white mb-2">
                            {section.number}.{section.items.length + 1} {t('services.notesTitle')}
                          </h3>
                          <p className="text-sm text-accent-400 leading-relaxed">
                            {section.notes}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 lg:px-12 bg-dark-900 border-t border-dark-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg md:text-xl text-accent-400 mb-8 leading-relaxed">
            {t('services.ctaText')}
          </p>

          <Link
            to={getNavPath()}
            className="group relative inline-flex items-center px-8 py-4 border border-white/20 text-white hover:bg-white hover:text-dark-950 transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            <span className="relative z-10 font-display text-sm font-medium uppercase tracking-wider mr-4">
              {t('nav.contact')}
            </span>
            <ArrowRight className="relative z-10 h-5 w-5 transition-all duration-300 group-hover:translate-x-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
