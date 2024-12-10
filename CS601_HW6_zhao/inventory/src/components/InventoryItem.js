import React from 'react';
import { Link } from 'react-router-dom';
import './InventoryItem.css';

function InventoryItem({ sku, name, qty, price }) {
    const backgroundColors = ["#f8d7da", "#d1ecf1", "#d4edda", "#efe2ff", "#cce5ff"];
    const backgroundColor = backgroundColors[parseInt(sku) % backgroundColors.length];
    return (
        <Link to={`/product/${sku}`} style={{ textDecoration: 'none' }}>
            <div className="inventory-item" style={{ backgroundColor }}>
                <p>SKU: {sku}</p>
                <p>Name: {name}</p>
                <p>Quantity: {qty}</p>
                <p>Price: ${price.toFixed(2)}</p>
            </div>
        </Link>
    );
}

export default InventoryItem;
