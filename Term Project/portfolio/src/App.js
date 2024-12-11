import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Gallery from './components/Gallery';

function App() {
    const getGreeting = () => {
        const hour = new Date().getHours();
        if (hour < 12) return "Good morning!";
        if (hour < 18) return "Good afternoon!";
        return "Good evening!";
    };

    return (
        <Router>
            <div className="App">
                <Header />
                <main className="App-main">
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <Home getGreeting={getGreeting} />
                            }
                        />
                        <Route path="/about" element={<About />} />
                        <Route path="/portfolio" element={<Portfolio />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/resume" element={<Resume />} />
                        <Route path="/gallery" element={<Gallery />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
