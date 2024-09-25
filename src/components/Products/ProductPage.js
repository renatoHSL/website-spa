// src/components/ProductPage.js
import React from 'react';
import './ProductPage.css';

const ProductPage = ({ product }) => {
  return (
    <div className="product-page">
      <img src={product.image} alt={product.title} className="product-image" />
      <h1 className="product-title">{product.title}</h1>
      <p className="product-description">{product.description}</p>

      {/* Renderiza a finalidade apenas se existir */}
      {product.purpose && (
        <div className="product-purpose">
          <h3>Finalidade:</h3>
          <p>{product.purpose}</p>
        </div>
      )}

      <div className="product-details">
        <p><strong>Duração:</strong> {product.duration}</p>
        <p><strong>Preço:</strong> {product.price}</p>
      </div>

      {/* Renderiza as notas apenas se existirem */}
      {product.notes && (
        <div className="product-notes">
          <h4>Observações:</h4>
          <p>{product.notes}</p>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
