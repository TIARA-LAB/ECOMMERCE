import React from "react";
import img24 from "../assets/img24.jpg";
import img25 from "../assets/img25.jpg";
import img28 from "../assets/img28.jpg";
import img31 from "../assets/img31.jpg";


function NewArrival() {
  const items = [
    { id: 1, name: "PlayStation 5 " , img: img28 },
    { id: 2, name: "Women’s Collections", img: img31 },
    { id: 3, name: "Speakers", img: img25 },
    { id: 4, name: "Perfume", img: img24 },
  ];

  return (
    <section className="new-arrival">
      <h2>Featured / New Arrival</h2>
      <div className="arrival-grid">
        {items.map((item) => (
          <div key={item.id} className="arrival-card">
            <img src={item.img} alt={item.name} />
            <h4>{item.name}</h4>
            <button className="btn" onClick={()=>alert("Shop Offer applied")}>Shop Now</button>
           
          </div>
        ))}
      </div>
    </section>
  );
}

export default NewArrival;
