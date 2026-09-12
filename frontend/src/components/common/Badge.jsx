import React from 'react';

export const Badge = ({ children, variant = 'gold', className = '' }) => {
  const variantStyles = {
    gold: {
      background: 'var(--accent-gold-subtle)',
      color: 'var(--accent-gold-light)',
      borderColor: 'var(--border-gold)'
    },
    dark: {
      background: 'rgba(255, 255, 255, 0.08)',
      color: '#ffffff',
      borderColor: 'rgba(255, 255, 255, 0.15)'
    },
    accent: {
      background: 'rgba(223, 183, 115, 0.2)',
      color: '#f0caa0',
      borderColor: 'rgba(223, 183, 115, 0.4)'
    }
  };

  const current = variantStyles[variant] || variantStyles.gold;

  return (
    <span
      className={`badge ${className}`}
      style={{
        ...current,
        display: 'inline-flex',
        alignItems: 'center',
        padding: '0.25rem 0.75rem',
        fontSize: '0.7rem',
        fontWeight: 600,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        borderRadius: '9999px',
        border: `1px solid ${current.borderColor}`
      }}
    >
      {children}
    </span>
  );
};

export default Badge;
