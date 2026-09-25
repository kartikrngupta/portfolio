import React from 'react';
import { GraduationCap, Code2, Cpu, Compass } from 'lucide-react';

export default function AboutSection() {
  const cards = [
    {
      title: 'EDUCATION',
      value: 'B.Tech CSE — AI/ML',
      detail: 'Noida Institute of Engineering & Technology',
      icon: GraduationCap,
    },
    {
      title: 'FOCUS',
      value: 'Software Development',
      detail: 'Practical full-stack & systems engineering',
      icon: Code2,
    },
    {
      title: 'INTEREST',
      value: 'AI / ML',
      detail: 'Intelligent systems, vision & machine learning',
      icon: Cpu,
    },
    {
      title: 'CAREER GOAL',
      value: 'Software Engineer / AI-ML Engineer',
      detail: 'Building scalable, impactful technology',
      icon: Compass,
    },
  ];

  return (
    <section
      id="about"
      style={{
        padding: '120px 6vw',
        maxWidth: '1300px',
        margin: '0 auto',
        position: 'relative',
      }}
    >
      {/* Section Header */}
      <div style={{ marginBottom: '48px' }}>
        <div 
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '12px',
            fontWeight: '600',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: '#ef4444',
            fontFamily: "'DM Mono', monospace",
            marginBottom: '10px',
          }}
        >
          <span style={{ width: '16px', height: '1.5px', backgroundColor: '#ef4444' }} />
          <span>ABOUT ME</span>
        </div>
        <h2
          style={{
            fontSize: 'clamp(32px, 4vw, 48px)',
            fontWeight: '700',
            letterSpacing: '-0.02em',
            color: '#ffffff',
            fontFamily: "'Space Grotesk', sans-serif",
            marginBottom: '12px',
          }}
        >
          A developer in progress, building skills one project at a time.
        </h2>
      </div>

      {/* Main Narrative Paragraphs */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '32px',
          marginBottom: '60px',
        }}
      >
        <div style={{ fontSize: '17px', lineHeight: '1.75', color: '#d1d5db' }}>
          <p style={{ marginBottom: '20px' }}>
            I'm <strong style={{ color: '#ffffff', fontWeight: '600' }}>Kartik R N Gupta</strong>, a Computer Science Engineering student specializing in Artificial Intelligence and Machine Learning at Noida Institute of Engineering & Technology.
          </p>
          <p>
            I enjoy building practical software projects, exploring artificial intelligence, solving problems using data structures and algorithms, and turning ideas into useful digital experiences.
          </p>
        </div>

        <div style={{ fontSize: '17px', lineHeight: '1.75', color: '#9ca3af' }}>
          <p>
            I'm currently focused on strengthening my programming fundamentals, DSA, AI/ML and full-stack development while continuously building projects and learning through hands-on experience.
          </p>
          <div 
            style={{ 
              marginTop: '24px', 
              padding: '16px 20px', 
              borderRadius: '12px', 
              backgroundColor: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.07)',
              fontFamily: "'DM Mono', monospace",
              fontSize: '13px',
              color: '#ef4444',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <span style={{ color: '#ffffff' }}>✦</span>
            <span>Always eager to contribute to collaborative engineering teams & open-source.</span>
          </div>
        </div>
      </div>

      {/* Four Premium Info Cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px',
        }}
      >
        {cards.map((card, idx) => {
          const Icon = card.icon;
          return (
            <div
              key={idx}
              className="info-card"
              style={{
                padding: '28px 24px',
                borderRadius: '18px',
                backgroundColor: '#121214',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                transition: 'all 0.28s cubic-bezier(0.16, 1, 0.3, 1)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.45)';
                e.currentTarget.style.boxShadow = '0 16px 36px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(239, 68, 68, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                <span
                  style={{
                    fontSize: '11px',
                    fontWeight: '600',
                    letterSpacing: '0.14em',
                    color: '#9ca3af',
                    fontFamily: "'DM Mono', monospace",
                  }}
                >
                  {card.title}
                </span>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(239, 68, 68, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ef4444',
                  }}
                >
                  <Icon size={18} />
                </div>
              </div>

              <div>
                <div
                  style={{
                    fontSize: '18px',
                    fontWeight: '700',
                    color: '#ffffff',
                    fontFamily: "'Space Grotesk', sans-serif",
                    marginBottom: '6px',
                    lineHeight: '1.3',
                  }}
                >
                  {card.value}
                </div>
                <div
                  style={{
                    fontSize: '13px',
                    color: '#6b7280',
                    lineHeight: '1.4',
                  }}
                >
                  {card.detail}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
