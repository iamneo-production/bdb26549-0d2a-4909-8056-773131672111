import React,{useState} from 'react';
import"./AddStudent.css";
import { Link } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
//import useState from 'react/cjs/react.production.min';

export function AddStudent() {
    const[firstName,setFirstname] = useState('');
    const[lastName,setlastName] = useState('');
    const[gender,setgender] = useState('');
    const[fatherName,setfatherName] = useState('');
    const[phoneNumber1,setphoneNumber1] = useState('');
    const[phoneNumber2,setphoneNumber2] = useState('');
    const[motherName,setmotherName] = useState('');
    const[email,setemail] = useState('');
    const[dob,setdob] = useState('');
    const[studentId,setstudentId] = useState('');
    const[courseId,setcourseId] = useState('');
    const[address1,setaddress1] = useState('');
    const[address2,setaddress2] = useState('');
    const[city,setcity] = useState('');
    const[state,setstate] = useState('');
    const[pincode,setpincode] = useState('');
    const[nationality,setnationality] = useState('');

    function handleSubmit(e){
      e.preventDefault();
      if(phoneNumber1.toString().length!==10){
        alert(`Phone number must contains 10 digits.`)
      }
      else if(phoneNumber2.toString().length!==10){
        alert(`Phone number must contains 10 digits.`)
      }
      else if(pincode.toString().length!==6){
        alert(`Pincode must contains 6 digits.`)
      }else{
      console.log(firstName,`;`,lastName,`;`,gender,`;`,fatherName,`;`,phoneNumber1,`;`,phoneNumber2,`;`,motherName,`;`,
      email,`;`,dob,`;`,studentId,`;`,courseId,`;`,address1,`;`,address2,`;`,city,`;`,state,`;`,pincode,`;`,nationality);
      alert(`Student "${firstName}" added successfully.`)}
    }
    
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

            <div className='addstudentform'>
              <form onSubmit={handleSubmit}>
              <div className="row g-2">
                <div className="col-md">
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label"></label>
                    <input type="text" value={firstName} onChange={(e)=> setFirstname(e.target.value)} className="form-control" placeholder="First Name" id="name" required/>
                </div>
                </div>
                <div className="col-md">
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label"></label>
                    <input type="text" value={lastName} onChange={(e)=> setlastName(e.target.value)} className="form-control" placeholder="Last Name" id="name" required/>
                </div>
                </div>
                <div className="col-md">
                <div className="mb-3">
                  <select value={gender} onChange={(e)=> setgender(e.target.value)} className="form-select" aria-label="Default select example" required>
                    <option value="">Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Prefer not to say">Prefer not to say</option>
                  </select> 
                </div>
                </div>
              </div>

              <div className="row g-2">
                <div className="col-md">
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label"></label>
                    <input type="text" value={fatherName} onChange={(e)=> setfatherName(e.target.value)} className="form-control" placeholder="Father Name" id="name" required/>
                </div>
                </div>
                <div className="col-md">
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label"></label>
                    <input type="number" value={phoneNumber1} onChange={(e)=> setphoneNumber1(e.target.value)} className="form-control" placeholder="Phone Number" id="name" required/>
                </div>
                </div>
                <div className="col-md">
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label"></label>
                    <input type="number" value={phoneNumber2} onChange={(e)=> setphoneNumber2(e.target.value)} className="form-control" placeholder="Alternate Phone Number" id="name" required/>
                </div>
                </div>
              </div>
        
              <div className='sideform'>
                <div className="new">
                    <input type="text" value={motherName} onChange={(e)=> setmotherName(e.target.value)} className="form-control" placeholder="Mother Name" id="name" required/>
                </div>
                <div className="new">
                    <label htmlFor="exampleInputEmail1" className="form-label"></label>
                    <input type="email" value={email} onChange={(e)=> setemail(e.target.value)} className="form-control" placeholder="Email ID" id="name" required/>
                </div>
                <div className="new">
                    <label htmlFor="exampleInputEmail1" className="form-label">Date of Birth</label>
                    <DatePicker selected={dob} onChange={(e)=> setdob(e)} className="form-control" showYearDropdown scrollableMonthYearDropdown ></DatePicker>
                </div>
                <div className="new">
                    <label htmlFor="exampleInputEmail1" className="form-label"></label>
                    <input type="number" value={courseId} onChange={(e)=> setcourseId(e.target.value)} className="form-control" placeholder="Course ID" id="name" required/>
                </div>
                <div className="new">
                    <label htmlFor="exampleInputEmail1" className="form-label"></label>
                    <input type="number" value={studentId} onChange={(e)=> setstudentId(e.target.value)} className="form-control" placeholder="Student ID" id="name" required/>
                </div>

              </div>


              <div className='address'>
                <p id='add'><b>Address Information</b></p>
                <div className="newa">
                    <input type="text" value={address1} onChange={(e)=> setaddress1(e.target.value)} className="form-control" placeholder="Address Line1" id="name" required/>
                </div>
                <div className="newa">
                    <label htmlFor="exampleInputEmail1" className="form-label"></label>
                    <input type="text" value={address2} onChange={(e)=> setaddress2(e.target.value)} className="form-control" placeholder="Address Line2" id="name" required/>
                </div>
                <div className="row g-2">
                  <div className="col-md">
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label"></label>
                        <input type="text" value={city} onChange={(e)=> setcity(e.target.value)} className="form-control" placeholder="City" id="name" required/>
                    </div>
                  </div>
                  <div className="col-md">
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label"></label>
                        <input type="text" value={state} onChange={(e)=> setstate(e.target.value)} className="form-control" placeholder="State" id="name" required/>
                    </div>
                  </div>
                </div>
                <div className="row g-2">
                  <div className="col-md">
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label"></label>
                        <input type="number" value={pincode} onChange={(e)=> setpincode(e.target.value)} className="form-control" placeholder="Pincode" id="name" required/>
                    </div>
                  </div>
                  <div className="col-md">
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label"></label>
                        <input type="text" value={nationality} onChange={(e)=> setnationality(e.target.value)} className="form-control" placeholder="Nationality" id="name" required/>
                    </div>
                  </div>
                </div>
              </div>
              <button type="submit" value="Submit" className="btn1 btn-primary">ADD STUDENT</button> 
              </form>
            </div>  
         </div>
  )
}
