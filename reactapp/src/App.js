import react from 'react';
//import logo from './logo.svg';
import './App.css';
import {LandingPage} from './components/LandingPage.jsx';
import {Signup} from './components/Signup.jsx';
import {Login} from './components/Login.jsx';

//import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import { BrowserRouter, Routes,Route, Link } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
