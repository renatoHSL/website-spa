// src/pages/ReviewsPage/ReviewsPage.js
import './ReviewsPage.css'; // Importa o arquivo de estilo CSS
import React from 'react';

const ReviewsPage = () => {
  return (
    <div className="reviews-page">
      <h1>Avaliações do Nosso Spa</h1>
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3154.6261234446984!2d-43.234223699995525!3d-22.925689899991152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDU1JzMyLjUiUyA0M8KwMTQnMDMuMiJX!5e0!3m2!1spt-BR!2sbr!4v1630461013475!5m2!1spt-BR!2sbr"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Google Maps Location"
        ></iframe>
      </div>
    </div>
  );
};

export default ReviewsPage;
