import React from "react";
import img35 from "../assets/img35.webp";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div>
          <h3>Exclusive</h3>
          <p>Subscribe</p>
          <p>Get 10% off your first order</p>
          <input type="email" placeholder="Enter your email" />
        </div>

        <div>
          <h3>Support</h3>
          <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
          <p>exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>

        <div>
          <h3>Account</h3>
          <ul>
            <li>My Account</li>
            <li>Login / Register</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>
        </div>

        <div>
          <h3>Quick Link</h3>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h3>Download App</h3>
          <p>Save $3 with App New User Only</p>
          <div className="app-buttons">
            <img src={img35} alt="Google Play" />
            
          </div>
        </div>
      </div>

      <p className="copyright">
        © Copyright Rimel 2022. All right reserved
      </p>
    </footer>
  );
};

export default Footer;
