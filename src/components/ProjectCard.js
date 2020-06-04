import React, {useState} from 'react';
import Fork from '../images/ForkSpoon.jpg';
import Gympact from '../images/Gympact.jpg';
import Blackjack from '../images/Blackjack';
import styles from '../styles/projectCard.css';

const ProjectCard = (props) => {
  const project = props.project

  const pic = () => {
    if(project.id === 1){
      return Fork;
    }else if(project.id === 2){
      return Gympact;
    }else if(project.id === 3){
      return Blackjack;
    } 
  }
  return(
  
      <div className="card">
        <div className="cardImage">
          <img src={pic()} alt="No pic"></img>
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