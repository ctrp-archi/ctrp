import React from 'react';
import { Link } from 'react-router-dom';
import CookieManager from './CookieManager';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { language, t } = useLanguage();
  const currentYear = new Date().getFullYear();
  const [isCookieManagerOpen, setIsCookieManagerOpen] = React.useState(false);

  const getLegalPath = (page: string) => {
    const paths = {
      legal: { pt: '/mencoes-legais', fr: '/mentions-legales', en: '/legal-notices' },
      privacy: { pt: '/politica-privacidade', fr: '/politique-confidentialite', en: '/privacy-policy' }
    };
    return paths[page as keyof typeof paths][language as keyof typeof paths.legal];
  };

  const handleCookiePreferences = () => {
    setIsCookieManagerOpen(true);
  };

  return (
    <>
      <footer className="fixed bottom-0 left-0 right-0 z-40 bg-dark-950/95 backdrop-blur-md border-t border-dark-800/50 shadow-lg">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="py-4">
          {/* Navigation horizontale avec signature Propul'SEO */}
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
            
            {/* Copyright à gauche */}
            <div className="text-xs text-accent-400 hover:text-white transition-colors duration-300 cursor-default">
              © {currentYear} CTRP, Lda. {t('footer.copyright')}
            </div>
            
            {/* Signature Propul'SEO au centre (mobile) / à gauche du groupe de droite (desktop) */}
            <div className="text-xs text-accent-400 hover:text-white transition-colors duration-300 lg:order-2">
              {t('footer.madeWithPassion')}{' '}
              <a 
                href="https://www.propulseo-site.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-display text-accent-500 hover:text-white transition-colors duration-300 font-medium"
              >
                Propul'SEO
              </a>
            </div>
            
            {/* Navigation et liens légaux à droite */}
            <div className="font-display flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-xs lg:order-3">

              {/* Mentions légales */}
              <Link 
                to={getLegalPath('legal')} 
                className="font-display text-accent-400 hover:text-white transition-all duration-300 hover:transform hover:translate-y-[-1px]"
              >
                {t('footer.legalNotices')}
              </Link>
              
              {/* Politique de confidentialité */}
              <Link 
                to={getLegalPath('privacy')} 
                className="font-display text-accent-400 hover:text-white transition-all duration-300 hover:transform hover:translate-y-[-1px]"
              >
                {t('footer.privacyPolicy')}
              </Link>
              
              {/* Préférences cookies */}
              <button
                onClick={handleCookiePreferences}
                className="font-display text-accent-400 hover:text-white transition-all duration-300 hover:transform hover:translate-y-[-1px]"
              >
                {t('footer.cookiePreferences')}
              </button>
            </div>
          </div>
        </div>
      </div>
      </footer>
      
      {/* Cookie Manager Modal */}
      <CookieManager 
        isOpen={isCookieManagerOpen} 
        onClose={() => setIsCookieManagerOpen(false)} 
      />
    </>
  );
};

export default Footer;