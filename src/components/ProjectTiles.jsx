import React, { useState, useEffect, useRef } from 'react'
import projectData from './ProjectData.jsx'

export default function ProjectTiles() {
  const [itemsPerRow, setItemsPerRow] = useState(3);
  const containerRef = useRef(null);

  useEffect(() => {
    const updateLayout = () => {
      const width = window.innerWidth;
      
      let newItemsPerRow;
      // Based on actual observed wrapping behavior from console logs
      // 1685+ = 3 tiles, 1147-1684 = 2 tiles, <1147 = 1 tile
      if (width >= 1685) {
        newItemsPerRow = 3;
      } else if (width >= 1370) {
        // Between 1370-1684: still 2 tiles per row
        newItemsPerRow = 2;
      } else if (width >= 1147) {
        // Between 1147-1369: might need different grouping
        // At this range tiles might wrap inconsistently
        newItemsPerRow = 1;
      } else {
        newItemsPerRow = 1;
      }
      
      setItemsPerRow(newItemsPerRow);
    };

    updateLayout();
    window.addEventListener('resize', updateLayout);
    
    return () => {
      window.removeEventListener('resize', updateLayout);
    };
  }, []);

  // Group projects into rows
  const rows = [];
  for (let i = 0; i < projectData.length; i += itemsPerRow) {
    rows.push(projectData.slice(i, i + itemsPerRow));
  }

  return (
    <div>
      <div className='project-tiles' ref={containerRef}>
        {rows.map((row, rowIndex) => (
          <ul key={rowIndex} className={rowIndex % 2 === 0 ? 'row-even' : 'row-odd'}>
            {row.map((project, index) => (
              <li key={index} className='project-tile'>
                <img src={project.image} alt={project.title} />
                <div className='title_description_container'>
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
                </div>
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
        ))}
      </div>
    </div>
  )
}
