import React from 'react';
import styles from '../styles/toplanding.css';

const TopLanding = () => {

  return(
    <div className="topLanding">
      <div className="links">
        <a href='twitter'>Twitter</a>
        <a href='instagram'>Insta</a>
        <a href='github'>Github</a>
      </div>
      <div className='header'>
        <h3>I'm Carson.</h3>
        <h4>A Web Developer</h4>
      </div>
    </div>
  )
}
export default TopLanding;