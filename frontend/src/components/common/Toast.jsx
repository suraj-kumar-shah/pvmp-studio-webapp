import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export const Toast = () => {
  const { toastMessage } = useCart();

  if (!toastMessage) return null;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 99999,
        background: '#181a1f',
        color: '#ffffff',
        border: '1px solid var(--accent-gold)',
        boxShadow: '0 12px 36px rgba(0, 0, 0, 0.6), 0 0 20px rgba(197, 168, 128, 0.25)',
        padding: '1rem 1.4rem',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        gap: '0.85rem',
        animation: 'slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        maxWidth: '90vw'
      }}
    >
      <CheckCircle2 size={20} color="var(--accent-gold-light)" />
      <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem', fontWeight: 500 }}>
        {toastMessage}
      </span>
    </div>
  );
};

export default Toast;
