import React from 'react';
import { Mail, ArrowUpRight, ArrowRight, MessageSquare, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './Icons';

export default function ContactSection() {
  const contactChannels = [
    {
      label: 'EMAIL ME',
      value: 'kartikrngupta180@gmail.com',
      href: 'mailto:kartikrngupta180@gmail.com',
      icon: Mail,
      isPrimary: true,
    },
    {
      label: 'LINKEDIN',
      value: 'Kartik R N Gupta',
      href: 'https://linkedin.com',
      icon: LinkedinIcon,
      isExternal: true,
    },
    {
      label: 'GITHUB',
      value: 'GitHub Profile',
      href: 'https://github.com',
      icon: GithubIcon,
      isExternal: true,
    },
    {
      label: 'INSTAGRAM',
      value: 'Instagram Creative',
      href: 'https://instagram.com',
      icon: InstagramIcon,
      isExternal: true,
    },
  ];

  return (
    <section
      id="contact"
      style={{
        padding: '120px 6vw',
        maxWidth: '1300px',
        margin: '0 auto',
        position: 'relative',
      }}
    >
      {/* Background Glow */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '350px',
          background: 'radial-gradient(ellipse, rgba(239, 68, 68, 0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
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
              marginBottom: '16px',
            }}
          >
            <span style={{ width: '16px', height: '1.5px', backgroundColor: '#ef4444' }} />
            <span>CONTACT</span>
            <span style={{ width: '16px', height: '1.5px', backgroundColor: '#ef4444' }} />
          </div>

          <h2
            style={{
              fontSize: 'clamp(36px, 5.5vw, 64px)',
              fontWeight: '800',
              letterSpacing: '-0.03em',
              color: '#ffffff',
              fontFamily: "'Space Grotesk', sans-serif",
              marginBottom: '18px',
              lineHeight: '1.08',
            }}
          >
            LET'S BUILD SOMETHING.
          </h2>

          <p
            style={{
              fontSize: 'clamp(16px, 1.4vw, 19px)',
              color: '#9ca3af',
              maxWidth: '620px',
              margin: '0 auto',
              lineHeight: '1.6',
            }}
          >
            Have an internship opportunity, project idea, collaboration or just want to connect?
          </p>
        </div>

        {/* Contact Action Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '18px',
            maxWidth: '1000px',
            margin: '0 auto 64px auto',
          }}
        >
          {contactChannels.map((channel) => {
            const Icon = channel.icon;
            return (
              <a
                key={channel.label}
                href={channel.href}
                target={channel.isExternal ? '_blank' : '_self'}
                rel="noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '24px 22px',
                  borderRadius: '18px',
                  backgroundColor: channel.isPrimary ? 'rgba(239, 68, 68, 0.12)' : '#121214',
                  border: channel.isPrimary ? '1px solid rgba(239, 68, 68, 0.4)' : '1px solid rgba(255, 255, 255, 0.08)',
                  textDecoration: 'none',
                  color: '#ffffff',
                  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.borderColor = '#ef4444';
                  e.currentTarget.style.backgroundColor = 'rgba(239, 68, 68, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = channel.isPrimary ? 'rgba(239, 68, 68, 0.4)' : 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.backgroundColor = channel.isPrimary ? 'rgba(239, 68, 68, 0.12)' : '#121214';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '12px',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: channel.isPrimary ? '#ef4444' : '#ffffff',
                    }}
                  >
                    <Icon size={20} />
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: '11px',
                        fontWeight: '700',
                        letterSpacing: '0.12em',
                        color: channel.isPrimary ? '#ef4444' : '#9ca3af',
                        fontFamily: "'DM Mono', monospace",
                        marginBottom: '4px',
                      }}
                    >
                      {channel.label}
                    </div>
                    <div
                      style={{
                        fontSize: '14px',
                        fontWeight: '600',
                        color: '#ffffff',
                        fontFamily: "'Space Grotesk', sans-serif",
                      }}
                    >
                      {channel.value}
                    </div>
                  </div>
                </div>

                <div style={{ color: channel.isPrimary ? '#ef4444' : '#9ca3af' }}>
                  {channel.isPrimary ? <ArrowRight size={18} /> : <ArrowUpRight size={18} />}
                </div>
              </a>
            );
          })}
        </div>

        {/* Identity Signature Card */}
        <div
          style={{
            maxWidth: '640px',
            margin: '0 auto',
            padding: '24px 32px',
            borderRadius: '18px',
            backgroundColor: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(255, 255, 255, 0.07)',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              fontSize: '20px',
              fontWeight: '700',
              fontFamily: "'Space Grotesk', sans-serif",
              color: '#ffffff',
              letterSpacing: '0.02em',
              marginBottom: '4px',
            }}
          >
            Kartik R N Gupta
          </div>
          <div
            style={{
              fontSize: '13px',
              fontWeight: '600',
              color: '#ef4444',
              fontFamily: "'DM Mono', monospace",
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
            }}
          >
            CSE • AI/ML • Software Development
          </div>
        </div>
      </div>
    </section>
  );
}
