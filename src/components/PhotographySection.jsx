import React, { useState } from 'react';
import { Camera, Eye, ArrowRight, Aperture, X, ZoomIn } from 'lucide-react';

export default function PhotographySection() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const photoCards = [
    {
      id: 1,
      title: 'Geometric Shadows',
      category: 'Architecture & Form',
      specs: '50mm • f/1.8 • 1/500s • ISO 100',
      description: 'Study of stark cast shadows and modern structural concrete geometry.',
      ratio: '3/4',
      accent: 'linear-gradient(135deg, #1c1917 0%, #0c0a09 100%)',
      gridSpan: 'span 1',
    },
    {
      id: 2,
      title: 'Urban Symmetry',
      category: 'Street Perspective',
      specs: '35mm • f/2.8 • 1/250s • ISO 200',
      description: 'Vanishing point convergence in metropolitan thoroughfares.',
      ratio: '4/3',
      accent: 'linear-gradient(135deg, #27272a 0%, #18181b 100%)',
      gridSpan: 'span 1',
    },
    {
      id: 3,
      title: 'Monochrome Depths',
      category: 'Contrast & Texture',
      specs: '85mm • f/1.4 • 1/1000s • ISO 100',
      description: 'High-contrast black and white exploration isolating textural contours.',
      ratio: '1/1',
      accent: 'linear-gradient(135deg, #1f2937 0%, #111827 100%)',
      gridSpan: 'span 1',
    },
    {
      id: 4,
      title: 'Golden Hour Solitude',
      category: 'Atmospheric Mood',
      specs: '50mm • f/2.0 • 1/400s • ISO 160',
      description: 'Warm low-angle natural illumination catching silhouetted figures.',
      ratio: '4/3',
      accent: 'linear-gradient(135deg, #2e1065 0%, #17092c 100%)',
      gridSpan: 'span 1',
    },
    {
      id: 5,
      title: 'Architectural Lines',
      category: 'Minimal Composition',
      specs: '24mm • f/4.0 • 1/125s • ISO 400',
      description: 'Minimalist glass facade reflections and repetitive orthogonal patterns.',
      ratio: '3/4',
      accent: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
      gridSpan: 'span 1',
    },
    {
      id: 6,
      title: 'Transient Reflections',
      category: 'Visual Storytelling',
      specs: '50mm • f/1.8 • 1/320s • ISO 250',
      description: 'Rainwater surface reflections framing candid nocturnal city lights.',
      ratio: '1/1',
      accent: 'linear-gradient(135deg, #262626 0%, #171717 100%)',
      gridSpan: 'span 1',
    },
  ];

  return (
    <section
      id="photography"
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
          <span>BEYOND CODE</span>
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
          When I'm away from the code, I look at the world through a camera.
        </h2>
        <p
          style={{
            fontSize: '16px',
            color: '#9ca3af',
            maxWidth: '650px',
            lineHeight: '1.6',
          }}
        >
          Photography is my creative outlet for observing light, negative space, and composition — disciplines that directly inform my design and frontend engineering instincts.
        </p>
      </div>

      {/* Photography Cards Masonry / Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px',
          marginBottom: '48px',
        }}
      >
        {photoCards.map((photo) => (
          <div
            key={photo.id}
            className="photo-card"
            onClick={() => setSelectedPhoto(photo)}
            style={{
              borderRadius: '20px',
              backgroundColor: '#121214',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              overflow: 'hidden',
              cursor: 'pointer',
              position: 'relative',
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.4)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            {/* Viewfinder-style Photo Placeholder Surface */}
            <div
              style={{
                width: '100%',
                height: '240px',
                background: photo.accent,
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
                overflow: 'hidden',
              }}
            >
              {/* Subtle Camera Grid Lines */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
                  backgroundSize: '20px 20px',
                  opacity: 0.4,
                }}
              />

              {/* Viewfinder Center Crosshairs */}
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  border: '1px dashed rgba(255, 255, 255, 0.25)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'rgba(255, 255, 255, 0.4)',
                }}
              >
                <Aperture size={22} strokeWidth={1.5} />
              </div>

              {/* Focal Tag */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '12px',
                  right: '12px',
                  padding: '4px 10px',
                  borderRadius: '6px',
                  backgroundColor: 'rgba(0, 0, 0, 0.65)',
                  backdropFilter: 'blur(6px)',
                  fontSize: '11px',
                  fontFamily: "'DM Mono', monospace",
                  color: 'rgba(255, 255, 255, 0.75)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                {photo.specs.split(' • ')[0]}
              </div>
            </div>

            {/* Photo Info Content */}
            <div style={{ padding: '24px' }}>
              <div
                style={{
                  fontSize: '11px',
                  fontWeight: '700',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#ef4444',
                  fontFamily: "'DM Mono', monospace",
                  marginBottom: '6px',
                }}
              >
                {photo.category}
              </div>

              <h3
                style={{
                  fontSize: '18px',
                  fontWeight: '700',
                  color: '#ffffff',
                  fontFamily: "'Space Grotesk', sans-serif",
                  marginBottom: '6px',
                }}
              >
                {photo.title}
              </h3>

              <p
                style={{
                  fontSize: '13px',
                  color: '#9ca3af',
                  lineHeight: '1.5',
                  marginBottom: '14px',
                }}
              >
                {photo.description}
              </p>

              <div
                style={{
                  fontSize: '11px',
                  color: '#6b7280',
                  fontFamily: "'DM Mono', monospace",
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <span>EXIF:</span>
                <span>{photo.specs}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Photography CTA */}
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button
          onClick={() => setSelectedPhoto(photoCards[0])}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            padding: '14px 28px',
            borderRadius: '999px',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            color: '#ffffff',
            fontSize: '13px',
            fontWeight: '700',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            fontFamily: "'Space Grotesk', sans-serif",
            cursor: 'pointer',
            transition: 'all 0.25s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#ffffff';
            e.currentTarget.style.color = '#080808';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
            e.currentTarget.style.color = '#ffffff';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          <Camera size={16} />
          <span>EXPLORE MY PHOTOGRAPHY →</span>
        </button>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 120,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            backdropFilter: 'blur(16px)',
            padding: '24px',
          }}
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '680px',
              backgroundColor: '#121214',
              borderRadius: '24px',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              overflow: 'hidden',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.9)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              aria-label="Close modal"
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 10,
              }}
            >
              <X size={18} />
            </button>

            <div
              style={{
                width: '100%',
                height: '360px',
                background: selectedPhoto.accent,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '12px',
                  color: 'rgba(255, 255, 255, 0.6)',
                }}
              >
                <Camera size={36} color="#ef4444" />
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '13px' }}>
                  [ Photography Asset Frame Placeholder ]
                </span>
                <span style={{ fontSize: '12px', color: '#9ca3af' }}>
                  {selectedPhoto.specs}
                </span>
              </div>
            </div>

            <div style={{ padding: '28px' }}>
              <div
                style={{
                  fontSize: '11px',
                  fontWeight: '700',
                  color: '#ef4444',
                  fontFamily: "'DM Mono', monospace",
                  textTransform: 'uppercase',
                  marginBottom: '6px',
                }}
              >
                {selectedPhoto.category}
              </div>
              <h3
                style={{
                  fontSize: '22px',
                  fontWeight: '700',
                  color: '#ffffff',
                  fontFamily: "'Space Grotesk', sans-serif",
                  marginBottom: '10px',
                }}
              >
                {selectedPhoto.title}
              </h3>
              <p style={{ fontSize: '14px', color: '#9ca3af', lineHeight: '1.6', marginBottom: '16px' }}>
                {selectedPhoto.description}
              </p>
              <div
                style={{
                  fontSize: '12px',
                  color: '#6b7280',
                  fontFamily: "'DM Mono', monospace",
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                  paddingTop: '12px',
                }}
              >
                Metadata: {selectedPhoto.specs}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
