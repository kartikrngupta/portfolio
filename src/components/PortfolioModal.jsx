import React from 'react';
import { X, ExternalLink, Mail, CheckCircle2, FileText, Sparkles, Code2, Cpu, Globe } from 'lucide-react';

export default function PortfolioModal({ activeModal, onClose }) {
  if (!activeModal) return null;

  return (
    <div 
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.65)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        padding: '20px',
        animation: 'fadeIn 0.25s ease-out',
      }}
      onClick={onClose}
    >
      <div 
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '680px',
          maxHeight: '85vh',
          overflowY: 'auto',
          backgroundColor: '#161618',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          borderRadius: '24px',
          padding: '36px',
          color: '#ffffff',
          boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.7)',
          animation: 'slideUp 0.28s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '24px',
            right: '24px',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            border: 'none',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'background-color 0.2s',
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
        >
          <X size={18} />
        </button>

        {/* WORK Modal Content */}
        {activeModal === 'WORK' && (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <span style={{ fontSize: '13px', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#ef4444' }}>
                Featured Projects
              </span>
            </div>
            <h2 style={{ fontSize: '32px', fontWeight: '800', marginBottom: '24px' }}>Selected Works</h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {[
                {
                  title: 'NeuralStudio AI',
                  category: 'AI / Machine Learning & WebGPU',
                  desc: 'High-performance creative platform executing multi-modal diffusion & vision inference in real-time.',
                  stack: ['React', 'Python', 'FastAPI', 'PyTorch', 'WebGPU'],
                  link: '#',
                },
                {
                  title: 'PulseEngine Microservices',
                  category: 'Distributed Systems & Cloud',
                  desc: 'Ultra-low latency event processing engine powering real-time stream analytics for 200k+ req/sec.',
                  stack: ['Go', 'Redis', 'Kafka', 'Docker', 'Kubernetes'],
                  link: '#',
                },
                {
                  title: 'CanvasFlow 3D Experience',
                  category: 'Creative Web & Graphics',
                  desc: 'Interactive 60 FPS visual environment with custom physics shaders and procedural audio reactions.',
                  stack: ['React', 'Canvas API', 'Three.js', 'GLSL', 'Vite'],
                  link: '#',
                },
              ].map((proj, idx) => (
                <div 
                  key={idx}
                  style={{
                    padding: '20px',
                    borderRadius: '16px',
                    backgroundColor: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    transition: 'border-color 0.2s, background-color 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.25)';
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.07)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.04)';
                  }}
                >
                  <div style={{ fontSize: '12px', color: '#ef4444', fontWeight: '700', marginBottom: '4px', textTransform: 'uppercase' }}>
                    {proj.category}
                  </div>
                  <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '6px' }}>{proj.title}</h3>
                  <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.7)', lineHeight: '1.5', marginBottom: '12px' }}>
                    {proj.desc}
                  </p>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    {proj.stack.map((t) => (
                      <span key={t} style={{ fontSize: '11px', fontWeight: '600', padding: '4px 10px', borderRadius: '999px', background: 'rgba(255, 255, 255, 0.1)', color: '#ffffff' }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ABOUT Modal Content */}
        {activeModal === 'ABOUT' && (
          <div>
            <div style={{ fontSize: '13px', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#ef4444', marginBottom: '8px' }}>
              Background & Story
            </div>
            <h2 style={{ fontSize: '32px', fontWeight: '800', marginBottom: '20px' }}>About Kartik Gupta</h2>
            <p style={{ fontSize: '16px', color: 'rgba(255, 255, 255, 0.85)', lineHeight: '1.7', marginBottom: '20px' }}>
              I am a versatile Software Engineer specializing at the intersection of <strong>Full Stack Web Systems</strong>, <strong>Artificial Intelligence</strong>, and <strong>Interactive Graphics</strong>.
            </p>
            <p style={{ fontSize: '15px', color: 'rgba(255, 255, 255, 0.7)', lineHeight: '1.6', marginBottom: '24px' }}>
              My mission is to craft intuitive, aesthetically pristine, and mathematically rigorous software experiences. From building scalable backend architectures to orchestrating real-time vision algorithms and 60 FPS interactive physics, I focus on engineering excellence and attention to detail.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px', marginTop: '20px' }}>
              <div style={{ padding: '16px', borderRadius: '12px', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <div style={{ fontWeight: '700', fontSize: '16px', marginBottom: '4px' }}>Frontend</div>
                <div style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.65)', lineHeight: '1.5' }}>React, TypeScript, Next.js, Canvas, Tailwind</div>
              </div>
              <div style={{ padding: '16px', borderRadius: '12px', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <div style={{ fontWeight: '700', fontSize: '16px', marginBottom: '4px' }}>Backend & Cloud</div>
                <div style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.65)', lineHeight: '1.5' }}>Python, Node, Go, PostgreSQL, Redis, Docker</div>
              </div>
              <div style={{ padding: '16px', borderRadius: '12px', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <div style={{ fontWeight: '700', fontSize: '16px', marginBottom: '4px' }}>AI & Vision</div>
                <div style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.65)', lineHeight: '1.5' }}>OpenCV, PyTorch, LLMs, Computer Vision</div>
              </div>
            </div>
          </div>
        )}

        {/* CONTACT Modal Content */}
        {activeModal === 'CONTACT' && (
          <div>
            <div style={{ fontSize: '13px', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#ef4444', marginBottom: '8px' }}>
              Get In Touch
            </div>
            <h2 style={{ fontSize: '32px', fontWeight: '800', marginBottom: '16px' }}>Let's Build Something Great</h2>
            <p style={{ fontSize: '15px', color: 'rgba(255, 255, 255, 0.75)', lineHeight: '1.6', marginBottom: '28px' }}>
              Have an idea, open opportunity, or interested in collaborating? Feel free to reach out directly through any of the channels below.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '28px' }}>
              <a 
                href="mailto:kartikrngupta180@gmail.com" 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  padding: '16px 20px',
                  borderRadius: '14px',
                  backgroundColor: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  color: '#ffffff',
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: '15px',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.12)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.06)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
                }}
              >
                <Mail size={20} color="#ef4444" />
                <span style={{ flex: 1 }}>kartikrngupta180@gmail.com</span>
                <ExternalLink size={16} color="rgba(255, 255, 255, 0.5)" />
              </a>

              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  padding: '16px 20px',
                  borderRadius: '14px',
                  backgroundColor: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  color: '#ffffff',
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: '15px',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.12)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.06)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#0077b5">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.77v8.37H6.46V10.9M7.85 6.25a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24Z"/>
                </svg>
                <span style={{ flex: 1 }}>LinkedIn / Kartik Gupta</span>
                <ExternalLink size={16} color="rgba(255, 255, 255, 0.5)" />
              </a>

              <a 
                href="https://github.com/" 
                target="_blank" 
                rel="noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  padding: '16px 20px',
                  borderRadius: '14px',
                  backgroundColor: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  color: '#ffffff',
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: '15px',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.12)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.06)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#ffffff">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z"/>
                </svg>
                <span style={{ flex: 1 }}>GitHub / Kartik Gupta</span>
                <ExternalLink size={16} color="rgba(255, 255, 255, 0.5)" />
              </a>
            </div>
          </div>
        )}

        {/* RESUME Modal Content */}
        {activeModal === 'RESUME' && (
          <div>
            <div style={{ fontSize: '13px', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#ef4444', marginBottom: '8px' }}>
              Curriculum Vitae
            </div>
            <h2 style={{ fontSize: '32px', fontWeight: '800', marginBottom: '16px' }}>Kartik Gupta — Resume</h2>
            <div style={{ display: 'flex', gap: '12px', marginBottom: '24px' }}>
              <a
                href="#download"
                onClick={(e) => {
                  e.preventDefault();
                  alert("Resume PDF download initiated: Kartik_Gupta_Resume.pdf");
                }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 20px',
                  borderRadius: '999px',
                  backgroundColor: '#ffffff',
                  color: '#111111',
                  fontWeight: '700',
                  fontSize: '14px',
                  textDecoration: 'none',
                  boxShadow: '0 4px 14px rgba(0,0,0,0.2)',
                }}
              >
                <FileText size={16} />
                Download PDF
              </a>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '20px' }}>
              <div>
                <h4 style={{ fontSize: '18px', fontWeight: '700', color: '#ffffff' }}>Senior Full Stack & AI Engineer</h4>
                <div style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.6)', marginBottom: '8px' }}>2022 — Present</div>
                <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.75)', lineHeight: '1.6' }}>
                  Architected high-throughput AI pipelines, real-time microservices, and interactive web applications utilizing React, Node.js, Python, and PyTorch.
                </p>
              </div>

              <div>
                <h4 style={{ fontSize: '18px', fontWeight: '700', color: '#ffffff' }}>Creative Developer & Systems Specialist</h4>
                <div style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.6)', marginBottom: '8px' }}>2020 — 2022</div>
                <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.75)', lineHeight: '1.6' }}>
                  Engineered 60 FPS interactive graphics, WebGL shaders, and high-conversion client experiences with seamless user interaction.
                </p>
              </div>

              <div>
                <h4 style={{ fontSize: '18px', fontWeight: '700', color: '#ffffff' }}>Education</h4>
                <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.75)', lineHeight: '1.6' }}>
                  B.Tech in Computer Science & Engineering — Focus on Machine Learning & Distributed Computing.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px) scale(0.97); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </div>
  );
}
