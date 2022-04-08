import {Navbar} from '../Navbar';
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Form, Button, Row, Col ,Container } from "react-bootstrap"
import { BiReset } from "react-icons/bi";
import {TiArrowBack} from "react-icons/ti";


import validate from './Validate';

const EditCourse = () => {

    const initialValues = {
        courseId: "",
        courseName: "",
        courseDescription: "",
        courseDuration: "",
        noOfStudents:"",
        courseTiming:"",
        instituteName: ""
       
    };

  const [errors, setErrors] = useState({});
  const [inputs, setInputs] = useState(initialValues);
  const [initialinputs, setInitialinputs] = useState(initialValues);
  let { courseId } = useParams();
  let navigate = useNavigate();

  let [institutes, setInstitutes] = useState([]);

  const loadDataOnlyOnce = () => {
    axios.get("http://localhost:8080/admin/viewInstitutes").then((response) => {
      setInstitutes(response.data);
     // console.log(response.data);
    });
  };

  useEffect(() => {
    loadDataOnlyOnce();
  }, []);

  const onChangeHandler = (event) => {
    event.persist();
    setInputs((inputs) => ({
      ...inputs,
      /*courseId: inputs.courseId,
      courseName: inputs.courseName,
      courseDescription: inputs.courseDescription,
      courseDuration: inputs.courseDuration,
      noOfStudents: inputs.noOfStudents,
      courseTiming: inputs.courseTiming,
      instituteName: inputs.institute.instituteName,*/
      [event.target.name]: event.target.value,
    }));
  };

  const viewCourseById = () => {
    axios
      .get(`http://localhost:8080/admin/viewCourseById/` + courseId)
      .then((res) => {
        //  console.log(res.data)
        setInputs(res.data);
console.log(inputs)
        setInitialinputs(res.data);
      // console.log(initialinputs);
      });
  };

  const updateCourse = (inputs) => {
    axios
      .put(`http://localhost:8080/admin/editCourse/` + courseId, inputs)
      .then((res) => {
       // console.log(res.data);
        navigate("/admin/viewCourse");
      });
  };

  useEffect(() => {
    viewCourseById();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault(onChangeHandler);
console.log(inputs)
    const validationErrors = validate(inputs);
    const noErrors = Object.keys(validationErrors).length === 0;
    setErrors(validationErrors);
    if (noErrors) {
      updateCourse(inputs);
    } else {
      console.log(errors);
    }
  };
  
  const reset = () => {
    setInputs({
      ...inputs,
      courseId: initialinputs.courseId,
      courseName: initialinputs.courseName,
      courseDescription: initialinputs.courseDescription,
      courseDuration: initialinputs.courseDuration,
      noOfStudents: initialinputs.noOfStudents,
      courseTiming: initialinputs.courseTiming,
      instituteName: initialinputs.institute.instituteName
    });
    setErrors("");
  };

    return (
      <div>
        <Navbar/>
        <Form className="p-5" onSubmit={handleSubmit} noValidate>
            <Form.Group className="mb-3 " >
                <Row>
                    <Col>
                        <Form.Control autoComplete="off" placeholder="Enter the Course name "
                                      type="courseName" name="courseName" 
                                      value={inputs.courseName}  />
                                    {errors.courseName && <p style={{color:'red'}}>{errors.courseName}</p>}      
                    </Col>
                    <Col>
                        <Form.Control autoComplete="off"  placeholder="Enter no.of students enrolled for the course"       
                                      type="noOfStudents" name="noOfStudents"
                                      onChange={onChangeHandler} value={inputs.noOfStudents} />
                                      {errors.noOfStudents && <p style={{color:'red'}}>{errors.noOfStudents}</p>}
                    </Col>
                </Row>
            </Form.Group>
            <Form.Group className="mb-3 " >
                <Row>
                    <Col>
                        <Form.Control autoComplete="off" placeholder="Enter the course duration"
                                      type="courseDuration" name="courseDuration"
                                      onChange={onChangeHandler}  value={inputs.courseDuration}  />
                                      {errors.courseDuration && <p style={{color:'red'}}>{errors.courseDuration}</p>}

                        <Form.Select 
                                id="instituteName"
                                name="instituteName"
                                value={institutes.instituteName}
                                >

                                <option value="" label="Select Academy" />
                                {institutes.map((institute) => (

                                    <option key={institute.instituteId} value={institute.instituteName}>
                                        {institute.instituteName}
                                    </option>
                                ))}
                        </Form.Select>
                            {errors.instituteName && <p style={{color:'red'}}>{errors.instituteName}</p>}
                    </Col>
                    <Col>
                        <Form.Control as="textarea" placeholder="Enter the course description" rows={4}
                                    type="courseDescription" name="courseDescription" 
                                      onChange={onChangeHandler} value={inputs.courseDescription}  />
                                      {errors.courseDescription && <p style={{color:'red'}}>{errors.courseDescription}</p>}
                                      
                    </Col>
                </Row>
            </Form.Group>
                <Form.Group className="mb-3 " >
                    <Row>
                        <Col>
                             <Form.Control autoComplete="off" placeholder="Enter course timings"
                                           type="courseTiming" name="courseTiming" 
                                           onChange={onChangeHandler} value={inputs.courseTiming} />
                                           {errors.courseTiming && <p style={{color:'red'}}>{errors.courseTiming}</p>}
                            <br /> 
                            <Form.Control autoComplete="off" placeholder="Enter course id"
                                          type="courseId" name="courseId"
                                          value={inputs.courseId}  />
                                          {errors.courseId && <p style={{color:'red'}}>{errors.courseId}</p>}
                        </Col>   
                    </Row>
                </Form.Group>
            
            <Container>
                <Row>
                    <Col md={9}>
                        <Button className="float-end" variant="danger" onClick={()=>reset()}>
                        <BiReset size={20}/>Reset
                        </Button>
                    </Col>

                    <Col >
                        <Button className="float-end" variant="light" type="submit" href='/admin/viewCourse'>
                        <TiArrowBack size={30}/>Back
                        </Button>
                    </Col>

                    <Col>
                        <Button className="float-end" variant="success" type="submit" >
                        Update
                        </Button>
                    </Col>      
                </Row>
                </Container>

            </Form>
        </div>
   
  );
};

export default EditCourse;

























/*


import { useState, useEffect } from "react";
import {Navbar} from '../Navbar';
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import validate from "./Validate";

function EditCourse() {
    const [errors, setErrors] = useState({});
    const initialValues = {
        courseId: "",
        courseName: "",
        courseDescription: "",
        courseDuration: "",
        noOfStudents:"",
        courseTiming:"",
    };
    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value,
        });
    };
    const [inputs, setInputs] = useState(initialValues);
    let {courseId}=useParams();
    let navigate = useNavigate();

    const viewCourseById = () => {
        axios.get(`http://localhost:8080/admin/viewCourseById/`+courseId).then(
            (res) => {
                setInputs(res.data);
                console.log(res.data);


            }
        )
    }

    const updateCourse = (inputs) => {
        axios.put(`http://localhost:8080/admin/editCourse/`+courseId,inputs).then(
            res => {

                console.log(res.data);
                navigate(-1);
            }
        )
    }

    useEffect(() => {
       viewCourseById();
    }, []);

    
    const handleSubmit = (e) => {
        e.preventDefault(onChangeHandler);
      /*  setInputs({
            ...inputs,
            courseId: "",
            courseName: "",
            courseDescription: "",
            courseDuration: "",
            courseTiming:"",
            noOfStudents:"",
        });*//*
        setErrors(validate(inputs))
        if(errors==null){
            updateCourse (inputs);
        }
        else{
            console.log(errors);
        }
    }
    return (
        <div>
         <Navbar/>
            <form className="container col-md-12 p-5 " onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col">
                        <input type="text" 
                        name='courseName' 
                        className="form-control" 
                        value={inputs.courseName}  
                        placeholder='Enter the Course Name' required />
                        {errors.courseDuration && <p style={{color:'red'}}>{errors.courseDuration}</p>}
                    </div>
                     <div className="col">
                        <input type="text" 
                        name='noOfStudents' 
                        className="form-control" 
                        value={inputs.noOfStudents} 
                        onChange={onChangeHandler} 
                        placeholder='Enter no.of students enrolled for the course' required />
                        {errors.noOfStudents && <p style={{color:'red'}}>{errors.noOfStudents}</p>}

                    </div> 
                </div>
                <br />

                <div className="row">
                    <div className="col">
                        <input type="text" 
                        name='courseDuration' 
                        className="form-control" 
                        value={inputs.courseDuration} 
                        onChange={onChangeHandler} 
                        placeholder='Enter the course duration' required />
                        {errors.courseDuration && <p style={{color:'red'}}>{errors.courseDuration}</p>}

                    </div>
                    <div className="col">
                        <textarea className="form-control" 
                        name='courseDescription' 
                        id="exampleFormControlTextarea1" 
                        value={inputs.courseDescription} 
                        onChange={onChangeHandler} 
                        placeholder='Enter the course description' rows="5" required />
                        {errors.courseDescription && <p style={{color:'red'}}>{errors.courseDescription}</p>}

                    </div>
                </div>
                <br />

                 <div className="row">
                    <div className="col">
                        <input type="text" 
                        name='courseTiming' 
                        className="form-control" 
                        value={inputs.courseTiming} 
                        onChange={onChangeHandler} 
                        placeholder='Enter course timings' required />
                        {errors.courseTiming && <p style={{color:'red'}}>{errors.courseTiming}</p>}
                    </div>
                </div> 
                <br />
                <div className="row">
                    <div className="col">
                        <input type="text" 
                        name='courseId' 
                        value={inputs.courseId}  
                        className="form-control" 
                        placeholder="Enter Id" id="id" required />
                        {errors.courseId && <p style={{color:'red'}}>{errors.courseId}</p>}
                    </div>
                </div>
                <br />
                <div className="form-group">
                    <button className="btn btn-success"  >
                        Update Course
                    </button>
                </div>
            </form>
    </div> 
    
        
    );
}
export default EditCourse;
*/
// import { useState, useEffect } from "react";
// import {Navbar} from '../Navbar';
// import axios from "axios";
// import { useNavigate, useParams } from "react-router-dom";

// function EditCourse() {
//     const initialValues = {
//         courseId: "",
//         courseName: "",
//         courseDescription: "",
//         courseDuration: "",
//         noOfStudents:"",
//         courseTiming:"",
//     };
//     const onChangeHandler = (e) => {
//         const { name, value } = e.target;
//         setValues({
//             ...values,
//             [name]: value,
//         });
//     };
//     const [values, setValues] = useState(initialValues);
//     let {courseId}=useParams();
//     let navigate = useNavigate();

//     const viewCourseById = () => {
//         axios.get(`http://localhost:8080/admin/viewCourseById/`+courseId).then(
//             (res) => {
//                 setValues(res.data);
//                 console.log(res.data);


//             }
//         )
//     }

//     const updateCourse = (values) => {
//         axios.put(`http://localhost:8080/admin/editCourse/`+courseId,values).then(
//             res => {

//                 console.log(res.data);
//                 navigate(-1);
//             }
//         )
//     }

//     useEffect(() => {
//        viewCourseById();
//     }, []);

    
//     const handleSubmit = (e) => {
//         e.preventDefault(onChangeHandler);
//         setValues({
//             ...values,
//             courseId: "",
//             courseName: "",
//             courseDescription: "",
//             courseDuration: "",
//             courseTiming:"",
//             noOfStudents:"",
//         });
//         updateCourse (values);
//     }
//     return (
//         <div>
//          <Navbar/>
//             <form className="container col-md-12 p-5 " onSubmit={handleSubmit}>
//                 <div className="row">
//                     <div className="col">
//                         <input type="text" name='courseName' className="form-control" value={values.courseName}  placeholder='Enter the Course Name' required />
//                     </div>
//                      <div className="col">
//                         <input type="text" name='noOfStudents' className="form-control" value={values.noOfStudents} onChange={onChangeHandler} placeholder='Enter no.of students enrolled for the course' required />
//                     </div> 
//                 </div>
//                 <br />

//                 <div className="row">
//                     <div className="col">
//                         <input type="text" name='courseDuration' className="form-control" value={values.courseDuration} onChange={onChangeHandler} placeholder='Enter the course duration' required />
//                     </div>
//                     <div className="col">
//                         <textarea className="form-control" name='courseDescription' id="exampleFormControlTextarea1" value={values.courseDescription} onChange={onChangeHandler} placeholder='Enter the course description' rows="5" required />
//                     </div>
//                 </div>
//                 <br />

//                  <div className="row">
//                     <div className="col">
//                         <input type="text" name='courseTiming' className="form-control" value={values.courseTiming} onChange={onChangeHandler} placeholder='Enter course timings' required />
//                     </div>
//                 </div> 
//                 <br />
//                 <div className="row">
//                     <div className="col">
//                         <input type="text" name='courseId' value={values.courseId}  className="form-control" placeholder="Enter Id" id="id" required />
//                     </div>
//                 </div>
//                 <br />
//                 <div className="form-group">
//                     <button className="btn btn-success"  >
//                         Update Course
//                     </button>
//                 </div>
//             </form>
//             </div>
//     );
// }
// export default EditCourse;