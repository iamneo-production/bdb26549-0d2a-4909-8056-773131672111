import { useState, useEffect } from "react";
import { Navbar } from "../Navbar.jsx"
import axios from "axios";

import { Form, Button, Row, Col, Card, Container } from "react-bootstrap"
import ReactPaginate from "react-paginate";
import { Trash } from 'react-bootstrap-icons';
import { Pencil } from 'react-bootstrap-icons';
import { useNavigate } from "react-router-dom";
const columnsPerRow = 3;
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
        axios.get("http://localhost:8080/admin/viewInstitutes").then(
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

    const updateInstitute = (instituteId) => {
        navigate(`/admin/editInstitute/${instituteId}`);
        console.log(instituteId);
    }
    const addInstitute = () => {
        navigate(`/admin/addInstitute`);
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
    const [pageNumber, setPageNumber] = useState(0);
    const usersPerPage = 4;
    const pagesVisited = pageNumber * usersPerPage;
    const current = institute.slice(pagesVisited, pagesVisited + usersPerPage);
    const pageCount = Math.ceil(institute.length / usersPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };
    return (

        <div>
            <Navbar />
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
                        current?.map((academy) => (

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
                                        <Card.Link ><Pencil size="30" onClick={() => updateInstitute(academy.instituteId)} /></Card.Link>
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

            <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"Next"}
                breakLabel={"..."}
                marginPagesDisplayed={2}
                pageRangeDisplayed={3}
                pageCount={pageCount}
                onPageChange={changePage}
                pageClassName={"page-item"}
                pageLinkClassName={"page-link"}
                previousClassName={"page-item"}
                previousLinkClassName={"page-link"}
                nextClassName={"page-item"}
                nextLinkClassName={"page-link"}
                breakClassName={"page-item"}
                breakLinkClassName={"page-link"}
                activeClassName={"active"}
                containerClassName={"pagination justify-content-center"}

            />
        </div>

    );
}
export default Viewacademy;