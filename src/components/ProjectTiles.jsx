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
              <p>
                <>
                  {project.description}
                  {project.description2 && (
                    <>
                      <br />
                      <br />
                      {project.description2}
                    </>
                  )}
                </>
              </p>
              <div className='project-tile-links'>
              {project.website && (
                <a href={project.website} target='_blank' rel='noopener noreferrer' title='View Website'><i className="fas fa-globe"></i></a>
              )}
              {project.ghLink && (
                <a href={project.ghLink} target='_blank' rel='noopener noreferrer' title='View Project In Github'><i className="fab fa-github"></i></a>
              )}
              </div>
            </li>
        ))}
        </ul>
      </div>
    </div>
  )
}
