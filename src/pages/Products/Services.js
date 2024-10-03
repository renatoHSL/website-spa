// src/pages/Services/Services.js
import React from 'react';
import '../Products/ServicesCategory.css'; // Importa o CSS para estilização
import { Link } from 'react-router-dom'; // Importa Link para navegação interna
import productsData from '../../data/productsData'; // Importa os dados dos produtos

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
                  {/* Usa a imagem do primeiro produto da categoria como miniatura */}
                  <img src={category.image} alt={category.category} />
                </div>
                <div className="item-info">
                  <h2>{category.category}</h2>
                  {/* Exibe a descrição da categoria */}
                  <p>{category.description}</p> {/* Corrigido para exibir a descrição da categoria */}
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
