import React from "react";
import img21 from "../assets/img21.jpg";
import img27 from "../assets/img27.jpg"; 
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="hero">
    
      <div className="hero-categories">
        <ul>
         <li><a href="">Woman’s Fashion</a></li>
          <li><a href="">Men’s Fashion</a></li>
          <li><a href="">Electronics</a></li>
          <li><a href="">Home & Lifestyle</a></li>
          <li><a href="">Medicine</a></li>
          <li><a href="">Sports & Outdoor</a></li>
          <li><a href="">Baby’s & Toys</a></li>
          <li><a href="">Groceries & Pets</a></li>
          <li><a href="">Health & Beauty</a></li>
        </ul>
      </div>

      
      <div className="hero-banner">
        <div className="banner-content">
          <img src={img27} alt="Apple Logo" className="apple-logo" />
          <p className="subtext">iPhone 14 Series</p>
          <h1>Up to 50% Off<br />on Electronics</h1>
          <button className="shop-btn" onClick={()=>alert("shop now")}>
            Shop Now <FaArrowRight className="arrow-icon" />
          </button>
        </div>

        <div className="banner-image">
          <img src={img21} alt="Phone Banner" />
        </div>
      </div>
      <div className="carousel-dots">
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </section>
  );
};

export default Hero;
