import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import pic from '../images/clouds.jpg';
import styles from '../styles/projectCard.css';

const ProjectCard = (props) => {
  const project = props.project


  return(
  // <Card>
  //   <Card.Content >
  //     <Image src={project.picture}  />
  //     <Card.Header>{project.name}</Card.Header>\\
  //     <Card.Meta></Card.Meta>
  //     <Card.Description>{project.desc}</Card.Description>
  //   </Card.Content>
    
  // </Card>
      <div className="card">
        <div className="cardImage">
          <img src={pic}></img>
        </div>
        <div className="cardContent">
          <h2 className="projectName" >{project.name}</h2>
          <p className="projectDesc" >{project.desc}</p>
          <div className="cardLinks">
            <a href={project.github} >Github</a>
          </div>
        </div>
      </div>
    )
  }
  
  
  export default ProjectCard;