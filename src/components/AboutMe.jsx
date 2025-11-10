import React, { useState } from 'react'
import '../styles/AboutMe.css'

export default function AboutMe() {
  const [aboutMeOpen, setAboutMeOpen] = useState(false);
  const toggleAboutMe = () => setAboutMeOpen(!aboutMeOpen);
  return (
    <div id='AboutMe' className='about-me-section' onClick={toggleAboutMe} title={aboutMeOpen ? "Click To Minimize the Section" : "Click To Expand the Section"}>
      <div>
        <div className={`about-me-title ${aboutMeOpen ? "open" : ""}`} >
          {/* <div className={`about-me-title-arrows-left ${aboutMeOpen ? "open" : ""}`}>
            <span >&gt;</span>
            <span >&gt;</span>
          </div> */}
          <h2>About Me</h2>
          <div className={`about-me-title-arrows-right ${aboutMeOpen ? "open" : ""}`}>
            {/* <span >&gt;</span> */}
            <span >&gt;</span>
          </div>
        </div>
      </div>
      <div className={`about-me-text ${aboutMeOpen ? "open" : ""}`}>
        <div className='about-me-text-content'>
          <p>
            I am a software developer with experience in various programming languages and frameworks, and I enjoy solving complex problems through code. In my free time, I like to stay updated with the latest trends in technology.
          </p>
        </div>
      </div>
      {/* <div className='separator-line'></div> */}
    </div>
  )
}
