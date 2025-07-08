import React from 'react'
import projectData from './ProjectData.jsx'

export default function ProjectTiles() {
  // This component will render individual project tiles.
  // It will receive project data as props and display each project's image, title, and description.
  // You can use the projectData array imported from ProjectData.jsx to map through and create tiles.
  return (
    <div>
      <div className='project-tiles'>
        <ul>
        {projectData.map((project, index) => (
            <li  className='project-tile'>
              
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              {project.website && (
                <a href={project.website} target='_blank' rel='noopener noreferrer'>View Website</a>
              )}
              {project.ghLink && (
                <a href={project.ghLink} target='_blank' rel='noopener noreferrer'>View Project In Github</a>
              )}
            </li>
        ))}
        </ul>
      </div>
    </div>
  )
}
