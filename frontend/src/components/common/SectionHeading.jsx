import React from 'react';

export const SectionHeading = ({
  eyebrow,
  title,
  subtitle,
  centered = false,
  light = false,
  className = ''
}) => {
  return (
    <div
      className={`section-heading ${centered ? 'text-center' : ''} ${className}`}
      style={{
        textAlign: centered ? 'center' : 'left',
        marginBottom: '3rem',
        maxWidth: centered ? '780px' : '680px',
        marginLeft: centered ? 'auto' : '0',
        marginRight: centered ? 'auto' : '0'
      }}
    >
      {eyebrow && (
        <span className="eyebrow" style={{ color: light ? 'var(--accent-gold-light)' : 'var(--accent-gold)' }}>
          {eyebrow}
        </span>
      )}
      {title && (
        <h2
          style={{
            marginTop: '0.4rem',
            marginBottom: '1rem',
            color: light ? '#ffffff' : 'var(--text-primary)',
            fontSize: 'clamp(2rem, 3.2vw + 0.5rem, 3.1rem)'
          }}
        >
          {title}
        </h2>
      )}
      {subtitle && (
        <p
          style={{
            color: light ? '#d0cbc2' : 'var(--text-secondary)',
            fontSize: '1.05rem',
            lineHeight: 1.7
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
