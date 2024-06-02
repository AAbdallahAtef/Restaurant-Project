import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <div className="hero-image">
          <img src="dish-image-path.jpg" alt="Dish" />
          <div className="visit-card">
            <h2>Come and visit us</h2>
            <p><strong>Call:</strong> (414) 857 - 0107</p>
            <p><strong>Email:</strong> happytummy@restaurant.com</p>
            <p><strong>Address:</strong> 837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles</p>
          </div>
        </div>
        <div className="hero-text">
          <h1>We provide healthy food for your family.</h1>
          <p>Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance. Rooted in city's rich culinary culture, we aim to honor our local roots while infusing a global palate.</p>
          <p>At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
