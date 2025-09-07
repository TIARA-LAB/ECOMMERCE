import React from "react";
import { useNavigate} from "react-router-dom";
import { FaStar, FaHeart, FaEye } from "react-icons/fa";
import img6 from "../assets/img6.jpg";
import img5 from "../assets/img5.jpg";
import img10 from "../assets/img10.jpg";
import img16 from "../assets/img16.jpg";
import img17 from "../assets/img17.jpg";
import img7 from "../assets/img7.jpg";
import img8 from "../assets/img8.jpg";
import img9 from "../assets/img9.jpg";

export default function ExploreProducts() {
  const Navigate= useNavigate();
  const products = [
    { id: 1, name: "Breed Dry Dog Food", price: "$100", img: img6, reviews: 35  },
    { id: 2, name: "Canon EOS DSLR Camera", price: "$360", img: img5, reviews: 95 },
    { id: 3, name: "ASUS FHD Laptop", price: "$700", img: img8, reviews: 120},
    { id: 4, name: "Curology Product Set", price: "$500", img: img9, reviews: 65, isNew: true },
    { id: 5, name: "Kids Electric Car", price: "$960", img: img10, reviews: 80, isNew: false },
    { id: 6, name: "Jr Zoom Soccer Cleats", price: "$120", img: img16, reviews: 22, isNew: true },
    { id: 7, name: "GP11 Shooter Gamepad", price: "$660", img: img17, reviews: 40, isNew: true },
    { id: 8, name: "Quilted Satin Jacket", price: "$660", img: img7, reviews: 55, isNew: true },
  ];

  return (
    <section className="explore-section">
      <h2>Explore Our Products</h2>
      <div className="products-grid">
        {products.map((p) => (
          <article key={p.id} className="prod-card">
            <div className="img-wrap">
              <img src={p.img} alt={p.name} />
              {p.isNew && <span className="new-badge">NEW</span>}
              <div className="overlays">
                <button className="icon-btn" title="Wishlist" onClick={() => alert(`Wishlisted ${p.name}`)}><FaHeart/></button>
                <button className="icon-btn" title="Quick view" onClick={() => alert(`Quick view ${p.name}`)}><FaEye/></button>
              </div>
            </div>

            <h4>{p.name}</h4>

            <div className="price-rating">
              <span className="price">{p.price}</span>
              <div className="rating-inline">
                {[...Array(5)].map((_, i) => <FaStar key={i} className="star" />)}
                <small>({p.reviews})</small>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="dots-row">
        <span className="dot active"></span>
        <span className="dot"></span>
      </div>

      <div style={{ textAlign: "center", marginTop: 16 }}>
        <button className="btn" onClick={() => alert("Viewing all products")}>View All Products</button>
      </div>
    </section>
  );
}

            