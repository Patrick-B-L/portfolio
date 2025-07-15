import React, { useState } from 'react'
import '../styles/HeroSection.css'

export default function HeroSection() {
  const [heroSectionOpen, setHeroSectionOpen] = useState(false);
  const toggleHeroSection = () => setHeroSectionOpen(!heroSectionOpen);

  return (
    <section className='hero-section' id='HeroSection'>
      <div className='hero-section-title'>
        <h1>Portfolio</h1>
      </div>
      {/* <div className='hero-section-image'>
        <img src="" alt="profile.jpg" />
      </div> */}
      <div 
        className='hero-section-text'
        onClick={toggleHeroSection}
      >
        <div className={`hero-section-text-content ${heroSectionOpen ? "open" : ""}`}>
          <div className={`hero-section-text-content-arrows-left ${heroSectionOpen ? "open" : ""}`}>
            <span>&gt;</span>
            <span>&gt;</span>
          </div>
          <h2>Welcome to My Portfolio</h2>
          <div className={`hero-section-text-content-arrows-right ${heroSectionOpen ? "open" : ""}`}>
            <span>&gt;</span>
            <span>&gt;</span>
          </div>
        </div>
        <div className={`hero-section-text-description ${heroSectionOpen ? "open" : ""}`}>
          <p>
          Hello! My name is Patrick and I am a developer with a passion for creating dynamic applications. 
          Feel free to explore my portfolio to see some of the projects I've worked on.
        </p>
        </div>
      </div>
    </section>
  )
}
