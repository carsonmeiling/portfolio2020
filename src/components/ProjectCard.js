import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import pic from '../images/clouds.jpg';
import styles from '../styles/projectCard.css';

const ProjectCard = (props) => {
  const project = props.project


  return(
  <Card>
    <Card.Content >
      <Image src={project.picture}  />
      <Card.Header>{project.name}</Card.Header>\\
      <Card.Meta></Card.Meta>
      <Card.Description>{project.desc}</Card.Description>
    </Card.Content>
    
  </Card>
    )
  }
  
  
  export default ProjectCard;
      // <div className="card">
      //   <img src={pic}></img>
      //   <div className="cardContent">
      //     <h2>{project.name}</h2>
      //     <p>{project.desc}</p>
      //     <div className="cardLinks">
      //       <a>Github</a>
      //     </div>
      //   </div>
      // </div>