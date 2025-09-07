import React, { useState, useRef, useEffect } from "react";
import { FiUser } from "react-icons/fi";

const AccountDropdown = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="account-dropdown" ref={dropdownRef}>
      
      <FiUser
        className="icon"
        size={22}
        onClick={() => setOpen(!open)}
        style={{ cursor: "pointer" }}
      />

      
      {open && (
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
  );
};

export default AccountDropdown;
