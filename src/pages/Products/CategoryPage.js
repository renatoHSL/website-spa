// src/pages/CategoryPage/CategoryPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import productsData from '../../data/productsData';
import { Link } from 'react-router-dom';
import './ServicesCategory.css';

const CategoryPage = () => {
  const { categoryId } = useParams();

  // Verifica se o categoryId corresponde a uma categoria válida no productsData
  const category = productsData.find(cat => cat.category.toLowerCase().replace(/\s+/g, '-') === categoryId);

  if (!category) {
    // Se category for undefined, exibe uma mensagem de erro para o usuário
    return <div>Categoria não encontrada!</div>;
  }

  return (
    <div className="page">
      <main>
        <div className="title-page-name">
          <h1>{category.category}</h1>
        </div>
        <div className="list">
          {category.products.map((product) => (
            <div className="item-card" key={product.id}>
              <Link to={`/services/${categoryId}/${product.id}`} className="item-link">
                <div className="item-image">
                  <img src={product.image} alt={product.title}/>
                </div>
                <div className="item-info">
                  <h2>{product.title}</h2>
                  <p>{product.description}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default CategoryPage;
