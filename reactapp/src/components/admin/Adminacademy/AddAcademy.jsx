import { useState,useEffect } from "react";
import Layout from "../Navbar.jsx"
import { Form, Button, FormGroup, FormControl, ControlLabel, Row, Col } from "react-bootstrap"

import axios from "axios";
const initialValues = {
    instituteName: "",
    mobile: "",
    instituteimgurl: "",
    email: "",
    instituteAddress: "",
    instituteDescription: "",
};
function AddAcademy() {
    const [values, setValues] = useState(initialValues);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault(handleChange);
        console.log(values)
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
        axios.post("http://localhost:8080/admin/addInstitute", { ...values })
        .then(res => {
          console.log(res);
          console.log(res.data);
        })
       
    }
    
    return (
        <Layout>
            <Form className="p-5" onSubmit={handleSubmit}>
                <Form.Group className="mb-3 " >
                    <Row>
                        <Col>
                            <Form.Control
                                type="text"
                                value={values.instituteName}
                                placeholder="Enter academy name "
                                name="instituteName"
                                onChange={handleChange} />
                        </Col>
                        <Col>
                            <Form.Control type="number"
                                value={values.mobile}
                                placeholder="Enter the contact number"
                                name="mobile"
                                onChange={handleChange} />
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
                                onChange={handleChange} />
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
                                onChange={handleChange} />
                            <br />
                            <Form.Control type="text"
                                value={values.instituteAddress}
                                placeholder="Enter academy location "
                                name="instituteAddress"
                                onChange={handleChange} />
                        </Col>
                        <Col>
                            <Form.Control as="textarea"
                                value={values.instituteDescription}
                                placeholder="Enter the Academy description" rows={4}
                                name="instituteDescription"
                                onChange={handleChange} />
                        </Col>
                    </Row>
                </Form.Group>

                <Button className="float-end" variant="success" type="submit" >
                    Add Academy

                </Button>
            </Form>
        </Layout>

    );
}
axios.create({
    baseURL:"https://localhost:8080",
    headers:{
        "Content-type":"application/json"
    }
});

export default AddAcademy;