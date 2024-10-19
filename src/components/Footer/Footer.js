import React from 'react';
import './Footer.css';
import logo from '../../assets/header/logo-header/header-logo.png';
import { FaInstagram, FaFacebook } from 'react-icons/fa';


//TODO
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={logo} alt="EGN Estética e SPA" />
        </div>

        <div className="footer-menu">
          <h3>MENU</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">Sobre nós</a></li>
            <li><a href="/services">Serviços</a></li>
            <li><a href="https://wa.me/5521996914156" target="_blank" rel="noopener noreferrer">Contato</a></li>
          </ul>
        </div>

        <div className="footer-social">
          <h3>NOSSAS REDES</h3>
            <a href="https://www.instagram.com/egnestetica/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="social-icon" />
            </a>

            <a href="https://www.facebook.com/egnestetica" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="social-icon" />
            </a>
        </div>

      </div>

      <div className="footer-rights">
        <p>EGN © 2024 Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
