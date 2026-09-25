import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar({ currentPath = '/', navigateTo }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'HOME', route: '/', hash: '#hero' },
    { label: 'ABOUT', route: '/about', hash: '#hero-section' },
    { label: 'PROJECTS', route: '/', hash: '#projects' },
    { label: 'SKILLS', route: '/', hash: '#skills' },
    { label: 'JOURNEY', route: '/', hash: '#journey', aboutHash: '#journey-section' },
    { label: 'PHOTOGRAPHY', route: '/', hash: '#photography', aboutHash: '#photography-section' },
    { label: 'CONTACT', route: '/', hash: '#contact' },
  ];

  const handleNavClick = (e, item) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (item.route === '/about') {
      if (currentPath === '/about') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        navigateTo('/about');
      }
      return;
    }

    if (currentPath === '/about') {
      // If we are on about page and target has an on-page section
      if (item.aboutHash) {
        const el = document.querySelector(item.aboutHash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
          return;
        }
      }
      // Otherwise navigate back to home and scroll to hash
      navigateTo(item.route + item.hash);
      setTimeout(() => {
        const el = document.querySelector(item.hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }

    // On home page
    if (item.label === 'HOME') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const target = document.querySelector(item.hash);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBrandClick = (e) => {
    e.preventDefault();
    if (currentPath !== '/') {
      navigateTo('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleLetsTalk = (e) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (currentPath !== '/') {
      navigateTo('/#contact');
      setTimeout(() => {
        const el = document.querySelector('#contact');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.querySelector('#contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 90,
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        backgroundColor: isScrolled ? 'rgba(8, 8, 8, 0.88)' : (currentPath === '/about' ? 'rgba(9, 9, 9, 0.82)' : 'transparent'),
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: isScrolled || currentPath === '/about' ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid transparent',
        padding: isScrolled ? '12px 5vw' : '18px 5vw',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          maxWidth: '1240px',
          margin: '0 auto',
        }}
      >
        {/* Brand */}
        <a
          href="/"
          onClick={handleBrandClick}
          style={{
            textDecoration: 'none',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <span
            style={{
              fontSize: '14.5px',
              fontWeight: '800',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            KARTIK R N GUPTA
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          className="desktop-nav"
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '22px',
          }}
        >
          {navLinks.map((item) => {
            const isActive = item.label === 'ABOUT' ? currentPath === '/about' : (item.label === 'HOME' && currentPath === '/');
            return (
              <a
                key={item.label}
                href={item.route}
                onClick={(e) => handleNavClick(e, item)}
                style={{
                  textDecoration: 'none',
                  color: isActive ? '#EF4444' : 'rgba(255, 255, 255, 0.75)',
                  fontSize: '11.5px',
                  fontWeight: isActive ? '700' : '600',
                  letterSpacing: '0.12em',
                  fontFamily: "'DM Mono', monospace",
                  transition: 'color 0.2s',
                  position: 'relative',
                  padding: '4px 0',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) e.currentTarget.style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  if (!isActive) e.currentTarget.style.color = 'rgba(255, 255, 255, 0.75)';
                }}
              >
                <span>{item.label}</span>
                {isActive && (
                  <span
                    style={{
                      position: 'absolute',
                      bottom: '-2px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '4px',
                      height: '4px',
                      borderRadius: '50%',
                      backgroundColor: '#EF4444',
                    }}
                  />
                )}
              </a>
            );
          })}

          {/* Right-most CTA: LET'S TALK ↗ */}
          <a
            href="#contact"
            onClick={handleLetsTalk}
            style={{
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '7px 16px',
              borderRadius: '9999px',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.18)',
              color: '#ffffff',
              fontSize: '11.5px',
              fontWeight: '700',
              letterSpacing: '0.08em',
              fontFamily: "'Space Grotesk', sans-serif",
              backdropFilter: 'blur(8px)',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#EF4444';
              e.currentTarget.style.color = '#EF4444';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.18)';
              e.currentTarget.style.color = '#ffffff';
            }}
          >
            <span>LET'S TALK</span>
            <ArrowUpRight size={13} />
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '38px',
            height: '38px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            color: '#ffffff',
            cursor: 'pointer',
          }}
        >
          {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            backgroundColor: 'rgba(10, 10, 12, 0.96)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '24px 6vw',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.7)',
            animation: 'slideDown 0.25s ease-out',
          }}
        >
          {navLinks.map((item) => {
            const isActive = item.label === 'ABOUT' ? currentPath === '/about' : (item.label === 'HOME' && currentPath === '/');
            return (
              <a
                key={item.label}
                href={item.route}
                onClick={(e) => handleNavClick(e, item)}
                style={{
                  textDecoration: 'none',
                  color: isActive ? '#EF4444' : '#ffffff',
                  fontSize: '14px',
                  fontWeight: isActive ? '700' : '600',
                  letterSpacing: '0.12em',
                  fontFamily: "'Space Grotesk', sans-serif",
                  padding: '4px 0',
                }}
              >
                {item.label}
              </a>
            );
          })}

          <a
            href="#contact"
            onClick={handleLetsTalk}
            style={{
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              padding: '11px 20px',
              borderRadius: '9999px',
              backgroundColor: '#EF4444',
              color: '#ffffff',
              fontSize: '12.5px',
              fontWeight: '700',
              letterSpacing: '0.08em',
              fontFamily: "'Space Grotesk', sans-serif",
              marginTop: '8px',
            }}
          >
            <span>LET'S TALK</span>
            <ArrowUpRight size={15} />
          </a>
        </div>
      )}

      <style>{`
        @media (min-width: 900px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
        }
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </header>
  );
}
