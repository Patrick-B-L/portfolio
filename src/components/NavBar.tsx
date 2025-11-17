import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import '../styles/NavBar.css';

export default function NavBar(): React.JSX.Element {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [showNav, setShowNav] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(window.scrollY);

  const toggleMenu = (): void => setMenuOpen(!menuOpen);

  useEffect(() => {
    const threshold = 5;

    const handleScroll = (): void => {
      if (window.scrollY < 50) {
        setShowNav(true);
      } else if (
        !menuOpen && 
        window.scrollY > lastScrollY + threshold
      ) {
        setShowNav(false); // Scroll down
      } else if (
        window.scrollY < lastScrollY - threshold
      ) {
        setShowNav(true); // Scroll up
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, menuOpen]);

  return (
    <section className={`NavBar-section${showNav ? '' : ' nav-hidden'}`}>
      <div className='NavBar-section-logo'>
        <Link  
          to="HeroSection"
          smooth={true} 
          duration={500}
          onClick={menuOpen ? toggleMenu : undefined} 
          offset={-100}
          title='Go to Home'
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
              <span>Home</span>
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
              <span>About Me</span>
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
              <span>Projects</span>
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
}
