import React from "react";
import { Link } from "react-router-dom";
import products from "../pages/Products";
import { useCart } from "../context/CartContext";

export default function WishList() {
  const { addToCart } = useCart();

  return (
    <main className="page page-pad">
      <h1 className="page-title">Products</h1>

      <section className="grid">
        {products.map((p) => (
          <article className="card" key={p.id}>
            <Link to={`/product/${p.id}`} className="card-media">
              <img src={p.img} alt={p.name} />
            </Link>

            <div className="card-body">
              <h3 className="card-title">{p.name}</h3>
              <p className="card-desc">{p.description}</p>
              <div className="card-row">
                <p>${Number(p.price).toFixed(2)}</p>

                <div className="card-actions">
                  <Link to={`/product/${p.id}`} className="btn ghost">View</Link>
                  <button className="btn" onClick={() => addToCart(p, 1)}>Add</button>
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
