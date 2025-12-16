import React, { useState, useEffect } from 'react';
import { X, Cookie, Settings, Shield, Eye } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

interface CookieConsentProps {
  onAccept?: () => void;
  onDecline?: () => void;
  onCustomize?: () => void;
}

const CookieConsent: React.FC<CookieConsentProps> = ({ 
  onAccept, 
  onDecline, 
  onCustomize 
}) => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true, // Toujours activé
    analytics: false,
    marketing: false,
    functional: false
  });

  // Vérifier si le consentement a déjà été donné
  useEffect(() => {
    const consent = getCookieConsent();
    if (!consent) {
      // Délai pour l'animation d'entrée
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  // Écouter l'événement d'ouverture du gestionnaire de cookies
  useEffect(() => {
    // Supprimer l'ancien système d'événements car maintenant géré directement par le Footer
  }, []);

  // Fonctions de gestion des cookies
  const setCookieConsent = (consent: any) => {
    const consentData = {
      ...consent,
      timestamp: new Date().toISOString(),
      version: '1.0'
    };
    localStorage.setItem('ctrp_cookie_consent', JSON.stringify(consentData));
    
    // Définir un cookie avec expiration de 365 jours
    const expiryDate = new Date();
    expiryDate.setFullYear(expiryDate.getFullYear() + 1);
    document.cookie = `ctrp_consent=true; expires=${expiryDate.toUTCString()}; path=/; SameSite=Lax`;
  };

  const getCookieConsent = () => {
    try {
      const consent = localStorage.getItem('ctrp_cookie_consent');
      return consent ? JSON.parse(consent) : null;
    } catch {
      return null;
    }
  };

  const handleAcceptAll = () => {
    const fullConsent = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true,
      accepted: true
    };
    
    setCookieConsent(fullConsent);
    setIsVisible(false);
    onAccept?.();
    
    // Activer les services tiers si nécessaire
    enableThirdPartyServices(fullConsent);
  };

  const handleDeclineAll = () => {
    const minimalConsent = {
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false,
      accepted: false
    };
    
    setCookieConsent(minimalConsent);
    setIsVisible(false);
    onDecline?.();
  };

  const handleSavePreferences = () => {
    const customConsent = {
      ...preferences,
      accepted: true
    };
    
    setCookieConsent(customConsent);
    setIsVisible(false);
    onCustomize?.();
    
    // Activer seulement les services autorisés
    enableThirdPartyServices(customConsent);
  };

  const enableThirdPartyServices = (consent: any) => {
    // Exemple d'activation de Google Analytics
    if (consent.analytics && typeof gtag !== 'undefined') {
      gtag('consent', 'update', {
        'analytics_storage': 'granted'
      });
    }
    
    // Exemple d'activation de services marketing
    if (consent.marketing) {
      // Activer les pixels de tracking, etc.
      console.log('Services marketing activés');
    }
  };

  const handlePreferenceChange = (type: keyof typeof preferences) => {
    if (type === 'necessary') return; // Les cookies nécessaires ne peuvent pas être désactivés
    
    setPreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-dark-950/60 backdrop-blur-sm z-50 opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]" />
      
      {/* Banner compact */}
      <div className="fixed bottom-0 left-0 right-0 z-50 transform translate-y-full animate-[slideUp_0.8s_ease-out_0.2s_forwards]">
        <div className="bg-dark-950/95 backdrop-blur-md border-t border-accent-400/30 shadow-2xl">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
            
            {/* En-tête compact */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-accent-500/10 text-accent-500 rounded-full flex items-center justify-center">
                  <Cookie className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-medium text-white">
                    {t('cookies.title')}
                  </h3>
                </div>
              </div>
              
              <button
                onClick={() => setIsVisible(false)}
                className="text-accent-400 hover:text-white transition-colors p-1"
                aria-label="Fermer le banner de cookies"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Message principal compact */}
            <div className="mb-4">
              <p className="text-accent-400 leading-relaxed text-sm mb-3">{t('cookies.description')}</p>
              
              <div className="flex flex-wrap gap-3 text-xs">
                <a 
                  href="/politique-confidentialite" 
                  className="font-display text-accent-500 hover:text-white transition-colors underline underline-offset-2"
                >
                  <Shield className="h-3 w-3 inline mr-1" />
                  {t('cookies.privacyPolicy')}
                </a>
                <a 
                  href="/mentions-legales" 
                  className="font-display text-accent-500 hover:text-white transition-colors underline underline-offset-2"
                >
                  <Eye className="h-3 w-3 inline mr-1" />
                  {t('cookies.legalNotices')}
                </a>
                <button
                  onClick={() => setShowDetails(!showDetails)}
                  className="font-display text-accent-500 hover:text-white transition-colors underline underline-offset-2"
                >
                  <Settings className="h-3 w-3 inline mr-1" />
                  {showDetails ? t('cookies.hide') : t('cookies.customize')}
                </button>
              </div>
            </div>

            {/* Détails des cookies (compact) */}
            {showDetails && (
              <div className="mb-4 p-4 bg-dark-900/50 border border-dark-800 opacity-0 animate-[slideUp_0.5s_ease-out_forwards]">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {/* Cookies nécessaires */}
                  <div className="flex items-center justify-between">
                    <div className="flex-1 min-w-0">
                      <h5 className="font-display font-medium text-white text-sm mb-1">{t('cookies.necessary')}</h5>
                      <p className="text-xs text-accent-400">{t('cookies.necessaryDesc')}</p>
                    </div>
                    <div className="ml-2">
                      <div className="w-8 h-4 bg-accent-500 rounded-full relative">
                        <div className="w-3 h-3 bg-white rounded-full absolute top-0.5 right-0.5"></div>
                      </div>
                    </div>
                  </div>

                  {/* Cookies analytiques */}
                  <div className="flex items-center justify-between">
                    <div className="flex-1 min-w-0">
                      <h5 className="font-display font-medium text-white text-sm mb-1">{t('cookies.analytics')}</h5>
                      <p className="text-xs text-accent-400">{t('cookies.analyticsDesc')}</p>
                    </div>
                    <div className="ml-2">
                      <button
                        onClick={() => handlePreferenceChange('analytics')}
                        className={`w-8 h-4 rounded-full relative transition-colors duration-300 ${
                          preferences.analytics ? 'bg-accent-500' : 'bg-dark-700'
                        }`}
                      >
                        <div className={`w-3 h-3 bg-white rounded-full absolute top-0.5 transition-transform duration-300 ${
                          preferences.analytics ? 'translate-x-4' : 'translate-x-0.5'
                        }`}></div>
                      </button>
                    </div>
                  </div>

                  {/* Cookies marketing */}
                  <div className="flex items-center justify-between">
                    <div className="flex-1 min-w-0">
                      <h5 className="font-display font-medium text-white text-sm mb-1">{t('cookies.marketing')}</h5>
                      <p className="text-xs text-accent-400">{t('cookies.marketingDesc')}</p>
                    </div>
                    <div className="ml-2">
                      <button
                        onClick={() => handlePreferenceChange('marketing')}
                        className={`w-8 h-4 rounded-full relative transition-colors duration-300 ${
                          preferences.marketing ? 'bg-accent-500' : 'bg-dark-700'
                        }`}
                      >
                        <div className={`w-3 h-3 bg-white rounded-full absolute top-0.5 transition-transform duration-300 ${
                          preferences.marketing ? 'translate-x-4' : 'translate-x-0.5'
                        }`}></div>
                      </button>
                    </div>
                  </div>

                  {/* Cookies fonctionnels */}
                  <div className="flex items-center justify-between">
                    <div className="flex-1 min-w-0">
                      <h5 className="font-display font-medium text-white text-sm mb-1">{t('cookies.functional')}</h5>
                      <p className="text-xs text-accent-400">{t('cookies.functionalDesc')}</p>
                    </div>
                    <div className="ml-2">
                      <button
                        onClick={() => handlePreferenceChange('functional')}
                        className={`w-8 h-4 rounded-full relative transition-colors duration-300 ${
                          preferences.functional ? 'bg-accent-500' : 'bg-dark-700'
                        }`}
                      >
                        <div className={`w-3 h-3 bg-white rounded-full absolute top-0.5 transition-transform duration-300 ${
                          preferences.functional ? 'translate-x-4' : 'translate-x-0.5'
                        }`}></div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Boutons d'action compacts */}
            <div className="flex flex-col sm:flex-row gap-3 justify-end">
              {showDetails && (
                <button
                  onClick={handleSavePreferences}
                  className="font-display group relative px-4 py-2 bg-accent-500 text-white hover:bg-accent-600 transition-all duration-300 overflow-hidden text-sm"
                >
                  <div className="absolute inset-0 bg-white/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                  <span className="relative z-10 font-display font-medium uppercase tracking-wider">
                    {t('cookies.save')}
                  </span>
                </button>
              )}
              
              <button
                onClick={handleDeclineAll}
                className="font-display px-4 py-2 border border-accent-400/30 text-accent-400 hover:text-white hover:border-white transition-all duration-300 text-sm"
              >
                <span className="font-display font-medium uppercase tracking-wider">
                  {t('cookies.declineAll')}
                </span>
              </button>
              
              <button
                onClick={handleAcceptAll}
                className="font-display group relative px-4 py-2 bg-white text-dark-950 hover:bg-accent-400 hover:text-white transition-all duration-500 overflow-hidden text-sm"
              >
                <div className="absolute inset-0 bg-accent-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                <span className="relative z-10 font-display font-medium uppercase tracking-wider">
                  {t('cookies.acceptAll')}
                </span>
              </button>
            </div>

            {/* Informations légales compactes */}
            <div className="mt-3 pt-3 border-t border-dark-800">
              <p className="text-xs text-accent-500 leading-relaxed">
                {t('cookies.rgpdInfo')}{' '}
                <a href="/politique-confidentialite" className="font-display underline hover:text-white transition-colors ml-1">
                  {t('cookies.moreInfo')}
                </a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CookieConsent;