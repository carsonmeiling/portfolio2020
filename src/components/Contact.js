import React from 'react';
import {Icon} from 'semantic-ui-react';
import Resume from '../downloadables/Resume.docx'
import styles from '../styles/contact.css';

const Contact = () => {

  return(
    <div className='contact'>
      <div >
        <h2 className='contact-header'>Get in Touch</h2>
      </div>
      <div className='contact-content'>
        <div className='info'>
          <div className='contact-icon'>
            <Icon name="mail outline" size='large'/>
            <a className='contact-a' 
              href='mailto:carmc93@gmail.com?subject=Job Opportunity'
            >carmc93@gmail.com</a>
          </div>
          <div className='contact-icon' >
            <Icon name='phone' size='large'/>
            <a className='contact-a' href='tel:+18019716653'>(801) 971-6653</a>
          </div>
          <div className='contact-icon' >
            <Icon name='home' size='large'/>
            <a className='contact-a' >Bluffdale, Utah</a>
          </div>
          <div className='contact-icon'>
            <Icon name='folder open outline' size='large'/>
            <a className='contact-a' href={Resume} download>Resume PDF</a>
          </div>
        </div>

        
      </div>


    </div>
  )
}

export default Contact;