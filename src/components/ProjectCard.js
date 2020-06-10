import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import styles from '../styles/projectCard.css';

const ProjectCard = (props) => {
  const project = props.project
  
  return(
    <div className='project-image'>
      <img src={process.env.PUBLIC_URL + `/assets/${project.picture}`} className='proImage' />

    </div>
    
    )
  }
  
  
  export default ProjectCard;

  // old project cards
      // <div className="card">
      //   <div className="cardImage">
          
      //      <img src={process.env.PUBLIC_URL + `/assets/${project.picture}`} />
      //   </div>
      //   <div className="cardContent">
      //     <h2 className="projectName">{project.name}</h2>
      //     <p className="projectDesc">{project.desc}</p>
      //     <div className="cardLinks">
      //       <a href={project.github} className='gitLink' >Github</a>
      //      {
      //        project.url ? (<a href={project.url} className='gitLink'>Live</a>) : console.log(false)
            
      //      }
      //     </div>
      //   </div>
      // </div>