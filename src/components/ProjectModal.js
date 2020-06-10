import React from 'react';
import { Button, Header, Image, Modal } from 'semantic-ui-react';
import styles from '../styles/modal.css';

const ProjectModal = (props) => {
  const project = props.project


  return(
    <Modal trigger={<img src={process.env.PUBLIC_URL + `/assets/${project.picture}`} 
      className='proImage'
        />
      }
    >
      <Image src={process.env.PUBLIC_URL + `/assets/${project.picture}`}></Image>
      <Modal.Content>
        <Modal.Description >
          <p className='modal-desc' >{project.desc}</p>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  )
}

export default ProjectModal;