import React from 'react';
import { 
  ArrowDown, 
  ArrowUpRight, 
  Download, 
  MapPin, 
  GraduationCap, 
  Laptop, 
  Brain, 
  Target, 
  Code2, 
  Users, 
  Rocket, 
  Lightbulb, 
  Package, 
  FlaskConical, 
  BarChart3, 
  ListOrdered, 
  Settings
} from 'lucide-react';

export default function AboutPage({ navigateTo, onOpenResume }) {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      className="about-page-root"
      style={{
        backgroundColor: '#090909',
        color: '#ffffff',
        minHeight: '100vh',
        width: '100%',
        position: 'relative',
        overflowX: 'hidden',
        paddingTop: '80px',
        paddingBottom: '90px',
      }}
    >
      {/* Centered content wrapper matching reference proportions */}
      <div 
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 4vw',
          display: 'flex',
          flexDirection: 'column',
          gap: 'clamp(70px, 8.5vw, 115px)',
        }}
      >

        {/* ==========================================================
            SECTION 01: HERO / A LITTLE ABOUT ME
        ========================================================== */}
        <section 
          id="hero-section"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            alignItems: 'center',
            gap: 'clamp(36px, 5vw, 70px)',
            position: 'relative',
            paddingTop: '16px',
          }}
        >
          {/* Left Column: Heading, Subtitle, Bio, Actions */}
          <div style={{ zIndex: 2 }}>
            {/* Section Tag */}
            <div 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '12px',
                fontWeight: '700',
                letterSpacing: '0.14em',
                fontFamily: "'DM Mono', monospace",
                marginBottom: '16px',
              }}
            >
              <span style={{ color: '#EF4444', fontSize: '15px' }}>/</span>
              <span style={{ color: '#ffffff' }}>01</span>
              <span style={{ color: '#6b7280', textTransform: 'uppercase' }}>ABOUT ME</span>
            </div>

            {/* Main Title */}
            <h1
              style={{
                fontSize: 'clamp(42px, 5.2vw, 68px)',
                fontWeight: '800',
                fontFamily: "'Space Grotesk', sans-serif",
                lineHeight: '1.04',
                letterSpacing: '-0.03em',
                marginBottom: '18px',
              }}
            >
              <span style={{ color: '#ffffff', display: 'block' }}>A LITTLE</span>
              <span style={{ color: '#EF4444', display: 'block' }}>ABOUT ME</span>
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontSize: 'clamp(15px, 1.35vw, 18px)',
                fontWeight: '500',
                color: '#e5e7eb',
                letterSpacing: '-0.01em',
                marginBottom: '16px',
                lineHeight: '1.45',
              }}
            >
              Curious mind. Constant learner. Problem solver.
            </p>

            {/* Bio Paragraph */}
            <p
              style={{
                fontSize: '14.5px',
                lineHeight: '1.75',
                color: '#9ca3af',
                marginBottom: '32px',
                maxWidth: '470px',
              }}
            >
              I'm Kartik R N Gupta, a Computer Science Engineering student specializing in Artificial Intelligence and Machine Learning, passionate about building practical solutions, exploring new technologies and creating meaningful impact through code.
            </p>

            {/* Action Buttons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
              <button
                onClick={() => scrollToSection('journey-section')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '13px 26px',
                  borderRadius: '999px',
                  backgroundColor: '#EF4444',
                  color: '#ffffff',
                  fontSize: '12.5px',
                  fontWeight: '700',
                  letterSpacing: '0.08em',
                  fontFamily: "'Space Grotesk', sans-serif",
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 8px 24px rgba(239, 68, 68, 0.35)',
                  transition: 'all 0.25s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#dc2626', e.currentTarget.style.transform = 'translateY(-2px)')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#EF4444', e.currentTarget.style.transform = 'translateY(0)')}
              >
                <span>MY JOURNEY</span>
                <ArrowDown size={15} />
              </button>

              <button
                onClick={() => onOpenResume ? onOpenResume() : window.print()}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 24px',
                  borderRadius: '999px',
                  backgroundColor: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.16)',
                  color: '#ffffff',
                  fontSize: '12.5px',
                  fontWeight: '700',
                  letterSpacing: '0.08em',
                  fontFamily: "'Space Grotesk', sans-serif",
                  cursor: 'pointer',
                  transition: 'all 0.25s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.45)', e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)')}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.16)', e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.04)')}
              >
                <Download size={15} />
                <span>DOWNLOAD RESUME</span>
              </button>
            </div>
          </div>

          {/* Right Column: Visual Portrait Composition with Orbit, Glow, Signature, Roles */}
          <div 
            className="hero-portrait-wrapper"
            style={{
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '420px',
            }}
          >
            {/* Red Radial Aura Glow behind head */}
            <div 
              style={{
                position: 'absolute',
                top: '46%',
                left: '45%',
                transform: 'translate(-50%, -50%)',
                width: '370px',
                height: '370px',
                background: 'radial-gradient(circle, rgba(239, 68, 68, 0.35) 0%, rgba(239, 68, 68, 0.08) 50%, transparent 70%)',
                filter: 'blur(22px)',
                pointerEvents: 'none',
                zIndex: 0,
              }}
            />

            {/* Circular Orbit Ring */}
            <div 
              style={{
                position: 'absolute',
                top: '46%',
                left: '45%',
                transform: 'translate(-50%, -50%)',
                width: '350px',
                height: '350px',
                borderRadius: '50%',
                border: '1px solid rgba(239, 68, 68, 0.22)',
                pointerEvents: 'none',
                zIndex: 1,
              }}
            />

            {/* Decorative Sparkle Stars */}
            <div style={{ position: 'absolute', top: '16%', left: '16%', color: 'rgba(239, 68, 68, 0.7)', fontSize: '18px', zIndex: 1 }}>✦</div>
            <div style={{ position: 'absolute', top: '22%', right: '28%', color: 'rgba(239, 68, 68, 0.45)', fontSize: '14px', zIndex: 1 }}>✦</div>

            {/* Clean Kartik Portrait Image */}
            <div 
              style={{
                position: 'relative',
                zIndex: 2,
                maxWidth: '360px',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img 
                src="/about/kartik_portrait_feathered.png" 
                alt="Kartik R N Gupta" 
                style={{
                  width: '100%',
                  maxWidth: '350px',
                  height: 'auto',
                  display: 'block',
                  filter: 'drop-shadow(0 15px 30px rgba(0, 0, 0, 0.7))',
                }}
              />
            </div>

            {/* Cursive Signature & Titles Stack (Right of Portrait) */}
            <div 
              className="hero-signature-stack"
              style={{
                position: 'absolute',
                top: '12%',
                right: '0%',
                zIndex: 3,
                textAlign: 'left',
              }}
            >
              {/* Handwritten Signature 'Kartik' */}
              <div 
                style={{
                  fontFamily: "'Caveat', cursive",
                  fontSize: '44px',
                  fontWeight: '700',
                  color: 'rgba(255, 255, 255, 0.88)',
                  transform: 'rotate(-5deg)',
                  marginBottom: '6px',
                  letterSpacing: '0.04em',
                }}
              >
                Kartik
              </div>

              {/* Roles List */}
              <div 
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px',
                  fontSize: '12px',
                  color: 'rgba(255, 255, 255, 0.72)',
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: '500',
                  lineHeight: '1.4',
                }}
              >
                <div>Developer</div>
                <div>AI/ML Enthusiast</div>
                <div>Problem Solver</div>
                <div>Photographer</div>
                <div>Lifelong Learner</div>
              </div>
            </div>

            {/* Location Badge (Bottom Right) */}
            <div 
              className="hero-location-badge"
              style={{
                position: 'absolute',
                bottom: '10%',
                right: '0%',
                zIndex: 3,
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontFamily: "'DM Mono', monospace",
                fontSize: '11px',
              }}
            >
              <div 
                style={{
                  width: '26px',
                  height: '26px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(239, 68, 68, 0.12)',
                  border: '1px solid rgba(239, 68, 68, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#EF4444',
                }}
              >
                <MapPin size={14} />
              </div>
              <div>
                <div style={{ fontSize: '10px', color: '#6b7280', textTransform: 'uppercase' }}>Based in</div>
                <div style={{ fontWeight: '600', color: '#e5e7eb' }}>Greater Noida, India</div>
              </div>
            </div>
          </div>
        </section>


        {/* ==========================================================
            SECTION 02: WHO I AM & PHOTOGRAPHIC DESK SETUP
        ========================================================== */}
        <section id="who-i-am-section" style={{ position: 'relative' }}>
          {/* Top Two-Column Block: Text & Photographic Workspace */}
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 'clamp(36px, 5vw, 64px)',
              alignItems: 'center',
              marginBottom: '44px',
            }}
          >
            {/* Left Column: Heading, Narrative, Quote */}
            <div>
              {/* Section Tag */}
              <div 
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '12px',
                  fontWeight: '700',
                  letterSpacing: '0.14em',
                  fontFamily: "'DM Mono', monospace",
                  marginBottom: '16px',
                }}
              >
                <span style={{ color: '#EF4444', fontSize: '15px' }}>/</span>
                <span style={{ color: '#ffffff' }}>02</span>
                <span style={{ color: '#6b7280', textTransform: 'uppercase' }}>WHO I AM</span>
              </div>

              {/* Heading */}
              <h2
                style={{
                  fontSize: 'clamp(32px, 3.8vw, 48px)',
                  fontWeight: '800',
                  fontFamily: "'Space Grotesk', sans-serif",
                  lineHeight: '1.08',
                  letterSpacing: '-0.02em',
                  marginBottom: '18px',
                }}
              >
                <span style={{ color: '#ffffff', display: 'block' }}>Turning Curiosity</span>
                <span style={{ color: '#ffffff' }}>Into </span>
                <span style={{ color: '#EF4444' }}>Solutions</span>
              </h2>

              {/* Narrative Paragraphs */}
              <p
                style={{
                  fontSize: '14.5px',
                  lineHeight: '1.75',
                  color: '#9ca3af',
                  marginBottom: '16px',
                }}
              >
                I'm a Computer Science Engineering student at Noida Institute of Engineering & Technology, specializing in Artificial Intelligence and Machine Learning. I enjoy understanding how technology works, solving real problems using data structures and algorithms, and turning ideas into practical projects.
              </p>

              <p
                style={{
                  fontSize: '14.5px',
                  lineHeight: '1.75',
                  color: '#9ca3af',
                  marginBottom: '24px',
                }}
              >
                I'm currently focused on strengthening my programming fundamentals, DSA, AI/ML and full-stack development while continuously learning and exploring new technologies.
              </p>

              {/* Red Quote Block */}
              <div 
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '14px',
                  paddingLeft: '2px',
                }}
              >
                <div style={{ color: '#EF4444', fontSize: '34px', lineHeight: '1', fontFamily: "'Space Grotesk', sans-serif", fontWeight: '700' }}>“</div>
                <div 
                  style={{
                    fontSize: '15.5px',
                    fontStyle: 'italic',
                    color: '#e5e7eb',
                    lineHeight: '1.45',
                    fontFamily: "'Space Grotesk', sans-serif",
                  }}
                >
                  <div>"Same person who codes,</div>
                  <div>clicks and keeps exploring."</div>
                </div>
              </div>
            </div>

            {/* Right Column: Photographic Desk Setup */}
            <div 
              style={{
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.7)',
                position: 'relative',
              }}
            >
              <img 
                src="/about/workspace@2x.png" 
                alt="Workspace and development environment"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  objectFit: 'cover',
                }}
              />
            </div>
          </div>

          {/* Bottom Row: 4 Information Cards */}
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
              gap: '16px',
            }}
          >
            {/* Card 1: Education */}
            <div 
              style={{
                padding: '22px 18px',
                borderRadius: '16px',
                backgroundColor: '#0e0e0f',
                border: '1px solid rgba(255, 255, 255, 0.07)',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '14px',
                transition: 'all 0.25s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.4)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.07)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div 
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(239, 68, 68, 0.12)',
                  border: '1px solid rgba(239, 68, 68, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#EF4444',
                  flexShrink: 0,
                }}
              >
                <GraduationCap size={18} />
              </div>
              <div>
                <div style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.12em', color: '#6b7280', fontFamily: "'DM Mono', monospace", marginBottom: '4px' }}>
                  EDUCATION
                </div>
                <div style={{ fontSize: '14px', fontWeight: '700', color: '#ffffff', fontFamily: "'Space Grotesk', sans-serif", marginBottom: '2px' }}>
                  B.Tech CSE — AI/ML
                </div>
                <div style={{ fontSize: '12px', color: '#9ca3af' }}>NIET, Greater Noida</div>
                <div style={{ fontSize: '11.5px', color: '#6b7280' }}>2025 - Present</div>
              </div>
            </div>

            {/* Card 2: Focus */}
            <div 
              style={{
                padding: '22px 18px',
                borderRadius: '16px',
                backgroundColor: '#0e0e0f',
                border: '1px solid rgba(255, 255, 255, 0.07)',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '14px',
                transition: 'all 0.25s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.4)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.07)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div 
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(239, 68, 68, 0.12)',
                  border: '1px solid rgba(239, 68, 68, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#EF4444',
                  flexShrink: 0,
                }}
              >
                <Laptop size={18} />
              </div>
              <div>
                <div style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.12em', color: '#6b7280', fontFamily: "'DM Mono', monospace", marginBottom: '4px' }}>
                  FOCUS
                </div>
                <div style={{ fontSize: '14px', fontWeight: '700', color: '#ffffff', fontFamily: "'Space Grotesk', sans-serif", marginBottom: '4px' }}>
                  Software Development
                </div>
                <div style={{ fontSize: '12px', color: '#9ca3af' }}>AI/ML • DSA • Web</div>
              </div>
            </div>

            {/* Card 3: Interest */}
            <div 
              style={{
                padding: '22px 18px',
                borderRadius: '16px',
                backgroundColor: '#0e0e0f',
                border: '1px solid rgba(255, 255, 255, 0.07)',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '14px',
                transition: 'all 0.25s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.4)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.07)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div 
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(239, 68, 68, 0.12)',
                  border: '1px solid rgba(239, 68, 68, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#EF4444',
                  flexShrink: 0,
                }}
              >
                <Brain size={18} />
              </div>
              <div>
                <div style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.12em', color: '#6b7280', fontFamily: "'DM Mono', monospace", marginBottom: '4px' }}>
                  INTEREST
                </div>
                <div style={{ fontSize: '14px', fontWeight: '700', color: '#ffffff', fontFamily: "'Space Grotesk', sans-serif", marginBottom: '2px' }}>
                  Artificial Intelligence
                </div>
                <div style={{ fontSize: '12px', color: '#9ca3af' }}>Machine Learning</div>
                <div style={{ fontSize: '11.5px', color: '#6b7280' }}>Computer Vision • GenAI</div>
              </div>
            </div>

            {/* Card 4: Career Goal */}
            <div 
              style={{
                padding: '22px 18px',
                borderRadius: '16px',
                backgroundColor: '#0e0e0f',
                border: '1px solid rgba(255, 255, 255, 0.07)',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '14px',
                transition: 'all 0.25s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.4)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.07)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div 
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(239, 68, 68, 0.12)',
                  border: '1px solid rgba(239, 68, 68, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#EF4444',
                  flexShrink: 0,
                }}
              >
                <Target size={18} />
              </div>
              <div>
                <div style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.12em', color: '#6b7280', fontFamily: "'DM Mono', monospace", marginBottom: '4px' }}>
                  CAREER GOAL
                </div>
                <div style={{ fontSize: '14px', fontWeight: '700', color: '#ffffff', fontFamily: "'Space Grotesk', sans-serif", marginBottom: '2px' }}>
                  Software Engineer
                </div>
                <div style={{ fontSize: '12px', color: '#9ca3af' }}>AI-ML Engineer</div>
                <div style={{ fontSize: '11.5px', color: '#6b7280' }}>Create Real-World Impact</div>
              </div>
            </div>
          </div>
        </section>


        {/* ==========================================================
            SECTION 03: MY JOURNEY (HORIZONTAL TIMELINE)
        ========================================================== */}
        <section id="journey-section" style={{ position: 'relative' }}>
          {/* Header */}
          <div style={{ marginBottom: '44px' }}>
            <div 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '12px',
                fontWeight: '700',
                letterSpacing: '0.14em',
                fontFamily: "'DM Mono', monospace",
                marginBottom: '14px',
              }}
            >
              <span style={{ color: '#EF4444', fontSize: '15px' }}>/</span>
              <span style={{ color: '#ffffff' }}>03</span>
              <span style={{ color: '#6b7280', textTransform: 'uppercase' }}>MY JOURNEY</span>
            </div>

            <h2
              style={{
                fontSize: 'clamp(32px, 3.8vw, 48px)',
                fontWeight: '800',
                fontFamily: "'Space Grotesk', sans-serif",
                lineHeight: '1.1',
                letterSpacing: '-0.02em',
                marginBottom: '8px',
              }}
            >
              <span style={{ color: '#ffffff' }}>How I Got </span>
              <span style={{ color: '#EF4444' }}>Here</span>
            </h2>

            <p style={{ fontSize: '14.5px', color: '#9ca3af' }}>
              A journey of curiosity, exploration and continuous growth.
            </p>
          </div>

          {/* Horizontal Timeline Container */}
          <div style={{ position: 'relative' }}>
            {/* Connecting Horizontal Line (desktop only) */}
            <div 
              className="desktop-timeline-line"
              style={{
                position: 'absolute',
                top: '20px',
                left: '12%',
                right: '12%',
                height: '1.5px',
                backgroundColor: 'rgba(239, 68, 68, 0.4)',
                zIndex: 0,
              }}
            />

            {/* 4 Milestone Columns */}
            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '24px',
                position: 'relative',
                zIndex: 1,
              }}
            >
              {/* Step 1 */}
              <div>
                <div 
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: '#090909',
                    border: '2px solid #EF4444',
                    boxShadow: '0 0 14px rgba(239, 68, 68, 0.45)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#EF4444',
                    marginBottom: '18px',
                  }}
                >
                  <GraduationCap size={18} />
                </div>
                <div style={{ fontSize: '12px', color: '#6b7280', fontFamily: "'DM Mono', monospace", marginBottom: '4px' }}>
                  2025 — Present
                </div>
                <div style={{ fontSize: '14.5px', fontWeight: '700', color: '#ffffff', fontFamily: "'Space Grotesk', sans-serif", marginBottom: '2px' }}>
                  B.Tech CSE (AI/ML)
                </div>
                <div style={{ fontSize: '13px', fontWeight: '600', color: '#d1d5db', marginBottom: '8px' }}>
                  NIET, Greater Noida
                </div>
                <p style={{ fontSize: '13px', color: '#9ca3af', lineHeight: '1.55' }}>
                  Currently pursuing my degree and building a strong technical foundation.
                </p>
              </div>

              {/* Step 2 */}
              <div>
                <div 
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: '#090909',
                    border: '2px solid #EF4444',
                    boxShadow: '0 0 14px rgba(239, 68, 68, 0.45)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#EF4444',
                    marginBottom: '18px',
                  }}
                >
                  <Code2 size={18} />
                </div>
                <div style={{ fontSize: '12px', color: '#6b7280', fontFamily: "'DM Mono', monospace", marginBottom: '4px' }}>
                  Exploring
                </div>
                <div style={{ fontSize: '14.5px', fontWeight: '700', color: '#ffffff', fontFamily: "'Space Grotesk', sans-serif", marginBottom: '8px' }}>
                  Development & AI
                </div>
                <p style={{ fontSize: '13px', color: '#9ca3af', lineHeight: '1.55' }}>
                  Learned programming, web development and DSA fundamentals.
                </p>
              </div>

              {/* Step 3 */}
              <div>
                <div 
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: '#090909',
                    border: '2px solid #EF4444',
                    boxShadow: '0 0 14px rgba(239, 68, 68, 0.45)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#EF4444',
                    marginBottom: '18px',
                  }}
                >
                  <Users size={18} />
                </div>
                <div style={{ fontSize: '12px', color: '#6b7280', fontFamily: "'DM Mono', monospace", marginBottom: '4px' }}>
                  Hackathons
                </div>
                <div style={{ fontSize: '14.5px', fontWeight: '700', color: '#ffffff', fontFamily: "'Space Grotesk', sans-serif", marginBottom: '2px' }}>
                  PIXEL PULSE
                </div>
                <div style={{ fontSize: '14px', fontWeight: '700', color: '#ffffff', fontFamily: "'Space Grotesk', sans-serif", marginBottom: '8px' }}>
                  SEGUE 3.0
                </div>
                <p style={{ fontSize: '13px', color: '#9ca3af', lineHeight: '1.55' }}>
                  Building and presenting technology-driven solutions with a team.
                </p>
              </div>

              {/* Step 4 */}
              <div>
                <div 
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: '#090909',
                    border: '2px solid #EF4444',
                    boxShadow: '0 0 14px rgba(239, 68, 68, 0.45)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#EF4444',
                    marginBottom: '18px',
                  }}
                >
                  <Rocket size={18} />
                </div>
                <div style={{ fontSize: '12px', color: '#6b7280', fontFamily: "'DM Mono', monospace", marginBottom: '4px' }}>
                  Now
                </div>
                <div style={{ fontSize: '14.5px', fontWeight: '700', color: '#ffffff', fontFamily: "'Space Grotesk', sans-serif", marginBottom: '8px' }}>
                  Building - Learning - Improving
                </div>
                <p style={{ fontSize: '13px', color: '#9ca3af', lineHeight: '1.55' }}>
                  Working on technical projects while strengthening software development, DSA and AI/ML skills.
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* ==========================================================
            SECTION 04: WHAT DRIVES ME / MY APPROACH
        ========================================================== */}
        <section id="approach-section" style={{ position: 'relative' }}>
          {/* Header */}
          <div style={{ marginBottom: '40px' }}>
            <div 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '12px',
                fontWeight: '700',
                letterSpacing: '0.14em',
                fontFamily: "'DM Mono', monospace",
                marginBottom: '14px',
              }}
            >
              <span style={{ color: '#EF4444', fontSize: '15px' }}>/</span>
              <span style={{ color: '#ffffff' }}>04</span>
              <span style={{ color: '#6b7280', textTransform: 'uppercase' }}>WHAT DRIVES ME</span>
            </div>

            <h2
              style={{
                fontSize: 'clamp(32px, 3.8vw, 48px)',
                fontWeight: '800',
                fontFamily: "'Space Grotesk', sans-serif",
                lineHeight: '1.1',
                letterSpacing: '-0.02em',
                marginBottom: '8px',
              }}
            >
              My Approach
            </h2>

            <p style={{ fontSize: '14.5px', color: '#9ca3af' }}>
              The principles that guide my journey.
            </p>
          </div>

          {/* 4 Approach Cards */}
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
              gap: '16px',
            }}
          >
            {/* Card 1: Learn */}
            <div 
              style={{
                padding: '28px 22px',
                borderRadius: '16px',
                backgroundColor: '#0c0c0e',
                border: '1px solid rgba(255, 255, 255, 0.07)',
                transition: 'all 0.25s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.4)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.07)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <Lightbulb size={24} color="#EF4444" style={{ marginBottom: '16px' }} />
              <h3 style={{ fontSize: '17px', fontWeight: '700', color: '#ffffff', fontFamily: "'Space Grotesk', sans-serif", marginBottom: '8px' }}>
                Learn
              </h3>
              <p style={{ fontSize: '13px', color: '#9ca3af', lineHeight: '1.6' }}>
                Understand the fundamentals and stay curious.
              </p>
            </div>

            {/* Card 2: Build */}
            <div 
              style={{
                padding: '28px 22px',
                borderRadius: '16px',
                backgroundColor: '#0c0c0e',
                border: '1px solid rgba(255, 255, 255, 0.07)',
                transition: 'all 0.25s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.4)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.07)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <Package size={24} color="#EF4444" style={{ marginBottom: '16px' }} />
              <h3 style={{ fontSize: '17px', fontWeight: '700', color: '#ffffff', fontFamily: "'Space Grotesk', sans-serif", marginBottom: '8px' }}>
                Build
              </h3>
              <p style={{ fontSize: '13px', color: '#9ca3af', lineHeight: '1.6' }}>
                Turn ideas into real projects.
              </p>
            </div>

            {/* Card 3: Experiment */}
            <div 
              style={{
                padding: '28px 22px',
                borderRadius: '16px',
                backgroundColor: '#0c0c0e',
                border: '1px solid rgba(255, 255, 255, 0.07)',
                transition: 'all 0.25s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.4)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.07)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <FlaskConical size={24} color="#EF4444" style={{ marginBottom: '16px' }} />
              <h3 style={{ fontSize: '17px', fontWeight: '700', color: '#ffffff', fontFamily: "'Space Grotesk', sans-serif", marginBottom: '8px' }}>
                Experiment
              </h3>
              <p style={{ fontSize: '13px', color: '#9ca3af', lineHeight: '1.6' }}>
                Try different approaches and explore new tools.
              </p>
            </div>

            {/* Card 4: Improve */}
            <div 
              style={{
                padding: '28px 22px',
                borderRadius: '16px',
                backgroundColor: '#0c0c0e',
                border: '1px solid rgba(255, 255, 255, 0.07)',
                transition: 'all 0.25s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.4)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.07)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <BarChart3 size={24} color="#EF4444" style={{ marginBottom: '16px' }} />
              <h3 style={{ fontSize: '17px', fontWeight: '700', color: '#ffffff', fontFamily: "'Space Grotesk', sans-serif", marginBottom: '8px' }}>
                Improve
              </h3>
              <p style={{ fontSize: '13px', color: '#9ca3af', lineHeight: '1.6' }}>
                Learn from mistakes and keep growing.
              </p>
            </div>
          </div>
        </section>


        {/* ==========================================================
            SECTION 05: CURRENTLY LEARNING
        ========================================================== */}
        <section id="learning-section" style={{ position: 'relative' }}>
          {/* Ambient red diamond sparkle */}
          <div 
            style={{
              position: 'absolute',
              top: '12px',
              right: '2%',
              fontSize: '26px',
              color: 'rgba(239, 68, 68, 0.65)',
              zIndex: 0,
            }}
          >
            ✦
          </div>

          {/* Header */}
          <div style={{ marginBottom: '40px', position: 'relative', zIndex: 1 }}>
            <div 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '12px',
                fontWeight: '700',
                letterSpacing: '0.14em',
                fontFamily: "'DM Mono', monospace",
                marginBottom: '14px',
              }}
            >
              <span style={{ color: '#EF4444', fontSize: '15px' }}>/</span>
              <span style={{ color: '#ffffff' }}>05</span>
              <span style={{ color: '#6b7280', textTransform: 'uppercase' }}>CURRENTLY LEARNING</span>
            </div>

            <h2
              style={{
                fontSize: 'clamp(32px, 3.8vw, 48px)',
                fontWeight: '800',
                fontFamily: "'Space Grotesk', sans-serif",
                lineHeight: '1.08',
                letterSpacing: '-0.02em',
                marginBottom: '6px',
              }}
            >
              <span style={{ color: '#ffffff' }}>Currently </span>
              <span style={{ color: '#EF4444' }}>Learning</span>
              <span style={{ color: '#ffffff', display: 'block' }}>Focus Areas</span>
            </h2>

            <p style={{ fontSize: '14.5px', color: '#9ca3af' }}>
              What I'm actively working on right now.
            </p>
          </div>

          {/* 4 Learning Focus Cards */}
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
              gap: '16px',
              position: 'relative',
              zIndex: 1,
            }}
          >
            {/* Card 1: DSA */}
            <div 
              style={{
                padding: '22px 18px',
                borderRadius: '16px',
                backgroundColor: '#0c0c0e',
                border: '1px solid rgba(255, 255, 255, 0.07)',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '14px',
                transition: 'all 0.25s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.4)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.07)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div 
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(239, 68, 68, 0.12)',
                  border: '1px solid rgba(239, 68, 68, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#EF4444',
                  flexShrink: 0,
                }}
              >
                <ListOrdered size={18} />
              </div>
              <div>
                <div style={{ fontSize: '14px', fontWeight: '700', color: '#ffffff', fontFamily: "'Space Grotesk', sans-serif", marginBottom: '4px' }}>
                  Data Structures & Algorithms
                </div>
                <p style={{ fontSize: '12px', color: '#9ca3af', lineHeight: '1.5' }}>
                  Strengthening problem solving and algorithmic thinking.
                </p>
              </div>
            </div>

            {/* Card 2: ML */}
            <div 
              style={{
                padding: '22px 18px',
                borderRadius: '16px',
                backgroundColor: '#0c0c0e',
                border: '1px solid rgba(255, 255, 255, 0.07)',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '14px',
                transition: 'all 0.25s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.4)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.07)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div 
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(239, 68, 68, 0.12)',
                  border: '1px solid rgba(239, 68, 68, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#EF4444',
                  flexShrink: 0,
                }}
              >
                <Brain size={18} />
              </div>
              <div>
                <div style={{ fontSize: '14px', fontWeight: '700', color: '#ffffff', fontFamily: "'Space Grotesk', sans-serif", marginBottom: '4px' }}>
                  Machine Learning
                </div>
                <p style={{ fontSize: '12px', color: '#9ca3af', lineHeight: '1.5' }}>
                  Learning models, data preparation and practical applications.
                </p>
              </div>
            </div>

            {/* Card 3: Full Stack */}
            <div 
              style={{
                padding: '22px 18px',
                borderRadius: '16px',
                backgroundColor: '#0c0c0e',
                border: '1px solid rgba(255, 255, 255, 0.07)',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '14px',
                transition: 'all 0.25s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.4)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.07)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div 
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(239, 68, 68, 0.12)',
                  border: '1px solid rgba(239, 68, 68, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#EF4444',
                  flexShrink: 0,
                }}
              >
                <Code2 size={18} />
              </div>
              <div>
                <div style={{ fontSize: '14px', fontWeight: '700', color: '#ffffff', fontFamily: "'Space Grotesk', sans-serif", marginBottom: '4px' }}>
                  Full-Stack Development
                </div>
                <p style={{ fontSize: '12px', color: '#9ca3af', lineHeight: '1.5' }}>
                  Building responsive and interactive web applications.
                </p>
              </div>
            </div>

            {/* Card 4: Software Engineering */}
            <div 
              style={{
                padding: '22px 18px',
                borderRadius: '16px',
                backgroundColor: '#0c0c0e',
                border: '1px solid rgba(255, 255, 255, 0.07)',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '14px',
                transition: 'all 0.25s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.4)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.07)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div 
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(239, 68, 68, 0.12)',
                  border: '1px solid rgba(239, 68, 68, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#EF4444',
                  flexShrink: 0,
                }}
              >
                <Settings size={18} />
              </div>
              <div>
                <div style={{ fontSize: '14px', fontWeight: '700', color: '#ffffff', fontFamily: "'Space Grotesk', sans-serif", marginBottom: '4px' }}>
                  Software Engineering
                </div>
                <p style={{ fontSize: '12px', color: '#9ca3af', lineHeight: '1.5' }}>
                  Learning how to build cleaner, scalable and maintainable projects.
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* ==========================================================
            SECTION 06: BEYOND CODE (PHOTOGRAPHY)
        ========================================================== */}
        <section id="photography-section" style={{ position: 'relative' }}>
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 'clamp(36px, 5vw, 64px)',
              alignItems: 'center',
            }}
          >
            {/* Left Column: Heading, Narrative, CTA */}
            <div>
              {/* Section Tag */}
              <div 
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '12px',
                  fontWeight: '700',
                  letterSpacing: '0.14em',
                  fontFamily: "'DM Mono', monospace",
                  marginBottom: '16px',
                }}
              >
                <span style={{ color: '#EF4444', fontSize: '15px' }}>/</span>
                <span style={{ color: '#ffffff' }}>06</span>
                <span style={{ color: '#6b7280', textTransform: 'uppercase' }}>BEYOND CODE</span>
              </div>

              {/* Heading */}
              <h2
                style={{
                  fontSize: 'clamp(32px, 3.8vw, 48px)',
                  fontWeight: '800',
                  fontFamily: "'Space Grotesk', sans-serif",
                  lineHeight: '1.08',
                  letterSpacing: '-0.02em',
                  marginBottom: '18px',
                }}
              >
                <span style={{ color: '#ffffff', display: 'block' }}>More Than</span>
                <span style={{ color: '#ffffff', display: 'block' }}>Just Technology</span>
              </h2>

              {/* Narrative */}
              <p
                style={{
                  fontSize: '14.5px',
                  lineHeight: '1.75',
                  color: '#9ca3af',
                  marginBottom: '16px',
                }}
              >
                Photography is how I explore the world outside the screen.
              </p>

              <p
                style={{
                  fontSize: '14.5px',
                  lineHeight: '1.75',
                  color: '#9ca3af',
                  marginBottom: '32px',
                }}
              >
                It helps me notice details, explore new perspectives and stay creative. It's a way for me to capture stories, moments and the beauty in everyday life.
              </p>

              {/* CTA Button */}
              <button
                onClick={() => navigateTo('/#photography')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '13px 26px',
                  borderRadius: '999px',
                  backgroundColor: '#EF4444',
                  color: '#ffffff',
                  fontSize: '12.5px',
                  fontWeight: '700',
                  letterSpacing: '0.08em',
                  fontFamily: "'Space Grotesk', sans-serif",
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 8px 24px rgba(239, 68, 68, 0.35)',
                  transition: 'all 0.25s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#dc2626', e.currentTarget.style.transform = 'translateY(-2px)')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#EF4444', e.currentTarget.style.transform = 'translateY(0)')}
              >
                <span>EXPLORE PHOTOGRAPHY</span>
                <ArrowUpRight size={16} />
              </button>
            </div>

            {/* Right Column: Photography Mosaic Gallery */}
            <div 
              className="photo-mosaic-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: '1.6fr 1fr',
                gap: '12px',
                alignItems: 'stretch',
                minHeight: '280px',
              }}
            >
              {/* Left Big Landscape Photo */}
              <div 
                style={{
                  borderRadius: '16px',
                  overflow: 'hidden',
                  position: 'relative',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  boxShadow: '0 15px 35px rgba(0, 0, 0, 0.6)',
                  height: '100%',
                  minHeight: '240px',
                }}
              >
                <img 
                  src="/about/photo_mountain@2x.png" 
                  alt="Mountain landscape at twilight"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
                {/* Inside Photo Overlay Text */}
                <div 
                  style={{
                    position: 'absolute',
                    bottom: '16px',
                    left: '16px',
                    zIndex: 2,
                    color: '#ffffff',
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '13px',
                    fontWeight: '700',
                    lineHeight: '1.3',
                    textShadow: '0 2px 8px rgba(0, 0, 0, 0.9)',
                  }}
                >
                  <div>Different perspective.</div>
                  <div>Same curiosity.</div>
                </div>
              </div>

              {/* Right 2x2 Grid of Photos */}
              <div 
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '10px',
                  height: '100%',
                }}
              >
                {/* City */}
                <div 
                  style={{
                    borderRadius: '12px',
                    overflow: 'hidden',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    height: '135px',
                  }}
                >
                  <img 
                    src="/about/photo_city@2x.png" 
                    alt="City twilight skyline"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </div>

                {/* Leaves */}
                <div 
                  style={{
                    borderRadius: '12px',
                    overflow: 'hidden',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    height: '135px',
                  }}
                >
                  <img 
                    src="/about/photo_leaves@2x.png" 
                    alt="Macro raindrop leaves"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </div>

                {/* Camera */}
                <div 
                  style={{
                    borderRadius: '12px',
                    overflow: 'hidden',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    height: '135px',
                  }}
                >
                  <img 
                    src="/about/photo_camera@2x.png" 
                    alt="Camera lens optics"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </div>

                {/* Lantern */}
                <div 
                  style={{
                    borderRadius: '12px',
                    overflow: 'hidden',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    height: '135px',
                  }}
                >
                  <img 
                    src="/about/photo_lantern@2x.png" 
                    alt="Vintage warm glowing lantern"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>

      <style>{`
        @media (max-width: 800px) {
          .hero-signature-stack {
            position: relative !important;
            top: auto !important;
            right: auto !important;
            margin-top: 14px !important;
            text-align: center !important;
            align-items: center !important;
          }
          .hero-location-badge {
            position: relative !important;
            bottom: auto !important;
            right: auto !important;
            margin-top: 12px !important;
            justify-content: center !important;
          }
          .desktop-timeline-line {
            display: none !important;
          }
          .photo-mosaic-grid {
            grid-template-columns: 1fr !important;
            height: auto !important;
          }
        }
      `}</style>
    </div>
  );
}
