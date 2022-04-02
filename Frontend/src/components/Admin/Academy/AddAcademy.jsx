import { useState, useEffect } from "react";
import { Navbar } from "../Navbar.jsx"
import { Form, Button, Row, Col } from "react-bootstrap"
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AddAcademy() {
    const initialValues = {
        instituteName: "",
        mobile: "",
        instituteimgurl: "",
        email: "",
        instituteAddress: "",
        instituteDescription: "",
    };

    const [values, setValues] = useState(initialValues);
    let navigate = useNavigate();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    };
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const reg = /^[a-zA-Z ]*$/;
    const handleSubmit = (e) => {
        e.preventDefault(handleChange);
        if(!reg.test(values.instituteName)){
            alert(`enter alphabet letters only`)
         }
        else if (values.mobile.toString().length !== 10) {
            alert(`Phone number must contains 10 digits`)
        }else if(!regex.test(values.email)){
            alert(`This is not a valid email`)
        }
       
        else {
            axios.post("http://localhost:8080/admin/addInstitute", { ...values })
                .then(res => {
                    console.log(res);
                    console.log(res.data);

                })
        }
        setValues({
            ...values,
            instituteName: "",
            mobile: "",
            instituteimgurl: "",
            email: "",
            instituteAddress: "",
            instituteDescription: "",
            buttonText: "Submitted",

        });



    }
    const back = () => {
        navigate(`/admin/viewInstitutes`);
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
                                value={values.instituteName}
                                placeholder="Enter academy name "
                                name="instituteName"
                                onChange={handleChange} required />
                        </Col>

                        <Col>
                            <Form.Control type="number"
                                value={values.mobile}
                                placeholder="Enter the contact number"
                                name="mobile"
                                onChange={handleChange} required />
                        </Col>

                    </Row>
                </Form.Group>

                <Form.Group className="mb-3 " >
                    <Row>

                        <Col>
                            <Form.Control type="text"
                                value={values.email}
                                placeholder="Enter the academy email"
                                name="email"
                                onChange={handleChange} required />
                        </Col>

                    </Row>
                </Form.Group>
                <Form.Group className="mb-3 " >
                    <Row>
                        <Col>
                            <Form.Control type="text"
                                value={values.instituteimgurl}
                                placeholder="Enter academy image url "
                                name="instituteimgurl"
                                onChange={handleChange} required />

                            <br />
                            <Form.Control type="text"
                                value={values.instituteAddress}
                                placeholder="Enter academy location "
                                name="instituteAddress"
                                onChange={handleChange} required />

                        </Col>
                        <Col>
                            <Form.Control as="textarea"
                                value={values.instituteDescription}
                                placeholder="Enter the Academy description" rows={4}
                                name="instituteDescription"
                                onChange={handleChange} required />

                        </Col>

                    </Row>
                </Form.Group>

                <Button className="float-end" variant="success" type="submit" >
                    Add Academy

                </Button>
                <Button variant="success" type="submit" onClick={() => back()} >
                    Back

                </Button>
            </Form>
        </div>

    );
}
axios.create({
    baseURL: "https://localhost:8080",
    headers: {
        "Content-type": "application/json"
    }
});

export default AddAcademy;