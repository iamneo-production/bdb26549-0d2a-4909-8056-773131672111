import React, { Component } from 'react';
import"./Style.css";

export class Signup extends Component {
    constructor() {
        super()

        this.state = {
            name: "",
            email: "",
            userName: "",
            phone: "",
            password: "",
            confirmPassword: "",
        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    namehandler = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    emailhandler = (event) => {
        this.setState({
            email: event.target.value
        })
    }
    usernamehandler = (event) => {
        this.setState({
            userName: event.target.value
        })
    }

    phonehandler = (event) => {
        this.setState({
            phone: event.target.value
        })
    }

    passwordhandler = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    confirmPasswordhandler = (event) => {
        this.setState({
            confirmPassword: event.target.value
        })
    }

    handleSubmit = (event) => {
        
        if(this.state.password!==this.state.confirmPassword)
        {
            alert(`Password and Confirm Password should be same`)
        }
        else{
            console.log(this.state);
            this.setState({
            name: "",
            email: "",
            userName: "",
            phone: "",
            password: "",
            confirmPassword: "",
        })
        alert(`Congratulations! ${this.state.name} you are registered successfully.`)
        }
        
        event.preventDefault()
        
    }
  render() {
    return(
            <div className="login">
                <div className="head">
                <h3 id='h'>Register </h3>
                </div>
                <div className="RegBox">
                    <form className='Regform'onSubmit={this.handleSubmit}>
                        <p> *all fields are mandatory to fill.</p>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                            <input type="text" value={this.state.name} onChange={this.namehandler} autoComplete="off" className="form-control" placeholder="Enter Your Name" id="name" required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" value={this.state.email} onChange={this.emailhandler} className="form-control" placeholder="Enter Email" id="email" required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
                            <input type="text" value={this.state.userName} onChange={this.usernamehandler} className="form-control" placeholder="Username" id="username" required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Phone Number</label>
                            <input type="number" value={this.state.phone} onChange={this.phonehandler} className="form-control" placeholder="Enter Phone No." id="mobileNumber" required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" value={this.state.password} onChange={this.passwordhandler} className="form-control" placeholder="Enter Password" id="password" required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password</label>
                            <input type="password" value={this.state.confirmPassword} onChange={this.confirmPasswordhandler} className="form-control" placeholder="Renter Password" id="confirmPassword" required/>
                        </div>
                        <button type="submit" value="Submit" className="btn btn-primary">Register</button>
                        <p>Already a User/Admin ? <a href='Login'>Login</a></p>
                        
                    </form>
                </div>
                
            </div>
        )
    }
}