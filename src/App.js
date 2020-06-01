import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Main from './pages/mainPage/main';
import projectDetails from './pages/projectDetails/projectDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render(){
    return (
      <div className="App" style={{backgroundColor: (this.props.dark)? "#18191A": ""}}>
        <Router>
            <header className="App-header">
              {/* <Main /> */}
            </header>
          <Switch>
            <Route path="/portfolio" exact component={Main}/>
            <Route path="/project-details" component={projectDetails}/>
          </Switch>
        </Router>
      </div>

    );  
  }
}

const mapStateToProps = (state) => {
  return {
    dark: state.dark
  }
}

export default connect(mapStateToProps)(App);
