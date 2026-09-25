import React from 'react';
import { ArrowUpRight, Mail, Sparkles, Code2, Cpu, Globe } from 'lucide-react';

export default function HeroContent({ onOpenContact, onOpenResume }) {
  return (
    <div 
      className="hero-content-container"
      style={{
        position: 'absolute',
        bottom: '8vh',
        left: '6vw',
        zIndex: 20,
        maxWidth: '560px',
        pointerEvents: 'none',
      }}
    >
      <div style={{ pointerEvents: 'auto' }}>
        {/* Intro Tag */}
        <div 
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 14px',
            marginBottom: '16px',
            borderRadius: '9999px',
            background: 'rgba(255, 255, 255, 0.14)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.25)',
            transform: 'translateZ(0)',
          }}
        >
          <span 
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: '#4ade80',
              boxShadow: '0 0 8px #4ade80',
              display: 'inline-block',
            }} 
          />
          <span
            style={{
              fontSize: '13px',
              fontWeight: '600',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: 'rgba(255, 255, 255, 0.95)',
            }}
          >
            Available for new opportunities
          </span>
        </div>

        {/* Heading */}
        <div style={{ marginBottom: '20px' }}>
          <div 
            style={{
              fontSize: 'clamp(18px, 2.2vw, 24px)',
              fontWeight: '500',
              color: 'rgba(255, 255, 255, 0.85)',
              letterSpacing: '-0.01em',
              marginBottom: '4px',
            }}
          >
            Hi, I'm
          </div>
          <h1 
            style={{
              fontSize: 'clamp(42px, 5.5vw, 68px)',
              fontWeight: '800',
              lineHeight: '1.05',
              letterSpacing: '-0.03em',
              color: '#ffffff',
              textShadow: '0 4px 20px rgba(0, 0, 0, 0.18)',
            }}
          >
            Kartik R N Gupta
          </h1>
        </div>

        {/* Compact 3-line professional bio */}
        <div 
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            marginBottom: '32px',
          }}
        >
          <div 
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              fontSize: 'clamp(14px, 1.3vw, 16px)',
              color: 'rgba(255, 255, 255, 0.9)',
              fontWeight: '500',
            }}
          >
            <div 
              style={{
                width: '26px',
                height: '26px',
                borderRadius: '8px',
                background: 'rgba(255, 255, 255, 0.14)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <Code2 size={15} color="#ffffff" />
            </div>
            <span><strong>Full Stack Development</strong> — Modern high-performance web systems</span>
          </div>

          <div 
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              fontSize: 'clamp(14px, 1.3vw, 16px)',
              color: 'rgba(255, 255, 255, 0.9)',
              fontWeight: '500',
            }}
          >
            <div 
              style={{
                width: '26px',
                height: '26px',
                borderRadius: '8px',
                background: 'rgba(255, 255, 255, 0.14)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <Cpu size={15} color="#ffffff" />
            </div>
            <span><strong>AI/ML Engineering</strong> — Intelligent agents, vision & generative systems</span>
          </div>

          <div 
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              fontSize: 'clamp(14px, 1.3vw, 16px)',
              color: 'rgba(255, 255, 255, 0.9)',
              fontWeight: '500',
            }}
          >
            <div 
              style={{
                width: '26px',
                height: '26px',
                borderRadius: '8px',
                background: 'rgba(255, 255, 255, 0.14)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <Globe size={15} color="#ffffff" />
            </div>
            <span><strong>Creative Web Development</strong> — Immersive 60 FPS interactive graphics</span>
          </div>
        </div>

        {/* Buttons */}
        <div 
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            flexWrap: 'wrap',
          }}
        >
          {/* Resume button */}
          <button
            onClick={onOpenResume}
            className="hero-btn-primary"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '14px 28px',
              borderRadius: '9999px',
              backgroundColor: '#ffffff',
              color: '#111111',
              fontWeight: '700',
              fontSize: '15px',
              letterSpacing: '-0.01em',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.28s cubic-bezier(0.16, 1, 0.3, 1)',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
              e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.28)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.2)';
            }}
          >
            <span>Resume</span>
            <ArrowUpRight size={18} strokeWidth={2.5} />
          </button>

          {/* Let's Talk button */}
          <button
            onClick={onOpenContact}
            className="hero-btn-secondary"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '14px 28px',
              borderRadius: '9999px',
              backgroundColor: 'rgba(255, 255, 255, 0.14)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              border: '1.5px solid rgba(255, 255, 255, 0.4)',
              color: '#ffffff',
              fontWeight: '700',
              fontSize: '15px',
              letterSpacing: '-0.01em',
              cursor: 'pointer',
              transform: 'translateZ(0)',
              transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.22)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.6)';
              e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.35)';
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
            }}
          >
            <Mail size={18} strokeWidth={2.2} />
            <span>Let's Talk</span>
          </button>
        </div>
      </div>
    </div>
  );
}
