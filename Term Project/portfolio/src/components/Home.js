import React from 'react';

function Home({ getGreeting }) {
    return (
        <div className="intro-container">
            <img src="/selfie.jpg" alt="Mia's Selfie" className="selfie" />
            <div className="intro-text">
                <h2>{getGreeting()}</h2>
                <p>
                    My name is Mia, and welcome to my personal portfolio! Here, you'll find information about me, 
                    my skills, and the projects I've worked on. This website is your one-stop destination to explore 
                    my journey in web development and interactive media. Feel free to navigate through the sections 
                    to learn more about me!
                </p>
            </div>
        </div>
    );
}

export default Home;
