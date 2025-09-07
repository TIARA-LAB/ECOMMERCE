import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import img29 from "../assets/img29.jpg";



export default function Login(){
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  
  const handleLogin = (e) => {
    e.preventDefault();
    const stored = JSON.parse(localStorage.getItem("user"));
    if (stored && stored.email === form.email && stored.password === form.password) {
      navigate("/account");
    } else {
      alert("Invalid credentials");
    
  };
}

 return (
    <main className="auth-page">
      <div className="auth-visual">
        <img src={img29} alt="Create account visual" />
      </div>

      <section className="auth-card">
        <h1>Log in to Exclusive</h1>
        <p className="sub">Enter your details below</p>

        <form onSubmit={handleLogin} className="form">
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

          
          <div className="row">
            <button type="submit" className="btn-primary sm">Log In</button>
            <button type="button" className="linkish" onClick={() => alert("Reset password placeholder")}>
              Forgot Password?
            </button>
          </div>
        </form>

        <p className="muted">
          Don’t have an account? <Link to="/signup">Sign up</Link>
        </p>
      </section>
    </main>
  );
};
