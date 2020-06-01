import React from 'react';
import styles from '../styles/toplanding.css';
import { Icon } from 'semantic-ui-react';

const TopLanding = () => {

  return(
    <div className="topLanding">
      <div className="links">
        <a href='https://twitter.com/CarsonMeiling'>
          <Icon name='twitter square' size='huge' color="black" />
        </a>
        <a href='https://www.instagram.com/carson.meiling/'>
          <Icon name='instagram' size='huge' color='black'/>
        </a>
        <a href='https://github.com/carsonmeiling'>
          <Icon name='github square' size='huge' color='black' />
        </a>
      </div>
      <div className='header'>
        <h3 className="name" >I'm Carson.</h3>
        <h4 className='desc' >A Utah based Developer.</h4>
      </div>
    </div>
  )
}
export default TopLanding;