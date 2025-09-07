import React from "react";
import { FaMobileAlt, FaLaptop, FaStopwatch,
   FaHeadphones,
   FaGamepad,  } from "react-icons/fa";

const categories = [
  { name: "Phones", icon: <FaMobileAlt /> },
  { name: "Computers", icon: <FaLaptop /> },
  { name: "SmartWatch", icon: <FaStopwatch /> },
  { name: "HeadPhones", icon: <FaHeadphones /> },
  { name: "Gaming", icon: <FaGamepad /> },
];

const Categories = () => {
  return (
    <section className="categories">
      <h2>Browse By Category</h2>

      <div className="category-grid">
        {categories.map((cat, index) => (
          <div className="category-card" key={index}>
            <div className="icon">{cat.icon}</div>
            <p>{cat.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
