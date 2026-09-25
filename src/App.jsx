import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import CharacterTracker from './components/CharacterTracker';
import HeroContent from './components/HeroContent';
import CustomCursor from './components/CustomCursor';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import JourneySection from './components/JourneySection';
import EducationSection from './components/EducationSection';
import CurrentlyLearning from './components/CurrentlyLearning';
import PhotographySection from './components/PhotographySection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import AboutPage from './components/AboutPage';

export default function App() {
  const [currentPath, setCurrentPath] = useState(
    window.location.pathname === '/about' || window.location.hash === '#/about'
      ? '/about'
      : '/'
  );
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  useEffect(() => {
    const handleLocationChange = () => {
      const isAbout =
        window.location.pathname === '/about' ||
        window.location.hash === '#/about' ||
        window.location.hash.startsWith('#/about');
      setCurrentPath(isAbout ? '/about' : '/');
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  const navigateTo = (path) => {
    if (path.startsWith('/about')) {
      window.history.pushState({}, '', '/about');
      setCurrentPath('/about');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.history.pushState({}, '', path);
      setCurrentPath('/');
      if (path.includes('#')) {
        const hash = path.substring(path.indexOf('#'));
        setTimeout(() => {
          const el = document.querySelector(hash);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 80);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const isAboutPage = currentPath === '/about';

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        backgroundColor: '#090909',
        color: '#ffffff',
        overflowX: 'hidden',
      }}
    >
      {/* Magnetic Hardware Accelerated Custom Cursor */}
      <CustomCursor />

      {/* Fixed Sticky Navigation */}
      <Navbar currentPath={currentPath} navigateTo={navigateTo} />

      {/* Conditional Route: /about vs / (Homepage) */}
      {isAboutPage ? (
        <main>
          {/* ==========================================================
              DEDICATED PIXEL-PERFECT ABOUT PAGE
          ========================================================== */}
          <AboutPage 
            navigateTo={navigateTo} 
            onOpenResume={() => setResumeModalOpen(true)} 
          />
        </main>
      ) : (
        <main>
          {/* ==========================================================
              HOMEPAGE (WITH 60 FPS INTERACTIVE CHARACTER ANIMATION)
          ========================================================== */}
          <section
            id="hero"
            style={{
              position: 'relative',
              width: '100%',
              height: '100vh',
              minHeight: '680px',
              backgroundColor: '#8F1A19', // Exact color match with character frames
              overflow: 'hidden',
            }}
          >
            {/* 60 FPS Cursor Tracking Interactive Character Canvas */}
            <CharacterTracker />

            {/* Left-Aligned Hero Narrative & Technical Positioning */}
            <HeroContent onOpenResume={() => setResumeModalOpen(true)} />

            {/* Bottom-Right Interactive Indicator */}
            <div
              style={{
                position: 'absolute',
                bottom: '32px',
                right: '6vw',
                zIndex: 25,
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                borderRadius: '999px',
                backgroundColor: 'rgba(0, 0, 0, 0.45)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
                border: '1px solid rgba(255, 255, 255, 0.18)',
                color: 'rgba(255, 255, 255, 0.85)',
                fontSize: '11px',
                fontWeight: '600',
                fontFamily: "'DM Mono', monospace",
                letterSpacing: '0.08em',
                pointerEvents: 'none',
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: '#ef4444',
                  boxShadow: '0 0 8px #ef4444',
                  display: 'inline-block',
                }}
              />
              <span>MOVE YOUR CURSOR TO EXPLORE • 60 FPS</span>
            </div>

            {/* Seamless Bottom Fade into Near-Black (#080808) Portfolio */}
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '140px',
                background: 'linear-gradient(to bottom, transparent, rgba(8, 8, 8, 0.6) 45%, #080808 100%)',
                pointerEvents: 'none',
                zIndex: 20,
              }}
            />
          </section>

          {/* About Section on Home */}
          <AboutSection />

          {/* Technical Skills */}
          <SkillsSection />

          {/* Selected Projects */}
          <ProjectsSection />

          {/* Journey Timeline */}
          <JourneySection />

          {/* Education & Beyond Classroom */}
          <EducationSection />

          {/* Currently Learning */}
          <CurrentlyLearning />

          {/* Beyond Code (Photography) */}
          <PhotographySection />

          {/* Contact Section */}
          <ContactSection />
        </main>
      )}

      {/* Global Footer */}
      <Footer />

      {/* Global Resume Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </div>
  );
}
