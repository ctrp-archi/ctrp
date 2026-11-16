import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { projectsDatabase, getProjectsByType, getAllProjects, ProjectData } from '../data/projectsData';
import { useTranslation } from '../hooks/useTranslation';

const Projects = () => {
  const { t, language } = useTranslation();
  const lang = language as 'fr' | 'pt' | 'en';
  const location = useLocation();

  const categories = [
    { key: 'all', label: t('projects.all') },
    { key: 'Rénovations', label: t('projects.renovations') },
    { key: 'Neufs', label: t('projects.new') },
    { key: 'Habitations', label: t('projects.residential') },
    { key: 'Services', label: t('projects.servicesProjects') }
  ];

  const [selectedCategory, setSelectedCategory] = useState('');

  // Réinitialiser la catégorie si on arrive depuis le header avec l'état de reset
  React.useEffect(() => {
    if (location.state?.resetToDefault) {
      setSelectedCategory('');
      // Nettoyer l'état pour éviter les effets de bord
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  // Fonction pour déterminer le contenu à afficher
  const getDisplayContent = () => {
    if (selectedCategory === 'all') {
      // Page "Tous" = Liste textuelle simple
      return 'list';
    } else if (selectedCategory && selectedCategory !== '') {
      // Pages catégories = Grilles filtrées
      return 'filtered-grid';
    } else {
      // Page par défaut = Grille complète
      return 'default-grid';
    }
  };

  const filteredProjects: ProjectData[] = selectedCategory && selectedCategory !== 'all' 
    ? getProjectsByType(selectedCategory as ProjectData['type'])
    : getAllProjects().slice().sort((a, b) => b.timeline.endYear - a.timeline.endYear);

  // Organiser les projets en lignes de 3 pour les grilles
  const projectRows: ProjectData[][] = [];
  for (let i = 0; i < filteredProjects.length; i += 3) {
    projectRows.push(filteredProjects.slice(i, i + 3));
  }

  const displayContent = getDisplayContent();

  return (
    <div className="bg-dark-950 text-white min-h-screen">
      
      {/* SECOND HEADER - Menu horizontal des catégories */}
      <section className="pt-20 lg:pt-24 pb-5">
        {/* Container aligné sur l'en-tête et sur la grille de projets */}
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex justify-between items-center">
            {/* Espace vide pour aligner avec le logo */}
            <div className="hidden lg:flex items-center">
              <div className="h-11 lg:h-14 w-auto"></div>
            </div>
            
            {/* Navigation horizontale des catégories - Alignement identique au header */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 lg:gap-x-8">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setSelectedCategory(category.key)}
                className={`font-display text-sm font-medium uppercase tracking-[0.15em] transition-all duration-300 ${
                  selectedCategory === category.key
                    ? 'text-white'
                    : 'text-accent-400 hover:text-white'
                }`}
              >
                {category.label}
                
                <div className={`absolute -bottom-2 left-0 h-0.5 bg-white transition-all duration-300 ${
                  selectedCategory === category.key 
                    ? 'w-full' 
                    : 'w-0 group-hover:w-full'
                }`}></div>
              </button>
            ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTENU CONDITIONNEL */}
      {displayContent === 'list' && (
        <section className="py-16 px-8 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="space-y-1">
              {filteredProjects.map((project, index) => (
                <Link
                  key={project.id}
                  to={`/projets/${project.id}`}
                  className="group block py-3 border-b border-dark-800/30 hover:border-accent-400/50 transition-all duration-300"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1 grid grid-cols-4 gap-8 text-sm">
                      <div className="font-display font-medium text-white group-hover:text-accent-400 transition-colors duration-300">
                        {project.title[lang]}
                      </div>
                      <div className="text-accent-400 group-hover:text-white transition-colors duration-300">
                        {project.location.fullLocation}
                      </div>
                      <div className="text-accent-400 group-hover:text-white transition-colors duration-300">
                        {project.timeline.duration}
                      </div>
                      <div className="text-accent-400 group-hover:text-white transition-colors duration-300">
                        {project.typeTranslated[lang]}
                      </div>
                    </div>
                    <ArrowRight className="h-4 w-4 text-accent-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 ml-6" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {(displayContent === 'default-grid' || displayContent === 'filtered-grid') && (
        <section className="pt-1 pb-16">
          <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-3 gap-[24px]">
              {filteredProjects.map((project) => (
                <Link
                  key={project.id}
                  to={`/projets/${project.id}`}
                  className="group relative overflow-hidden"
                  style={{ aspectRatio: '1/1' }}
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${project.images.hero})` }}
                    role="img"
                    aria-label={`${project.title[lang]} - ${project.descriptions.short[lang]} situé à ${project.location.fullLocation}`}
                  />
                  <div className="absolute inset-0 bg-white/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex flex-col justify-end items-start p-4 lg:p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <div className="font-display text-xs font-medium text-black uppercase tracking-wider mb-1">
                      {project.code}
                    </div>
                    <h3 className="font-display text-lg font-medium text-black mb-1">
                      {project.title[lang]}
                    </h3>
                    <p className="text-sm text-black mb-1">
                      {project.location.fullLocation}
                    </p>
                    <p className="text-sm text-black">
                      {project.timeline.duration}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Navigation vers Contact */}
      <section className="py-20 px-8 lg:px-12 bg-gradient-to-br from-dark-900 to-dark-950 border-t border-dark-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <div>
            <p className="text-lg md:text-xl text-accent-400 mb-8 leading-relaxed">{t('projects.ctaContact')}</p>
            
            <Link
              to="/servicos"
              className="group relative inline-flex items-center px-8 py-4 border border-white/20 text-white hover:bg-white hover:text-dark-950 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              <span className="relative z-10 font-display text-sm font-medium uppercase tracking-wider mr-4">{t('services.ctaProjectsButton')}</span>
              <ArrowRight className="relative z-10 h-5 w-5 transition-all duration-300 group-hover:translate-x-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;