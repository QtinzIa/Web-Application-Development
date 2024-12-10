import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InventoryList from './components/InventoryList';
import ProductDetail from './components/ProductDetail';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <h1>Mia's Grocery Store</h1>
                    <img src="/logo.png" alt="Store Logo" className="store-logo" />
                </header>
                <main className="App-main">
                    <Routes>
                        <Route path="/" element={<InventoryList />} />
                        <Route path="/product/:sku" element={<ProductDetail />} />
                    </Routes>
                </main>
                <footer className="App-footer">
                    <p>&copy; 2024 Mia's Grocery Store</p>
                </footer>
            </div>
        </Router>
    );
}

export default App;