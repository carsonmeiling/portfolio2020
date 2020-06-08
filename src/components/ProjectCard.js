import React, {useState} from 'react';
import styles from '../styles/projectCard.css';

const ProjectCard = (props) => {
  const project = props.project

  
  return(
  
      <div className="card">
        <div className="cardImage">
          {/* <img src={pic()} alt="No pic"></img>
           */}
           <img src={process.env.PUBLIC_URL + `/assets/${project.picture}`} />
        </div>
        <div className="cardContent">
          <h2 className="projectName">{project.name}</h2>
          <p className="projectDesc">{project.desc}</p>
          <div className="cardLinks">
            <a href={project.github} >Github</a>
          </div>
        </div>
      </div>
    )
  }
  
  
  export default ProjectCard;