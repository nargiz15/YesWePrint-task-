import React from 'react';
import { Truck, Shield, RefreshCw } from 'lucide-react';
import './Features.css';

const Features = () => {
  return (
    <div className="features">
      <div className="features-container">
        <div className="features-grid">
          <div className="feature-item">
            <Truck className="feature-icon" size={40} />
            <div className="feature-content">
              <h3 className="feature-title">Pulsuz Çatdırılma</h3>
              <p className="feature-text">100₼+ sifarişlər üçün</p>
            </div>
          </div>
          <div className="feature-item">
            <Shield className="feature-icon" size={40} />
            <div className="feature-content">
              <h3 className="feature-title">Təhlükəsiz Alış-veriş</h3>
              <p className="feature-text">100% Keyfiyyət Zəmanəti</p>
            </div>
          </div>
          <div className="feature-item">
            <RefreshCw className="feature-icon" size={40} />
            <div className="feature-content">
              <h3 className="feature-title">Asan Geri Qaytarma</h3>
              <p className="feature-text">14 gün daxilində</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;