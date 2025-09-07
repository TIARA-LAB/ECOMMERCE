import React, { useMemo, useState } from "react";
import { PaystackButton } from "react-paystack";
import { useCart } from "../context/CartContext";

export default function CheckoutPage() {
  const { cart, total, clearCart } = useCart();
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    
  });
  const [paid, setPaid] = useState(false);

  const publicKey = "pk_test_c2b39273e26c67d5324c1d291836f65a8e0138c4";
 
  const amountKobo = Math.round(total * 100); 

  const componentProps = useMemo(
    () => ({
      email: form.email || "",
      amount: amountKobo,
      publicKey,
      reference: `${Date.now()}`,
      metadata: {
        name: form.name,
        address: `${form.address}, ${form.city} ${form.zip}`,
        items: cart.map((i) => ({ id: i.id, name: i.name, qty: i.qty })),
      },
      onSuccess: () => {
        setPaid(true);
        clearCart();
      },
      onClose: () => {},
      text: "Pay with Paystack",
    }),
    [form, amountKobo, publicKey, cart, clearCart]
  );

  if (cart.length === 0 && !paid) {
    return (
      <main className="page page-pad">
        <h1 className="page-title">Checkout</h1>
        <p>Your cart is empty.</p>
      </main>
    );
  }

  if (paid) {
    return (
      <main className="page page-pad">
        <h1 className="page-title">Order Confirmation</h1>
        <p>Thank you {form.name}! Your payment was successful.</p>
      </main>
    );
  }

  return (
    <main className="page page-pad">
      <h1 className="page-title">Checkout</h1>

      <section className="checkout">
        <div className="order-summary">
          <h3>Your Order</h3>
          <ul className="order-list">
            {cart.map((i) => (
              <li key={i.id}>
                <span>{i.name} × {i.qty}</span>
                <b>${(i.price * i.qty).toFixed(2)}</b>
              </li>
            ))}
          </ul>
          <div className="order-total">
            <span>Total</span>
            <b>${total.toFixed(2)}</b>
          </div>
        </div>

        <form className="bill-form" onSubmit={(e) => e.preventDefault()}>
          <h3>Billing Details</h3>
          <input
            type="text" placeholder="Full Name" value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })} required
          />
          <input
            type="email" placeholder="Email" value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })} required
          />
          <input
            type="text" placeholder="Address" value={form.address}
            onChange={(e) => setForm({ ...form, address: e.target.value })} required
          />
          <div className="row">
            <input
              type="text" placeholder="City" value={form.city}
              onChange={(e) => setForm({ ...form, city: e.target.value })} required
            />
            
          </div>

          <PaystackButton className="btn buy full" {...componentProps} />
        </form>
      </section>
    </main>
  );
}
