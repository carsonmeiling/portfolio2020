import React, { useState } from 'react';
import StartingProjects from '../data/projects.json';
import ProjectCard from './ProjectCard';
import syles from '../styles/projects.css';
import { Card } from 'semantic-ui-react';


const Projects = () => {
  const [projects, setProjects] = useState(StartingProjects);

  return(
    <div className="projects">
      <div className="cardGroup">
        <Card.Group>
        {
          projects.map(project => (
            <ProjectCard key={project.id} project={project} />
            ))
          }  
        </Card.Group>
      </div>
    </div>
  )
}

export default Projects;