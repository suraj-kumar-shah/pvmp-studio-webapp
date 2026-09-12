import React from 'react';

export const Button = ({
  children,
  variant = 'primary', // 'primary' | 'secondary' | 'text' | 'gold-outline'
  size = 'md', // 'sm' | 'md' | 'lg'
  onClick,
  type = 'button',
  disabled = false,
  fullWidth = false,
  className = '',
  icon: Icon,
  iconPosition = 'right'
}) => {
  const getVariantClass = () => {
    switch (variant) {
      case 'secondary':
        return 'btn-secondary';
      case 'text':
        return 'btn-text';
      case 'gold-outline':
        return 'btn-gold-outline';
      case 'primary':
      default:
        return 'btn-primary';
    }
  };

  const sizeStyles = {
    sm: { padding: '0.6rem 1.4rem', fontSize: '0.75rem' },
    md: { padding: '0.85rem 2rem', fontSize: '0.825rem' },
    lg: { padding: '1.1rem 2.6rem', fontSize: '0.9rem' }
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${getVariantClass()} ${className}`}
      style={{
        ...sizeStyles[size],
        width: fullWidth ? '100%' : 'auto',
        opacity: disabled ? 0.5 : 1,
        cursor: disabled ? 'not-allowed' : 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem'
      }}
    >
      {Icon && iconPosition === 'left' && <Icon size={16} strokeWidth={1.8} />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon size={16} strokeWidth={1.8} />}
    </button>
  );
};

export default Button;
