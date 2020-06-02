import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import pic from '../images/clouds.jpg';
import styles from '../styles/projectCard.css';

const ProjectCard = (props) => {
  const project = props.project

  console.log(project)

  return(
    <Card>
      <Card.Content >
        <Card.Header>{project.name}</Card.Header>
        <Image src={project.picture}  />
        <Card.Description>{project.desc}</Card.Description>
      </Card.Content>
      
    </Card>
    )
  }
  
  
  export default ProjectCard;