import React from 'react';
import { Binary, Brain, Layers, GitMerge } from 'lucide-react';

export default function CurrentlyLearning() {
  const learningTracks = [
    {
      index: '01',
      title: 'DATA STRUCTURES & ALGORITHMS',
      focus: 'Strengthening problem solving, algorithms and coding fundamentals.',
      milestones: [
        'Arrays, Strings, Pointers & Recursion',
        'Linked Lists, Stacks, Queues & Trees',
        'Sorting, Searching & Complexity Analysis',
        'Graph Traversal & Dynamic Programming',
      ],
      icon: Binary,
    },
    {
      index: '02',
      title: 'MACHINE LEARNING',
      focus: 'Learning models, data preparation, evaluation and practical applications.',
      milestones: [
        'Exploratory Data Analysis (EDA)',
        'Supervised & Unsupervised Modeling',
        'Model Evaluation & Metrics Tuning',
        'Computer Vision & Neural Architectures',
      ],
      icon: Brain,
    },
    {
      index: '03',
      title: 'FULL-STACK DEVELOPMENT',
      focus: 'Building responsive and interactive web applications.',
      milestones: [
        'Component Architecture in React & Vite',
        'State Management & Asynchronous APIs',
        'Responsive Design & Performance Tuning',
        'RESTful Services & Backend Communication',
      ],
      icon: Layers,
    },
    {
      index: '04',
      title: 'SOFTWARE ENGINEERING',
      focus: 'Learning how to build cleaner, scalable and maintainable projects.',
      milestones: [
        'Modular & Maintainable Code Structure',
        'Git Branching, PRs & Workflow Hygiene',
        'System Design Principles & OOP Paradigms',
        'Debugging, Profiling & Memory Efficiency',
      ],
      icon: GitMerge,
    },
  ];

  return (
    <section
      id="learning"
      style={{
        padding: '120px 6vw',
        maxWidth: '1300px',
        margin: '0 auto',
        position: 'relative',
      }}
    >
      {/* Section Header */}
      <div style={{ marginBottom: '56px' }}>
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
          <span>CURRENTLY LEARNING</span>
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
          Active Growth & Skill Development
        </h2>
        <p
          style={{
            fontSize: '16px',
            color: '#9ca3af',
            maxWidth: '650px',
            lineHeight: '1.6',
          }}
        >
          Continuous learning milestones tracked through structured concept building and code implementation.
        </p>
      </div>

      {/* Four Large Modern Cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
        }}
      >
        {learningTracks.map((track) => {
          const Icon = track.icon;
          return (
            <div
              key={track.index}
              className="learning-card"
              style={{
                borderRadius: '20px',
                backgroundColor: '#121214',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                padding: '32px 26px',
                transition: 'all 0.28s cubic-bezier(0.16, 1, 0.3, 1)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
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
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '18px',
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: '14px',
                      fontWeight: '700',
                      color: '#ef4444',
                      letterSpacing: '0.1em',
                    }}
                  >
                    {track.index}
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

                <h3
                  style={{
                    fontSize: '18px',
                    fontWeight: '700',
                    color: '#ffffff',
                    fontFamily: "'Space Grotesk', sans-serif",
                    letterSpacing: '-0.01em',
                    marginBottom: '10px',
                    lineHeight: '1.3',
                  }}
                >
                  {track.title}
                </h3>

                <p
                  style={{
                    fontSize: '14px',
                    color: '#9ca3af',
                    lineHeight: '1.6',
                    marginBottom: '24px',
                  }}
                >
                  {track.focus}
                </p>
              </div>

              {/* Milestones / Topic Breakdown */}
              <div
                style={{
                  paddingTop: '18px',
                  borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                }}
              >
                <div
                  style={{
                    fontSize: '11px',
                    fontWeight: '700',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: '#6b7280',
                    fontFamily: "'DM Mono', monospace",
                    marginBottom: '10px',
                  }}
                >
                  Milestone Focus
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {track.milestones.map((ms, i) => (
                    <div
                      key={i}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '8px',
                        fontSize: '12.5px',
                        color: '#d1d5db',
                        lineHeight: '1.4',
                      }}
                    >
                      <span style={{ color: '#ef4444', fontSize: '10px', marginTop: '2px' }}>✦</span>
                      <span>{ms}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
