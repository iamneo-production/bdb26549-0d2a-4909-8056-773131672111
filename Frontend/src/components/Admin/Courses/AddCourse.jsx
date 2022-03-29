import { useState} from "react";
import {Navbar} from '../Navbar';
import axios from "axios";
import { Form, Button, Row, Col } from "react-bootstrap"


const initialValues={
    courseId: "",
    courseName: "",
    courseDescription: "",
    courseDuration: "",
    noOfStudents:"",
    courseTiming:"",
    
}

function AddCourse(){
    const [values, setValues] = useState(initialValues);

    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    };
    const handleSubmit = (event) => {
        event.preventDefault(onChangeHandler);
        axios.post("http://localhost:8080/admin/addCourse", { ...values })
            .then(res => {
            console.log(res);
            console.log(res.data);
            })
        setValues({
            ...values,
            courseId: "",
            courseName: "",
            courseDescription: "",
            courseDuration: "",
            noOfStudents:"",
            courseTiming:"",

        });
    }
       
    

    return (
        <div>
         <Navbar/>
         <Form className="p-5" onSubmit={handleSubmit}>
                <Form.Group className="mb-3 " >
                    <Row>
                        <Col>
                            <Form.Control
                                type="text"
                                value={values.courseName}
                                placeholder="Enter the Course name "
                                name="courseName"
                                onChange={onChangeHandler} />
                        </Col>
                         <Col>
                            <Form.Control type="text"
                                value={values.noOfStudents}
                                placeholder="Enter no.of students enrolled for the course"
                                name="noOfStudents"
                                onChange={onChangeHandler} />
                        </Col> 
                    </Row>
                </Form.Group>
                <Form.Group className="mb-3 " >
                    <Row>
                        <Col>
                            <Form.Control type="text"
                                value={values.courseDuration}
                                placeholder="Enter the course duration"
                                name="courseDuration"
                                onChange={onChangeHandler} />
                        </Col>
                        <Col>
                            <Form.Control as="textarea"
                                value={values.courseDescription}
                                placeholder="Enter the course description" rows={4}
                                name="courseDescription"
                                onChange={onChangeHandler} />
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group className="mb-3 " >
                    <Row>
                        <Col>
                             <Form.Control type="text"
                                value={values.courseTiming}
                                placeholder="Enter course timings"
                                name="courseTiming"
                                onChange={onChangeHandler} />
                            <br /> 
                            <Form.Control type="text"
                                value={values.courseId}
                                placeholder="Enter course id"
                                name="courseId"
                                onChange={onChangeHandler} />
                        </Col>
                        
                    </Row>
                </Form.Group>

                <Button className="float-end" variant="success" type="submit" >
                    Add Course

                </Button>
            </Form>
            </div>
    )
    }

export default AddCourse;









