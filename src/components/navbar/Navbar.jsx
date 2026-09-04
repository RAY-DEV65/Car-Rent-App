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
  const [scrolled, setScrolled] = useState(false);

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
          <Link to="/car">Car</Link>
          <Link to="/about">About</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <Link to="/booking" className="navbar-button">Book a Car</Link>

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
      <div className={`mobile-menu ${menuOpen ? "mobile-menu-open" : ""}`}>
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

          <Link to="/car" onClick={closeMenu}>
            <FaCar />
            <span>Cars</span>
          </Link>

          <Link to="/about" onClick={closeMenu}>
            <FiInfo />
            <span>About</span>
          </Link>

          <Link to="/blog" onClick={closeMenu}>
            <FiBookOpen />
            <span>Blog</span>
          </Link>

          <Link to="/contact" href="" onClick={closeMenu}>
            <FiPhone />
            <span>Contact</span>
          </Link>
        </div>

        <Link to="/booking" className="mobile-book-button" onClick={closeMenu}>
          Book a Car
        </Link>
      </div>
    </>
  );
};

export default Navbar;
