import React, { useState } from "react";
import {Link} from "react-router-dom";
import Modal from "./Modal";

// import { Link } from "react-router-dom";

const Rewards = () => {
  const [modalOpen,setModalOpen]=useState(false)

  const handleModal=()=>{
    setModalOpen(true)
  }
  // if(modalOpen===false){
  //   return null
  // }

  return (
    <>
        <style>{'.App { background-color: #F9FCFF; }'}</style>

        <div className="reward-title">
        <Link to='/'>
            <img src="images/Icon (4).svg" alt="quiz app"/>
          </Link>
          <p>পয়েন্ট রিওয়ার্ড</p>
        </div>
        <div className="grid-space pb-30">
          <div className="reward-details-section">
            <div className="reward-user-info">
              <div className="user-name">
                <p>ইশতিয়াক আহমেদ</p>
              </div>
              <div className="user-point">
                <img src="images/prize_hires 1.svg" alt="quiz app"/>
                <p>১২০০ পয়েন্ট</p>
              </div>
            </div>
            <div className="user-status">
              <p className="status-title">Warrior</p>
              <div className="bar"></div>
              <p className="info-text">পয়েন্ট ব্যবহার করলে লেভেলের অগ্রগতির উপর কোন প্রভাব পড়বে না</p>
            </div>
          </div> 

          <div className="point-reward-section">
            <div className="point-menu">
              <p className="point-title">পয়েন্ট রিওয়ার্ড</p>
              <Link to='/reward' className="all-show-link">সব দেখুন</Link>
            </div>
          </div>

          <div className="point-full-grid">
            <div className="point-card">
              <div className="point-details">
                  <div className="point-icon">
                    <img src="images/Reward Icon.png" alt="quiz app"/>
                  </div>
                  <div className="point-info">
                    <p className="amout-text">মোবাইল রিচার্জ ২০ টাকা</p>
                    <p className="point-amount">১০০০ পয়েন্ট</p>
                  </div>
              </div>
              <div className="point-btn-section">
                
                <Link to='' onClick={handleModal} className="collect-btn">সংগ্রহ করুন </Link>
              </div>
            </div>
            <div className="point-card">
              <div className="point-details">
                  <div className="point-icon">
                    <img src="images/Reward Icon (1).png" alt="quiz app"/>
                  </div>
                  <div className="point-info">
                    <p className="amout-text">মোবাইল রিচার্জ ৫০ টাকা </p>
                    <p className="point-amount">১৫০০ পয়েন্ট</p>
                  </div>
              </div>
              <div className="point-btn-section">
                <Link to='' className="collect-btn">সংগ্রহ করুন </Link>
              </div>
            </div>
            <div className="point-card">
              <div className="point-details">
                  <div className="point-icon">
                    <img src="images/video-icon.png" alt="quiz app"/>
                  </div>
                  <div className="point-info">
                    <p className="amout-text">যেভাবে কাজ করে</p>
                    <p className="point-amount">বিস্তারিত দেখতে ক্লিক করুন</p>
                  </div>
              </div>
              <div className="point-btn-section">
                <Link to='' className="collect-btn">ভিডিও দেখুন</Link>
              </div>
            </div>
          </div>
          {modalOpen&&<Modal setModalOpen={setModalOpen}></Modal>}
          <div className="point-earn-list">
            <div className="point-earn-grid">
              <img src="images/bi_arrow-right-circle-fill.svg" alt="quiz app"/>
              <p>নিয়মিত কুইজার্স গেম খেলে পয়েন্ট অর্জন করুন</p>
            </div>
            <div className="point-earn-grid">
              <img src="images/bi_arrow-right-circle-fill.svg" alt="quiz app"/>
              <p>বিস্তারিত দেখতে আপনার কুইজার্স রিওয়ার্ড এ ট্যাপ করুন</p>
            </div>
            <div className="point-earn-grid">
              <img src="images/bi_arrow-right-circle-fill.svg" alt="quiz app"/>
              <p>পয়েন্ট ব্যবহার করে বিভিন্ন রিওয়ার্ড সংগ্রহ করুন এবং তার সুবিধা উপভোগ করুন </p>
            </div>
            <div className="point-earn-grid">
              <img src="images/bi_arrow-right-circle-fill.svg" alt="quiz app"/>
              <p>পরবর্তী রিওয়ার্ড লেভেল এবং দারুন সব অফার আনলক করতে বেশি বেশি পয়েন্ট অর্জন করুনন</p>
            </div>
          </div>

          <div className="point-earn-list">
            <div className="point-earn-grid">
              <img src="images/bi_arrow-right-circle-fill.svg" alt="quiz app"/>
              <p>নিয়মিত কুইজার্স গেম খেলে পয়েন্ট অর্জন করুন</p>
            </div>
            <div className="point-earn-grid">
              <img src="images/bi_arrow-right-circle-fill.svg" alt="quiz app"/>
              <p>বিস্তারিত দেখতে আপনার কুইজার্স রিওয়ার্ড এ ট্যাপ করুন</p>
            </div>
          </div>

     


        </div>
    </>
  );
};

export default Rewards;
