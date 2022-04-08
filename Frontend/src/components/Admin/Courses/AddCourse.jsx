import { useState, useEffect } from "react";
import { Navbar } from '../Navbar';
import axios from "axios";
import { Form, Button, Row, Col } from "react-bootstrap"
import { useNavigate } from "react-router-dom";
function AddCourse() {
    const initialValues = {
        courseId: "",
        courseName: "", 
        instituteName: "",
        courseDescription: "",
        courseDuration: "",
        noOfStudents: "",
        courseTiming: "",

    }
    const [values, setValues] = useState(initialValues);
    let [institutes, setInstitutes] = useState([]);
    let navigate = useNavigate();
    const loadDataOnlyOnce = () => {
        axios.get("http://localhost:8080/admin/viewInstitutes").then(
            (response) => {
                setInstitutes(response.data);
                console.log(response.data)
            }
        );
    };
    useEffect(() => {
        loadDataOnlyOnce();
    }, []);
    const back = () => {
        navigate(`/admin/viewCourse`);
    }

    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,

        });
    };
    const handleSubmit = (event) => {
        const course= {
            courseId: values.courseId,
            courseName: values.courseName,
            institute: {
                instituteName: values.instituteName
              },
            courseDescription: values.courseDescription,
            courseDuration: values.courseDuration,
            noOfStudents: values.noOfStudents,
            courseTiming: values.courseTiming
        }
        console.log(course);
        event.preventDefault(onChangeHandler);
        axios.post("http://localhost:8080/admin/addCourse",  course )
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
        setValues({
            ...values,
            courseId: "",
            courseName: "",
            instituteName: "",
            courseDescription: "",
            courseDuration: "",
            noOfStudents: "",
            courseTiming: "",
        });
    }

    return (
        <div>
            <Navbar />
            <Form className="p-5" onSubmit={handleSubmit}>
                <Form.Group className="mb-3 " >
                    <Row>
                        <Col>
                            <Form.Control
                                type="text"
                                value={values.courseName}
                                placeholder="Enter the Course name "
                                name="courseName"
                                onChange={onChangeHandler} required/>
                        </Col>
                        <Col>
                            <Form.Control type="text"
                                value={values.noOfStudents}
                                placeholder="Enter no.of students enrolled for the course"
                                name="noOfStudents"
                                onChange={onChangeHandler} required/>
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
                                onChange={onChangeHandler} required/><br />

                            <select
                                id="instituteName"
                                name="instituteName"
                                value={values.instituteName}
                                onChange={onChangeHandler}
                            >
                                <option value="" label="Select Academy" />
                                {institutes.map((institute) => (

                                    <option key={institute.instituteId} value={institute.instituteName}>
                                        {institute.instituteName}
                                    </option>
                                ))}
                            </select>

                        </Col>
                        <Col>
                            <Form.Control as="textarea"
                                value={values.courseDescription}
                                placeholder="Enter the course description" rows={4}
                                name="courseDescription"
                                onChange={onChangeHandler} required/>
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
                                onChange={onChangeHandler} required/>
                            <br />
                            <Form.Control type="text"
                                value={values.courseId}
                                placeholder="Enter course id"
                                name="courseId"
                                onChange={onChangeHandler} required/>
                        </Col>

                    </Row>
                </Form.Group>

                <Button className="float-end" variant="success" type="submit" >
                    Add Course
                </Button>
                <Button variant="success" type="submit" onClick={() => back()} >
                    Back

                </Button>
            </Form>
        </div>
    )
}

export default AddCourse;
