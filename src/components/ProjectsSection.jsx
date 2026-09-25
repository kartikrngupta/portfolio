import React, { useState } from 'react';
import { ArrowUpRight, ArrowRight, Sparkles, Code2, Cpu, Database, BookOpen } from 'lucide-react';
import { GithubIcon } from './Icons';
import ProjectModal from './ProjectModal';

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: '01',
      title: 'MINDMATRIX AI',
      tags: ['AI / ML', 'Computer Vision', 'Web'],
      categoryIcon: Cpu,
      description:
        'An AI-powered concept focused on identifying student stress patterns and providing proactive support before stress develops into burnout.',
      itemsLabel: 'Features',
      items: [
        'Real-time stress detection',
        'Behavior tracking',
        'Stress pattern analysis',
        'Proactive support',
        'Privacy-conscious escalation',
      ],
      technologies: ['Python', 'OpenCV', 'React', 'AI/ML Algorithms', 'Web APIs'],
      problem:
        'Academic fatigue and chronic student stress often go unnoticed until severe burnout occurs, leading to academic disruption.',
      solution:
        'A non-intrusive early warning framework that monitors behavioral indicators and stress signals to provide actionable wellness guidance.',
      howItWorks:
        'Integrates computer vision indicators and session tracking algorithms to detect fatigue patterns and deliver restorative micro-breaks.',
      contribution:
        'Formulated the stress detection architecture, behavioral trend analysis logic, and designed responsive student alert flows.',
      challenges:
        'Balancing real-time computer vision processing speed with sensitive privacy boundaries and zero client-side lag.',
      outcome:
        'Developed a conceptual framework proving how automated stress diagnostics can foster healthier academic environments.',
      githubUrl: null, // placeholder
      liveUrl: null,
    },
    {
      id: '02',
      title: 'STUDENT ADMISSION RECORD MANAGEMENT SYSTEM',
      tags: ['C', 'DSA', 'Data Management'],
      categoryIcon: Database,
      description:
        'A university admission record management system built using fundamental data structures and algorithms.',
      itemsLabel: 'Technologies & Concepts',
      items: [
        'C Programming',
        'Linked List',
        'Searching Algorithms',
        'Sorting Algorithms',
        'CRUD Operations',
      ],
      technologies: ['C', 'Pointers', 'Dynamic Memory (malloc/free)', 'Sorting', 'File I/O'],
      problem:
        'Handling high-volume student admission data in resource-constrained environments without relying on third-party DBMS engines.',
      solution:
        'A robust native C system utilizing custom linked list architectures and optimized search/sort algorithms for rapid record administration.',
      howItWorks:
        'Employs dynamic pointer structures for node allocation, efficient search routines, quick sorting by merit/ID, and persistent disk file serialization.',
      contribution:
        'Architected the full linked list logic, pointer management, memory cleanup protocols, and CLI administrative interface.',
      challenges:
        'Preventing dangling pointers, avoiding memory leaks during node deletion, and maintaining record integrity during dynamic sorting.',
      outcome:
        'Zero-dependency native management tool demonstrating core computer science and memory management proficiency.',
      githubUrl: null,
      liveUrl: null,
    },
    {
      id: '03',
      title: 'CAR TROUBLESHOOTING EXPERT SYSTEM',
      tags: ['Python', 'AI', 'Rule-Based System'],
      categoryIcon: Cpu,
      description:
        'A rule-based expert system designed to identify possible vehicle problems from user-provided symptoms.',
      itemsLabel: 'Technologies & Concepts',
      items: [
        'Python',
        'Rule-Based Reasoning',
        'Knowledge Base',
        'Decision Logic',
        'Forward Chaining',
      ],
      technologies: ['Python', 'Expert System Principles', 'Inference Engine', 'CLI Interface'],
      problem:
        'Vehicle owners frequently encounter ambiguous symptoms (knocks, stalls, overheating) without clear guidance on diagnostic urgency.',
      solution:
        'An intelligent rule-based knowledge engine that systematically prompts symptom combinations to deduce mechanical or electrical faults.',
      howItWorks:
        'Applies forward chaining decision logic against a structured knowledge base of automotive subsystems to classify faults with certainty levels.',
      contribution:
        'Constructed the automotive symptom-cause dependency matrix, implemented the inference engine, and designed user triage prompts.',
      challenges:
        'Structuring conditional rules to prevent conflicting diagnosis paths when users select contradictory symptom combinations.',
      outcome:
        'Accurately pinpoints automotive malfunctions and provides triage guidance, illustrating practical symbolic AI implementation.',
      githubUrl: null,
      liveUrl: null,
    },
    {
      id: '04',
      title: 'LANGUAGE BARRIER IN EDUCATION',
      tags: ['AI', 'Web', 'Education'],
      categoryIcon: BookOpen,
      description:
        'An AI-powered concept designed to help students overcome language barriers through translation, conversational practice and interactive learning.',
      itemsLabel: 'Features',
      items: [
        'Contextual Translation',
        'AI Chat Tutor',
        'Language Practice',
        'Interactive Dictionary',
        'Language Chat Rooms',
      ],
      technologies: ['React', 'Python', 'NLP & AI APIs', 'Tailwind', 'WebSockets'],
      problem:
        'Linguistic disparities in multinational classrooms isolate students and impair comprehension of core technical concepts.',
      solution:
        'A comprehensive educational platform integrating real-time translation, conversational AI tutors, and interactive peer practice rooms.',
      howItWorks:
        'Translates academic materials in context, pairs students with responsive AI conversational tutors, and fosters peer collaboration.',
      contribution:
        'Designed interactive tutoring workflows, conversational prompt layouts, and multi-language UI navigation patterns.',
      challenges:
        'Creating natural conversational dialogue that provides constructive feedback without disrupting student learning rhythm.',
      outcome:
        'A functional prototype emphasizing digital inclusion and language accessibility in educational ecosystems.',
      githubUrl: null,
      liveUrl: null,
    },
  ];

  return (
    <section
      id="projects"
      style={{
        padding: '120px 6vw',
        maxWidth: '1300px',
        margin: '0 auto',
        position: 'relative',
      }}
    >
      {/* Section Header */}
      <div style={{ marginBottom: '60px' }}>
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
          <span>SELECTED PROJECTS</span>
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
          Turning ideas into working solutions.
        </h2>
        <p
          style={{
            fontSize: '16px',
            color: '#9ca3af',
            maxWidth: '650px',
            lineHeight: '1.6',
          }}
        >
          A selection of technical software, data structures, and AI-driven systems engineered to solve real-world problems.
        </p>
      </div>

      {/* Large Featured Project Cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        {projects.map((proj) => {
          const Icon = proj.categoryIcon;
          return (
            <div
              key={proj.id}
              className="project-card"
              style={{
                borderRadius: '24px',
                backgroundColor: '#121214',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                padding: 'clamp(28px, 4vw, 44px)',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '36px',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.45)';
                e.currentTarget.style.boxShadow = '0 24px 60px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(239, 68, 68, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Left Column: Index, Title, Tags, Description */}
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      marginBottom: '16px',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: '13px',
                        color: '#ef4444',
                        fontWeight: '700',
                        letterSpacing: '0.1em',
                      }}
                    >
                      PROJECT {proj.id}
                    </span>
                    <span style={{ color: 'rgba(255, 255, 255, 0.2)' }}>•</span>
                    <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                      {proj.tags.map((tag) => (
                        <span
                          key={tag}
                          style={{
                            fontSize: '11px',
                            fontWeight: '600',
                            padding: '3px 8px',
                            borderRadius: '6px',
                            background: 'rgba(255, 255, 255, 0.05)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            color: '#e5e7eb',
                            fontFamily: "'DM Mono', monospace",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <h3
                    style={{
                      fontSize: 'clamp(22px, 2.4vw, 30px)',
                      fontWeight: '700',
                      letterSpacing: '-0.02em',
                      color: '#ffffff',
                      fontFamily: "'Space Grotesk', sans-serif",
                      marginBottom: '14px',
                      lineHeight: '1.2',
                    }}
                  >
                    {proj.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '15px',
                      lineHeight: '1.65',
                      color: '#9ca3af',
                      marginBottom: '28px',
                    }}
                  >
                    {proj.description}
                  </p>
                </div>

                {/* Card Action Buttons */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                  <button
                    onClick={() => setSelectedProject(proj)}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '11px 22px',
                      borderRadius: '999px',
                      backgroundColor: '#ffffff',
                      color: '#080808',
                      fontSize: '13px',
                      fontWeight: '700',
                      letterSpacing: '0.04em',
                      fontFamily: "'Space Grotesk', sans-serif",
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#ef4444', e.currentTarget.style.color = '#ffffff')}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#ffffff', e.currentTarget.style.color = '#080808')}
                  >
                    <span>VIEW PROJECT</span>
                    <ArrowRight size={15} />
                  </button>

                  <a
                    href={proj.githubUrl || '#'}
                    onClick={(e) => {
                      if (!proj.githubUrl) {
                        e.preventDefault();
                        alert("Repository link will be made public upon open-source release.");
                      }
                    }}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '11px 20px',
                      borderRadius: '999px',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      color: '#ffffff',
                      fontSize: '13px',
                      fontWeight: '600',
                      letterSpacing: '0.04em',
                      fontFamily: "'Space Grotesk', sans-serif",
                      textDecoration: 'none',
                      transition: 'all 0.2s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.35)')}
                    onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)')}
                  >
                    <GithubIcon size={15} />
                    <span>GITHUB ↗</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Features / Tech Highlight Box */}
              <div
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.02)',
                  borderRadius: '18px',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: '12px',
                      fontWeight: '700',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: '#ef4444',
                      fontFamily: "'DM Mono', monospace",
                      marginBottom: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                    }}
                  >
                    <Icon size={16} />
                    <span>{proj.itemsLabel}</span>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {proj.items.map((item, idx) => (
                      <div
                        key={idx}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                          fontSize: '14px',
                          color: '#d1d5db',
                        }}
                      >
                        <span style={{ color: '#ef4444', fontSize: '12px' }}>▸</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div
                  style={{
                    marginTop: '24px',
                    paddingTop: '16px',
                    borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontSize: '12px',
                    color: '#6b7280',
                    fontFamily: "'DM Mono', monospace",
                  }}
                >
                  <span>Technical Case Study</span>
                  <span
                    onClick={() => setSelectedProject(proj)}
                    style={{
                      color: '#ef4444',
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      fontWeight: '600',
                    }}
                  >
                    Explore details →
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Project Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
