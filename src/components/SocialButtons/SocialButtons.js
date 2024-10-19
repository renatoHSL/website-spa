import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './SocialButtons.css';

const SocialButtons = () => {
  const whatsappUrl = `https://wa.me/5521996914156`;
  const instagramUrl = `https://www.instagram.com/egnestetica/`;

  return (
    <div className="social-buttons-container">
      {/* Botão do WhatsApp */}
      <a
        href={whatsappUrl}
        className="social-button whatsapp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faWhatsapp} size="2x" />
      </a>

      {/* Botão do Instagram */}
      <a
        href={instagramUrl}
        className="social-button instagram"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
    </div>
  );
};

export default SocialButtons;
