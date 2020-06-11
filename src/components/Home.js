import React from 'react';
import TopLanding from './TopLanding';
import About from './About';
import Projects from './Projects';
import Footer from './Footer';
import Contact from './Contact';

const Home = () => {

  return(
    <div>
      <TopLanding />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home;