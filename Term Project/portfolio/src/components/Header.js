import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <header className="App-header">
            <div className="logo-container">
                <img src="/logo.png" alt="Mia's Logo" className="App-logo" />
            </div>
            <div className="header-center">
                <h1 className="header-title">Mia's Portfolio</h1>
                <nav>
                    <ul className="nav-links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/portfolio">Project</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/resume">Resume</Link></li>
                        <li><Link to="/gallery">Gallery</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
