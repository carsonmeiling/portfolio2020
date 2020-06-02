import React from 'react';
import { render } from '@testing-library/react';
import TopLanding from './TopLanding';
import About from './About';
import Projects from './Projects';

const Home = () => {

  return(
    <div>
      <TopLanding />
      <About />
      <Projects />
    </div>
  )
}

export default Home;