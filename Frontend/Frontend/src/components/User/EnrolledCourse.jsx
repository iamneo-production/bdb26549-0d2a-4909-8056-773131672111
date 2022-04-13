import { useState, useEffect } from "react";
import {Container, Row ,Col} from 'react-bootstrap';
import axios from "../Admin/Config/axios";
import {Layout} from '../User/Layout';
import { toast } from "react-toastify";



function EnrolledCourse(){
    const [enrolledCourses, setEnrolledCourses] = useState([]);
    const [isLoading, setLoading] = useState(true);
    let users = localStorage.getItem("userInformation");
    const loadDataOnlyOnce = () => {
        axios.get(`http://localhost:8080/admin/getStudentId/${users}`).then((res) => {
            console.log(res.data);
            axios.get(`http://localhost:8080/admin/viewStudentById/${res.data}`).then((resourse) => {
                console.log(resourse.data.enrolledCourses)
              setEnrolledCourses(resourse.data.enrolledCourses);
              setLoading(false);
           }).catch(error => {
            setEnrolledCourses([]);
            setLoading(false);
            toast.warn("No Course Enrolled Right Now !");
         });
        });
      };
      useEffect(() => {
        loadDataOnlyOnce();
      }, []);
   
        return (
            <div >
                <Layout/>
                    <div>
                        <Container>
                        {
                            enrolledCourses.map((course,i) => (
                            
                                <tr key={i}>
                                    <Row style={{border:'1px solid black',backgroundColor:'#D3D3D3'}}>
                                        <Col className="d-flex justify-content-center">
                                                <h4>Course and Instiute Details</h4>
                                        </Col>
                                        <Row >
                                            <Col>
                                                Course name : {course.course.courseName} 
                                            </Col>
                                              <Col>
                                                Course Id : {course.course.courseId}
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                Joined Date:{course.joinedDate}
                                            </Col>
                                            <Col>
                                                Institute Id :{course.course.institute.instituteId}
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                Course End date : {course.endDate}
                                            </Col>
                                            <Col>
                                                Institute Name:{course.course.institute.instituteName}
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
                   
            </div>
        )
    }


export default EnrolledCourse;







