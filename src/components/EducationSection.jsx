import React from 'react';
import { GraduationCap, Award, Hammer, HeartHandshake, Camera, CheckCircle2 } from 'lucide-react';

export default function EducationSection() {
  const relevantAreas = [
    'Programming (C, C++, Python, JavaScript)',
    'Data Structures & Algorithms',
    'Artificial Intelligence',
    'Machine Learning',
    'Web Development',
    'Computer Science Fundamentals',
  ];

  const beyondCards = [
    {
      title: 'HACKATHONS',
      icon: Award,
      description: 'Participating in collaborative technical challenges and rapid product development with engineering peers.',
    },
    {
      title: 'PROJECT BUILDING',
      icon: Hammer,
      description: 'Turning academic concepts into practical, functioning software systems that solve authentic challenges.',
    },
    {
      title: 'NSS',
      icon: HeartHandshake,
      description: 'Active community participation, social awareness initiatives, and civic engagement projects.',
    },
    {
      title: 'PHOTOGRAPHY',
      icon: Camera,
      description: 'Exploring visual storytelling, perspective, lighting, and creative framing outside of software development.',
    },
  ];

  return (
    <section
      id="education"
      style={{
        padding: '120px 6vw',
        maxWidth: '1300px',
        margin: '0 auto',
        position: 'relative',
      }}
    >
      {/* Education Header */}
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
          <span>EDUCATION</span>
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
          Academic Foundation
        </h2>
      </div>

      {/* Main Education Card */}
      <div
        className="education-card"
        style={{
          borderRadius: '24px',
          backgroundColor: '#121214',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          padding: 'clamp(28px, 4vw, 44px)',
          marginBottom: '80px',
          transition: 'all 0.28s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.4)';
          e.currentTarget.style.boxShadow = '0 20px 50px rgba(0, 0, 0, 0.5)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '20px',
            marginBottom: '24px',
          }}
        >
          <div>
            <span
              style={{
                fontSize: '12px',
                fontWeight: '700',
                letterSpacing: '0.12em',
                color: '#ef4444',
                fontFamily: "'DM Mono', monospace",
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '6px',
              }}
            >
              2025 — PRESENT
            </span>
            <h3
              style={{
                fontSize: 'clamp(22px, 2.5vw, 32px)',
                fontWeight: '700',
                color: '#ffffff',
                fontFamily: "'Space Grotesk', sans-serif",
                marginBottom: '6px',
              }}
            >
              Noida Institute of Engineering & Technology
            </h3>
            <div
              style={{
                fontSize: '17px',
                color: '#d1d5db',
                fontWeight: '500',
              }}
            >
              B.Tech — Computer Science Engineering (AI/ML)
            </div>
          </div>

          <div
            style={{
              padding: '8px 18px',
              borderRadius: '999px',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              fontFamily: "'DM Mono', monospace",
              fontSize: '13px',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <GraduationCap size={16} color="#ef4444" />
            <span>Undergraduate Degree</span>
          </div>
        </div>

        {/* Relevant Areas */}
        <div style={{ paddingTop: '20px', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
          <div
            style={{
              fontSize: '12px',
              fontWeight: '700',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#9ca3af',
              fontFamily: "'DM Mono', monospace",
              marginBottom: '16px',
            }}
          >
            Relevant Focus Areas & Coursework
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '12px',
            }}
          >
            {relevantAreas.map((area, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '10px 14px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  fontSize: '13.5px',
                  color: '#e5e7eb',
                }}
              >
                <CheckCircle2 size={16} color="#ef4444" style={{ flexShrink: 0 }} />
                <span>{area}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Beyond The Classroom Header */}
      <div style={{ marginBottom: '40px' }}>
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
          <span>BEYOND THE CLASSROOM</span>
        </div>
        <h2
          style={{
            fontSize: 'clamp(28px, 3.4vw, 40px)',
            fontWeight: '700',
            letterSpacing: '-0.02em',
            color: '#ffffff',
            fontFamily: "'Space Grotesk', sans-serif",
            marginBottom: '12px',
          }}
        >
          Active pursuits, teamwork, and engagement.
        </h2>
      </div>

      {/* Four Beyond the Classroom Cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '20px',
        }}
      >
        {beyondCards.map((b, idx) => {
          const Icon = b.icon;
          return (
            <div
              key={idx}
              className="beyond-card"
              style={{
                padding: '28px 24px',
                borderRadius: '18px',
                backgroundColor: '#121214',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                transition: 'all 0.28s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.4)';
                e.currentTarget.style.boxShadow = '0 16px 36px rgba(0, 0, 0, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(239, 68, 68, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ef4444',
                  marginBottom: '18px',
                }}
              >
                <Icon size={20} />
              </div>

              <h3
                style={{
                  fontSize: '17px',
                  fontWeight: '700',
                  color: '#ffffff',
                  fontFamily: "'Space Grotesk', sans-serif",
                  letterSpacing: '0.04em',
                  marginBottom: '10px',
                }}
              >
                {b.title}
              </h3>

              <p style={{ fontSize: '13.5px', color: '#9ca3af', lineHeight: '1.6' }}>
                {b.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
