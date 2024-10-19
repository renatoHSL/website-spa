import React from 'react';
import { Link } from 'react-router-dom';
import './DropdownMenu.css';
import productsData from '../../data/productsData';

const DropdownMenu = () => {
  return (
    <div className="dropdown">
      <Link to="/services" className="dropbtn">
        Serviços
      </Link>
      <div className="dropdown-content">
        {productsData.map((category, index) => (
          <Link
            key={index}
            to={`/services/${category.category.toLowerCase().replace(/\s+/g, '-')}`}
          >
            {category.category}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DropdownMenu;
