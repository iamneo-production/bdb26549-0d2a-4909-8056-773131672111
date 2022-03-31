import { useState, useEffect } from "react";
import {Layout} from '../User/Layout';
import axios from "axios";
import { Form, Button, Card} from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap';

const columnsPerRow = 3;
function Viewacademy() {

    const [institute, setInstitute] = useState([]);
    const [instituteName, setinstituteName] = useState("");
   

   
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
    const viewInstituteByName=(instituteName)=>{
        axios.get(`http://localhost:8080/admin/viewInstituteByName/${instituteName}`).then(
            (res)=>{
                setInstitute([]);
                setInstitute([res.data]);
                console.log(res.data);
              
            }
        )
    }
    useEffect(() => {
        getDetails();
    }, []);

    return (
        <div>
        <Layout/>
        <form className="mb-3 p-5" onSubmit={handleSubmit} >
                        <div className="d-flex justify-content-center">
                            <div className="row" >
                                <div className="col-10">
                                    <Form.Control type="text"
                                        value={instituteName}
                                        placeholder="Type here to search institute"
                                        onChange={(e) => setinstituteName(e.target.value)}
                                    /><br />
                                </div >
                                <div className="col-2">
                                    <Button variant="success" type="submit"  onClick={()=>viewInstituteByName(instituteName)}>
                                        Search
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </form>
                <Container>
                    <Row xs={1} md={columnsPerRow}>
                        {
                            institute?.map((academy) => (

                                <Col >
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" height="200" src={academy.instituteimgurl} />     
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
                                    </Card><br></br>
                                </Col>
                            ))
                        }
                    </Row>
                </Container>

           
    </div>
    );
}
export default Viewacademy;