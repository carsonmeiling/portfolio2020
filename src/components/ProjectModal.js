import React from 'react';
import { Button, Image, Modal } from 'semantic-ui-react';
import styles from '../styles/modal.css';

const ProjectModal = (props) => {
  const project = props.project


  return(
    <Modal trigger={
      <img 
        src={process.env.PUBLIC_URL + `/assets/${project.picture}`} 
        className='proImage'
        size='fullscreen'
      />}
    >
      <Modal.Content>
        <h3>{project.name}</h3>
        <Image 
          src={process.env.PUBLIC_URL + `/assets/${project.picture}`} 
          size='massive'>
        </Image>
        <Modal.Description>
          <p>{project.desc}</p>
        </Modal.Description>
        {
          project.picture2 ? 
          <Image 
          src={process.env.PUBLIC_URL + `/assets/${project.picture2}`} 
          size='massive'>
        </Image> : console.log('no pic')
        }
        {
          project.desc2 ? 
          <Modal.Description>
            <p>{project.desc2}</p>
          </Modal.Description> : console.log('no desc')
        }
        {
          project.picture3 ? 
          <Image 
          src={process.env.PUBLIC_URL + `/assets/${project.picture3}`} 
          size='massive'>
        </Image> : console.log('no pic')
        }
        {
          project.desc3 ? 
          <Modal.Description>
            <p>{project.desc3}</p>
          </Modal.Description> : console.log('no desc')
        }
        {
          project.picture4 ? 
          <Image 
          src={process.env.PUBLIC_URL + `/assets/${project.picture4}`} 
          size='massive'>
        </Image> : console.log('no pic')
        }
        {
          project.desc4 ? 
          <Modal.Description>
            <p>{project.desc4}</p>
          </Modal.Description> : console.log('no desc')
        }
        <Button color='black' href={project.github}>
          GitHub Repo
        </Button>
        {
          project.url ? <Button color='black' href={project.url}>Live View</Button> : console.log('no live')
        }
      </Modal.Content>
     
    </Modal>
  )
}

export default ProjectModal;
      
      
      
      