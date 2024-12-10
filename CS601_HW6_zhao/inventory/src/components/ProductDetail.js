// src/components/ProductDetail.js
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function ProductDetail() {
    const { sku } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = React.useState(null);

    React.useEffect(() => {
        fetch('/inventory.json')
            .then(response => response.json())
            .then(data => {
                const item = data.items.find(p => p.sku === sku);
                setProduct(item);
            })
            .catch(error => console.error('Error fetching product details:', error));
    }, [sku]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <img src={product.image} alt={product.name} style={{ maxWidth: '300px', margin: '20px 0' }} />
            <p>Price: ${product.price.toFixed(2)}</p>
            <p>Quantity Available: {product.qty}</p>
            <button onClick={() => navigate('/')} style={{ padding: '10px 20px', cursor: 'pointer' }}>Back to Home</button>
        </div>
    );
}

export default ProductDetail;
