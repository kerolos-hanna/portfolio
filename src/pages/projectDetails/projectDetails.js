import React, {Component} from 'react';
import { connect } from 'react-redux';
import Alert from 'react-bootstrap/Alert';

import Header from '../../Components/Header/header';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

import ecom1 from '../../assets/Images/ecom1.png';
import ecom2 from '../../assets/Images/ecom2.png';
import ecom3 from '../../assets/Images/ecom3.png';
import ecom4 from '../../assets/Images/ecom4.png';
import audio from '../../assets/Images/audio.png';
import web1 from '../../assets/Images/web1.png';
import web2 from '../../assets/Images/web2.png';
import web3 from '../../assets/Images/web3.png';
import web4 from '../../assets/Images/web4.png';

import './projectDetails.css';
class projectDetails extends Component{

  componentWillUnmount() {
    localStorage.props = ''
  }

  render(){
    const style = {
      width: "60%",
      margin: "4% 1%"
    }
    //check if props has a value
    if (this.props.location.aboutprops){
      localStorage.props = this.props.location.aboutprops;
    }
    const data = (localStorage.props === "E-commerce app") ?
      <div className="Image">
        <Image style={style} src={ecom1}/>
        <Image style={style} src={ecom2}/>
        <Image style={style} src={ecom3}/>
        <Image style={style} src={ecom4}/>
        <div className="Button">
          <Button variant="primary">
            <a href="https://kerolos-hanna.github.io/E-commerce-app/">Vist Website</a>
          </Button>
        </div>
      </div>
      : (localStorage.props === "Audio") ?
        <div className="Image">
          <Image style={style} src={audio}/>
          <div className="Button">
            <Button variant="primary">
              <a href="https://kerolos-hanna.github.io/Audio-player-with-playlist/">
                Vist Website
              </a>
            </Button>
          </div>
        </div>
      : (localStorage.props === "Website") ?
        <div className="Image">
          <Image style={style} src={web1}/>
          <Image style={style} src={web2}/>
          <Image style={style} src={web3}/>
          <Image style={style} src={web4}/>
          <div className="Button">
            <Button variant="primary">
              <a href="https://kerolos-hanna.github.io/Website-prototype/">Vist Website</a>
            </Button>
          </div>
      </div>: null
    /*check if I have a props or not */
    const header = (localStorage.props)? 
      <React.Fragment>
        <h1 style={{color: (this.props.dark)? "#e4e4e4": ""}}>{localStorage.props}</h1>
        <p style={{color: (this.props.dark)? "#e4e4e4": ""}}>
          using Html, css and javascript
        </p>
      </React.Fragment> : <Alert variant="danger">Please select a project first!</Alert>

    return(
      <div className="project-details">
        <Header />
        <div className="container">
          <div className="project-details-header">
            {header}
            <div className="img-details">
              {data}
            </div>
          </div>
          {console.log(this.props)}
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

export default connect(mapStateToProps)(projectDetails);