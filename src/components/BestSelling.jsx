import React from "react";
import { FaStar } from "react-icons/fa";
import {Link} from "react-router-dom";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";


export default function BestSelling() {
  const products = [
    {
      id: 1,
      name: "The north coat",
      price: "$260",
      discount: "$360",
      img: img1,
      reviews: 65,
    },
    {
      id: 2,
      name: "Gucci duffle bag",
      price: "$960",
      discount: "$1160",
      img: img2,
      reviews: 95,
    },
    {
      id: 3,
      name: "RGB liquid CPU Cooler",
      price: "$370",
      discount: "$400",
      img: img3,
      reviews: 35,
    },
    {
      id: 4,
      name: "Small bookshelf",
      price: "$375",
      discount: "$400",
      img: img4,
      reviews: 50,
    },
  ];
 return (
    <section className="best-section">
      <div className="best-top">
        <div>
          <h4 className="month">This Month</h4>
          <h2>Best Selling Products</h2>
        </div>
        <button className="btn" onClick={() => alert("View all best selling")}>View All</button>
      </div>

      <div className="best-grid">
        {products.map((p) => (
          <article className="best-card" key={p.id}>
            <Link to={`/product/${p.id}`} className="img-wrap">
              <img src={p.img} alt={p.name} />
            </Link>

            <h4>{p.name}</h4>

            <div className="price-row">
              <div className="price">{p.price} <span>{p.old}</span></div>
              <div className="rating-inline">
                {[...Array(5)].map((_, i) => <FaStar key={i} className="star" />)}
                <small>({p.reviews})</small>
              </div>
            </div>

            <div className="card-actions">
              <button className="add" onClick={() => alert(`Added ${p.name} to cart`)}>Add to Cart</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

