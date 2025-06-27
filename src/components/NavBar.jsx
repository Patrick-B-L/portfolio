import React, { useState } from 'react';
import { Link } from 'react-scroll';

export default function NavBar() {
  const [menuOpen, setMenuOpen] =useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <section className='NavBar-section'>Navbar
        <nav>
          {/* Hamburger menu*/}
          <button className={`hamburger ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
            <li className='NavBar-section-link'>
              <Link  
              to="HeroSection"
              smooth={true} 
              duration={500} 
              onClick={toggleMenu}
              >
                <span>
                  Home
                </span>
              </Link>
            </li>
            <li className='NavBar-section-link'>
              <Link 
              to="AboutMe"
              smooth={true} 
              duration={500} 
              onClick={toggleMenu}
              >
                <span>
                  About Me
                </span>
              </Link>
            </li>
            <li className='NavBar-section-link'>
              <Link 
              to="Projects"
              smooth={true} 
              duration={500} 
              onClick={toggleMenu}
              >
                <span>
                Projects
                </span>
              </Link>
            </li>
            <li className='NavBar-section-link'>
              <Link 
              to="ContactMe"
              smooth={true} 
              duration={500} 
              onClick={toggleMenu}
              >
                <span>
                  Contact Me
                </span>
              </Link>
            </li>
          </ul>
        </nav>
    </section>
  )
}
