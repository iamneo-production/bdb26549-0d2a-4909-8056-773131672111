import { useState, useEffect } from "react";
import {Container, Row ,Col} from 'react-bootstrap';
import axios from "axios";
import {Layout} from '../User/Layout';



function EnrolledCourse(){
    const [course, setCourse] = useState([]);

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
   
        return (
            <div >
                <Layout/>
                    <Container style={{width:'60%'}} className="mb-2 p-4">
                        {
                            course?.map((course) => (
                            
                                <tr key={course.id}>
                                    <Row style={{border:'1px solid black',backgroundColor:'#D3D3D3'}}>
                                        <Col className="d-flex justify-content-center">
                                                <h4>Course and Instiute Details</h4>
                                        </Col>
                                        <Row >
                                            <Col>
                                                Course name : {course.courseName} 
                                            </Col>
                                            <Col>
                                                Course Id : {course.courseId}
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                Joined Date:dd/mm/yyyy
                                            </Col>
                                            <Col>
                                                Institute Id : 101
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                Course End date : dd/mm/yyy
                                            </Col>
                                            <Col>
                                                Institute Name:xyz
                                            </Col>
                                        </Row>
                                        <Row>
                                        <div className="d-flex justify-content-center">
                                            <button className="btn btn-danger">My learning</button>
                                        </div>
                                        </Row>
                                    </Row><br></br>
                                </tr>
                             ))
                        }
                           
                    </Container>
                   
            </div>
        )
    }


export default EnrolledCourse;







