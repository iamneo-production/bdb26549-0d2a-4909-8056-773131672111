import { useState, useEffect } from "react";
import {Navbar} from '../Navbar';
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function EditCourse() {
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
        setValues({
            ...values,
            [name]: value,
        });
    };
    const [values, setValues] = useState(initialValues);
    let {courseId}=useParams();
    let navigate = useNavigate();

    const viewCourseById = () => {
        axios.get(`http://localhost:8080/admin/viewCourseById/`+courseId).then(
            (res) => {
                setValues(res.data);
                console.log(res.data);


            }
        )
    }

    const updateCourse = (values) => {
        axios.put(`http://localhost:8080/admin/editCourse/`+courseId,values).then(
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
        setValues({
            ...values,
            courseId: "",
            courseName: "",
            courseDescription: "",
            courseDuration: "",
            courseTiming:"",
            noOfStudents:"",
        });
        updateCourse (values);
    }
    return (
        <div>
         <Navbar/>
            <form className="container col-md-12 p-5 " onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col">
                        <input type="text" name='courseName' className="form-control" value={values.courseName} onChange={onChangeHandler} placeholder='Enter the Course Name' required />
                    </div>
                     <div className="col">
                        <input type="text" name='noOfStudents' className="form-control" value={values.noOfStudents} onChange={onChangeHandler} placeholder='Enter no.of students enrolled for the course' required />
                    </div> 
                </div>
                <br />

                <div className="row">
                    <div className="col">
                        <input type="text" name='courseDuration' className="form-control" value={values.courseDuration} onChange={onChangeHandler} placeholder='Enter the course duration' required />
                    </div>
                    <div className="col">
                        <textarea className="form-control" name='courseDescription' id="exampleFormControlTextarea1" value={values.courseDescription} onChange={onChangeHandler} placeholder='Enter the course description' rows="5" required />
                    </div>
                </div>
                <br />

                 <div className="row">
                    <div className="col">
                        <input type="text" name='courseTiming' className="form-control" value={values.courseTiming} onChange={onChangeHandler} placeholder='Enter course timings' required />
                    </div>
                </div> 
                <br />
                <div className="row">
                    <div className="col">
                        <input type="text" name='courseId' value={values.courseId} onChange={onChangeHandler} className="form-control" placeholder="Enter Id" id="id" required />
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