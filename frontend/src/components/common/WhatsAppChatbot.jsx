import React, { useState } from 'react';
import '../../styles/components/WhatsAppChatbot.css';

export const WhatsAppButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const studioPhone = '916204792443';
  const defaultMessage = 'Hello PVMP Studio! I would like to inquire about wedding photography and date availability.';

  const handleDirectWhatsApp = () => {
    const encoded = encodeURIComponent(defaultMessage);
    window.open(`https://wa.me/${studioPhone}?text=${encoded}`, '_blank');
  };

  return (
    <div className="whatsapp-floating-container">
      {/* Tooltip on hover */}
      {isHovered && (
        <div className="whatsapp-tooltip">
          <span>Chat on WhatsApp</span>
        </div>
      )}

      {/* Floating Direct WhatsApp Button */}
      <button
        onClick={handleDirectWhatsApp}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="whatsapp-floating-btn"
        aria-label="Direct WhatsApp Chat"
      >
        {/* Official Authentic WhatsApp Logo */}
        <svg
          viewBox="0 0 24 24"
          width="36"
          height="36"
          fill="#ffffff"
          className="whatsapp-svg-logo"
        >
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.16 12.04 20.16C10.66 20.16 9.3 19.8 8.09 19.11L7.79 18.94L4.66 19.76L5.49 16.71L5.3 16.41C4.55 15.14 4.14 13.56 4.14 11.92C4.15 7.38 7.84 3.67 12.05 3.67ZM8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7 8.5 7 9.71C7 10.93 7.89 12.1 8.01 12.26C8.14 12.43 9.74 14.9 12.21 15.96C12.8 16.22 13.25 16.37 13.61 16.48C14.2 16.67 14.74 16.64 15.17 16.58C15.64 16.51 16.63 15.98 16.84 15.39C17.05 14.8 17.05 14.3 16.99 14.19C16.92 14.08 16.77 14.01 16.53 13.9C16.3 13.78 15.16 13.22 14.95 13.14C14.74 13.06 14.59 13.02 14.43 13.26C14.28 13.5 13.84 14.01 13.71 14.17C13.58 14.32 13.44 14.34 13.21 14.23C12.98 14.11 12.23 13.87 11.35 13.08C10.66 12.47 10.19 11.71 10.06 11.48C9.93 11.25 10.04 11.13 10.16 11.01C10.27 10.9 10.4 10.72 10.53 10.58C10.65 10.43 10.69 10.33 10.77 10.17C10.85 10.01 10.81 9.87 10.75 9.75C10.69 9.63 10.24 8.53 10.06 8.08C9.88 7.64 9.69 7.7 9.55 7.69L9.12 7.69C8.97 7.69 8.73 7.65 8.53 7.33Z"/>
        </svg>
      </button>
    </div>
  );
};

export default WhatsAppButton;
