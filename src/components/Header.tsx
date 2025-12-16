import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { language, setLanguage, t } = useLanguage();

  // Fermer le menu mobile lors du changement de route
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const languages = [
    { code: 'pt', name: 'PT' },
    { code: 'fr', name: 'FR' },
    { code: 'en', name: 'EN' },
  ];

  const getNavPath = (page: string) => {
    const paths = {
      projects: { pt: '/projetos', fr: '/projets', en: '/projects' },
      services: { pt: '/servicos', fr: '/services', en: '/services' },
      about: { pt: '/sobre', fr: '/a-propos', en: '/about' },
      contact: { pt: '/contacto', fr: '/contact', en: '/contact' }
    };
    return paths[page as keyof typeof paths][language as keyof typeof paths.projects];
  };

  const navigation = [
    { name: t('nav.projects'), href: getNavPath('projects'), isProjects: true },
    { name: t('nav.services'), href: getNavPath('services') },
    { name: t('nav.about'), href: getNavPath('about') },
    { name: t('nav.contact'), href: getNavPath('contact') },
  ];

  const isActivePath = (href: string) => {
    return location.pathname === href;
  };

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  const handleProjectsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const projectsPath = getNavPath('projects');
    
    // Si l'utilisateur est déjà sur la page projets, forcer la redirection vers la page par défaut
    if (location.pathname === projectsPath) {
      // Forcer le rechargement de la page avec état par défaut
      navigate(projectsPath, { replace: true, state: { resetToDefault: true } });
      // Recharger la page pour s'assurer que tous les états sont réinitialisés
      window.location.reload();
    } else {
      // Navigation normale vers la page projets
      navigate(projectsPath);
    }
    handleNavClick();
  };

  const handleLanguageChange = (languageCode: string) => {
    setLanguage(languageCode);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-dark-950/95 backdrop-blur-md shadow-lg">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-18 lg:h-20">
          
          {/* Logo */}
          <div className="flex items-center">
            <Link 
              to="/" 
              onClick={handleNavClick}
              className="transition-all duration-300 hover:opacity-80"
            >
              <img 
                src="/images/ctrp-logo.png" 
                alt="CTRP - Logo do atelier de arquitetura Christophe Tilliet e Rita Pires" 
                className="h-11 lg:h-14 w-auto"
              />
            </Link>
          </div>

          {/* Navigation Desktop */}
          <div className="hidden lg:flex items-center space-x-8">
            
            {/* Menu principal */}
            <div className="flex items-center space-x-8">
              {navigation.map((item) => (
                item.isProjects ? (
                  <button
                    key={item.name}
                    onClick={handleProjectsClick}
                    className={`font-display text-sm font-medium uppercase tracking-wider transition-all duration-300 hover:text-white relative group ${
                      isActivePath(item.href) ? 'text-white' : 'text-accent-400'
                    }`}
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={handleNavClick}
                    className={`font-display text-sm font-medium uppercase tracking-wider transition-all duration-300 hover:text-white relative group ${
                      isActivePath(item.href) ? 'text-white' : 'text-accent-400'
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              ))}
            </div>

            {/* Séparateur */}
            <div className="w-px h-6 bg-dark-800"></div>

            {/* Réseaux sociaux */}
            <div className="flex items-center space-x-4">
              <a
                href="https://www.instagram.com/ctrp.arquitetura?igsh=MW03ZmFxc3ZlZm8zZg=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-400 hover:text-white transition-colors duration-300"
                aria-label="Seguir CTRP no Instagram"
              >
                <img src="/images/instagram-new.svg?v=3" alt="Instagram" className="h-5 w-5 object-contain" />
              </a>
              <a
                href="https://www.facebook.com/ctrp.arquitetos/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-400 hover:text-white transition-colors duration-300"
                aria-label="Seguir CTRP no Facebook"
              >
                <img src="/images/facebook-new.svg?v=2" alt="Facebook" className="h-5 w-5 object-contain" />
              </a>
              <a
                href="https://www.linkedin.com/company/ctrparquitetos/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-400 hover:text-white transition-colors duration-300"
                aria-label="Seguir CTRP no LinkedIn"
              >
                <img src="/images/linkedin-new.svg?v=1" alt="LinkedIn" className="h-5 w-5 object-contain" />
              </a>
            </div>

            {/* Séparateur */}
            <div className="w-px h-6 bg-dark-800"></div>

            {/* Sélecteur de langue */}
            <div className="flex items-center space-x-3">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className={`font-display text-sm font-medium uppercase tracking-wider transition-colors duration-300 ${
                    language === lang.code
                      ? 'text-white font-semibold'
                      : 'text-accent-400 hover:text-white'
                  }`}
                  aria-label={`Mudar idioma para ${lang.name}`}
                >
                  {lang.name}
                </button>
              ))}
            </div>
          </div>

          {/* Bouton menu mobile avec animation */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-accent-400 transition-colors duration-300"
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            <div className="relative w-6 h-6">
              <Menu 
                size={24} 
                className={`absolute inset-0 transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'
                }`} 
              />
              <X 
                size={24} 
                className={`absolute inset-0 transition-all duration-300 ${
                  isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 rotate-180'
                }`} 
              />
            </div>
          </button>
        </div>
      </div>

      {/* Navigation Mobile */}
      <div className={`lg:hidden transition-all duration-500 overflow-hidden bg-dark-950/95 backdrop-blur-md border-t border-dark-800 ${
        isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-6 py-8 space-y-6">
          
          {/* Menu principal mobile */}
          {navigation.map((item) => (
            item.isProjects ? (
              <button
                key={item.name}
                onClick={handleProjectsClick}
                className={`font-display block text-lg font-medium uppercase tracking-wider transition-all duration-300 hover:text-white ${
                  isActivePath(item.href) ? 'text-white' : 'text-accent-400'
                }`}
              >
                {item.name}
              </button>
            ) : (
              <Link
                key={item.name}
                to={item.href}
                onClick={handleNavClick}
                className={`font-display block text-lg font-medium uppercase tracking-wider transition-all duration-300 hover:text-white ${
                  isActivePath(item.href) ? 'text-white' : 'text-accent-400'
                }`}
              >
                {item.name}
              </Link>
            )
          ))}
          
          {/* Séparateur */}
          <div className="border-t border-dark-800 pt-6">
            
            {/* Réseaux sociaux mobile */}
            <div className="flex items-center space-x-6 mb-6">
              <span className="font-display text-sm text-accent-400 uppercase tracking-wider">Siga-nos</span>
              <a
                href="https://www.instagram.com/ctrp.arquitetura?igsh=MW03ZmFxc3ZlZm8zZg=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-400 hover:text-white transition-colors duration-300"
              >
                <img src="/images/instagram-new.svg?v=3" alt="Instagram" className="h-5 w-5 object-contain" />
              </a>
              <a
                href="https://www.facebook.com/ctrp.arquitetos/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-400 hover:text-white transition-colors duration-300"
              >
                <img src="/images/facebook-new.svg?v=2" alt="Facebook" className="h-5 w-5 object-contain" />
              </a>
              <a
                href="https://www.linkedin.com/company/ctrparquitetos/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-400 hover:text-white transition-colors duration-300"
              >
                <img src="/images/linkedin-new.svg?v=1" alt="LinkedIn" className="h-5 w-5 object-contain" />
              </a>
            </div>
            
            {/* Langues mobile */}
            <div>
              <span className="font-display text-sm text-accent-400 uppercase tracking-wider mb-3 block">Idioma</span>
              <div className="flex space-x-4">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
                    className={`font-display text-sm font-medium uppercase tracking-wider transition-colors duration-300 ${
                      language === lang.code
                        ? 'text-white font-semibold'
                        : 'text-accent-400 hover:text-white'
                    }`}
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;