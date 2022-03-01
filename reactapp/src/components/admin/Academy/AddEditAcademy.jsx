import react, { Component } from 'react'
import Layout from "../Navbar.jsx"
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

export class AddEditAcademy extends Component {

    render() {
        return (
            <Layout>

                <form className="container col-md-12 p-5 ">
    
                    <div class="row">
                        <div class="col">

                            <input
                                type="text"
                                className="form-control"
                                placeholder='Enter Academy Name'
                            />
                        </div>
                        <div class="col">

                            <input
                                type="text"
                                className="form-control"
                                placeholder='Enter the contact number'
                            />
                        </div>
                    </div>
                    <br />
                    <div class="row">
                        <div class="col">
                            <input
                                type="text"
                                className="form-control"
                                placeholder='Enter the academy id'
                            />
                        </div>

                        <div class="col">
                            <input
                                type="text"
                                className="form-control"
                                placeholder='Enter the academy email'
                            />
                        </div>

                    </div>
                    <br />
                    <div class="row">
                        <div class="col">
                            <label className="col-sm-2 col-form-label"></label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder='Enter the academy image url'
                            />
                            <br />
                            <input
                                type="text"
                                className="form-control"
                                placeholder='Enter the academy location'
                            />
                        </div>
                        <div class="col">
                            <textarea
                                className="form-control"
                                id="exampleFormControlTextarea1"
                                placeholder='Enter the academy description'
                                rows="5"
                            />
                        </div>


                    </div>
                    <div className="form-group">
                        <button className="btn btn-success">
                            Add academy
                        </button>
                    </div>
                </form>
            </Layout>

        )
    }
}