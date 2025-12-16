import React, { useState } from 'react';
import { Settings, Cookie, Shield, X } from 'lucide-react';
import { useCookieConsent } from '../hooks/useCookieConsent';
import { useTranslation } from '../hooks/useTranslation';

interface CookieManagerProps {
  isOpen: boolean;
  onClose: () => void;
}

const CookieManager: React.FC<CookieManagerProps> = ({ isOpen, onClose }) => {
  const { t } = useTranslation();
  const { preferences, updateConsent } = useCookieConsent();
  const [localPreferences, setLocalPreferences] = useState({
    necessary: true,
    analytics: preferences?.analytics || false,
    marketing: preferences?.marketing || false,
    functional: preferences?.functional || false
  });

  const handlePreferenceChange = (type: keyof typeof localPreferences) => {
    if (type === 'necessary') return;
    
    setLocalPreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  const handleSave = () => {
    updateConsent({
      ...localPreferences,
      accepted: true
    });
    onClose();
  };

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true,
      accepted: true
    };
    setLocalPreferences(allAccepted);
    updateConsent(allAccepted);
    onClose();
  };

  const handleRejectAll = () => {
    const minimal = {
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false,
      accepted: false
    };
    setLocalPreferences(minimal);
    updateConsent(minimal);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-dark-950/80 backdrop-blur-sm z-50" onClick={onClose} />
      
      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
        <div className="bg-dark-950 border border-accent-400/30 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          
          {/* En-tête */}
          <div className="flex items-center justify-between p-8 border-b border-dark-800">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-accent-500/10 text-accent-500 rounded-full flex items-center justify-center">
                <Settings className="h-6 w-6" />
              </div>
              <div>
                <h2 className="font-display text-2xl font-medium text-white">
                  {t('cookies.title')}
                </h2>
                <p className="text-accent-400">Personnalisez vos préférences de confidentialité</p>
              </div>
            </div>
            
            <button
              onClick={onClose}
              className="text-accent-400 hover:text-white transition-colors p-2"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Contenu */}
          <div className="p-8">
            
            {/* Description générale */}
            <div className="mb-8">
              <p className="text-accent-400 leading-relaxed mb-4">
                Nous utilisons différents types de cookies pour améliorer votre expérience sur notre site. 
                Vous pouvez choisir quels cookies accepter selon vos préférences.
              </p>
              
              <div className="bg-dark-900/50 border border-dark-800 p-6">
                <div className="flex items-start space-x-4">
                  <Shield className="h-6 w-6 text-accent-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium text-white mb-2">Vos droits RGPD</h3>
                    <p className="text-sm text-accent-400 leading-relaxed">
                      Vous avez le droit d'accéder, rectifier, supprimer vos données personnelles, 
                      de vous opposer à leur traitement et de demander leur portabilité. 
                      Contactez-nous à <a href="mailto:ct@ctrp.pt" className="text-accent-500 hover:text-white underline">ct@ctrp.pt</a> ou <a href="mailto:rp@ctrp.pt" className="text-accent-500 hover:text-white underline">rp@ctrp.pt</a> pour exercer vos droits.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Types de cookies */}
            <div className="space-y-8">
              
              {/* Cookies nécessaires */}
              <div className="border border-dark-800 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <Cookie className="h-5 w-5 text-accent-500" />
                      <h4 className="font-medium text-white">Cookies Nécessaires</h4>
                      <span className="text-xs bg-accent-500 text-white px-2 py-1 rounded">
                        Obligatoire
                      </span>
                    </div>
                    <p className="text-sm text-accent-400 mb-4">
                      Ces cookies sont essentiels au fonctionnement du site. Ils permettent la navigation, 
                      la sécurité, l'authentification et la sauvegarde de vos préférences.
                    </p>
                    <div className="text-xs text-accent-500">
                      <strong>Exemples :</strong> Session utilisateur, préférences de langue, panier d'achat, sécurité CSRF
                    </div>
                  </div>
                  <div className="ml-6">
                    <div className="w-12 h-6 bg-accent-500 rounded-full relative">
                      <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 right-0.5"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cookies analytiques */}
              <div className="border border-dark-800 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <Cookie className="h-5 w-5 text-accent-500" />
                      <h4 className="font-medium text-white">Cookies Analytiques</h4>
                    </div>
                    <p className="text-sm text-accent-400 mb-4">
                      Ces cookies nous aident à comprendre comment vous utilisez notre site en collectant 
                      des informations anonymes sur votre navigation.
                    </p>
                    <div className="text-xs text-accent-500 mb-4">
                      <strong>Services :</strong> Google Analytics, statistiques de visite, analyse de performance
                    </div>
                    <div className="text-xs text-accent-400">
                      <strong>Données collectées :</strong> Pages visitées, durée de session, source de trafic (anonymisées)
                    </div>
                  </div>
                  <div className="ml-6">
                    <button
                      onClick={() => handlePreferenceChange('analytics')}
                      className={`w-12 h-6 rounded-full relative transition-colors duration-300 ${
                        localPreferences.analytics ? 'bg-accent-500' : 'bg-dark-700'
                      }`}
                    >
                      <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform duration-300 ${
                        localPreferences.analytics ? 'translate-x-6' : 'translate-x-0.5'
                      }`}></div>
                    </button>
                  </div>
                </div>
              </div>

              {/* Cookies marketing */}
              <div className="border border-dark-800 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <Cookie className="h-5 w-5 text-accent-500" />
                      <h4 className="font-medium text-white">Cookies Marketing</h4>
                    </div>
                    <p className="text-sm text-accent-400 mb-4">
                      Ces cookies permettent de vous proposer du contenu et des publicités personnalisés 
                      en fonction de vos intérêts.
                    </p>
                    <div className="text-xs text-accent-500 mb-4">
                      <strong>Services :</strong> Réseaux sociaux, publicités ciblées, remarketing
                    </div>
                    <div className="text-xs text-accent-400">
                      <strong>Données collectées :</strong> Préférences, historique de navigation, interactions sociales
                    </div>
                  </div>
                  <div className="ml-6">
                    <button
                      onClick={() => handlePreferenceChange('marketing')}
                      className={`w-12 h-6 rounded-full relative transition-colors duration-300 ${
                        localPreferences.marketing ? 'bg-accent-500' : 'bg-dark-700'
                      }`}
                    >
                      <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform duration-300 ${
                        localPreferences.marketing ? 'translate-x-6' : 'translate-x-0.5'
                      }`}></div>
                    </button>
                  </div>
                </div>
              </div>

              {/* Cookies fonctionnels */}
              <div className="border border-dark-800 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <Cookie className="h-5 w-5 text-accent-500" />
                      <h4 className="font-medium text-white">Cookies Fonctionnels</h4>
                    </div>
                    <p className="text-sm text-accent-400 mb-4">
                      Ces cookies améliorent l'expérience utilisateur en activant des fonctionnalités 
                      avancées comme les chats, vidéos ou cartes interactives.
                    </p>
                    <div className="text-xs text-accent-500 mb-4">
                      <strong>Services :</strong> Widgets tiers, intégrations, fonctionnalités interactives
                    </div>
                    <div className="text-xs text-accent-400">
                      <strong>Données collectées :</strong> Préférences d'affichage, interactions avec les widgets
                    </div>
                  </div>
                  <div className="ml-6">
                    <button
                      onClick={() => handlePreferenceChange('functional')}
                      className={`w-12 h-6 rounded-full relative transition-colors duration-300 ${
                        localPreferences.functional ? 'bg-accent-500' : 'bg-dark-700'
                      }`}
                    >
                      <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform duration-300 ${
                        localPreferences.functional ? 'translate-x-6' : 'translate-x-0.5'
                      }`}></div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-end p-8 border-t border-dark-800">
            <button
              onClick={handleRejectAll}
              className="px-6 py-3 border border-accent-400/30 text-accent-400 hover:text-white hover:border-white transition-all duration-300"
            >
              <span className="text-sm font-medium uppercase tracking-wider">
                {t('cookies.declineAll')}
              </span>
            </button>
            
            <button
              onClick={handleSave}
              className="px-6 py-3 bg-accent-500 text-white hover:bg-accent-600 transition-all duration-300"
            >
              <span className="text-sm font-medium uppercase tracking-wider">
                {t('cookies.save')}
              </span>
            </button>
            
            <button
              onClick={handleAcceptAll}
              className="group relative px-6 py-3 bg-white text-dark-950 hover:bg-accent-400 hover:text-white transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-accent-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              <span className="relative z-10 text-sm font-medium uppercase tracking-wider">
                {t('cookies.acceptAll')}
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CookieManager;