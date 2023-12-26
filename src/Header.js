import React from "react";
import { Link } from "react-router-dom";
const Headers = () => {
  return (
    <header className="text-gray-600 body-font">

      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span className="ml-3 text-xl">SAT-SCORE</span>
        </a>
<nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-gray-900">Home</a>

          <div className="relative group">
            <button className="mr-5 hover:text-gray-900 focus:outline-none flex items-center">
              Actions
              <svg
                className="fill-current h-4 w-4 ml-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
<path d="M10 12l-6-6 1.41-1.41L10 9.17l4.59-4.58L16 6z" />
              </svg>
            </button>

            <div className="absolute hidden bg-white text-gray-900 group-hover:block mt-1 p-2 w-40  rounded-md shadow-lg">
            
              <Link to="/insertdata" className="block hover:bg-gray-100 py-2">Insert Data</Link>
              <Link to="/viewalldata" className="block hover:bg-gray-100 py-2">View All Data</Link>

              <Link to="/getrank" className="block hover:bg-gray-100 py-2">Get Rank</Link>
              <Link to="/updatescore" className="block hover:bg-gray-100 py-2">Update Score</Link>
              <Link to="/deleterecord" className="block hover:bg-gray-100 py-2">Delete One Record</Link> 
              
            </div>
          </div>
        </nav>
      </div>
      </header>
      );}

      export default Headers;