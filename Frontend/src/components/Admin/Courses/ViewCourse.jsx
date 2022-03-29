import { useState, useEffect } from "react";
import {Navbar} from '../Navbar';
import Container from 'react-bootstrap/Container';
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap';
import {BiEdit} from 'react-icons/bi';
import {RiDeleteBin4Fill} from 'react-icons/ri';
import { IoIosAddCircle } from "react-icons/io";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ViewCourse(){
    let navigate = useNavigate();
    const [course, setCourse] = useState([]);
    const [del, setDel] = useState([]);


    const getDetails = () => {
        axios.get("http://localhost:8080/admin/viewCourse").then(
            (response) => {
                setCourse(response.data);
                console.log(response.data)
            }
        );
    };
    const editCourse = (courseId) => {
        navigate(`/admin/editCourse/${courseId}`);
    }

    const deleteCourse = (courseId) => {

        axios.delete(`http://localhost:8080/admin/deleteCourse/${courseId}`).then(
            (res) => {

                setDel(res.data);
                console.log(res.data);
                getDetails();
            }
        );
    }
    useEffect(() => {
        getDetails();
    }, []);
   
        return (
            <div >
                <Navbar/>
                    <div className='container'>
                        <div className='form-group'> 
                            <form>
                                <div className="form">
                                    <div className='row'>
                                        <div className='col-9'>
                                            <input type="search" className="form-control"
                                            placeholder='Type here to search course'/>
                                        </div>
                                        <div className='col-3'>
                                            <button type="button" class="btn btn-success">Search</button>
                                        </div>
                                    </div>       
                                </div>
                            </form>
                        </div>    
                    </div>
                    <Container style={{width:'60%'}}>
                        {
                            course?.map((course) => (
                            
                                <tr key={course.id}>
                                    <Row style={{border:'1px solid black',backgroundColor:'#D3D3D3'}}>
                                        <Row >
                                            <Col>
                                                Course name : {course.courseName} <br/>
                                            </Col>
                                            <Col>
                                                Number of students : {course.noOfStudents}<br/>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                Course Id : {course.courseId}<br/>
                                            </Col>
                                            <Col>
                                                Course description : {course.courseDescription}
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                Course duration : {course.courseDuration}<br/>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                Course available timings : {course.courseTiming}<br/>
                                            </Col>
                                        </Row>
                                        <div >
                                            <Row className='float-end'>
                                                <Col>       
                                                    <a onClick={()=>editCourse(course.courseId)}><BiEdit size={30}/></a>
                                                    <a onClick={() => deleteCourse(course.courseId)}><RiDeleteBin4Fill size={30}/></a> 
 
                                                </Col>
                                            </Row>
                                        </div>
                                        
                                    </Row><br></br>
                                </tr>
                             ))
                        }
                    </Container>
                    <div className="float-end">
                        <a href="/admin/addCourse" className="btn btn-success">
                        <IoIosAddCircle />Add Course</a>
                    </div>  
            </div>
        )
    }


export default ViewCourse;











