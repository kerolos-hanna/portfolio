import React, { Component } from 'react';
import { connect } from 'react-redux';

import Image from 'react-bootstrap/Image';
import img from '../../assets/Images/me3.jpg';

import './about.css';

class about extends Component{
  render(){
    return(
      <div className="padding-y" id="home">
        <h1 
        className="about-header" 
        style={{color: (this.props.dark)? "#e4e4e4": ""}}>Front-end Developer</h1>
        <p className="about-dis" style={{color: (this.props.dark)? "#e4e4e4": ""}}>
          I design and code beautifully simple things, and I love what I do.
        </p>
        <div className="about-img">
          <Image style={{width: "250px", height: "250px"}} src={img} alt="me" roundedCircle />
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