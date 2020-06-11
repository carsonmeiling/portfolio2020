import React, { useState } from 'react';
import StartingProjects from '../data/projects.json';
import ProjectCard from './ProjectCard';
import syles from '../styles/projects.css';
import ProjectModal from './ProjectModal';
import { Button, Header, Modal, ModalContent } from 'semantic-ui-react';


const Projects = () => {
  const [projects, setProjects] = useState(StartingProjects);
  const [modal, setModal] = useState(false);

  return(
    <div className="projects">
      <h2 className='project-header'>Projects</h2>
      <div className="cardGroup">

        {
          projects.map(project => (
              // <img 
              //   src={process.env.PUBLIC_URL + `/assets/${project.picture}`} 
              //   className='proImage'
              // />
              <ProjectModal key={project.id} project={project}/>
              ))
            }  
      </div>
    </div>
  )
}

export default Projects;