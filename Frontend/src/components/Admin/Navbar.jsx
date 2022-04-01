import React, { Fragment } from "react";
import { Link } from "react-router-dom";
//import {FaUserCircle} from 'react-icons/fa';
import"./Nav.css";


export function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">
                <a className="navbar-brand" href="#" id='navitem'><b>CHESS ACADEMY</b></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    
                  </ul>
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link to="/login" className="nav-link active" aria-current="page" id='navitem'>Academy</Link>
                    </li>
                  </ul>
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link to="/login" className="nav-link active" aria-current="page" id='navitem'>Courses</Link>
                    </li>
                  </ul>
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link to="/login" className="nav-link active" aria-current="page" id='navitem'>Students</Link>
                    </li>
                  </ul>
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    
                  </ul>
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item" id='navitem'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                      <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                      <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                    </svg>
                    </li>
                    <li className="nav-item">
                    <Link to="/login" className="nav-link active" aria-current="page" id='navitem'>Logout</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
    </div>
  )
}

