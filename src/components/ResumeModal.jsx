import React from 'react';
import { X, FileText, Download, GraduationCap, Code2, Award, CheckCircle2 } from 'lucide-react';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handleDownload = (e) => {
    e.preventDefault();
    // Trigger printable window or pdf view
    window.print();
  };

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
        animation: 'resumeFadeIn 0.25s ease-out',
      }}
      onClick={onClose}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '780px',
          maxHeight: '88vh',
          overflowY: 'auto',
          backgroundColor: '#111113',
          border: '1px solid rgba(255, 255, 255, 0.14)',
          borderRadius: '24px',
          padding: '40px',
          color: '#ffffff',
          boxShadow: '0 30px 80px -15px rgba(0, 0, 0, 0.85)',
          animation: 'resumeSlideUp 0.28s cubic-bezier(0.16, 1, 0.3, 1)',
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
            width: '38px',
            height: '38px',
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

        {/* Header & Download */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
            marginBottom: '32px',
            paddingRight: '48px',
          }}
        >
          <div>
            <div
              style={{
                fontSize: '11px',
                fontWeight: '700',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: '#ef4444',
                fontFamily: "'DM Mono', monospace",
                marginBottom: '6px',
              }}
            >
              CURRICULUM VITAE
            </div>
            <h2
              style={{
                fontSize: 'clamp(28px, 3.2vw, 38px)',
                fontWeight: '700',
                fontFamily: "'Space Grotesk', sans-serif",
                color: '#ffffff',
                marginBottom: '4px',
              }}
            >
              Kartik R N Gupta
            </h2>
            <div
              style={{
                fontSize: '14px',
                color: '#9ca3af',
                fontFamily: "'DM Mono', monospace",
              }}
            >
              CSE • AI/ML • SOFTWARE DEVELOPER
            </div>
          </div>

          <button
            onClick={handleDownload}
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
              border: 'none',
              cursor: 'pointer',
              letterSpacing: '0.04em',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#ef4444', e.currentTarget.style.color = '#ffffff')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#ffffff', e.currentTarget.style.color = '#080808')}
          >
            <Download size={16} />
            <span>PRINT / SAVE PDF</span>
          </button>
        </div>

        {/* Resume Content Sections */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
          {/* Education */}
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
                fontSize: '12px',
                fontWeight: '700',
                color: '#ef4444',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                fontFamily: "'DM Mono', monospace",
                marginBottom: '10px',
              }}
            >
              Education
            </div>
            <h4 style={{ fontSize: '18px', fontWeight: '700', color: '#ffffff', marginBottom: '2px' }}>
              Noida Institute of Engineering & Technology
            </h4>
            <div style={{ fontSize: '14px', color: '#d1d5db', marginBottom: '4px' }}>
              B.Tech in Computer Science & Engineering (Artificial Intelligence & Machine Learning)
            </div>
            <div style={{ fontSize: '12px', color: '#6b7280', fontFamily: "'DM Mono', monospace" }}>
              2025 — Present • Greater Noida, Uttar Pradesh
            </div>
          </div>

          {/* Technical Arsenal */}
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
                fontSize: '12px',
                fontWeight: '700',
                color: '#ef4444',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                fontFamily: "'DM Mono', monospace",
                marginBottom: '12px',
              }}
            >
              Technical Arsenal
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13.5px', color: '#d1d5db' }}>
              <div>
                <strong style={{ color: '#ffffff' }}>Programming Languages:</strong> C, C++, Python, JavaScript
              </div>
              <div>
                <strong style={{ color: '#ffffff' }}>Development & Web:</strong> HTML5, CSS3, JavaScript (ES6+), React, Vite
              </div>
              <div>
                <strong style={{ color: '#ffffff' }}>AI & Data:</strong> Machine Learning Foundations, Computer Vision, EDA, Data Analysis
              </div>
              <div>
                <strong style={{ color: '#ffffff' }}>Computer Science:</strong> Data Structures & Algorithms, OOP, DBMS, OS, Computer Networks
              </div>
              <div>
                <strong style={{ color: '#ffffff' }}>Tools & Workflows:</strong> Git, GitHub, VS Code, Figma, Antigravity
              </div>
            </div>
          </div>

          {/* Key Projects */}
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
                fontSize: '12px',
                fontWeight: '700',
                color: '#ef4444',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                fontFamily: "'DM Mono', monospace",
                marginBottom: '14px',
              }}
            >
              Academic & Technical Projects
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
                  <span style={{ fontSize: '16px', fontWeight: '700', color: '#ffffff' }}>MindMatrix AI</span>
                  <span style={{ fontSize: '11px', color: '#ef4444', fontFamily: "'DM Mono', monospace" }}>AI / ML • Computer Vision • Web</span>
                </div>
                <p style={{ fontSize: '13.5px', color: '#9ca3af', lineHeight: '1.5' }}>
                  AI-powered system identifying student stress patterns through computer vision and behavioral analysis to deliver proactive support before burnout occurs.
                </p>
              </div>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
                  <span style={{ fontSize: '16px', fontWeight: '700', color: '#ffffff' }}>Student Admission Record Management System</span>
                  <span style={{ fontSize: '11px', color: '#ef4444', fontFamily: "'DM Mono', monospace" }}>C • DSA • Linked Lists</span>
                </div>
                <p style={{ fontSize: '13.5px', color: '#9ca3af', lineHeight: '1.5' }}>
                  High-performance native record administration system implementing custom dynamic linked list architectures, binary searching, and sorting algorithms.
                </p>
              </div>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
                  <span style={{ fontSize: '16px', fontWeight: '700', color: '#ffffff' }}>Car Troubleshooting Expert System</span>
                  <span style={{ fontSize: '11px', color: '#ef4444', fontFamily: "'DM Mono', monospace" }}>Python • Rule-Based AI</span>
                </div>
                <p style={{ fontSize: '13.5px', color: '#9ca3af', lineHeight: '1.5' }}>
                  Rule-based inference engine mapping multi-symptom user inputs against structured mechanical knowledge bases to classify vehicle anomalies.
                </p>
              </div>
            </div>
          </div>

          {/* Hackathons & Activities */}
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
                fontSize: '12px',
                fontWeight: '700',
                color: '#ef4444',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                fontFamily: "'DM Mono', monospace",
                marginBottom: '10px',
              }}
            >
              Hackathons & Team Activities
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13.5px', color: '#d1d5db' }}>
              <div>
                <strong style={{ color: '#ffffff' }}>Pixel Pulse Hackathon:</strong> Collaborated in a rapid prototyping sprint to engineer an interactive technology solution with cross-functional peers.
              </div>
              <div>
                <strong style={{ color: '#ffffff' }}>Segue 3.0 Hackathon:</strong> Developed and pitched a technical system solving practical student and community challenges.
              </div>
              <div>
                <strong style={{ color: '#ffffff' }}>National Service Scheme (NSS):</strong> Active community participation, social awareness, and student organization engagement.
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes resumeFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes resumeSlideUp {
          from { opacity: 0; transform: translateY(20px) scale(0.97); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </div>
  );
}
