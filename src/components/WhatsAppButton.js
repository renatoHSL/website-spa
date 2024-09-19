import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Importa o componente de ícones
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'; // Importa o ícone específico do WhatsApp
import './WhatsAppButton.css'; // Importe o CSS específico para o botão

const WhatsAppButton = () => {
    return (
        <a
            href="https://wa.me/5511999999999"
            className="whatsapp-float"
            target="_blank"
            rel="noopener noreferrer"
        >
            <FontAwesomeIcon icon={faWhatsapp} size="2x" /> {/* Usa o ícone do Font Awesome */}
        </a>
    );
};

export default WhatsAppButton;
