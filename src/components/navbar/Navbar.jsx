import React from "react";
import "./navbar.scss";

export default function Navbar() {
  return (
    <nav>
      <div className="left">
        <a  href="/" className="logo">
          <img src="/logo.png" alt="" />
          <span>LamaEstate</span>
        </a>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/agents">Agents</a>
      </div>

      <div className="right">
        <a href="/">Sing in</a>
        <a href="/" className="register">Sign Up</a>
      </div>
    </nav>
  );
}
