import React from 'react';
import { Link } from 'react-router-dom';
import './DropdownMenu.css';

const DropdownMenu = () => {
  return (
    <div
      className="dropdown"
    >
      <button className="dropbtn">
        Serviços
      </button>
        <div
          className="dropdown-content">
          <Link to="/services/produto1">Bem-Estar e Relaxamento</Link>
          <Link to="/services/produto2">Estética</Link>
          <Link to="/services/produto3">Gestante e Pós-Parto</Link>
          <Link to="/services/produto4">Demais Tratamentos</Link>
          <Link to="/services/produto5">Combos</Link>
        </div>

    </div>
  );
};

export default DropdownMenu;
