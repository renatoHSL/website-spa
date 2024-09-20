import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import logo from "../assets/header/logo-header/header-logo.png";
import { FaInstagram } from 'react-icons/fa'; // Ícone do Instagram
import DropdownMenu from './DropdownMenu'; // Importa o componente DropdownMenu

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        {/* Logotipo Centralizado */}
        <div className="header__logo">
          <img src={logo} alt="EGN Estética e SPA" />
        </div>
        <div className="header-nav-logo">
            {/* Menu de Navegação Abaixo do Logo */}
            <nav className="header__nav">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">Sobre nós</Link></li>
                <li><DropdownMenu /></li>
                <li><a href="#contato">Contato</a></li>
                <li><Link to="/reviews">Reviews</Link></li>
                <li><a href="https://www.instagram.com/egnestetica/" target="_blank" rel="noopener noreferrer"><FaInstagram className="social-icon" /></a></li>
              </ul>
            </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
