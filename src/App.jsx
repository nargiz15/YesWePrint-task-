import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import MobileMenu from "./components/MobileMenu";
import HeroBanner from "./components/Banner";
import Features from "./components/Features";
import ProductGrid from "./components/ProductGrid";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import "./App.css";

const App = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [favorites, setFavorites] = useState([]); 

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (index) => {
    setCartItems(cartItems.filter((_, i) => i !== index));
  };

  const toggleFavorite = (productId) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.includes(productId)) {
        return prevFavorites.filter((id) => id !== productId);
      } else {
        return [...prevFavorites, productId];
      }
    });
  };

  return (
    <div className="home">
      <Header
        onMenuClick={() => setIsMobileMenuOpen(true)}
        cartItems={cartItems}
        onCartClick={() => setIsCartOpen(true)}
      />

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      <HeroBanner />

      <Features />

      <ProductGrid
        products={products}
        onAddToCart={addToCart}
        onToggleFavorite={toggleFavorite}
        favorites={favorites}
      />

      <Footer />

      {isCartOpen && (
        <Cart
          items={cartItems}
          onRemoveItem={removeFromCart}
          onClose={() => setIsCartOpen(false)}
        />
      )}
    </div>
  );
};

export default App;
