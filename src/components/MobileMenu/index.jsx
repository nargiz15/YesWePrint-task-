import React from 'react';
import { X } from 'lucide-react';
import './MobileMenu.css';

const MobileMenu = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="mobile-menu">
            <div className="mobile-menu-content">
                <button onClick={onClose} className="close-button">
                    <X size={24} />
                </button>
                <nav className="mobile-nav">
                    <a href="#">Geyim</a>
                    <a href="#">Elektronika</a>
                    <a href="#">Zinət əşyaları</a>
                </nav>
            </div>
        </div>
    );
};

export default MobileMenu;