import React from "react";
import { Link } from "react-router-dom";


export default function NotFound() {
  return (
    <main className="notfound-container">
      <h1 className="notfound-title">404</h1>
      <h2 className="notfound-subtitle">Page Not Found</h2>
      <p className="notfound-text">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>
      <Link to="/" className="notfound-button">
        Go Home
      </Link>
    </main>
  );
}
