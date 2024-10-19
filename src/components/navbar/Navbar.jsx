import React from "react";
import "./navbar.scss";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="/" className="logo">
          <img src="/logo.png" alt="LamaEstate Logo" />
          <span>LamaEstate</span>
        </a>
        <div className="navbar-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/agents">Agents</a>
        </div>
      </div>

      <div className="navbar-right">
        <a href="/" className="sign-in">Sign In</a>
        <a href="/" className="register-btn">Sign Up</a>
      </div>
    </nav>
  );
}
