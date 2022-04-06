import React,{useState} from 'react';
import"./AddStudent.css";
import axios from "axios";
//import { Link } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {Navbar} from '../Navbar.jsx';
//import useState from 'react/cjs/react.production.min';

export function AddStudent() {
    const[studentFirstName,setFirstname] = useState('');
    const[studentLastName,setlastName] = useState('');
    const[studentGender,setGender] = useState('');
    const[studentFatherName,setfatherName] = useState('');
    const[studentMobileNumber,setphoneNumber1] = useState('');
    const[studentAlternateNumber,setphoneNumber2] = useState('');
    const[studentMotherName,setmotherName] = useState('');
    const[studentemailId,setemail] = useState('');
    const[studentDob,setdob] = useState('');
    const[studentId,setstudentId] = useState('');
    const[studentCourseId,setcourseId] = useState('');
    const[studentAddressLine1,setaddress1] = useState('');
    const[studentAddressLine2,setaddress2] = useState('');
    const[studentCity,setcity] = useState('');
    const[studentState,setstate] = useState('');
    const[studentPincode,setpincode] = useState('');
    const[studentNationality,setnationality] = useState('');

    function handleSubmit(e){
      e.preventDefault();
      if(studentMobileNumber.toString().length!==10){
        alert(`Phone number must contains 10 digits.`)
      }
      else if(studentAlternateNumber.toString().length!==10){
        alert(`Phone number must contains 10 digits.`)
      }
      else if(studentPincode.toString().length!==6){
        alert(`Pincode must contains 6 digits.`)
      }else{
      console.log(studentFirstName,`;`,studentLastName,`;`,studentGender,`;`,studentFatherName,`;`,studentMobileNumber,`;`,studentAlternateNumber,`;`,studentMotherName,`;`,
      studentemailId,`;`,studentDob,`;`,studentId,`;`,studentCourseId,`;`,studentAddressLine1,`;`,studentAddressLine2,`;`,studentCity,`;`,studentState,`;`,studentPincode,`;`,studentNationality);
      alert(`Student "${studentFirstName}" added successfully.`)}
      
      const user = {
        studentFirstName:studentFirstName,studentLastName:studentLastName,studentGender:studentGender,studentFatherName:studentFatherName,
        studentMobileNumber:studentMobileNumber,studentAlternateNumber:studentAlternateNumber,studentMotherName:studentMotherName,
      studentemailId:studentemailId,studentDob:studentDob,studentId:studentId,studentCourseId:studentCourseId,studentAddressLine1:studentAddressLine1,
      studentAddressLine2:studentAddressLine2,studentCity:studentCity,studentState:studentState,studentPincode:studentPincode,studentNationality:studentNationality    
    }
      axios
        .post('http://localhost:8080/admin/addStudent', user)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
    }
  return (
         <div>
           <Navbar/>
            <div className='addstudentform'>
              <form onSubmit={handleSubmit}>
              <div className="row g-2">
                <div className="col-md">
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label"></label>
                    <input type="text" value={studentFirstName} onChange={(e)=> setFirstname(e.target.value)} className="form-control" placeholder="First Name" id="name" required/>
                </div>
                </div>
                <div className="col-md">
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label"></label>
                    <input type="text" value={studentLastName} onChange={(e)=> setlastName(e.target.value)} className="form-control" placeholder="Last Name" id="name" required/>
                </div>
                </div>
                <div className="col-md">
                <div className="mb-3">
                  <select value={studentGender} onChange={(e)=> setGender(e.target.value)} className="form-select" aria-label="Default select example" required>
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
                    <input type="text" value={studentFatherName} onChange={(e)=> setfatherName(e.target.value)} className="form-control" placeholder="Father Name" id="name" required/>
                </div>
                </div>
                <div className="col-md">
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label"></label>
                    <input type="number" value={studentMobileNumber} onChange={(e)=> setphoneNumber1(e.target.value)} className="form-control" placeholder="Phone Number" id="name" required/>
                </div>
                </div>
                <div className="col-md">
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label"></label>
                    <input type="number" value={studentAlternateNumber} onChange={(e)=> setphoneNumber2(e.target.value)} className="form-control" placeholder="Alternate Phone Number" id="name" required/>
                </div>
                </div>
              </div>
        
              <div className='sideform'>
                <div className="new">
                    <input type="text" value={studentMotherName} onChange={(e)=> setmotherName(e.target.value)} className="form-control" placeholder="Mother Name" id="name" required/>
                </div>
                <div className="new">
                    <label htmlFor="exampleInputEmail1" className="form-label"></label>
                    <input type="email" value={studentemailId} onChange={(e)=> setemail(e.target.value)} className="form-control" placeholder="Email ID" id="name" required/>
                </div>
                <div className="new">
                    <label htmlFor="exampleInputEmail1" className="form-label">Date of Birth</label>
                    <DatePicker selected={studentDob} onChange={(e)=> setdob(e)} className="form-control" showYearDropdown scrollableMonthYearDropdown ></DatePicker>
                </div>
                <div className="new">
                    <label htmlFor="exampleInputEmail1" className="form-label"></label>
                    <input type="number" value={studentCourseId} onChange={(e)=> setcourseId(e.target.value)} className="form-control" placeholder="Course ID" id="name" required/>
                </div>
                <div className="new">
                    <label htmlFor="exampleInputEmail1" className="form-label"></label>
                    <input type="number" value={studentId} onChange={(e)=> setstudentId(e.target.value)} className="form-control" placeholder="Student ID" id="name" required/>
                </div>

              </div>


              <div className='address'>
                <p id='add'><b>Address Information</b></p>
                <div className="newa">
                    <input type="text" value={studentAddressLine1} onChange={(e)=> setaddress1(e.target.value)} className="form-control" placeholder="Address Line1" id="name" required/>
                </div>
                <div className="newa">
                    <label htmlFor="exampleInputEmail1" className="form-label"></label>
                    <input type="text" value={studentAddressLine2} onChange={(e)=> setaddress2(e.target.value)} className="form-control" placeholder="Address Line2" id="name" required/>
                </div>
                <div className="row g-2">
                  <div className="col-md">
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label"></label>
                        <input type="text" value={studentCity} onChange={(e)=> setcity(e.target.value)} className="form-control" placeholder="City" id="name" required/>
                    </div>
                  </div>
                  <div className="col-md">
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label"></label>
                        <input type="text" value={studentState} onChange={(e)=> setstate(e.target.value)} className="form-control" placeholder="State" id="name" required/>
                    </div>
                  </div>
                </div>
                <div className="row g-2">
                  <div className="col-md">
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label"></label>
                        <input type="number" value={studentPincode} onChange={(e)=> setpincode(e.target.value)} className="form-control" placeholder="Pincode" id="name" required/>
                    </div>
                  </div>
                  <div className="col-md">
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label"></label>
                        <input type="text" value={studentNationality} onChange={(e)=> setnationality(e.target.value)} className="form-control" placeholder="Nationality" id="name" required/>
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

// import React,{useState} from 'react';
// import "./AddStudent.css";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import {Navbar} from "../Navbar";

// export function AddStudent() {
//     const[firstName,setFirstname] = useState('');
//     const[lastName,setlastName] = useState('');
//     const[gender,setgender] = useState('');
//     const[fatherName,setfatherName] = useState('');
//     const[phoneNumber1,setphoneNumber1] = useState('');
//     const[phoneNumber2,setphoneNumber2] = useState('');
//     const[motherName,setmotherName] = useState('');
//     const[email,setemail] = useState('');
//     const[dob,setdob] = useState('');
//     const[studentId,setstudentId] = useState('');
//     const[courseId,setcourseId] = useState('');
//     const[address1,setaddress1] = useState('');
//     const[address2,setaddress2] = useState('');
//     const[city,setcity] = useState('');
//     const[state,setstate] = useState('');
//     const[pincode,setpincode] = useState('');
//     const[nationality,setnationality] = useState('');

//     function handleSubmit(e){
//       e.preventDefault();
//       if(phoneNumber1.toString().length!==10){
//         alert(`Phone number must contains 10 digits.`)
//       }
//       else if(phoneNumber2.toString().length!==10){
//         alert(`Phone number must contains 10 digits.`)
//       }
//       else if(pincode.toString().length!==6){
//         alert(`Pincode must contains 6 digits.`)
//       }else{
//       console.log(firstName,`;`,lastName,`;`,gender,`;`,fatherName,`;`,phoneNumber1,`;`,phoneNumber2,`;`,motherName,`;`,
//       email,`;`,dob,`;`,studentId,`;`,courseId,`;`,address1,`;`,address2,`;`,city,`;`,state,`;`,pincode,`;`,nationality);
//       alert(`Student "${firstName}" added successfully.`)}
//     }
//   return (
//          <div>
//            <Navbar/>
//             <div className='addstudentform'>
//               <form onSubmit={handleSubmit}>
//               <div className="row g-2">
//                 <div className="col-md">
//                 <div className="mb-3">
//                     <label htmlFor="exampleInputEmail1" className="form-label"></label>
//                     <input type="text" value={firstName} onChange={(e)=> setFirstname(e.target.value)} className="form-control" placeholder="First Name" id="name" required/>
//                 </div>
//                 </div>
//                 <div className="col-md">
//                 <div className="mb-3">
//                     <label htmlFor="exampleInputEmail1" className="form-label"></label>
//                     <input type="text" value={lastName} onChange={(e)=> setlastName(e.target.value)} className="form-control" placeholder="Last Name" id="name" required/>
//                 </div>
//                 </div>
//                 <div className="col-md">
//                 <div className="mb-3">
//                   <select value={gender} onChange={(e)=> setgender(e.target.value)} className="form-select" aria-label="Default select example" required>
//                     <option value="">Gender</option>
//                     <option value="Male">Male</option>
//                     <option value="Female">Female</option>
//                     <option value="Prefer not to say">Prefer not to say</option>
//                   </select> 
//                 </div>
//                 </div>
//               </div>

//               <div className="row g-2">
//                 <div className="col-md">
//                 <div className="mb-3">
//                     <label htmlFor="exampleInputEmail1" className="form-label"></label>
//                     <input type="text" value={fatherName} onChange={(e)=> setfatherName(e.target.value)} className="form-control" placeholder="Father Name" id="name" required/>
//                 </div>
//                 </div>
//                 <div className="col-md">
//                 <div className="mb-3">
//                     <label htmlFor="exampleInputEmail1" className="form-label"></label>
//                     <input type="number" value={phoneNumber1} onChange={(e)=> setphoneNumber1(e.target.value)} className="form-control" placeholder="Phone Number" id="name" required/>
//                 </div>
//                 </div>
//                 <div className="col-md">
//                 <div className="mb-3">
//                     <label htmlFor="exampleInputEmail1" className="form-label"></label>
//                     <input type="number" value={phoneNumber2} onChange={(e)=> setphoneNumber2(e.target.value)} className="form-control" placeholder="Alternate Phone Number" id="name" required/>
//                 </div>
//                 </div>
//               </div>
        
//               <div className='sideform'>
//                 <div className="new">
//                     <input type="text" value={motherName} onChange={(e)=> setmotherName(e.target.value)} className="form-control" placeholder="Mother Name" id="name" required/>
//                 </div>
//                 <div className="new">
//                     <label htmlFor="exampleInputEmail1" className="form-label"></label>
//                     <input type="email" value={email} onChange={(e)=> setemail(e.target.value)} className="form-control" placeholder="Email ID" id="name" required/>
//                 </div>
//                 <div className="new">
//                     <label htmlFor="exampleInputEmail1" className="form-label">Date of Birth</label>
//                     <DatePicker selected={dob} onChange={(e)=> setdob(e)} className="form-control" showYearDropdown scrollableMonthYearDropdown ></DatePicker>
//                 </div>
//                 <div className="new">
//                     <label htmlFor="exampleInputEmail1" className="form-label"></label>
//                     <input type="number" value={courseId} onChange={(e)=> setcourseId(e.target.value)} className="form-control" placeholder="Course ID" id="name" required/>
//                 </div>
//                 <div className="new">
//                     <label htmlFor="exampleInputEmail1" className="form-label"></label>
//                     <input type="number" value={studentId} onChange={(e)=> setstudentId(e.target.value)} className="form-control" placeholder="Student ID" id="name" required/>
//                 </div>

//               </div>


//               <div className='address'>
//                 <p id='add'><b>Address Information</b></p>
//                 <div className="newa">
//                     <input type="text" value={address1} onChange={(e)=> setaddress1(e.target.value)} className="form-control" placeholder="Address Line1" id="name" required/>
//                 </div>
//                 <div className="newa">
//                     <label htmlFor="exampleInputEmail1" className="form-label"></label>
//                     <input type="text" value={address2} onChange={(e)=> setaddress2(e.target.value)} className="form-control" placeholder="Address Line2" id="name" required/>
//                 </div>
//                 <div className="row g-2">
//                   <div className="col-md">
//                     <div className="mb-3">
//                         <label htmlFor="exampleInputEmail1" className="form-label"></label>
//                         <input type="text" value={city} onChange={(e)=> setcity(e.target.value)} className="form-control" placeholder="City" id="name" required/>
//                     </div>
//                   </div>
//                   <div className="col-md">
//                     <div className="mb-3">
//                         <label htmlFor="exampleInputEmail1" className="form-label"></label>
//                         <input type="text" value={state} onChange={(e)=> setstate(e.target.value)} className="form-control" placeholder="State" id="name" required/>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="row g-2">
//                   <div className="col-md">
//                     <div className="mb-3">
//                         <label htmlFor="exampleInputEmail1" className="form-label"></label>
//                         <input type="number" value={pincode} onChange={(e)=> setpincode(e.target.value)} className="form-control" placeholder="Pincode" id="name" required/>
//                     </div>
//                   </div>
//                   <div className="col-md">
//                     <div className="mb-3">
//                         <label htmlFor="exampleInputEmail1" className="form-label"></label>
//                         <input type="text" value={nationality} onChange={(e)=> setnationality(e.target.value)} className="form-control" placeholder="Nationality" id="name" required/>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <button type="submit" value="Submit" className="btn1 btn-primary">ADD STUDENT</button> 
//               </form>
//             </div>  
//          </div>
//   )
// }
