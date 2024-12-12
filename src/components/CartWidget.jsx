import React from 'react';
import './CartWidget.css';

const CartWidget = () => {
    return (
        <div className="cart-widget">
            <span className="cart-icon">🛒</span>
            <span className="cart-count">3</span> {/* Número hardcodeado */}
        </div>
    );
};

export default CartWidget;
