// src/pages/ProductDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { categories } from '../data/productsData';
import ProductPage from '../components/ProductPage';

const ProductDetails = () => {
    const { categoryId, productId } = useParams();
    const category = categories.find((cat) => cat.id === categoryId);
    const product = category?.products.find((prod) => prod.id === productId);

    if (!category || !product) {
        return <div>Produto não encontrado!</div>;
    }

    return <ProductPage product={product} />;
};

export default ProductDetails;
