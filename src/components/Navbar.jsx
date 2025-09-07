import React, { useState, useRef, useEffect } from "react";
import { FaHeart, FaShoppingCart, FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { FiUser } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setAccountOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="navbar">
      
      <div className="navbar-logo">
        <h2>Exclusive</h2>
      </div>

     
      <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <li><a href="/">Home</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/signup">Sign Up</a></li>
      </ul>
      <div className="navbar-actions">
      
        <div className="search-box">
          <input type="text" placeholder="What are you looking for?" />
          <FaSearch className="search-icon" />
        </div>

      
        <a href="/wishlist" className="icon"><FaHeart /></a>
        <a href="/cart" className="icon"><FaShoppingCart /></a>

        
        <div className="account-dropdown" ref={dropdownRef}>
          <FiUser
            className="icon"
            size={22}
            onClick={() => setAccountOpen(!accountOpen)}
            style={{ cursor: "pointer" }}
          />
          {accountOpen && (
            <div className="dropdown-menu">
              <a href="/account">Manage My Account</a>
              <a href="/orders">My Orders</a>
              <a href="/cancellations">My Cancellations</a>
              <a href="/reviews">My Reviews</a>
              <hr />
              <a href="/logout" className="logout">Logout</a>
            </div>
          )}
        </div>

       
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
