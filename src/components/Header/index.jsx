import React from 'react';
import { Search, ShoppingCart, User, Menu } from 'lucide-react';
import './Header.css';

const Header = ({ 
  onMenuClick, 
  cartItems, 
  onCartClick 
}) => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-content">
          <button 
            className="mobile-menu-button"
            onClick={onMenuClick}
          >
            <Menu size={20} />
          </button>
          
    
          <div className="logo">
            <a href='#'>YesWePrint</a>
          </div>
          
         
          <nav className="desktop-nav">
            <a href="#">Geyim</a>
            <a href="#">Elektronika</a>
            <a href="#">Zinət əşyaları</a>
          </nav>
          
    
          <div className="header-icons">
            <button className="icon-button">
              <Search size={20} />
            </button>
            <button className="icon-button">
              <User size={20} />
            </button>
            <button 
              className="cart-button"
              onClick={onCartClick}
            >
              <ShoppingCart size={20} />
              {cartItems.length > 0 && (
                <span className="cart-badge">
                  {cartItems.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;