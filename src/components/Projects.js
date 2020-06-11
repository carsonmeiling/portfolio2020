import React, { useState } from 'react';
import StartingProjects from '../data/projects.json';
import syles from '../styles/projects.css';
import ProjectModal from './ProjectModal';


const Projects = () => {
  const [projects, setProjects] = useState(StartingProjects);

  return(
    <div className="projects">
      <h2 className='project-header'>Projects</h2>
      <div className="cardGroup">

        {
          projects.map(project => (
        
              <ProjectModal key={project.id} project={project}/>
              ))
            }  
      </div>
    </div>
  )
}

export default Projects;