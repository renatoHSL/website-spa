// src/pages/Services/Services.js
import React from 'react';
import './Services.css'; // Importa o CSS para estilização
import { Link } from 'react-router-dom'; // Importa Link para navegação interna
import productsData from '../../data/productsData'; // Importa os dados dos produtos

const Services = () => {
  return (
    <div className="services-page">
      <main>
        <h1>Nossos Serviços</h1>
        <div className="services-list">
          {productsData.map((category, index) => (
            <div className="service-item" key={index}>
              <Link to={`/services/${category.category.toLowerCase().replace(/\s+/g, '-')}`} className="service-link">
                <div className="service-image">
                  {/* Usa a imagem do primeiro produto da categoria como miniatura */}
                  <img src={category.products[0].image} alt={category.category} />
                </div>
                <div className="service-info">
                  <h2>{category.category}</h2>
                  <p>{category.products[0].description}</p> {/* Breve descrição do primeiro produto */}
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
