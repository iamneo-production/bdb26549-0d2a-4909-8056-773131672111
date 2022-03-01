import react from 'react';
import './App.css';
import { Signup } from './components/Signup.jsx';
import { Login } from './components/Login.jsx';
import { AdminCourse } from './components/admin/Course/AdminCourse.jsx';
import {AdminPage} from './components/admin/Academy/AdminPage.jsx'
import {Student} from './components/admin/Student.jsx'
import { AddEditAcademy} from './components/admin/Academy/AddEditAcademy';
import { AddEditCourse} from './components/admin/Course/AddEditCourse';

import { BrowserRouter, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
     <Routes>
        <Route path="/" exact element={<Signup />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/admin-profile" exact element={<AdminPage />} />
        <Route path="/course" exact element={<AdminCourse />} />
        <Route path="/student" exact element={<Student />} />
        <Route path="/academy" exact element={<AddEditAcademy/>} />
        <Route path="/addcourse" exact element={<AddEditCourse/>}/>
      </Routes>  
    </BrowserRouter>
    // <div>
    //   <AdminPage/>
    // </div>

  );
}

export default App;

