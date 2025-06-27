import React from 'react';
import { Link } from 'react-scroll';

export default function Footer() {
  return (
    <div>Footer
        <nav>
            <Link to="HeroSection">Home</Link>
            <Link to="AboutMe">About Me</Link>
            <Link to="Projects">Projects</Link>
            <Link to="ContactMe">Contact Me</Link>
        </nav>
    </div>
  )
}
