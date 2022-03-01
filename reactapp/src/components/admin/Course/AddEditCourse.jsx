import react, { Component } from 'react'
import Layout from "../Navbar.jsx"
export class AddEditCourse extends Component {

    render() {
        return (
            <Layout>

                <form className="container col-md-12 p-5 ">
                    <div class="row">
                        <div class="col">

                            <input
                                type="text"
                                className="form-control"
                                placeholder='Enter the course name'
                            />
                        </div>
                        <div class="col">

                            <input
                                type="text"
                                className="form-control"
                                placeholder='Enter the no of students enrolled for the course'
                            />
                        </div>
                    </div>
                    <br />

                    <div class ="row">
                        <div class="col"><input
                            type="text"
                            className="form-control"
                            placeholder='Enter the course duration'
                        />
                        </div>
                        <div class="col">
                     
                        </div>
                        
                    </div>

                    <br />
                    <div class="row">
                        <div class="col">
                            <label className="col-sm-2 col-form-label"></label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder='Enter the course timing'
                            />
                            <br />
                            <input
                                type="text"
                                className="form-control"
                                placeholder='Enter the course id'
                            />
                        </div>
                        <div class="col">
                            <textarea
                                className="form-control"
                                id="exampleFormControlTextarea1"
                                placeholder='Enter the course description'
                                rows="5"
                            />
                        </div>


                    </div>
                    <div className="form-group">
                        <button className="btn btn-success">
                            Add Course
                        </button>
                    </div>
                </form>
            </Layout>

        )
    }
}