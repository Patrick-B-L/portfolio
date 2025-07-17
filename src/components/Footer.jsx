import React from 'react';
import { Link } from 'react-scroll';
import '../styles/Footer.css';

export default function Footer() {
  return (
    <div id='Footer' className='footer-container'>
        <nav>
            <Link 
              className='footer-link' 
              to="HeroSection"
              smooth={true} 
              duration={500}
              offset={-100} 
            >
              Home
            </Link>
            <Link
              className='footer-link' 
              to="AboutMe"
              smooth={true} 
              duration={500}
              offset={-100}
            >
              About Me
            </Link>
            <Link
              className='footer-link'
              to="Projects"
              smooth={true} 
              duration={500}
              offset={-100}
            >
              Projects
            </Link>
            {/* <Link 
              className='footer-link'
              to="ContactMe"
              smooth={true} 
              duration={500}
            >
              Contact Me
            </Link> */}
        </nav>
        <div>Copyright &copy; 2025</div>
        <div className='footer-socials'>
          <a href='https://github.com/Patrick-B-L' target='_blank' rel='noopener noreferrer' title='View My Projects In Github'><i className="fab fa-github"></i></a>
        </div>
    </div>
  )
}
