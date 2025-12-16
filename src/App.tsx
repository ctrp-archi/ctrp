import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import LegalNotices from './pages/LegalNotices';
import PrivacyPolicy from './pages/PrivacyPolicy';
import CookieConsent from './components/CookieConsent';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen bg-dark-950 pb-20">
          <ScrollToTop />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projetos" element={<Projects />} />
            <Route path="/projets" element={<Projects />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projetos/:id" element={<ProjectDetail />} />
            <Route path="/projets/:id" element={<ProjectDetail />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/servicos" element={<Services />} />
            <Route path="/services" element={<Services />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/a-propos" element={<About />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/mencoes-legais" element={<LegalNotices />} />
            <Route path="/mentions-legales" element={<LegalNotices />} />
            <Route path="/legal-notices" element={<LegalNotices />} />
            <Route path="/politica-privacidade" element={<PrivacyPolicy />} />
            <Route path="/politique-confidentialite" element={<PrivacyPolicy />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Routes>
          <Footer />
          <CookieConsent />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;