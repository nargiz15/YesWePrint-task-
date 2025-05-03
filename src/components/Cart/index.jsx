import React from 'react';
import { X } from 'lucide-react';
import './Cart.css';

const Cart = ({ items, onRemoveItem, onClose }) => {
  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="cart-overlay">
      <div className="cart-content">
        <div className="cart-header">
          <h2 className="cart-title">Alış-veriş Səbətim ({items.length})</h2>
          <button onClick={onClose} className="cart-close-button">
            <X size={24} />
          </button>
        </div>
        
        {items.length === 0 ? (
          <p className="cart-empty">Səbətiniz boşdur</p>
        ) : (
          <>
            <div className="cart-items">
              {items.map((item, index) => (
                <div key={index} className="cart-item">
                  <img src={item.image} alt={item.name} className="cart-item-image" />
                  <div className="cart-item-details">
                    <h3 className="cart-item-name">{item.name}</h3>
                    <p className="cart-item-price">{item.price} ₼</p>
                    <p className="cart-item-quantity">Miqdar: {item.quantity}</p>
                  </div>
                  <button 
                    onClick={() => onRemoveItem(index)}
                    className="cart-item-remove"
                  >
                    <X size={20} />
                  </button>
                </div>
              ))}
            </div>
            
            <div className="cart-footer">
              <div className="cart-total">
                <span className="cart-total-label">Ümumi məbləğ:</span>
                <span className="cart-total-amount">{total.toFixed(2)} ₼</span>
              </div>
              <button className="checkout-button">
                Sifarişi Rəsmiləşdir
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;