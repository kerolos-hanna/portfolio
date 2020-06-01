import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Image from 'react-bootstrap/Image';
import pro1 from '../../assets/Images/pro1.jpg';
import pro2 from '../../assets/Images/pro2.jpg';
import pro3 from '../../assets/Images/pro3.jpg';
import Button from 'react-bootstrap/Button';

import './projects.css';

class projects extends Component{
  render(){
    return (
      <div className="container" id="project">
        <div className="padding-y">
          <div className="projects-content">
            <h1 
            className="projects-header" 
            style={{color: (this.props.dark)? "#eee": ""}}>My Recent Work</h1>
            <span className="line"></span>
            <div className="project-content-1">
              <div className="projects">
                <Image style={{width: "100%"}} src={pro1} alt="me" rounded />
                <div className="layer-content">
                  <div className="layer-info">
                    <span className="project-name">e-commerce app</span>
                    <h3 className="layer-content-title">let's see</h3>
                    <Button variant="outline-info" size="lg">
                      <Link to={{
                        pathname:"/project-details",
                        aboutprops:'E-commerce app'
                        }}>Details</Link>
                    </Button>
                  </div>
                </div> 
              </div>
              <div className="projects middle">
                <Image style={{width: "100%"}} src={pro2} alt="me" rounded />
                <div className="layer-content">
                  <div className="layer-info">
                    <span className="project-name">audio player with playlist</span>
                    <h3 className="layer-content-title">let's see</h3>
                    <Button variant="outline-info" size="lg">
                      <Link to={{
                        pathname:"/project-details",
                        aboutprops:'Audio'
                        }}>Details</Link>
                    </Button>
                  </div>
                </div> 
              </div>
              <div className="projects">
                <Image style={{width: "100%"}} src={pro3} alt="me" rounded />
                <div className="layer-content">
                  <div className="layer-info">
                    <span className="project-name">website prototype</span>
                    <h3 className="layer-content-title">let's see</h3>
                    <Button variant="outline-info" size="lg">
                      <Link to={{
                        pathname:"/project-details",
                        aboutprops:'Website'
                        }}>Details</Link>
                    </Button>
                  </div>
                </div> 
              </div>
            </div>
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

export default connect(mapStateToProps)(projects);