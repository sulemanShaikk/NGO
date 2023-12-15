// CardComponent.jsx
import React from 'react';
import '../styles/landing.css';
import image1 from "../assets/ngo1.avif";
import image2 from "../assets/NGO2.jpg";
import image3 from "../assets/NGO3.jpg";
import image4 from "../assets/NGO4.jpg";
import { FcDonate } from "react-icons/fc";

const CardComponent = () => {
  return (
    <>
    <div className='mission'>
    
       <p> <h1> Our Mission</h1> "Empowering lives,Helping, and building a brighter future for all."</p>
    </div>
    <div className="card-container">
      <div className="card">
        <img src={image1} alt="Card" />
        <h2>Lets Join Hands</h2>
        <p>Improving well-being of Poor communities by joining Hands</p>
      </div>

      <div className="card">
      <img src={image2} alt="Card" />
        <h2>NutriGift</h2>
        <p>Filling plates,Providing essentials to those in need.</p>
      </div>

      <div className="card">
      <img src={image3} alt="Card" />
        <h2>Rural Wisdom</h2>
        <p>Bridging knowledge gaps in rural & underprivileged communities.</p>
      </div>
    </div>

    <div className='contribute'>
       <h1>Contribute <FcDonate />with Us</h1>
       
    </div>
    </>
  );
};

export default CardComponent;
