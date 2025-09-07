import React, { useState } from "react";
import { useParams } from "react-router-dom";
import products from "../pages/Products";
import { useCart } from "../context/CartContext";

export default function ProductPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const { addToCart } = useCart();
  const [qty, setQty] = useState(1);

  if (!product) {
    return (
      <main className="page page-pad">
        <h2>Product not found.</h2>
      </main>
    );
  }

  const dec = () => setQty((q) => (q > 1 ? q - 1 : 1));
  const inc = () => setQty((q) => q + 1);

  return (
    <main className="page page-pad">
      <section className="product">
        <div className="product-media">
          <img src={product.img} alt={product.name} />
        </div>

        <div className="product-info">
          <h1 className="product-title">{product.name}</h1>
          <div className="product-price">${product.price.toFixed(2)}</div>
          <p className="product-desc">{product.description}</p>

          <div className="qty-row">
            <button className="qty-btn" onClick={dec}>−</button>
            <input
              className="qty-input"
              type="number"
              min="1"
              value={qty}
              onChange={(e) => setQty(Math.max(1, Number(e.target.value || 1)))}
            />
            <button className="qty-btn" onClick={inc}>+</button>

            <button className="btn buy" onClick={() => addToCart(product, qty)}>
              Add to Cart
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
