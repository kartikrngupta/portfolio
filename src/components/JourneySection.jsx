import React from 'react';
import { Calendar, Code2, Users, Flame, Sparkles } from 'lucide-react';

export default function JourneySection() {
  const timelineSteps = [
    {
      period: '2025 — PRESENT',
      title: 'B.Tech CSE — AI/ML',
      institution: 'Noida Institute of Engineering & Technology, Greater Noida',
      description: 'Enrolled in Computer Science Engineering with specialization in Artificial Intelligence & Machine Learning. Building rigorous foundational competencies in algorithms, programming, and mathematical reasoning.',
      icon: Calendar,
      highlight: true,
    },
    {
      period: 'BUILDING',
      title: 'Technical Foundation',
      institution: 'Core Software Engineering Practice',
      description: 'Strengthening programming in C, C++, and Python; deep-diving into Data Structures & Algorithms, object-oriented principles, and modern web application development with React and Vite.',
      icon: Code2,
      skills: ['Programming (C / C++ / Python)', 'DSA & Algorithms', 'AI / ML Concepts', 'Modern Web Development'],
    },
    {
      period: 'HACKATHONS',
      title: 'Collaborative Innovation',
      institution: 'PIXEL PULSE • SEGUE 3.0',
      description: 'Building and presenting technology-driven solutions with cross-functional developer teams under real-time constraints. Gained hands-on experience in rapid ideation, system design, and collaborative teamwork.',
      icon: Users,
      hackathons: ['PIXEL PULSE', 'SEGUE 3.0'],
    },
    {
      period: 'NOW',
      title: 'Building • Learning • Improving',
      institution: 'Continuous Growth & Execution',
      description: 'Actively working on practical technical projects, tackling algorithmic challenges, and exploring modern AI/ML systems while seeking software engineering and developer internship opportunities.',
      icon: Flame,
      highlight: true,
    },
  ];

  return (
    <section
      id="journey"
      style={{
        padding: '120px 6vw',
        maxWidth: '1300px',
        margin: '0 auto',
        position: 'relative',
      }}
    >
      {/* Section Header */}
      <div style={{ marginBottom: '64px' }}>
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
          <span>MY JOURNEY</span>
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
          A timeline of learning, building, and teamwork.
        </h2>
        <p
          style={{
            fontSize: '16px',
            color: '#9ca3af',
            maxWidth: '650px',
            lineHeight: '1.6',
          }}
        >
          An honest developmental trajectory focused on foundational mastery, team hackathons, and iterative software craftsmanship.
        </p>
      </div>

      {/* Vertical Timeline */}
      <div
        style={{
          position: 'relative',
          paddingLeft: '32px',
        }}
      >
        {/* Continuous Vertical Accent Line */}
        <div
          style={{
            position: 'absolute',
            top: '8px',
            bottom: '24px',
            left: '11px',
            width: '2px',
            background: 'linear-gradient(to bottom, #ef4444, rgba(239, 68, 68, 0.3) 70%, rgba(255, 255, 255, 0.1))',
          }}
        />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
          {timelineSteps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                style={{
                  position: 'relative',
                }}
              >
                {/* Timeline Dot */}
                <div
                  style={{
                    position: 'absolute',
                    left: '-32px',
                    top: '4px',
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    backgroundColor: '#080808',
                    border: step.highlight ? '2.5px solid #ef4444' : '2px solid rgba(255, 255, 255, 0.3)',
                    boxShadow: step.highlight ? '0 0 12px rgba(239, 68, 68, 0.6)' : 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 2,
                  }}
                >
                  <div
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      backgroundColor: step.highlight ? '#ef4444' : 'rgba(255, 255, 255, 0.6)',
                    }}
                  />
                </div>

                {/* Timeline Content Card */}
                <div
                  className="timeline-card"
                  style={{
                    padding: '28px',
                    borderRadius: '20px',
                    backgroundColor: '#121214',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    transition: 'all 0.28s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateX(6px)';
                    e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.4)';
                    e.currentTarget.style.boxShadow = '0 16px 36px rgba(0, 0, 0, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateX(0)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      marginBottom: '8px',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '12px',
                        fontWeight: '700',
                        letterSpacing: '0.12em',
                        color: '#ef4444',
                        fontFamily: "'DM Mono', monospace",
                        textTransform: 'uppercase',
                      }}
                    >
                      {step.period}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontSize: '22px',
                      fontWeight: '700',
                      color: '#ffffff',
                      fontFamily: "'Space Grotesk', sans-serif",
                      marginBottom: '4px',
                    }}
                  >
                    {step.title}
                  </h3>

                  <div
                    style={{
                      fontSize: '13.5px',
                      color: '#9ca3af',
                      marginBottom: '14px',
                      fontWeight: '500',
                    }}
                  >
                    {step.institution}
                  </div>

                  <p
                    style={{
                      fontSize: '15px',
                      lineHeight: '1.65',
                      color: '#d1d5db',
                      marginBottom: step.skills || step.hackathons ? '16px' : '0',
                    }}
                  >
                    {step.description}
                  </p>

                  {/* Skills / Hackathons Tags */}
                  {step.skills && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '12px' }}>
                      {step.skills.map((s) => (
                        <span
                          key={s}
                          style={{
                            fontSize: '12px',
                            padding: '4px 10px',
                            borderRadius: '6px',
                            backgroundColor: 'rgba(255, 255, 255, 0.04)',
                            border: '1px solid rgba(255, 255, 255, 0.09)',
                            color: '#e5e7eb',
                            fontFamily: "'DM Mono', monospace",
                          }}
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  )}

                  {step.hackathons && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '12px' }}>
                      {step.hackathons.map((h) => (
                        <span
                          key={h}
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '6px',
                            fontSize: '12px',
                            fontWeight: '600',
                            padding: '6px 14px',
                            borderRadius: '999px',
                            backgroundColor: 'rgba(239, 68, 68, 0.1)',
                            border: '1px solid rgba(239, 68, 68, 0.3)',
                            color: '#ffffff',
                            fontFamily: "'Space Grotesk', sans-serif",
                          }}
                        >
                          <span>🏆</span>
                          <span>{h}</span>
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
