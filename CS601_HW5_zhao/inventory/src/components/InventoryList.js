import React, { useEffect, useState } from 'react';
import InventoryItem from './InventoryItem.js';
import './InventoryList.css';

function InventoryList() {
    const [inventory, setInventory] = useState([]);

    useEffect(() => {
        // Fetch data from the JSON file in the public folder
        fetch('/inventory.json')
        .then(response => response.json())
        .then(data => setInventory(data.items))
        .catch(error => console.error('Error fetching inventory:', error));
    }, []);

    return (
        <div className="inventory-list">
        {inventory.map(item => (
            <InventoryItem
            key={item.sku}
            sku={item.sku}
            name={item.name}
            qty={item.qty}
            price={item.price}
            />
        ))}
        </div>
    );
}

export default InventoryList;