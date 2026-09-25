import React from 'react';
import { ArrowRight, Download, Sparkles, Terminal } from 'lucide-react';

export default function HeroContent({ onOpenResume }) {
  const techStack = [
    'C / C++',
    'Python',
    'JavaScript',
    'React',
    'AI / ML',
    'DSA',
    'Git',
  ];

  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      className="hero-content-container"
      style={{
        position: 'absolute',
        top: '50%',
        left: '6vw',
        transform: 'translateY(-48%)',
        zIndex: 25,
        maxWidth: '580px',
        pointerEvents: 'none',
      }}
    >
      <div style={{ pointerEvents: 'auto' }}>
        {/* Status Badge */}
        <div 
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '7px 16px',
            marginBottom: '22px',
            borderRadius: '9999px',
            background: 'rgba(255, 255, 255, 0.14)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border: '1px solid rgba(255, 255, 255, 0.22)',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.15)',
          }}
        >
          <span 
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: '#22c55e',
              boxShadow: '0 0 10px #22c55e',
              display: 'inline-block',
              animation: 'pulseGlow 2s infinite ease-in-out',
            }} 
          />
          <span
            style={{
              fontSize: '12px',
              fontWeight: '600',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#ffffff',
              fontFamily: "'DM Mono', monospace",
            }}
          >
            AVAILABLE FOR OPPORTUNITIES
          </span>
        </div>

        {/* Main Greeting & Name */}
        <div style={{ marginBottom: '18px' }}>
          <div 
            style={{
              fontSize: 'clamp(18px, 2vw, 22px)',
              fontWeight: '500',
              color: 'rgba(255, 255, 255, 0.85)',
              letterSpacing: '-0.01em',
              marginBottom: '4px',
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            Hi, I'm
          </div>
          <h1 
            style={{
              fontSize: 'clamp(44px, 5.2vw, 68px)',
              fontWeight: '700',
              lineHeight: '1.04',
              letterSpacing: '-0.03em',
              color: '#ffffff',
              fontFamily: "'Space Grotesk', sans-serif",
              textShadow: '0 4px 24px rgba(0, 0, 0, 0.25)',
              marginBottom: '10px',
            }}
          >
            Kartik R N Gupta
          </h1>
          <div 
            style={{
              fontSize: 'clamp(14px, 1.4vw, 17px)',
              fontWeight: '600',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#ffffff',
              display: 'inline-block',
              padding: '4px 12px',
              borderRadius: '6px',
              background: 'rgba(0, 0, 0, 0.28)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              fontFamily: "'DM Mono', monospace",
            }}
          >
            CSE • AI/ML • SOFTWARE DEVELOPER
          </div>
        </div>

        {/* Description */}
        <p 
          style={{
            fontSize: 'clamp(15px, 1.25vw, 17px)',
            lineHeight: '1.65',
            color: 'rgba(255, 255, 255, 0.92)',
            marginBottom: '32px',
            fontWeight: '400',
            maxWidth: '520px',
            textShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
          }}
        >
          I build intelligent, practical and user-focused digital solutions through software development, AI/ML and creative technology.
        </p>

        {/* Action Buttons */}
        <div 
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            flexWrap: 'wrap',
            marginBottom: '32px',
          }}
        >
          {/* Primary CTA: VIEW MY WORK → */}
          <button
            onClick={handleScrollToProjects}
            className="hero-btn-primary"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '14px 26px',
              borderRadius: '9999px',
              backgroundColor: '#ffffff',
              color: '#080808',
              fontWeight: '700',
              fontSize: '14px',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.25)',
              fontFamily: "'Space Grotesk', sans-serif",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
              e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.35)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.25)';
            }}
          >
            <span>VIEW MY WORK</span>
            <ArrowRight size={17} strokeWidth={2.5} />
          </button>

          {/* Secondary CTA: DOWNLOAD RESUME ↓ */}
          <button
            onClick={onOpenResume}
            className="hero-btn-secondary"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '14px 26px',
              borderRadius: '9999px',
              backgroundColor: 'rgba(255, 255, 255, 0.14)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1.5px solid rgba(255, 255, 255, 0.35)',
              color: '#ffffff',
              fontWeight: '700',
              fontSize: '14px',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
              fontFamily: "'Space Grotesk', sans-serif",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.24)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.65)';
              e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.14)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.35)';
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
            }}
          >
            <span>DOWNLOAD RESUME</span>
            <Download size={17} strokeWidth={2.2} />
          </button>
        </div>

        {/* Technical Stack Pills */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div 
            style={{
              fontSize: '11px',
              fontWeight: '600',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'rgba(255, 255, 255, 0.65)',
              fontFamily: "'DM Mono', monospace",
            }}
          >
            Core Technical Stack
          </div>
          <div 
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              flexWrap: 'wrap',
            }}
          >
            {techStack.map((tech) => (
              <span
                key={tech}
                style={{
                  padding: '5px 12px',
                  borderRadius: '999px',
                  backgroundColor: 'rgba(255, 255, 255, 0.12)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255, 255, 255, 0.18)',
                  fontSize: '12px',
                  fontWeight: '600',
                  color: '#ffffff',
                  fontFamily: "'DM Mono', monospace",
                  letterSpacing: '0.02em',
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
