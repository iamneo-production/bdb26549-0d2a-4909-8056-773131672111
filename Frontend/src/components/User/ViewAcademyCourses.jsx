import { useState, useEffect } from "react";
import {Layout} from './Layout';
import { IoIosAddCircle } from "react-icons/io";
import axios from "axios";
import { Form, Button,Row, Col,Container } from "react-bootstrap";



function ViewAcademyCourses(){
    const [course, setCourse] = useState([]);
    const [courseName, setcourseName] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`The name you entered was: ${courseName}`)
        setcourseName("")
      }

    const getDetails = () => {
        axios.get("http://localhost:8080/admin/viewCourse").then(
            (response) => {
                setCourse(response.data);
                console.log(response.data)
            }
        );
    };
    useEffect(() => {
        getDetails();
    }, []);

    const viewCourseByName=(courseName)=>{
        axios.get(`http://localhost:8080/admin/viewCourseByName/${courseName}`).then(
            (res)=>{
                setCourse([]);
                setCourse([res.data]);
                console.log(res.data);
              
            }
        )
    }
   
        return (
            <div >
                <Layout/>
                <form className="mb-3 p-5" onSubmit={handleSubmit}>
                        <div className="d-flex justify-content-center">
                            <div className="row" >
                                <div className="col-10">
                                    <Form.Control type="text"
                                        value={courseName}
                                        placeholder="Type here to search course"
                                        onChange={(e) => setcourseName(e.target.value)}
                                    /><br />
                                </div >
                                <div className="col-2">
                                    <Button variant="success" type="submit"  onClick={()=>viewCourseByName(courseName)}>
                                        Search
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </form>
                    <Container style={{width:'60%'}}>
                        {
                            course?.map((course) => (
                            
                                <tr key={course.id}>
                                    <Row style={{border:'1px solid black',backgroundColor:'#D3D3D3'}}>
                                        <Row >
                                        <   Col>
                                                Course Id : {course.courseId}<br/>
                                            </Col>
                                            <Col>
                                                Number of students : 222<br/>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                Course name : {course.courseName} <br/>
                                            </Col>
                                            <Col>
                                                Course description : yyy
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                Course duration : {course.courseDuration}<br/>
                                            </Col>
                                            <Col>
                                                Seats available:20<br/>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                Course available timings : 9am to 12pm<br/>
                                            </Col>
                                        </Row>
                                        <div >
                                            <Row className='float-end'>
                                                <Col> 
                                                    <a href='/user/enrollForm'>
                                                        <button className="btn btn-success">Enroll Course</button>
                                                    </a>       
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


export default ViewAcademyCourses;



