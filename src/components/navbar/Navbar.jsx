import React, { useState, useEffect, useRef } from "react";
import "./navbar.scss";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="/" className="logo">
          <img src="/logo.png" alt="LamaEstate Logo" />
          <span>LamaEstate</span>
        </a>
        <div ref={menuRef} className={`navbar-links ${isOpen ? "active" : ""}`}>
          <a href="/" onClick={() => setIsOpen(false)}>Home</a>
          <a href="/about" onClick={() => setIsOpen(false)}>About</a>
          <a href="/contact" onClick={() => setIsOpen(false)}>Contact</a>
          <a href="/agents" onClick={() => setIsOpen(false)}>Agents</a>
        </div>
      </div>

      <div className="navbar-right">
        <a href="/" className="sign-in">Sign In</a>
        <a href="/" className="register-btn">Sign Up</a>
        <img 
          src="/menu.png" 
          alt="Menu" 
          className="hamburger-menu" 
          onClick={toggleMenu}
        />
      </div>
    </nav>
  );
}