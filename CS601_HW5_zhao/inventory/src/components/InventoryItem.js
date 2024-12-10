import React from 'react';
import './InventoryItem.css';

function InventoryItem({ sku, name, qty, price }) {
    const backgroundColors = ["#f8d7da", "#d1ecf1", "#d4edda", "#efe2ff", "#cce5ff"];
    const backgroundColor = backgroundColors[parseInt(sku) % backgroundColors.length];
    return (
        <div className="inventory-item" style={{ backgroundColor }}>
        <p>SKU: {sku}</p>
        <p>Name: {name}</p>
        <p>Quantity: {qty}</p>
        <p>Price: ${price.toFixed(2)}</p>
        </div>
    );
}

export default InventoryItem;