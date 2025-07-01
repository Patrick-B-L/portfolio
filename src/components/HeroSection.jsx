import React from 'react'
import '../styles/HeroSection.css'

export default function HeroSection() {
  return (
    <section className='hero-section' id='HeroSection'>
      <div className='hero-section-title'>
        <h1>Patrick Brandt</h1>
      </div>
      <div className='hero-section-image'>
        <img src="https://media.licdn.com/dms/image/v2/C5603AQGDJ0TYg_XLtQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1516429501821?e=1756944000&v=beta&t=DxOVSRvk8OAGkwUAMVzxYsXH-GlYVr2TvW2yDTucjQ8" alt="profile.jpg" />
      </div>
      <div className='hero-section-text'>
        <div>
          <h2>Welcome to My Portfolio</h2>
        </div>
        <div>
          <p>
          Hello! My name is Patrick and I am a developer with a passion for creating dynamic and responsive web applications. 
          I specialize in front-end development, but I also have experience with back-end technologies. 
          Feel free to explore my portfolio to see some of the projects I've worked on.
        </p>
        </div>
      </div>
    </section>
  )
}
