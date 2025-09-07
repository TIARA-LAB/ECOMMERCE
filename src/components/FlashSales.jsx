import React, { useEffect, useState } from "react";
import img11 from "../assets/img 11.jpg";
import img30 from "../assets/img30.jpg";
import img12 from "../assets/img12.png";
import img33 from "../assets/img33.jpg";
const FlashSales = () => {
  const [timeLeft, setTimeLeft] = useState({days: 3 , hours: 2, minutes: 12, seconds: 45 });

  
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days,hours, minutes, seconds } = prev;
        if (seconds > 0) seconds--;
        else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {}
           else if (days > 0) {
          days = 3;
          hours = 23;
          minutes = 19;
          seconds = 56;
        }
        return { days,hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="flash-sales">
      
      <div className="flash-header">
        <h2>Flash Sales</h2>
        <div className="timer">
          <span>{String(timeLeft.days).padStart(2, "0")}</span> :
          <span>{String(timeLeft.hours).padStart(2, "0")}</span> :
          <span>{String(timeLeft.minutes).padStart(2, "0")}</span> :
          <span>{String(timeLeft.seconds).padStart(2, "0")}</span>
        </div>
        <button className="btn" onClick={()=>alert("Viewing all products")}>View All</button>
      </div>

      
      <div className="flash-products">
        <div className="product-card">
          <img src={img30} alt="Product" />
          <p className="name">HAVIT HV-G92 GamePad</p>
          <p className="price">$120<span className="old">$160</span></p>
        </div>

        <div className="product-card">
          <img src={img11} alt="Product" />
          <p className="name">AK-900 Wired Keyboard</p>
          <p className="price">$960 <span className="old">$1160</span></p>
        </div>


        <div className="product-card">
          <img src={img33} alt="Product" />
          <p className="name">IPS LCD Gaming Monitor</p>
          <p className="price">$370 <span className="old">$400</span></p>
        </div>
        <div className="product-card">
          <img src={img12} alt="Product" />
          <p className="name">S-Series Comfort Chair</p>
          <p className="price">$375 <span className="old">$400</span></p>
        </div>
      </div>
    </section>
  );
};

export default FlashSales;
