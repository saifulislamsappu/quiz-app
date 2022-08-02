import React from "react";


const Modal = ({setModalOpen}) => {

  return (
    <>
    <div className="close" onClick={()=>setModalOpen(false)}></div>
    <div className="wrapper">
        <div className="modal">
            <div class="modal__content">
                <h3>পর্যাপ্ত পয়েন্ট নেই</h3>
                <img src="images/modal-image.png"/>
                <p>রিয়ার্ড সংগ্রহ করার জন্য আপনার পয়েন্ট নেই।  নিয়মিত কুইজাস গেম খেলে পয়েন্ট অর্জন করুন </p>
                <div className="top-layout"></div>
            </div>
        </div>
    </div>       
    </>
  );
};

export default Modal;