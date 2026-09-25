import React from 'react';
import { Terminal, Code2, Cpu, Database, Wrench } from 'lucide-react';

export default function SkillsSection() {
  const skillCategories = [
    {
      category: 'PROGRAMMING',
      icon: Terminal,
      skills: ['C', 'C++', 'Python', 'JavaScript'],
      description: 'Core languages utilized for system architecture, algorithmic problem solving, and script automation.',
    },
    {
      category: 'DEVELOPMENT',
      icon: Code2,
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Vite'],
      description: 'Modern frontend development stack for building fast, responsive, and interactive digital interfaces.',
    },
    {
      category: 'AI / ML',
      icon: Cpu,
      skills: [
        'Artificial Intelligence',
        'Machine Learning',
        'Data Analysis',
        'EDA',
        'Computer Vision',
        'Generative AI',
      ],
      description: 'Techniques and models for extracting patterns, analyzing visual streams, and building intelligent workflows.',
    },
    {
      category: 'COMPUTER SCIENCE',
      icon: Database,
      skills: [
        'Data Structures & Algorithms',
        'OOP',
        'DBMS',
        'Operating Systems',
        'Computer Networks',
      ],
      description: 'Foundational computer science principles that govern efficient memory usage, concurrency, and scalable systems.',
    },
    {
      category: 'TOOLS',
      icon: Wrench,
      skills: ['Git', 'GitHub', 'VS Code', 'Figma', 'Antigravity'],
      description: 'Engineering workflow, version control, modern IDE tooling, and design prototyping environments.',
    },
  ];

  return (
    <section
      id="skills"
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
          <span>TECHNICAL ARSENAL</span>
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
          Technologies and concepts I'm learning and working with.
        </h2>
        <p
          style={{
            fontSize: '16px',
            color: '#9ca3af',
            maxWidth: '650px',
            lineHeight: '1.6',
          }}
        >
          Practical engineering requires deep fundamentals. Here are the core languages, frameworks, and domains I actively practice and build with.
        </p>
      </div>

      {/* Skills Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '24px',
        }}
      >
        {skillCategories.map((group, idx) => {
          const Icon = group.icon;
          return (
            <div
              key={idx}
              className="skill-card"
              style={{
                padding: '32px 28px',
                borderRadius: '20px',
                backgroundColor: '#121214',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                transition: 'all 0.28s cubic-bezier(0.16, 1, 0.3, 1)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.4)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(239, 68, 68, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(239, 68, 68, 0.1)',
                      border: '1px solid rgba(239, 68, 68, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ef4444',
                    }}
                  >
                    <Icon size={20} />
                  </div>
                  <h3
                    style={{
                      fontSize: '18px',
                      fontWeight: '700',
                      letterSpacing: '0.04em',
                      color: '#ffffff',
                      fontFamily: "'Space Grotesk', sans-serif",
                    }}
                  >
                    {group.category}
                  </h3>
                </div>

                <p
                  style={{
                    fontSize: '13.5px',
                    color: '#9ca3af',
                    lineHeight: '1.6',
                    marginBottom: '24px',
                  }}
                >
                  {group.description}
                </p>
              </div>

              {/* Skill Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '7px 14px',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.09)',
                      color: '#f3f4f6',
                      fontSize: '13px',
                      fontWeight: '500',
                      fontFamily: "'DM Mono', monospace",
                      transition: 'all 0.2s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(239, 68, 68, 0.12)';
                      e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.35)';
                      e.currentTarget.style.color = '#ffffff';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.04)';
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.09)';
                      e.currentTarget.style.color = '#f3f4f6';
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
