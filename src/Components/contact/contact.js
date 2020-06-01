import React, { Component } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import { FaLinkedin, FaGithub, FaFacebookSquare } from 'react-icons/fa';

import './contact.css';

class contact extends Component{
  render(){
    return (
      <div className="bkground-contact"> 
        <div className="padding-y" id="contact">
          <div className="container-contact">
            <h1 className="contact-header">Contact me</h1>
            <span className="line"></span>
            <Form>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter name" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
              </Form.Row>

              <Form.Group controlId="formGridAddress1">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows="5" placeholder="Enter your message" />
              </Form.Group>

              <Button className="submit-form" variant="info" type="submit">
                Submit
              </Button>
            </Form>
            <div className="social-icons">
              <div className="facebook">
                <a href="https://www.facebook.com/kero.hanna/"><FaFacebookSquare /></a>
              </div>
              <div className="linkedin">
                <a href="https://www.linkedin.com/in/kerolos-hanna-0a0b1616a/"><FaLinkedin /></a>
              </div>
              <div className="github">
                <a href="https://github.com/kerolos-hanna"><FaGithub /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default contact;