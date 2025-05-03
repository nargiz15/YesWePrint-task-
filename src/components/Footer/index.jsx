import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-section">
            <a href='#' className="footer-title">YesWePrint</a>
            <p className="footer-text">Azərbaycanın ən etibarlı onlayn alış-veriş platforması</p>
          </div>
          <div className="footer-section">
            <h4 className="footer-title">Müştəri Xidmətləri</h4>
            <ul className="footer-list">
              <li><a href="#" className="footer-link">Tez-tez verilən suallar</a></li>
              <li><a href="#" className="footer-link">Sifariş izləmə</a></li>
              <li><a href="#" className="footer-link">Qaytarma və dəyişmə</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4 className="footer-title">Haqqımızda</h4>
            <ul className="footer-list">
              <li><a href="#" className="footer-link">Şirkət haqqında</a></li>
              <li><a href="#" className="footer-link">Karyera</a></li>
              <li><a href="#" className="footer-link">Satıcı ol</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4 className="footer-title">Endirimlər</h4>
            <ul className="footer-list">
              <li><a href="#" className="footer-link">Günün təklifləri</a></li>
              <li><a href="#" className="footer-link">Flash satış</a></li>
              <li><a href="#" className="footer-link">Toptan endirim</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;