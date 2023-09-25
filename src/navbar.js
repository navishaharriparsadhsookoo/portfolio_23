import React, { useState } from 'react';
import './navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useRef } from 'react';

function Navbar() {
  const navRef = useRef();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className={`nav ${menuOpen ? 'open' : ''}`}>
        <a href="#section1" className="site-title">
          <h3>Navisha's Portfolio</h3>
        </a>
        <button className="hamburger-button" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li>
            <a href="#section1">Introduction</a>
          </li>
          <li>
            <a href="#section2">About</a>
          </li>
          <li>
            <a href="#section3">Experience</a>
          </li>
          <li>
            <a href="#section4">Portfolio</a>
          </li>
          <li>
            <a href="#section5">Connect</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
