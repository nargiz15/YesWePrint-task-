import React from 'react';
import './Banner.css';

const HeroBanner = () => {
  return (
    <div className="hero-banner">
      <div className="hero-content">
        <h2 className="hero-title">Yaz Endirimləri Başlayıb!</h2>
        <p className="hero-subtitle">Elektronika, Geyim və Zinət əşyalarında %70-ə qədər endirimlər</p>
        <button className="hero-button">
          İndi Al
        </button>
      </div>
    </div>
  );
};

export default HeroBanner;