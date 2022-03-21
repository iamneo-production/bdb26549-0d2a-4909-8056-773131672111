import react from 'react';
import './App.css';
import { Signup } from './components/Signup.jsx';
import { Login } from './components/Login.jsx';
import { AdminCourse } from './components/admin/Course/AdminCourse.jsx';
import Viewacademy from './components/admin/Adminacademy/Viewacademy.jsx'
import {Student} from './components/admin/Student.jsx'
import  AddAcademy from './components/admin/Adminacademy/AddAcademy.jsx';
import EditAcademy from './components/admin/Adminacademy/EditAcademy.jsx';
import { AddEditCourse} from './components/admin/Course/AddEditCourse';

import { BrowserRouter, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
     <Routes>
        <Route path="/" exact element={<Signup />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/viewacademy" exact element={<Viewacademy />} />
        <Route path="/course" exact element={<AdminCourse />} />
        <Route path="/student" exact element={<Student />} />
        <Route path="/addacademy" exact element={<AddAcademy/>} />
        <Route path="/editacademy" exact element={<EditAcademy/>}/>
        <Route path="/addcourse" exact element={<AddEditCourse/>}/>
        
      </Routes>  
    </BrowserRouter>

  );
}

export default App;

