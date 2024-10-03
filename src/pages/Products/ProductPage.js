// src/pages/ProductPage/ProductPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import productsData from '../../data/productsData';
import './ProductsPage.css';

const ProductPageWrapper = () => {
  const { productId } = useParams();

  const product = productsData
    .flatMap(category => category.products)
    .find(prod => prod.id === productId);

  if (!product) {
    return <div>Produto não encontrado!</div>;
  }

  return <ProductPage product={product} />;
};

const ProductPage = ({ product }) => {
  return (
    <div className="product-page">
      <div className="product-page-content"> {/* Adiciona esse contêiner */}
        <img src={product.image} alt={product.title} className="product-image" />
        <div className="product-details">
          <h1 className="product-title">{product.title}</h1>
          <p className="product-description">{product.description}</p>

          {product.purpose && (
            <div className="product-purpose">
              <h3>Finalidade:</h3>
              <p>{product.purpose}</p>
            </div>
          )}

          <div className="product-duration">
            <p><strong>Duração:</strong> {product.duration}</p>
            <p><strong>Preço:</strong> {product.price}</p>
          </div>

          {product.notes && (
            <div className="product-notes">
              <h4>Observações:</h4>
              <p>{product.notes}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};


export default ProductPageWrapper;
