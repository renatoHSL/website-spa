// src/pages/CategoryPage/CategoryPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import productsData from '../../data/productsData';
import './ProductsStyles.css';

const CategoryPage = () => {
  const { categoryId } = useParams();

  // Verifica se o categoryId corresponde a um category válido no productsData
  const category = productsData.find(cat => cat.category.toLowerCase().replace(/\s+/g, '-') === categoryId);

  if (!category) {
    // Se category for undefined, exibe uma mensagem de erro para o usuário
    return <div>Categoria não encontrada!</div>;
  }

  return (
    <div className="category-page">
      <h1>{category.category}</h1>
      <div className="products-list">
        {category.products.map((product) => (
          <div className="product-item" key={product.id}>
            <img src={product.image} alt={product.title} className="product-image" />
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p><strong>Duração:</strong> {product.duration}</p>
            <p><strong>Preço:</strong> {product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
