import React from "react";
import video from "../../assets/video.mp4";
import "../styles/Hero.css";

function Hero() {
    return (
        <div className="video-container" style={{ width: '100vw'}}>
            <video controls style={{ width: '100vw', height: '100vh', objectFit: 'contain' }}>
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default Hero;
