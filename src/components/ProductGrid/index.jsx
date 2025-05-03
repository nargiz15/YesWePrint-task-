import React, { useState, useEffect } from 'react';
import ProductCard from '../ProductCard';
import './ProductGrid.css';

const ProductGrid = ({ onAddToCart, onToggleFavorite, favorites }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="product-grid-section">
      <h3 className="product-grid-title">Bu Həftənin Ən Populyar Məhsulları</h3>
      <div className="product-grid">
        {products.map(product => (
          <ProductCard 
            key={product.id} 
            product={product}
            onAddToCart={onAddToCart}
            onToggleFavorite={onToggleFavorite}
            isFavorite={favorites.includes(product.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;