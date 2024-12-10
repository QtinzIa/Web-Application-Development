import React from 'react';
import InventoryList from './components/InventoryList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Mia's Grocery Store</h1>
        <img src="/logo.png" alt="Store Logo" className="store-logo" />
      </header>
      <main className="App-main">
        <InventoryList />
      </main>
      <footer className="App-footer">
        <p>&copy; 2024 Mia's Grocery Store</p>
      </footer>
    </div>
  );
}

export default App;