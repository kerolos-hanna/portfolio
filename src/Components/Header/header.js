import React, { Component } from 'react';
import { Link } from 'react-scroll';
import { Link as Route } from 'react-router-dom';
import { connect } from 'react-redux';
import darkHandler from '../../Store/Action/action';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';

import './header.css';

class header extends Component{

  state = {
    dark: true,
  }
  
  darkChangehandler = (e) => {
    this.setState({
      dark: !this.state.dark,
    })
  }

  render(){
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
        <div className="container">
        <Navbar.Brand className="head-header">
          <Route to="/">Kerolos Hanna</Route>
        </Navbar.Brand> 
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Route to="/" id="navLinkHome">
              Home
            </Route>

            <Link 
            id = "navLinkProject"
            spy={true}
            offset={0} duration={500}
            to="project"
            smooth={true}  
            href="#project" 
            >Project</Link>

            <Link 
            id = "navLinkContact"
            spy={true}
            offset={-10} duration={500}
            to = "contact"
            smooth={true}
            href = "#contact"
            >Contact</Link>
            <DropdownButton 
            className="drop" id="dropdown-basic-button" title="" variant="info" alignRight>
                <Form.Check 
                  type="switch"
                  id="custom-switch"
                  label="Dark mode"
                  checked={this.props.dark}
                  onChange={this.darkChangehandler}
                  onClick={() => this.props.onDarkHandler(this.state.dark)}
                />
            </DropdownButton>
          </Nav>
        </Navbar.Collapse>
        </div>
      </Navbar>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    dark: state.dark
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    onDarkHandler: (dark) => dispatch(darkHandler(dark))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(header);