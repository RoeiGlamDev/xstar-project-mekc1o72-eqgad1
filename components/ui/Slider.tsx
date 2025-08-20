import React from 'react';
import './Slider.css'; // Importing CSS for styling

const Slider: React.FC = () => {
    return (
        <div className="slider-container"> {/* Container for the slider */}
            <div className="slider"> {/* Slider element */}
                <div className="slide"> {/* Individual slide */}
                    <img src="/images/slide1.jpg" alt="Luxury Cosmetic 1" /> {/* Image for slide */}
                </div>
                <div className="slide"> {/* Individual slide */}
                    <img src="/images/slide2.jpg" alt="Luxury Cosmetic 2" /> {/* Image for slide */}
                </div>
                <div className="slide"> {/* Individual slide */}
                    <img src="/images/slide3.jpg" alt="Luxury Cosmetic 3" /> {/* Image for slide */}
                </div>
            </div>
            <div className="slider-controls"> {/* Controls for the slider */}
                <button className="prev">❮</button> {/* Previous button */}
                <button className="next">❯</button> {/* Next button */}
            </div>
        </div>
    );
};

export default Slider; // Default export of the Slider component