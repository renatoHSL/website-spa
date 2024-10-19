import React from 'react';
import '../Products/ServicesCategory.css';
import { Link } from 'react-router-dom';
import productsData from '../../data/productsData';

const Services = () => {
  return (
    <div className="page">
      <main>
        <div className="title-page-name">
          <h1>Nossos Serviços</h1>
        </div>
        <div className="list">
          {productsData.map((category, index) => (
            <div className="item-card" key={index}>
              <Link to={`/services/${category.category.toLowerCase().replace(/\s+/g, '-')}`} className="item-link">
                <div className="item-image">
                  <img src={category.image} alt={category.category} />
                </div>
                <div className="item-info">
                  <h2>{category.category}</h2>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Services;
