import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Award, MapPin, ArrowRight, Clock, Compass, Users } from 'lucide-react';
import BannerImage from '../components/BannerImage';
import { useTranslation } from '../hooks/useTranslation';

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-dark-950 text-white overflow-hidden">
      {/* Hero Section avec image bannière */}
      <section className="relative min-h-screen bg-dark-950 flex items-center">
        <div className="max-w-5xl mx-auto w-full px-6 sm:px-8 lg:px-12 py-20">
          <div className="relative h-[70vh] overflow-hidden flex items-center justify-center">
            <BannerImage
              className="w-full h-full"
              intervalMs={8000}
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
              <h1 className="font-display font-light text-3xl md:text-5xl lg:text-6xl leading-none text-white mb-6 drop-shadow-lg">{t('about.heroTitle')}</h1>
            </div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHIE - Baseline percutante */}
      <section className="py-16 px-8 lg:px-12 bg-dark-950 relative" style={{marginTop: '-64px'}}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl md:text-3xl text-white font-light leading-relaxed italic">{t('about.philosophy')}</p>
          <p className="text-lg md:text-xl text-accent-400 mt-6 leading-relaxed">{t('about.vision')}</p>
        </div>
      </section>

      {/* POURQUOI NOUS CHOISIR - 3 piliers */}
      <section className="py-20 px-6 lg:px-8 bg-dark-900 relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-light text-white">{t('about.whyChooseTitle')}</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Expérience */}
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center border border-accent-500/30 group-hover:border-accent-400 transition-colors duration-300">
                <Clock className="h-8 w-8 text-accent-500" />
              </div>
              <h3 className="font-display text-xl font-medium mb-4 text-white">{t('about.experience')}</h3>
              <p className="text-accent-400 leading-relaxed">{t('about.experienceText')}</p>
            </div>

            {/* Flexibilité */}
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center border border-accent-500/30 group-hover:border-accent-400 transition-colors duration-300">
                <Compass className="h-8 w-8 text-accent-500" />
              </div>
              <h3 className="font-display text-xl font-medium mb-4 text-white">{t('about.flexibility')}</h3>
              <p className="text-accent-400 leading-relaxed">{t('about.flexibilityText')}</p>
            </div>

            {/* Accompagnement */}
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center border border-accent-500/30 group-hover:border-accent-400 transition-colors duration-300">
                <Users className="h-8 w-8 text-accent-500" />
              </div>
              <h3 className="font-display text-xl font-medium mb-4 text-white">{t('about.support')}</h3>
              <p className="text-accent-400 leading-relaxed">{t('about.supportText')}</p>
            </div>
          </div>

          {/* Message rentabilité */}
          <div className="mt-16 text-center">
            <p className="text-lg text-accent-300 max-w-2xl mx-auto border-l-2 border-accent-500 pl-6 text-left italic">{t('about.investmentValue')}</p>
          </div>
        </div>
      </section>

      {/* NOS VALEURS */}
      <section className="py-20 px-6 lg:px-8 bg-dark-950 relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-light text-white">{t('about.valuesTitle')}</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 border border-dark-800 hover:border-accent-500/30 transition-colors duration-300">
              <h3 className="font-display text-xl font-medium mb-4 text-white">{t('about.architecturalSensitivity')}</h3>
              <p className="text-accent-400 leading-relaxed">{t('about.architecturalSensitivityText')}</p>
            </div>
            <div className="p-8 border border-dark-800 hover:border-accent-500/30 transition-colors duration-300">
              <h3 className="font-display text-xl font-medium mb-4 text-white">{t('about.technicalRigor')}</h3>
              <p className="text-accent-400 leading-relaxed">{t('about.technicalRigorText')}</p>
            </div>
            <div className="p-8 border border-dark-800 hover:border-accent-500/30 transition-colors duration-300">
              <h3 className="font-display text-xl font-medium mb-4 text-white">{t('about.economicPragmatism')}</h3>
              <p className="text-accent-400 leading-relaxed">{t('about.economicPragmatismText')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* NOTRE HISTOIRE */}
      <section className="py-20 px-6 lg:px-8 bg-dark-900 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-light text-white mb-2">{t('about.historyTitle')}</h2>
          </div>

          <div className="space-y-6 text-lg text-accent-400 leading-relaxed">
            <p>{t('about.historyText1')}</p>
            <p>{t('about.historyText2')}</p>
            <p>{t('about.historyText3')}</p>
          </div>
        </div>
      </section>

      {/* SECTION FONDATEURS */}
      <section className="py-20 px-6 lg:px-8 bg-dark-950 relative overflow-hidden">
        <div className="max-w-5xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-light text-white">{t('about.foundersTitle')}</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Christophe Tilliet */}
            <div className="text-center">
              <div className="flex justify-center mb-8">
                <div className="w-48 h-48 bg-cover bg-center overflow-hidden"
                  style={{ backgroundImage: 'url(/images/christophe-tilliet.jpg)' }}
                  role="img"
                  aria-label="Christophe Tilliet, co-fondateur de CTRP"
                />
              </div>

              <div className="space-y-4">
                <h3 className="font-display text-2xl font-medium text-white">Christophe Tilliet</h3>

                <div className="space-y-3 text-accent-400 text-sm">
                  <div className="flex items-center justify-center">
                    <Calendar className="h-4 w-4 mr-2 text-accent-500" />
                    <span>{t('about.christopheBorn')}</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Award className="h-4 w-4 mr-2 text-accent-500" />
                    <span>{t('about.christopheGraduated')}</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <MapPin className="h-4 w-4 mr-2 text-accent-500" />
                    <span>{t('about.christopheArrival')}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Rita Pires */}
            <div className="text-center">
              <div className="flex justify-center mb-8">
                <div className="w-48 h-48 bg-cover bg-center overflow-hidden"
                  style={{ backgroundImage: 'url(/images/rita-pires.jpg)' }}
                  role="img"
                  aria-label="Rita Pires, co-fondatrice de CTRP"
                />
              </div>

              <div className="space-y-4">
                <h3 className="font-display text-2xl font-medium text-white">Rita Pires</h3>

                <div className="space-y-3 text-accent-400 text-sm">
                  <div className="flex items-center justify-center">
                    <Calendar className="h-4 w-4 mr-2 text-accent-500" />
                    <span>{t('about.ritaBorn')}</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Award className="h-4 w-4 mr-2 text-accent-500" />
                    <span>{t('about.ritaGraduated')}</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <MapPin className="h-4 w-4 mr-2 text-accent-500" />
                    <span>{t('about.ritaLocation')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 lg:px-8 bg-dark-900 relative overflow-hidden border-t border-dark-800/50">
        <div className="max-w-4xl mx-auto text-center relative">
          <p className="text-lg md:text-xl text-accent-400 mb-8 leading-relaxed">{t('about.ctaServices')}</p>

          <Link
            to="/contacto"
            className="group relative inline-flex items-center px-8 py-4 border border-white/20 text-white hover:bg-white hover:text-dark-950 transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            <span className="relative z-10 font-display text-sm font-medium uppercase tracking-wider mr-4">{t('nav.contact')}</span>
            <ArrowRight className="relative z-10 h-5 w-5 transition-all duration-300 group-hover:translate-x-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;