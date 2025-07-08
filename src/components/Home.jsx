import React from 'react'
import HeroSection from './HeroSection'
import NavBar from './NavBar'
import AboutMe from './AboutMe'
import Projects from './Projects'
import ContactMe from './ContactMe'
import Footer from './Footer'
import '../styles/Home.css'

export default function Home() {
  return (
    <section className='container'>
        <NavBar />
        <div className='content'>
          <HeroSection />
          <AboutMe />
          <Projects />
          <ContactMe />
          <Footer />
        </div>
    </section>
  )
}
