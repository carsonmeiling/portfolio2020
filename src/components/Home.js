import React from 'react';
import { render } from '@testing-library/react';
import TopLanding from './TopLanding';
import About from './About';
import Projects from './Projects';
import Footer from './Footer';

const Home = () => {

  return(
    <div>
      <TopLanding />
      <About />
      <Projects />
      <Footer />
    </div>
  )
}

export default Home;