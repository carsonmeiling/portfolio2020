import React, { useState } from 'react';
import StartingProjects from '../data/projects.json';
import ProjectCard from './ProjectCard';
import syles from '../styles/projects.css';


const Projects = () => {
  const [projects, setProjects] = useState(StartingProjects);
  

  return(
    <div className="projects">
      <div className="cardGroup">
        {
          projects.map(project => (
              <img src={process.env.PUBLIC_URL + `/assets/${project.picture}`} className='proImage' />
            ))
          }  
      </div>
    </div>
  )
}

export default Projects;