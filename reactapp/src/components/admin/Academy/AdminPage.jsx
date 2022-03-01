import react, { Component } from 'react'
import Layout from "../Navbar.jsx"
import { Button } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
export class AdminPage extends Component {

    render() {

        return (
            <Layout>
                <div className='container my-4'>
                    <div className=' form-group'>
                        <form>
                            <div className="form">
                                <input type="email" id="exampleInput" className="form-control"
                                    placeholder='Type here to search academy' /><br/>
                                <center><button className="btn btn-success me-2 float-right">Search</button ></center>
                            </div>
                        </form>
                    </div>
                    <div className='float-right'>

                        <a href="/academy" className="btn btn-success me-2 float-right">+Add Academy</a>
                    </div>
                </div>

            </Layout>

        )
    }
}