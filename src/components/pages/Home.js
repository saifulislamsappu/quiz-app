import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

const Home = () => {

  return (
    <>
        <div className="banner">
          <div className="top-content-section">
            <div className="user-section">
              <div className="user-icon">
                  <img src="images/Person.png" alt="quiz app"/>
              </div>
              <div className="user-info">
              <p className="user-bangla">ইশতিয়াক</p>
              <p className="user-en">Level-Warrior</p>
              </div>
            </div>
            <Link to='/reward'>
            <div className="rewars-icon">
            
              <img src="images/Icon.svg" alt="quiz app"/>
              
              <p>রিওয়ার্ড</p>
            </div>
              </Link>
          </div>
          <div className="reward-card">
            <div className="reward-info">
                <p className="reward-test-normal">আপনার লেভেল :  Warrior</p>
                <p className="reward-test-bold">রিওয়ার্ড পয়েন্ট ঃ ১৫০০</p>
            </div>
            <div className="reward-lg-icon">
              <img src="images/fxemoji_trophy.svg" alt="quiz app"/>
            </div>
          </div>
        </div>
        <div className="grid-space">
        <Carousel>
        <div className="slider-content-section">
            <div className="slider-image">
                <img src="images/Reward1.png" alt="quiz-app"/>
            </div>
            <div className="slider-content">
                <h4>কুইজার্স রিওয়ার্ড</h4>
                <p>অর্জন করে লুফে নাও দারুন সব
                আকর্ষণীয় অফার</p>
                <a href="javascript:void(0)">ক্লিক কর</a>
            </div>
        </div>
        <div className="slider-content-section">
            <div className="slider-image">
                <img src="images/Reward1.png" alt="quiz-app"/>
            </div>
            <div className="slider-content">
                <h4>কুইজার্স রিওয়ার্ড</h4>
                <p>অর্জন করে লুফে নাও দারুন সব
                আকর্ষণীয় অফার</p>
                <a href="javascript:void(0)">ক্লিক কর</a>
            </div>
        </div>
        <div className="slider-content-section">
            <div className="slider-image">
                <img src="images/Reward1.png" alt="quiz-app"/>
            </div>
            <div className="slider-content">
                <h4>কুইজার্স রিওয়ার্ড</h4>
                <p>অর্জন করে লুফে নাও দারুন সব
                আকর্ষণীয় অফার</p>
                <a href="javascript:void(0)">ক্লিক কর</a>
            </div>
        </div>
    </Carousel>
    
    <div className="category-section">
          <div className="title-section">
            <h4 className="category-title">কুইজ ক্যাটাগরি পছন্দ করুন</h4>
            <img src="images/right-arrow.svg" alt="quiz-app"/>
          </div>
          <div className="category-main-grid">
          <div className="category-card">
                <div className="category-card-content">
                    <img src="images/Medal1.png" alt="quiz-app"/>
                    <p>খেলাধুলা</p>
                </div>
            </div>
            <div className="category-card">
                <div className="category-card-content">
                    <img src="images/BooksandApple.png" alt="quiz-app"/>
                    <p>তথ্যমূলক</p>
                </div>
            </div>
            <div className="category-card">
                <div className="category-card-content">
                    <img src="images/AtomBulb.png" alt="quiz-app"/>
                    <p>গুগলি</p>
                </div>
            </div>
            <div className="category-card">
                <div className="category-card-content">
                    <img src="images/Globe.png" alt="quiz-app"/>
                    <p>আন্তর্জাতিক</p>
                </div>
            </div>
            <div className="category-card">
                <div className="category-card-content">
                    <img src="images/bangladesh.png" alt="quiz-app"/>
                    <p>বাংলাদেশ</p>
                </div>
            </div>
            <div className="category-card">
                <div className="category-card-content">
                    <img src="images/HighVoltage.png" alt="quiz-app"/>
                    <p>এন্টারটেইন</p>
                </div>
            </div>
          </div>
        </div>
    </div>
    <nav className="navigation">
      <div className="navigation-menu">
        <ul className="nav-item-ul">
          <li>
            <a href="javascript:void(0)">
              <img src="images/Vector.svg" alt="quiz-app"/>
            </a>
          </li>
          <li>
            <a href="javascript:void(0)">
            <img src="images/Icon (1).svg" alt="quiz-app"/>
            </a>
          </li>
          <li>
            <a href="javascript:void(0)">
            <img src="images/Icon (2).svg" alt="quiz-app"/>
            </a>
          </li>
          <li>
            <a href="javascript:void(0)">
            <img src="images/Icon (3).svg" alt="quiz-app"/>
            </a>
          </li>
        </ul>
      </div>
    </nav>
        </>
  );
};

export default Home;
