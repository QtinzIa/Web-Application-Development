import React from 'react';
import './Portfolio.css';

function Portfolio() {
    return (
        <div className="portfolio-container">
            <h1>My Projects</h1>
            <section id="projects" className="project-grid">
                <a href="https://github.com/QtinzIa/Final-Game" target="_blank" rel="noopener noreferrer" className="project">
                    <h3>Puzzle Game</h3>
                    <p>Turn over two identical cards to eliminate them, and eventually eliminate all cards.</p>
                </a>
                <a href="https://github.com/QtinzIa/Endless-Runner" target="_blank" rel="noopener noreferrer" className="project">
                    <h3>Endless Game</h3>
                    <p>Catch the food falling from the sky and avoid the bombs. The speed will get faster and faster. Try to get a higher score.</p>
                </a>
                <a href="https://github.com/QtinzIa/RocketPatrolMods" target="_blank" rel="noopener noreferrer" className="project">
                    <h3>Rocket Patrol</h3>
                    <p>Two-player game, try to catch the moving enemies and try to get a higher score.</p>
                </a>
                <a href="https://github.com/stao7/Lost_Memories" target="_blank" rel="noopener noreferrer" className="project">
                    <h3>Text-based Game</h3>
                    <p>Text-based adventure game, make your choices carefully and achieve different story endings.</p>
                </a>
                <a href="https://github.com/QtinzIa/bgm-for-lol-shortcut" target="_blank" rel="noopener noreferrer" className="project" data-category="music">
                    <h3>BGM Design</h3>
                    <p>A League of Legends MV with designed music and sound effects.</p>
                </a>
            </section>
        </div>
    );
}

export default Portfolio;
