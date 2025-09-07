import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import img29 from "../assets/img29.jpg";

export default function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();
  

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(form));
    navigate("/login");
  };

  return (
    <main className="auth-page">
      <div className="auth-visual">
        <img src={img29} alt="Create account visual" />
      </div>

      <section className="auth-card">
        <h1>Create an account</h1>
        <p className="sub">Enter your details below</p>

        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
          <input
            type="email"
            placeholder="Email or Phone Number"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
            />
              


          <button type="submit" className="btn-primary">Create Account</button>

          <button type="button" className="btn-outline" onClick={() => alert("Google OAuth placeholder")}>
            <span className="gdot" aria-hidden>G</span> Sign up with Google
          </button>
        </form>

        <p className="muted">
          Already have account? <Link to="/login">Log in</Link>
        </p>
      </section>
    </main>
  );
}
