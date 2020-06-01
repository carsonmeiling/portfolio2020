import React from 'react';
import { render } from '@testing-library/react';
import TopLanding from './TopLanding';
import About from './About';

const Home = () => {

  return(
    <div>
      <TopLanding />
      <About />

    </div>
  )
}

export default Home;