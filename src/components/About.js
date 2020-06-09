import React from 'react';
import styles from '../styles/about.css';

const About = () => {

  return(
    <div className="about">
      <h2 className='about-header'>Who I Am</h2>
      <div className='descriptions'>
        <div className='top-desc'>
          <p>I am a Utah Native with a background in finance, aviation, and business. In my spare time I enjoy skiing, scuba diving, and cooking.</p>
        </div>
        <div className='bottom-desc'>
          <p>I made the leap to development, and have enjoyed the challenge ever since then. I enjoy making clean and simple websites. My language experience includes Ruby on Rails, React, Postgresql, and HTML. </p>
        </div>
      </div>
    </div>
  )
}

export default About;