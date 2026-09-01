import {
  FiBookOpen,
  FiHome,
  FiMenu,
  FiX,
  FiInfo,
  FiPhone,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useState, useEffect } from "react";
import { FaCar } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false);
  };

   useEffect(() => {
     const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

     window.addEventListener("scroll", handleScroll);

     return () => {
      window.removeEventListener("scroll", handleScroll);
    };
   }, []);

  return (
  <>
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-logo">
        Car <span>Search</span>
      </div>

      <div className="desktop-nav">
        <Link to="/">Home</Link>
        <a href="">Car</a>
        <Link to="/about">About</Link>
        <a href="">Blog</a>
        <a href="">Contact</a>
      </div>

      <button className="navbar-button">
        Book a Car
      </button>

      <button
        className="menu-button"
        onClick={() => setMenuOpen(true)}
        aria-label="Open Menu"
      >
        <FiMenu />
      </button>
    </nav>

    {/* DARK + BLUR BACKDROP */}
    <div
      className={`menu-overlay ${menuOpen ? "overlay-show" : ""}`}
      onClick={closeMenu}
    ></div>

    {/* MOBILE MENU */}
    <div
      className={`mobile-menu ${
        menuOpen ? "mobile-menu-open" : ""
      }`}
    >
      <div className="mobile-menu-header">
        <div className="mobile-logo">
          Car <span>Search</span>
        </div>

        <button
          className="close-button"
          onClick={closeMenu}
          aria-label="Close menu"
        >
          <FiX />
        </button>
      </div>

      <div className="mobile-links">
        <Link to="/" onClick={closeMenu}>
          <FiHome />
          <span>Home</span>
        </Link>

        <a href="" onClick={closeMenu}>
          <FaCar />
          <span>Cars</span>
        </a>

        <Link to="/about" onClick={closeMenu}>
          <FiInfo />
          <span>About</span>
        </Link>

        <a href="" onClick={closeMenu}>
          <FiBookOpen />
          <span>Blog</span>
        </a>

        <a href="" onClick={closeMenu}>
          <FiPhone />
          <span>Contact</span>
        </a>
      </div>

      <button
        className="mobile-book-button"
        onClick={closeMenu}
      >
        Book a Car
      </button>
    </div>
  </>
);
};

export default Navbar;
