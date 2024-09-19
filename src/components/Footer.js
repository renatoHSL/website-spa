import React from 'react';
import './Footer.css';
import logo from '../assets/header/logo-header/header-logo.png'; // Caminho da imagem do logotipo
import { FaInstagram } from 'react-icons/fa'; // Ícone do Instagram

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Seção de logo */}
        <div className="footer-logo">
          <img src={logo} alt="EGN Estética e SPA" />
        </div>

        {/* Seção de Menu */}
        <div className="footer-menu">
          <h3>MENU</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Serviços</a></li>
            <li><a href="#reviews">Reviews</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>
        </div>

        {/* Seção de Redes Sociais */}
        <div className="footer-social">
          <h3>NOSSAS REDES</h3>
          <a href="https://www.instagram.com/egnestetica/" target="_blank" rel="noopener noreferrer"><FaInstagram className="social-icon" /></a>
        </div>
      </div>

      {/* Direitos reservados */}
      <div className="footer-rights">
        <p>EGN © 2024 Direitos reservados. <a href="#privacy">Política de Privacidade</a></p>
      </div>
    </footer>
  );
};

export default Footer;
