import { useState, useEffect } from "react";
import Layout from "../Navbar.jsx"
import axios from "axios";
import { Form, Button, FormGroup, FormControl, ControlLabel, Row, Col, Nav, Card, ListGroup, ListGroupItem, Container } from "react-bootstrap"

import { Trash } from 'react-bootstrap-icons';
import { Pencil } from 'react-bootstrap-icons';
import { Link, Navigate, useNavigate } from "react-router-dom";
const columnsPerRow = 2;
function Viewacademy() {

    const [institute, setInstitute] = useState([]);
    const [search, setSearch] = useState([]);
    const [del, setDel] = useState([]);
    const [instituteName, setinstituteName] = useState("");
    let navigate = useNavigate();


    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`The name you entered was: ${instituteName}`)
        setinstituteName("")
    }
    const getDetails = () => {
        axios.get("http://localhost:8080/admin/viewInstitute").then(
            (response) => {
                setInstitute(response.data);
                console.log(response.data)
            }
        );
    };
    const viewInstituteByName = (instituteName) => {
        axios.get(`http://localhost:8080/admin/viewInstituteByName/${instituteName}`).then(
            (res) => {
                setInstitute([]);
                setInstitute([res.data]);
                console.log(res.data);

            }
        )
    }
    const updateInstitute = (instituteName) => {
        navigate(`/editacademy/${instituteName}`);
    }
    const addInstitute = () => {
        navigate(`/addacademy`);
    }


    const deleteInstitute = (instituteId) => {

        axios.delete(`http://localhost:8080/admin/deleteInstitute/${instituteId}`).then(
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

        <Layout>
            <Form className=" mb-3 p-5" onSubmit={handleSubmit}>
                <Form.Group className="mb-3 " >
                    <Row>
                        <Col>
                            <Form.Control type="text"
                                className="w-50"
                                value={instituteName}
                                placeholder="Type here to search academy"
                                onChange={(e) => setinstituteName(e.target.value)}
                            /><br />
                            <Button variant="success" type="submit" onClick={() => viewInstituteByName(instituteName)}>
                                Search
                            </Button>
                        </Col>
                    </Row>
                </Form.Group>
            </Form>
            <Container>
                <Row xs={1} md={columnsPerRow}>
                    {
                        institute?.map((academy) => (

                            <Col >
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={academy.instituteimgurl} />
                                    <Card.Body>
                                        <Card.Title>{academy.instituteName}</Card.Title>
                                        <Card.Text>
                                            InstituteId:{academy.instituteId}
                                        </Card.Text>
                                        <Card.Text>
                                            Place:{academy.instituteAddress}
                                        </Card.Text>
                                        <Card.Text>
                                            Description:{academy.instituteDescription}
                                        </Card.Text>
                                    </Card.Body>

                                    <Card.Body>
                                        <Card.Link ><Pencil size="30" onClick={() => updateInstitute(academy.instituteName)} /></Card.Link>
                                        <Card.Link href="#">< Trash size="30" onClick={() => deleteInstitute(academy.instituteId)} /></Card.Link>

                                    </Card.Body>

                                </Card>

                            </Col>
                        ))
                    }
                </Row>
            </Container>

            <Button className="float-end" variant="success" type="submit" onClick={() => addInstitute()} >

                Add Academy

            </Button>

        </Layout>
    );
}
export default Viewacademy;