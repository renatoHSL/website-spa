import React from 'react';
import './Header.css';
import { Link, useLocation } from 'react-router-dom';
import logo from "../../assets/header/logo-header/header-logo.png";
import DropdownMenu from '../DropdownMenu/DropdownMenu';

const Header = () => {
  const location = useLocation();

  const handleContactClick = (e) => {
    e.preventDefault();

    if (location.pathname === "/") {
      const contactSection = document.getElementById("contact-section");
      if (contactSection) {
        setTimeout(() => {
          contactSection.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
      window.open("https://wa.me/5521996914156", "_blank", "noopener,noreferrer");
    }
  };

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <img src={logo} alt="EGN Estética e SPA" />
        </div>
        <div className="header-nav-logo">
          <nav className="header__nav">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">Sobre nós</Link></li>
              <li><DropdownMenu /></li>
              <li>
                <a href="/#contact-section" onClick={handleContactClick}>Contato</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
