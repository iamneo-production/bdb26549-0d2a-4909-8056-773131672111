import { useState } from "react";
import Layout from "../Navbar.jsx"
import { Form, Button, FormGroup, FormControl, ControlLabel, Row, Col } from "react-bootstrap"
const initialValues = {
    instituteName: "",
    mobile: "",
    instituteid: "",
    instituteimgurl: "",
    email: "",
    instituteAddress: "",
    instituteDescription: "",
};
function EditAcademy() {
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
        setValues({
            ...values,
            instituteName: "",
            mobile: "",
            instituteid: "",
            instituteimgurl: "",
            email: "",
            instituteAddress: "",
            instituteDescription: "",
            buttonText:"Submitted",
        });

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
                                value={values.instituteid}
                                placeholder="Enter academy id "
                                name="instituteid"
                                onChange={handleChange} />
                        </Col>
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
                    Edit Academy

                </Button>
            </Form>
        </Layout>
    );
}
export default EditAcademy;