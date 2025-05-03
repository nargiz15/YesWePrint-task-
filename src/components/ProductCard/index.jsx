import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import './ProductCard.css';

const ProductCard = ({ product, onAddToCart, onToggleFavorite, isFavorite = false }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleFavoriteClick = (e) => {
    e.stopPropagation(); 
    onToggleFavorite(product.id);
  };

  return (
    <div 
      className="product-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="product-image-container">
        <img 
          src={product.image} 
          alt={product.name}
          className="product-image"
        />
        {product.discount && (
          <span className="discount-badge">
            -{product.discount}%
          </span>
        )}
        <button 
          className={`favorite-button ${isHovered ? 'visible' : ''} ${isFavorite ? 'active' : ''}`}
          onClick={handleFavoriteClick}
        >
          <Heart 
            size={18} 
            className="heart-icon" 
            fill={isFavorite ? '#ff0000' : 'none'}
            stroke={isFavorite ? '#ff0000' : 'currentColor'}
          />
        </button>
      </div>
      
      <h3 className="product-name">{product.name}</h3>
      
      <div className="product-prices">
        <span className="product-price">{product.price} ₼</span>
        {product.oldPrice && (
          <span className="product-old-price">{product.oldPrice} ₼</span>
        )}
      </div>
      
      <button 
        onClick={() => onAddToCart(product)}
        className="add-to-cart-button"
      >
        Səbətə Əlavə Et
      </button>
    </div>
  );
};

export default ProductCard;