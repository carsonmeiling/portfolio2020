import React, {useState} from 'react';
import styles from '../styles/projectCard.css';

const ProjectCard = (props) => {
  const project = props.project
  
  return(
  
      <div className="card">
        <div className="cardImage">
          
           <img src={process.env.PUBLIC_URL + `/assets/${project.picture}`} />
        </div>
        <div className="cardContent">
          <h2 className="projectName">{project.name}</h2>
          <p className="projectDesc">{project.desc}</p>
          <div className="cardLinks">
           {
             project.url ? (<a href={project.url} className='gitLink'>Live</a>) : console.log(false)
            
           }
            <a href={project.github} className='gitLink' >Github</a>
          </div>
        </div>
      </div>
    )
  }
  
  
  export default ProjectCard;