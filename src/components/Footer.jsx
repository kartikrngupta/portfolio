import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const navLinks = [
    { label: 'ABOUT', href: '#about' },
    { label: 'PROJECTS', href: '#projects' },
    { label: 'SKILLS', href: '#skills' },
    { label: 'JOURNEY', href: '#journey' },
    { label: 'PHOTOGRAPHY', href: '#photography' },
    { label: 'CONTACT', href: '#contact' },
  ];

  const socialLinks = [
    { label: 'GitHub', href: 'https://github.com' },
    { label: 'LinkedIn', href: 'https://linkedin.com' },
    { label: 'Instagram', href: 'https://instagram.com' },
    { label: 'Email', href: 'mailto:kartikrngupta180@gmail.com' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer
      style={{
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        backgroundColor: '#070708',
        padding: '64px 6vw 40px 6vw',
        position: 'relative',
        zIndex: 10,
      }}
    >
      <div
        style={{
          maxWidth: '1300px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '40px',
        }}
      >
        {/* Top Tier: Identity & Scroll Top */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '20px',
          }}
        >
          <div>
            <h3
              style={{
                fontSize: '18px',
                fontWeight: '800',
                letterSpacing: '0.08em',
                fontFamily: "'Space Grotesk', sans-serif",
                color: '#ffffff',
                marginBottom: '4px',
                textTransform: 'uppercase',
              }}
            >
              KARTIK R N GUPTA
            </h3>
            <div
              style={{
                fontSize: '12px',
                fontWeight: '600',
                color: '#9ca3af',
                fontFamily: "'DM Mono', monospace",
                letterSpacing: '0.1em',
              }}
            >
              CSE • AI/ML • SOFTWARE DEVELOPER
            </div>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 18px',
              borderRadius: '999px',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              color: '#ffffff',
              fontSize: '12px',
              fontWeight: '600',
              fontFamily: "'DM Mono', monospace",
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#ef4444';
              e.currentTarget.style.borderColor = '#ef4444';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
            }}
          >
            <span>BACK TO TOP</span>
            <ArrowUp size={14} />
          </button>
        </div>

        {/* Middle Tier: Navigation Links & Social Links */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '24px',
            paddingTop: '24px',
            borderTop: '1px solid rgba(255, 255, 255, 0.05)',
          }}
        >
          {/* Nav links */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                style={{
                  fontSize: '12px',
                  fontWeight: '600',
                  letterSpacing: '0.12em',
                  fontFamily: "'DM Mono', monospace",
                  color: 'rgba(255, 255, 255, 0.7)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)')}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Social links */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('mailto') ? '_self' : '_blank'}
                rel="noreferrer"
                style={{
                  fontSize: '13px',
                  fontWeight: '500',
                  color: '#9ca3af',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                  fontFamily: "'Space Grotesk', sans-serif",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#ef4444')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#9ca3af')}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Tier: Copyright */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
            paddingTop: '20px',
            borderTop: '1px solid rgba(255, 255, 255, 0.05)',
            fontSize: '12px',
            color: '#6b7280',
            fontFamily: "'DM Mono', monospace",
          }}
        >
          <div>© 2026 Kartik R N Gupta. All rights reserved.</div>
          <div>Built with React & Vite</div>
        </div>
      </div>
    </footer>
  );
}
