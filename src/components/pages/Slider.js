import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
// import { Link } from "react-router-dom";

const Slider = () => {

  return (
 
    <Carousel>
        <div className="slider-content-section">
            <div className="slider-image">
                <img src="images/Reward1.png" />
            </div>
            <div className="slider-content">
                <h4>কুইজার্স রিওয়ার্ড</h4>
                <p>অর্জন করে লুফে নাও দারুন সব
                আকর্ষণীয় অফার</p>
                <a href="#">ক্লিক কর</a>
            </div>
        </div>
        <div className="slider-content-section">
            <div className="slider-image">
                <img src="images/Reward1.png" />
            </div>
            <div className="slider-content">
                <h4>কুইজার্স রিওয়ার্ড</h4>
                <p>অর্জন করে লুফে নাও দারুন সব
                আকর্ষণীয় অফার</p>
                <a href="#">ক্লিক কর</a>
            </div>
        </div>
        <div className="slider-content-section">
            <div className="slider-image">
                <img src="images/Reward1.png" />
            </div>
            <div className="slider-content">
                <h4>কুইজার্স রিওয়ার্ড</h4>
                <p>অর্জন করে লুফে নাও দারুন সব
                আকর্ষণীয় অফার</p>
                <a href="#">ক্লিক কর</a>
            </div>
        </div>
    </Carousel>
        
        

  );
};

export default Slider;
