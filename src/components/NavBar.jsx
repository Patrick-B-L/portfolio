import React, { useState } from 'react';
import { Link } from 'react-scroll';
import '../styles/NavBar.css';

export default function NavBar() {
  const [menuOpen, setMenuOpen] =useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <section className='NavBar-section'>
      <div className='NavBar-section-logo'>
        <Link  
              to="HeroSection"
              smooth={true} 
              duration={500} 
              offset={-100}
              >
                <span>
                  <img src="./images/Portfolio-logo.png" alt="Portfoliologo2.png" />
                </span>
              </Link>
      </div>
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
              offset={-100}
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
              offset={-100}
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
              offset={-100}
              >
                <span>
                Projects
                </span>
              </Link>
            </li>
            {/* <li className='NavBar-section-link'>
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
            </li> */}
          </ul>
        </nav>
    </section>
  )
}
