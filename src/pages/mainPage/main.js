import React, { Component } from 'react';

import Header from '../../Components/Header/header';
import About from '../../Components/About/about';
import Projects from '../../Components/projects/projects';
import Contact from '../../Components/contact/contact';

import './main.css';

class main extends Component{

  render(){ 
    return(
      <div>
        <Header />
        <About />
        <Projects />
        <Contact />
      </div>
    )
  }
}

export default main;