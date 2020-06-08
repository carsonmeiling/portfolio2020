import React from 'react';
import {Icon} from 'semantic-ui-react';
import Resume from '../downloadables/Resume.docx'
import styles from '../styles/contact.css';

const Contact = () => {

  return(
    <div className='contact'>
      <div className='contactForm'>
        <h2>Get in Touch</h2>
      </div>
      <div className='contact-icon'>
        <Icon name="mail outline" />
        <a href='mailto:carmc93@gmail.com?subject=Opportunity'>carmc93@gmail.com</a>
      </div>
      <div className='contact-icon'>
        <Icon name='phone' />
        <a href='tel:+18019716653'>(801) 971-6653</a>
      </div>
      <div className='contact-icon'>
        <Icon name='home' />
        <a>Bluffdale, Utah</a>
      </div>
      <div className='contact-icon'>
        <Icon name='folder open outline' />
        <a href={Resume} download>Resume PDF</a>
      </div>
    </div>
  )
}

export default Contact;