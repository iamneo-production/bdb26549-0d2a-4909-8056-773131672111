import React from "react";
import { Link } from "react-router-dom";
import {FaUserCircle} from 'react-icons/fa';
import "./Nav.css";


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
                    <Link to="/admin/viewInstitutes" className="nav-link active" aria-current="page" id='navitem'>Academy</Link>
                    </li>
                  </ul>
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link to="/admin/viewCourse" className="nav-link active" aria-current="page" id='navitem'>Courses</Link>
                    </li>
                  </ul>
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link to="/admin/addStudent" className="nav-link active" aria-current="page" id='navitem'>Students</Link>
                    </li>
                  </ul>  
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item" id='navitem'>
                    </li>
                    <li className="nav-item">
                    <Link to="/login" className="nav-link active" aria-current="page" id='navitem'>Logout</Link>
                    </li>
                  </ul>
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    
                  </ul>
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <FaUserCircle size={40} color="white"/>
                    <li>
                    <a className="nav-link active" aria-current="page" id='navitem'>Admin</a>
                    </li>
                  </ul>

                </div>
              </div>
            </nav>
    </div>
  )
}
















