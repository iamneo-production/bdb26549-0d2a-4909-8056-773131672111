import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import classes from './Landing.css';
import"./Landing.css";
export class LandingPage extends Component {
  render() {
      return(
          <div className="container">

          <div className="image"></div>
          <div className="element">
          <h1 className="h">WELCOME </h1>
          <h4 className="h">to</h4>
          <h1 className="h"><b>CHESS ACADEMY</b></h1>
          <br></br>
          <h4>Now enroll to your chess courses at your finger tips.</h4>
          <br></br>
          <h3>Get Started !</h3>
          <Link className="btn btn-primary btn-lg" style={{marginRight:"16px"}}to="/signup">Signup</Link>
          <br></br>
          <br></br>
          <h3>Already have an account?</h3>
          <Link className="btn btn-success btn-lg" to="/login">Login</Link>
          </div>
        </div>   
      )
  }
}