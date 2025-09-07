import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { cart, updateQty, removeFromCart, total } = useCart();

  return (
    <main className="page page-pad">
      <h1 className="page-title">Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="table-wrap">
            <table className="cart-table">
              <thead>
                <tr>
                  <th>My Product</th>
                  <th className="th-center">Price</th>
                  <th className="th-center">Quantity</th>
                  <th className="th-center">Subtotal</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <div className="prod-cell">
                        <img src={item.img} alt={item.name} />
                        <span>{item.name}</span>
                      </div>
                    </td>
           
               <p>${Number(item.price).toFixed(2)}</p>

                    <td className="td-center">
                 <div className="qty-inline">
                        <button onClick={() => updateQty(item.id, Math.max(1, item.qty - 1))}>−</button>
                        <input
                 type="number"
                          min="1"
                          value={item.qty}
                          onChange={(e) => {
                            const v = Number(e.target.value || 1);
                            updateQty(item.id, Math.max(1, v));
                          }}
                        />
                        <button onClick={() => updateQty(item.id, item.qty + 1)}>+</button>
                      </div>
                    </td>
                    <td className="td-center">
                      ${(item.price * item.qty).toFixed(2)}
                    </td>
                    <td className="td-right">
                      <button className="link danger" onClick={() => removeFromCart(item.id)}>
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="cart-footer">
            <div className="cart-total">
              <div className="label">Total</div>
              <div className="value">${total.toFixed(2)}</div>
            </div>
            <Link to="/checkout" className="btn buy">Proceed to Checkout</Link>
          </div>
        </>
      )}
    </main>
  );
}
