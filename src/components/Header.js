import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import logo from "../assets/header/logo-header/header-logo.png";
{/* import instagramIcon from "../assets/instagram-icon.png"; */}

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        {/* Logotipo Centralizado */}
        <div className="header__logo">
          <img src={logo} alt="EGN Estética e SPA" />
        </div>

        {/* Menu de Navegação Abaixo do Logo */}
        <nav className="header__nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">Sobre nós</Link></li>
            <li><Link to="/services">Serviços</Link></li>
            <li><Link to="/contact">Contato</Link></li>
            <li><Link to="/reviews">Reviews</Link></li>
          </ul>
        </nav>

        {/* Ícone de Instagram à Direita
        <div className="header__social">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="Instagram" />
          </a>
        </div>
         */}
      </div>
    </header>
  );
};

export default Header;
