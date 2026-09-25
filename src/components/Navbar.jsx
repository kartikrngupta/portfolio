import React, { useState } from 'react';

export default function Navbar({ onNavigate }) {
  const [activeTab, setActiveTab] = useState('WORK');
  const navItems = ['WORK', 'ABOUT', 'CONTACT'];

  const handleClick = (item) => {
    setActiveTab(item);
    if (onNavigate) onNavigate(item);
  };

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 pointer-events-auto">
      <nav 
        className="nav-pill"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '6px 8px',
          background: 'rgba(255, 255, 255, 0.12)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          borderRadius: '9999px',
          boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.25)',
          transform: 'translateZ(0)',
          willChange: 'transform',
        }}
      >
        {navItems.map((item) => {
          const isActive = activeTab === item;
          return (
            <button
              key={item}
              onClick={() => handleClick(item)}
              className="nav-item"
              style={{
                background: isActive ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
                color: isActive ? '#0d0d0d' : 'rgba(255, 255, 255, 0.85)',
                border: 'none',
                outline: 'none',
                cursor: 'pointer',
                padding: '8px 22px',
                borderRadius: '9999px',
                fontSize: '12px',
                fontWeight: isActive ? '700' : '600',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                boxShadow: isActive ? '0 2px 10px rgba(0, 0, 0, 0.15)' : 'none',
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.14)';
                  e.currentTarget.style.color = '#ffffff';
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = 'rgba(255, 255, 255, 0.85)';
                }
              }}
            >
              {item}
            </button>
          );
        })}
      </nav>
    </header>
  );
}
