import React from 'react';
import { X, ExternalLink, CheckCircle2, AlertCircle, Cpu, ArrowRight } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 110,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.78)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        padding: '20px',
        animation: 'modalFadeIn 0.25s ease-out',
      }}
      onClick={onClose}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '820px',
          maxHeight: '88vh',
          overflowY: 'auto',
          backgroundColor: '#111113',
          border: '1px solid rgba(255, 255, 255, 0.14)',
          borderRadius: '24px',
          padding: '40px',
          color: '#ffffff',
          boxShadow: '0 30px 80px -15px rgba(0, 0, 0, 0.85), 0 0 0 1px rgba(239, 68, 68, 0.15)',
          animation: 'modalSlideUp 0.28s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          style={{
            position: 'absolute',
            top: '24px',
            right: '24px',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(239, 68, 68, 0.2)';
            e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
          }}
        >
          <X size={20} />
        </button>

        {/* Project Header */}
        <div style={{ marginBottom: '28px', paddingRight: '48px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '12px' }}>
            {project.tags.map((t) => (
              <span
                key={t}
                style={{
                  fontSize: '11px',
                  fontWeight: '600',
                  padding: '4px 10px',
                  borderRadius: '999px',
                  background: 'rgba(239, 68, 68, 0.12)',
                  border: '1px solid rgba(239, 68, 68, 0.3)',
                  color: '#ef4444',
                  fontFamily: "'DM Mono', monospace",
                  textTransform: 'uppercase',
                }}
              >
                {t}
              </span>
            ))}
          </div>

          <h2
            style={{
              fontSize: 'clamp(28px, 3.2vw, 40px)',
              fontWeight: '700',
              fontFamily: "'Space Grotesk', sans-serif",
              letterSpacing: '-0.02em',
              marginBottom: '10px',
              color: '#ffffff',
            }}
          >
            {project.title}
          </h2>

          <p style={{ fontSize: '16px', color: '#9ca3af', lineHeight: '1.6' }}>
            {project.description}
          </p>
        </div>

        {/* Case Study Sections */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* Problem & Solution */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '16px',
            }}
          >
            <div
              style={{
                padding: '20px',
                borderRadius: '16px',
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              <div
                style={{
                  fontSize: '11px',
                  fontWeight: '700',
                  color: '#ef4444',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  fontFamily: "'DM Mono', monospace",
                  marginBottom: '8px',
                }}
              >
                Problem
              </div>
              <p style={{ fontSize: '14px', color: '#d1d5db', lineHeight: '1.6' }}>
                {project.problem}
              </p>
            </div>

            <div
              style={{
                padding: '20px',
                borderRadius: '16px',
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              <div
                style={{
                  fontSize: '11px',
                  fontWeight: '700',
                  color: '#22c55e',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  fontFamily: "'DM Mono', monospace",
                  marginBottom: '8px',
                }}
              >
                Solution
              </div>
              <p style={{ fontSize: '14px', color: '#d1d5db', lineHeight: '1.6' }}>
                {project.solution}
              </p>
            </div>
          </div>

          {/* How It Works */}
          <div
            style={{
              padding: '20px',
              borderRadius: '16px',
              backgroundColor: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
            }}
          >
            <div
              style={{
                fontSize: '11px',
                fontWeight: '700',
                color: '#ffffff',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                fontFamily: "'DM Mono', monospace",
                marginBottom: '8px',
              }}
            >
              How It Works
            </div>
            <p style={{ fontSize: '14px', color: '#d1d5db', lineHeight: '1.6' }}>
              {project.howItWorks}
            </p>
          </div>

          {/* Key Technologies */}
          <div
            style={{
              padding: '20px',
              borderRadius: '16px',
              backgroundColor: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
            }}
          >
            <div
              style={{
                fontSize: '11px',
                fontWeight: '700',
                color: '#9ca3af',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                fontFamily: "'DM Mono', monospace",
                marginBottom: '12px',
              }}
            >
              Technology & Concepts
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  style={{
                    padding: '6px 14px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(255, 255, 255, 0.06)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    fontSize: '12.5px',
                    fontWeight: '500',
                    color: '#ffffff',
                    fontFamily: "'DM Mono', monospace",
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* My Contribution & Challenges */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '16px',
            }}
          >
            <div
              style={{
                padding: '20px',
                borderRadius: '16px',
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              <div
                style={{
                  fontSize: '11px',
                  fontWeight: '700',
                  color: '#9ca3af',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  fontFamily: "'DM Mono', monospace",
                  marginBottom: '8px',
                }}
              >
                My Contribution
              </div>
              <p style={{ fontSize: '14px', color: '#d1d5db', lineHeight: '1.6' }}>
                {project.contribution}
              </p>
            </div>

            <div
              style={{
                padding: '20px',
                borderRadius: '16px',
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              <div
                style={{
                  fontSize: '11px',
                  fontWeight: '700',
                  color: '#9ca3af',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  fontFamily: "'DM Mono', monospace",
                  marginBottom: '8px',
                }}
              >
                Key Engineering Challenge
              </div>
              <p style={{ fontSize: '14px', color: '#d1d5db', lineHeight: '1.6' }}>
                {project.challenges}
              </p>
            </div>
          </div>

          {/* Outcome */}
          <div
            style={{
              padding: '20px',
              borderRadius: '16px',
              backgroundColor: 'rgba(239, 68, 68, 0.05)',
              border: '1px solid rgba(239, 68, 68, 0.2)',
            }}
          >
            <div
              style={{
                fontSize: '11px',
                fontWeight: '700',
                color: '#ef4444',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                fontFamily: "'DM Mono', monospace",
                marginBottom: '8px',
              }}
            >
              Project Outcome
            </div>
            <p style={{ fontSize: '14px', color: '#ffffff', lineHeight: '1.6' }}>
              {project.outcome}
            </p>
          </div>

          {/* Links: GitHub & Live Demo */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              paddingTop: '8px',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            }}
          >
            <a
              href={project.githubUrl || '#'}
              target={project.githubUrl ? '_blank' : '_self'}
              rel="noreferrer"
              onClick={(e) => {
                if (!project.githubUrl) {
                  e.preventDefault();
                  alert("Project repository placeholder. Link will be updated as repository goes public.");
                }
              }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 22px',
                borderRadius: '999px',
                backgroundColor: '#ffffff',
                color: '#080808',
                fontWeight: '700',
                fontSize: '13px',
                fontFamily: "'Space Grotesk', sans-serif",
                textDecoration: 'none',
                letterSpacing: '0.04em',
                transition: 'all 0.2s',
              }}
            >
              <GithubIcon size={16} />
              <span>GITHUB REPOSITORY ↗</span>
            </a>

            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 22px',
                  borderRadius: '999px',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(255, 255, 255, 0.18)',
                  color: '#ffffff',
                  fontWeight: '700',
                  fontSize: '13px',
                  fontFamily: "'Space Grotesk', sans-serif",
                  textDecoration: 'none',
                  letterSpacing: '0.04em',
                }}
              >
                <ExternalLink size={16} />
                <span>LIVE DEMO ↗</span>
              </a>
            ) : (
              <div
                style={{
                  fontSize: '12px',
                  color: '#6b7280',
                  fontFamily: "'DM Mono', monospace",
                }}
              >
                [ Live demo available upon deployment ]
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes modalFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes modalSlideUp {
          from { opacity: 0; transform: translateY(20px) scale(0.97); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </div>
  );
}
