import React, { useState } from 'react';
import './Gallery.css';

const images = [
    { src: '/assignment1.png', alt: 'Assignment 1 Screenshot' },
    { src: '/assignment2.png', alt: 'Assignment 2 Screenshot' },
    { src: '/assignment3.png', alt: 'Assignment 3 Screenshot' },
    { src: '/assignment4.png', alt: 'Assignment 4 Screenshot' },
    { src: '/assignment5.png', alt: 'Assignment 5 Screenshot' },
    { src: '/assignment6.png', alt: 'Assignment 6 Screenshot' },
];

function Gallery() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [zoomed, setZoomed] = useState(false);

    const showPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const showNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    const toggleZoom = () => {
        setZoomed((prevZoom) => !prevZoom);
    };

    return (
        <div className="gallery-container">
            <h1>Gallery</h1>
            <div className="carousel">
                <button className="arrow arrow-left" onClick={showPrevious}>
                    &#8592;
                </button>
                <div className="image-container" onClick={toggleZoom}>
                    <img
                        src={images[currentIndex].src}
                        alt={images[currentIndex].alt}
                        className={zoomed ? 'zoomed-out' : ''}
                    />
                </div>
                <button className="arrow arrow-right" onClick={showNext}>
                    &#8594;
                </button>
            </div>

            {zoomed && (
                <div className="lightbox" onClick={toggleZoom}>
                    <img
                        src={images[currentIndex].src}
                        alt={images[currentIndex].alt}
                        className="lightbox-image"
                    />
                </div>
            )}
        </div>
    );
}

export default Gallery;
