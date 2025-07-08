import React from 'react'
import '../styles/HeroSection.css'

export default function HeroSection() {
  return (
    <section className='hero-section' id='HeroSection'>
      <div className='hero-section-title'>
        <h1>Portfolio</h1>
      </div>
      <div className='hero-section-image'>
        <img src="" alt="profile.jpg" />
      </div>
      <div className='hero-section-text'>
        <div>
          <h2>Welcome to My Portfolio</h2>
        </div>
        <div>
          <p>
          Hello! My name is Patrick and I am a developer with a passion for creating dynamic applications. 
          Feel free to explore my portfolio to see some of the projects I've worked on.
        </p>
        </div>
      </div>
    </section>
  )
}
