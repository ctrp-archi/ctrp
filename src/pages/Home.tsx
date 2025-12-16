import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import AnimatedCounter from '../components/AnimatedCounter';
import BannerImage from '../components/BannerImage';
import { getProjectStats } from '../data/projectsData';
import { useTranslation } from '../hooks/useTranslation';

const Home = () => {
  const { t } = useTranslation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const heroImages = [
    '/images/pexels-323780-house.jpeg',
    '/images/pexels-1396122-modern-house.jpeg',
    '/images/pexels-1643383-luxury-house.jpeg',
    '/images/pexels-2029673-architecture.jpeg',
  ];

  const heroImageDescriptions = [
    'Façade moderne d\'immeuble réhabilité avec architecture contemporaine, exemple de l\'expertise CTRP en rénovation urbaine',
    'Intérieur d\'appartement rénové avec design contemporain et grandes ouvertures, illustrant les projets résidentiels CTRP',
    'Espace de vie moderne avec cuisine ouverte et matériaux nobles, démonstration du savoir-faire CTRP en aménagement intérieur',
    'Salon contemporain avec mobilier design et éclairage naturel optimal, exemple de réhabilitation réussie par CTRP'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const stats = getProjectStats();

  const statsData = [
    { end: stats.completed, prefix: '', label: t('home.projectsCompleted') },
    { end: 30, prefix: '+', label: t('home.consultationsCompleted') },
    { end: 25, prefix: '+', label: t('home.yearsExperience') },
  ];

  return (
    <div className="bg-dark-950 text-white overflow-hidden">
      {/* Hero Section avec image bannière encadrée + overlay + texte */}
      <section className="relative min-h-screen bg-dark-950 flex items-center">
        <div className="max-w-5xl mx-auto w-full px-6 sm:px-8 lg:px-12 py-20">
          <div className="relative h-[70vh] overflow-hidden flex items-center justify-center">
            <BannerImage 
              className="w-full h-full"
              intervalMs={6000}
            />
            {/* Overlay sombre */}
            <div className="absolute inset-0 bg-black/40" />
            {/* Texte sur l'image */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
              <h1 className="font-display font-light text-3xl md:text-5xl lg:text-6xl leading-none text-white mb-6 drop-shadow-lg">
                {t('home.heroTitle1')}
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* DESCRIPTION PRINCIPALE - Juste sous la bannière */}
      <section className="py-12 px-8 lg:px-12 bg-dark-950 relative" style={{marginTop: '-64px'}}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg md:text-2xl text-accent-400 leading-relaxed">
            {t('home.heroSubtitle')}
          </p>
        </div>
      </section>

      {/* SECTION CHIFFRES CLÉS */}
      <section className="py-12 px-8 lg:px-12 bg-dark-900 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {/* 12 PROJETS RÉALISÉS */}
            <div className="text-center">
              <div className="text-3xl md:text-4xl lg:text-5xl font-display font-light text-white mb-2">12</div>
              <p className="text-sm font-medium text-accent-400 uppercase tracking-wider">{t('home.projectsCompleted')}</p>
            </div>

            {/* +30 CONSULTATIONS RÉALISÉES */}
            <div className="text-center">
              <div className="text-3xl md:text-4xl lg:text-5xl font-display font-light text-white mb-2">+30</div>
              <p className="text-sm font-medium text-accent-400 uppercase tracking-wider">{t('home.consultationsCompleted')}</p>
            </div>

            {/* +25 ANNÉES D'EXPÉRIENCE */}
            <div className="text-center">
              <div className="text-3xl md:text-4xl lg:text-5xl font-display font-light text-white mb-2">+25</div>
              <p className="text-sm font-medium text-accent-400 uppercase tracking-wider">{t('home.yearsExperience')}</p>
            </div>

            {/* 3 CONSULTATIONS EN COURS */}
            <div className="text-center">
              <div className="text-3xl md:text-4xl lg:text-5xl font-display font-light text-white mb-2">3</div>
              <p className="text-sm font-medium text-accent-400 uppercase tracking-wider">{t('home.consultationsInProgress')}</p>
            </div>

            {/* 1 PROJET EN COURS */}
            <div className="text-center">
              <div className="text-3xl md:text-4xl lg:text-5xl font-display font-light text-white mb-2">1</div>
              <p className="text-sm font-medium text-accent-400 uppercase tracking-wider">{t('home.projectsInProgress')}</p>
            </div>

            {/* 7 CHANTIERS EN COURS */}
            <div className="text-center">
              <div className="text-3xl md:text-4xl lg:text-5xl font-display font-light text-white mb-2">7</div>
              <p className="text-sm font-medium text-accent-400 uppercase tracking-wider">{t('home.constructionSites')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Philosophie de Travail */}
      <section className="py-12 px-6 lg:px-8 bg-dark-950 relative">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-6">
            <span className="font-display text-sm font-medium text-accent-400 uppercase tracking-[0.2em] mb-4 block relative">{t('home.ourApproach')}</span>
            <h2 className="font-display text-3xl md:text-4xl font-light text-white mb-2">{t('home.philosophyTitle')}</h2>
          </div>
          
          <div>
            <div className="space-y-6 text-lg text-accent-400 leading-relaxed max-w-4xl mx-auto">
              <p>{t('home.philosophyText1')}</p>
              <p>{t('home.philosophyText2')}</p>
              <p>{t('home.philosophyText3')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Navigation vers "À propos" */}
      <section className="pt-8 pb-0 px-6 lg:px-8 bg-gradient-to-br from-dark-900 to-dark-950 relative overflow-hidden border-t border-dark-800/50">
        <div className="max-w-4xl mx-auto text-center relative pb-8">
          <div>
            <p className="text-lg md:text-xl text-accent-400 mb-4 leading-relaxed">{t('home.ctaProjects')}</p>
            
            <Link
              to="/projetos"
              className="group relative inline-flex items-center px-8 py-4 border border-white/20 text-white hover:bg-white hover:text-dark-950 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              <span className="relative z-10 font-display text-sm font-medium uppercase tracking-wider mr-4">{t('home.ctaProjectsButton')}</span>
              <ArrowRight className="relative z-10 h-5 w-5 transition-all duration-300 group-hover:translate-x-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;