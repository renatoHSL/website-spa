import React from 'react';
import './Header.css';
import { Link, useLocation } from 'react-router-dom';
import logo from "../../assets/header/logo-header/header-logo.png";
import DropdownMenu from '../DropdownMenu/DropdownMenu'; // Importa o componente DropdownMenu

const Header = () => {
  const location = useLocation();

  // Função para tratar o clique no botão de Contato
  const handleContactClick = (e) => {
    e.preventDefault(); // Evita o comportamento padrão do link

    if (location.pathname === "/") {
      // Se estiver na página Home, rolar para a seção de contatos
      const contactSection = document.getElementById("/#contato");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Se estiver em outra página, redirecionar para o WhatsApp
      window.location.href = "https://wa.me/5511999999999"; // Coloque seu número de WhatsApp aqui
    }
  };

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
              <li>
                <a href="/#contato" onClick={handleContactClick}>Contato</a> {/* Botão de Contato */}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
