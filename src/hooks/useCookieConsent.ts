import { useState, useEffect } from 'react';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
  accepted?: boolean;
  timestamp?: string;
  version?: string;
}

export const useCookieConsent = () => {
  const [preferences, setPreferences] = useState<CookiePreferences | null>(null);

  // Charger les préférences au montage du composant
  useEffect(() => {
    const loadPreferences = () => {
      try {
        const stored = localStorage.getItem('ctrp_cookie_consent');
        if (stored) {
          const parsed = JSON.parse(stored);
          setPreferences(parsed);
        } else {
          // Préférences par défaut
          setPreferences({
            necessary: true,
            analytics: false,
            marketing: false,
            functional: false,
            accepted: false
          });
        }
      } catch (error) {
        console.error('Erreur lors du chargement des préférences cookies:', error);
        // Préférences par défaut en cas d'erreur
        setPreferences({
          necessary: true,
          analytics: false,
          marketing: false,
          functional: false,
          accepted: false
        });
      }
    };

    loadPreferences();
  }, []);

  // Fonction pour mettre à jour le consentement
  const updateConsent = (newPreferences: Partial<CookiePreferences>) => {
    const updatedPreferences = {
      ...preferences,
      ...newPreferences,
      timestamp: new Date().toISOString(),
      version: '1.0'
    };

    try {
      // Sauvegarder dans localStorage
      localStorage.setItem('ctrp_cookie_consent', JSON.stringify(updatedPreferences));
      
      // Définir un cookie avec expiration de 365 jours
      const expiryDate = new Date();
      expiryDate.setFullYear(expiryDate.getFullYear() + 1);
      document.cookie = `ctrp_consent=true; expires=${expiryDate.toUTCString()}; path=/; SameSite=Lax`;
      
      // Mettre à jour l'état local
      setPreferences(updatedPreferences);
      
      // Activer/désactiver les services tiers
      enableThirdPartyServices(updatedPreferences);
      
      console.log('Préférences cookies mises à jour:', updatedPreferences);
    } catch (error) {
      console.error('Erreur lors de la sauvegarde des préférences cookies:', error);
    }
  };

  // Fonction pour activer les services tiers selon les préférences
  const enableThirdPartyServices = (consent: CookiePreferences) => {
    // Google Analytics
    if (consent.analytics) {
      if (typeof gtag !== 'undefined') {
        gtag('consent', 'update', {
          'analytics_storage': 'granted'
        });
      }
      console.log('Services analytiques activés');
    } else {
      if (typeof gtag !== 'undefined') {
        gtag('consent', 'update', {
          'analytics_storage': 'denied'
        });
      }
      console.log('Services analytiques désactivés');
    }
    
    // Services marketing
    if (consent.marketing) {
      // Activer les pixels de tracking, publicités, etc.
      console.log('Services marketing activés');
    } else {
      console.log('Services marketing désactivés');
    }
    
    // Services fonctionnels
    if (consent.functional) {
      // Activer widgets tiers, cartes, vidéos, etc.
      console.log('Services fonctionnels activés');
    } else {
      console.log('Services fonctionnels désactivés');
    }
  };

  // Fonction pour vérifier si le consentement a été donné
  const hasConsent = () => {
    return preferences?.accepted === true;
  };

  // Fonction pour réinitialiser les préférences
  const resetConsent = () => {
    try {
      localStorage.removeItem('ctrp_cookie_consent');
      document.cookie = 'ctrp_consent=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      setPreferences({
        necessary: true,
        analytics: false,
        marketing: false,
        functional: false,
        accepted: false
      });
      console.log('Préférences cookies réinitialisées');
    } catch (error) {
      console.error('Erreur lors de la réinitialisation des préférences cookies:', error);
    }
  };

  return {
    preferences,
    updateConsent,
    hasConsent,
    resetConsent
  };
};