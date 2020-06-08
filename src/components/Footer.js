import React from 'react';
import {Icon} from 'semantic-ui-react';
import styles from '../styles/footer.css';

const Footer = () => {

  return(
    <div className="footer">
      <div className="footerLinks">
        <a href='https://twitter.com/CarsonMeiling'>
          <Icon name='twitter square' size='huge' color="black" />
        </a>
        <a href='https://www.linkedin.com/in/carsonmeiling/'>
          <Icon name='linkedin' size='huge' color='black'/>
        </a>
        <a href='https://github.com/carsonmeiling'>
          <Icon name='github square' size='huge' color='black' />
        </a>
      </div>
      <div className='foot'>
        <p>Carson Meiling 2020</p>
      </div>

    </div>
  )
}

export default Footer;