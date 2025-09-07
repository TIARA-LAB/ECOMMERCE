import React, { useState, useEffect } from "react";
import img23 from "../assets/img23.jpg";

const SpecialOffer = () => {
    const [timeLeft, setTimeLeft] = useState({days: 23 , hours: 2, minutes: 12, seconds: 45 });
  
    
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
            days = 23;
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
    <section className="special-offer">
      <div className="offer-text">
        <p className="tagline">Categories</p>
        <h2>
          Enhance Your <br /> Music Experience
        </h2>
        <p className="offer-discount">Get 50% Off Now</p>

      
          
        <div className="timer">
          <div className="timer">
          <span>{String(timeLeft.days).padStart(2, "0")}</span> :
          <span>{String(timeLeft.hours).padStart(2, "0")}</span> :
          <span>{String(timeLeft.minutes).padStart(2, "0")}</span> :
          <span>{String(timeLeft.seconds).padStart(2, "0")}</span>
        </div> 
        </div>

        <button className="btn" onClick={()=>alert("Shop Offer applied")}>Shop Now</button>
      </div>

      <div className="offer-image">
        <img src={img23} alt="Special Offer" />
      </div>
    </section>
  );
};

export default SpecialOffer;
