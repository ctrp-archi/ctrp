import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, MapPin, Ruler, Euro, ArrowRight } from 'lucide-react';
import { getProjectById, ProjectData } from '../data/projectsData';
import { useTranslation } from '../hooks/useTranslation';

const ProjectDetail = () => {
  const { t, language } = useTranslation();
  const lang = language as 'fr' | 'pt' | 'en';
  const { id } = useParams();
  const project = getProjectById(id || '');

  if (!project) {
    return (
      <div className="bg-dark-950 text-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-display text-white mb-6">{t('projectDetail.projectNotFound') || 'Projet non trouvé'}</h1>
          <Link 
            to="/projets" 
            className="inline-flex items-center text-accent-400 hover:text-white transition-colors group"
          >
            <ArrowLeft className="h-4 w-4 mr-3 transition-transform group-hover:-translate-x-1" />
            {t('projectDetail.backToProjects') || 'Retour aux projets'}
          </Link>
        </div>
      </div>
    );
  }

  // Image hero
  const heroImage = project.images.hero;

  return (
    <div className="bg-dark-950 text-white">
      
      {/* BLOC 1 - Image Hero (largeur complète) */}
      <section className="pt-20 lg:pt-24">
        <div className="px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="w-full">
              <img
                src={heroImage}
                alt={`${project.title[lang]} - Vue principale`}
                className="w-full h-auto object-cover"
                style={{ maxHeight: '70vh' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* BLOC 2 - Zone de texte complète (écart vertical A/3) */}
      <section className="px-6 lg:px-8" style={{ marginTop: 'calc(100vw / 45)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            {/* Titre du projet */}
            <h1 className="font-display font-light text-4xl md:text-6xl lg:text-7xl leading-none text-white mb-4">
              {project.title[lang]}
            </h1>

            {/* Sous-titre */}
            <h2 className="font-display text-xl md:text-2xl font-medium text-accent-400 mb-6">
              {project.intervention[lang]} • {project.category[lang]}
            </h2>
            
            {/* Informations projet en grille */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
              <div className="group">
                <div className="font-display flex flex-col items-start space-y-2 text-accent-400 mb-3 group-hover:text-white transition-colors duration-300">
                  <Calendar className="h-5 w-5" />
                  <span className="font-display text-xs uppercase tracking-wider font-medium">{t('projectDetail.period') || 'Période'}</span>
                </div>
                <div className="font-display text-white text-base font-medium">{project.timeline.duration}</div>
              </div>
              
              <div className="group">
                <div className="font-display flex flex-col items-start space-y-2 text-accent-400 mb-3 group-hover:text-white transition-colors duration-300">
                  <MapPin className="h-5 w-5" />
                  <span className="font-display text-xs uppercase tracking-wider font-medium">{t('projectDetail.locationLabel') || 'Localisation'}</span>
                </div>
                <div className="font-display text-white text-base font-medium">{project.location.fullLocation}</div>
              </div>
              
              <div className="group">
                <div className="font-display flex flex-col items-start space-y-2 text-accent-400 mb-3 group-hover:text-white transition-colors duration-300">
                  <Ruler className="h-5 w-5" />
                  <span className="font-display text-xs uppercase tracking-wider font-medium">{t('projectDetail.surface') || 'Surface'}</span>
                </div>
                <div className="font-display text-white text-base font-medium">{project.specifications.area}</div>
              </div>
              
              <div className="group">
                <div className="font-display flex flex-col items-start space-y-2 text-accent-400 mb-3 group-hover:text-white transition-colors duration-300">
                  <Euro className="h-5 w-5" />
                  <span className="font-display text-xs uppercase tracking-wider font-medium">{t('projectDetail.budget') || 'Budget'}</span>
                </div>
                <div className="font-display text-white text-base font-medium">{project.specifications.budget[lang]}</div>
              </div>
            </div>
            
            {/* Descriptif abrégé */}
            <p className="text-lg text-accent-400 leading-relaxed max-w-3xl mb-8">
              {project.descriptions.short[lang]}
            </p>

            {/* Description longue */}
            <div className="max-w-3xl">
              <p className="text-base text-accent-400 leading-relaxed">
                {project.descriptions.long[lang]}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GALERIE - Toutes les images en format bandeau */}
      {project.images.gallery.map((image, index) => (
        <section key={index} className="px-6 lg:px-8" style={{ marginTop: 'calc(100vw / 45)' }}>
          <div className="max-w-7xl mx-auto">
            <div className="w-full">
              <img
                src={image}
                alt={`${project.title[lang]} - Vue ${index + 2}`}
                className="w-full h-auto object-cover"
                style={{ maxHeight: '70vh' }}
              />
            </div>
          </div>
        </section>
      ))}

      {/* CTA et Navigation */}
      <section className="px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
            {/* Bouton retour */}
            <Link 
              to="/projets" 
              className="font-display inline-flex items-center text-accent-400 hover:text-white transition-colors group"
            >
              <ArrowLeft className="h-4 w-4 mr-3 transition-transform group-hover:-translate-x-1" />
              <span className="font-display text-sm font-medium uppercase tracking-wider">{t('projectDetail.backToProjects') || 'Retour aux projets'}</span>
            </Link>
            
            {/* CTA Contact */}
            <Link
              to="/contact"
              className="font-display group relative inline-flex items-center px-6 py-3 bg-white text-dark-950 hover:bg-accent-400 hover:text-white transition-all duration-300"
            >
              <span className="font-display text-sm font-medium uppercase tracking-wider mr-3">{t('projectDetail.similarProject') || 'Projet similaire ?'}</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;