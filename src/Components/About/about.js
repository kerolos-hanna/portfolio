import React, { Component } from 'react';
import { connect } from 'react-redux';
import Typed from 'typed.js';

import Image from 'react-bootstrap/Image';
import img from '../../assets/Images/me3.jpg';

import './about.css';

class about extends Component{

  componentDidMount() {
    const strings = ["<strong>Skills</strong>", "HTML", "CSS","Bootstrap", "JavaScript (ES6)", "TypeScript", "Angular 2+", "React js", "Redux", "I design and code beautifully simple things, and I love what I do"];
    const options = {
      strings: strings,
      typeSpeed: 50,
      backSpeed: 70,
      smartBackspace: true,
      backDelay: 700,
      showCursor: true,
      cursorChar: '|',
      autoInsertCss: true,
    }
    this.typed = new Typed(this.el, options);
  }

  componentWillUnmount() {
    this.typed.destroy();
  }

  render(){
    return(
      <div className="padding-y" id="home">
        <h1 
        className="about-header" 
        style={{color: (this.props.dark)? "#eee": ""}}>Front-end Developer</h1>
        <p className="about-dis" style={{color: (this.props.dark)? "#eee": ""}}>
          <span ref={(el) => { this.el = el; }}></span>
        </p>
        <div className="about-img">
          <Image 
            style={{width: "250px", height: "250px", boxShadow:(this.props.dark)? "0px 0px 20px #eee" : "0px 0px 30px #138496"}} src={img} alt="me" roundedCircle />
        </div>
        <div className="about-me">
          <div className="about-me-content">
            <h1>Hi, I’m Kerolos. Nice to meet you.</h1>
            <p>
              <span>For My Education:</span>
                I graduated from ITI in the track Business Process Automation Development.
                I know Software Languages such as Java, C, C++, HTML, CSS, JavaScript, Typescript, Angular, React js and have a good knowledge at some Academic Subjects: Algorithms & Data Structures, Operating Systems, Computer Organization & Architecture, Digital Logic Design, Artificial Intelligence, Computer Networks
            </p>
            <p>
              <span>My Interests:</span>
                I 'm interested in Software Development and all the Computer Disciplines, also I have volunteered work as a Software Instructor (in College), and in helping the new students coming to the Communication and Electronics Dept to know more about the Dept and Subjects 
            </p>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    dark: state.dark
  }
}

export default connect(mapStateToProps)(about);