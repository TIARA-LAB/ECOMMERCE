import React from "react";
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import img34 from "../assets/img34.jpg";
import img18 from "../assets/img18.png";
import img19 from "../assets/img19.png";
import { Link } from "react-router-dom";
import img20 from "../assets/img20.png";

const About = () => {
  return (
    <div className="about-page">
      
      <nav className="breadcrumb">
        <Link to="/">Home /</Link> <span>About</span>
      </nav>
      <section className="our-story">
        <div className="story-text">
          <h2>Our Story</h2>
          <p>
            Launched in 2015, Exclusive is South Asia’s premier online shopping
            marketplace with an active presence in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sellers and 300 brands and serves 3 million customers
            across the region.
          </p>
          <p>
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assortment in categories
            ranging from consumer.
          </p>
        </div>
        <div className="story-image">
          <img
            src={img34}
            alt="Shopping women"
          />
        </div>
      </section>

      
      <section className="stats">
        <div className="stat-card">
          <p className="number">10.5k</p>
          <p>Sellers active our site</p>
        </div>
        <div className="stat-card highlight">
          <p className="number">33k</p>
          <p>Monthly Product Sale</p>
        </div>
        <div className="stat-card">
          <p className="number">45.5k</p>
          <p>Customer active in our site</p>
        </div>
        <div className="stat-card">
          <p className="number">25k</p>
          <p>Annual gross sale in our site</p>
        </div>
      </section>

    
      <section className="team">
        <div className="team-member">
          <img
            src={img19}
            alt="Tom Cruise"
          />
          <h4>Tom Cruise</h4>
          <p>Founder & Chairman</p>
          <div className="social-icons">
            <FaTwitter /> <FaInstagram /> <FaLinkedin />
          </div>
        </div>
        <div className="team-member">
          <img
            src={img20}
            alt="Emma Watson"
          />
          <h4>Emma Watson</h4>
          <p>Managing Director</p>
          <div className="social-icons">
            <FaTwitter /> <FaInstagram /> <FaLinkedin />
          </div>
        </div>
        <div className="team-member">
          <img
            src={img18}
            alt="Will Smith"
          />
          <h4>Will Smith</h4>
          <p>Product Designer</p>
          <div className="social-icons">
            <FaTwitter /> <FaInstagram /> <FaLinkedin />
          </div>
        </div>
      </section>
      <section className="features">
        <div className="feature">
          <h4>🚚 FREE AND FAST DELIVERY</h4>
          <p>Free delivery for all orders over $140</p>
        </div>
        <div className="feature">
          <h4>📞 24/7 CUSTOMER SERVICE</h4>
          <p>Friendly 24/7 customer support</p>
        </div>
        <div className="feature">
          <h4>💳 MONEY BACK GUARANTEE</h4>
          <p>We return money within 30 days</p>
        </div>
      </section>
    </div>
  );
};

export default About;
