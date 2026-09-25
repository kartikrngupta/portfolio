import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroContent from './components/HeroContent';
import CharacterTracker from './components/CharacterTracker';
import CustomCursor from './components/CustomCursor';
import PortfolioModal from './components/PortfolioModal';

export default function App() {
  const [activeModal, setActiveModal] = useState(null);

  const handleNavigate = (destination) => {
    setActiveModal(destination);
  };

  const handleOpenContact = () => {
    setActiveModal('CONTACT');
  };

  const handleOpenResume = () => {
    setActiveModal('RESUME');
  };

  const handleCloseModal = () => {
    setActiveModal(null);
  };

  return (
    <main 
      className="portfolio-hero-root"
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        backgroundColor: '#8F1A19',
        userSelect: 'none',
      }}
    >
      {/* Custom magnetic glowing cursor with trailing aura ring */}
      <CustomCursor />

      {/* Floating frosted-glass navigation pill centered at top */}
      <Navbar onNavigate={handleNavigate} />

      {/* 60 FPS Cursor tracking character animation */}
      <CharacterTracker />

      {/* Hero content: Bottom-left name, bio, action buttons */}
      <HeroContent 
        onOpenContact={handleOpenContact}
        onOpenResume={handleOpenResume}
      />

      {/* Interactive modal for Works, About, Contact, Resume */}
      <PortfolioModal 
        activeModal={activeModal} 
        onClose={handleCloseModal} 
      />

      {/* Subtle bottom-right signature branding */}
      <div 
        style={{
          position: 'absolute',
          bottom: '24px',
          right: '32px',
          zIndex: 20,
          color: 'rgba(255, 255, 255, 0.45)',
          fontSize: '12px',
          fontWeight: '500',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          pointerEvents: 'none',
        }}
      >
        Interactive Hero • 60 FPS
      </div>
    </main>
  );
}
