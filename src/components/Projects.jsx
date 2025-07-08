import React from 'react'
import ProjectTiles from './ProjectTiles.jsx'
import '../styles/Projects.css'

export default function Projects() {
  return (
    <div id='Projects'>
      <div>
        <h2>Projects</h2>     
      </div>
      <div className='project-tiles-container'>
          <ProjectTiles />
      </div>
    </div>
  )
}
