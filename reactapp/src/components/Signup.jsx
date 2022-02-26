import React, { Component } from 'react';
import axios from "axios";
import"./styling.css";


export class Signup extends Component {
    constructor() {
        super()

        this.state = {
            name: "",
            email: "",
            password: "",
            username: "",
            mobile:"",
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
            username: event.target.value
        })
    }

    phonehandler = (event) => {
        this.setState({
            mobile: event.target.value
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

        if(this.state.mobile.toString().length!==10)
        {
            alert(`Phone number must contains 10 digits.`)
        }
        else if(this.state.password.toString().length <6)
        {
            alert(`Password must contain atleast 6 characters and contain atleast 1 number, 1 Uppercase, 1 Lowercase & 1 Special character.`)
        }
        else if(this.state.password.search(/[0-9]/)===-1 || this.state.password.search(/[a-z]/)===-1 
        || this.state.password.search(/[A-Z]/)===-1 || this.state.password.search(/[!\@\#\$\^\&\*\(\)\+\=\-\/\?\.\,\>\<\}\{\]\[\'\"\;\:\]\}\{\`\~]/)===-1 )
        {
            alert(`Password must contain atleast 6 characters and contain atleast 1 number, 1 Uppercase, 1 Lowercase & 1 Special character.`)
        }
        else if(this.state.password!==this.state.confirmPassword)
        {
            alert(`Password and Confirm Password should be same`)
        }
        else{
            console.log(this.state);
            this.setState({
            name: "",
            email: "",
            username: "",
            mobile: "",
            password: "",
            confirmPassword: "",
        })
        alert(`Congratulations! ${this.state.name} you are registered successfully.`)
        }
        
        event.preventDefault();
        
        console.log(this.state);
        const user = {
            name: this.state.name,
            email: this.state.email,
            username: this.state.username,
            mobile: this.state.mobile,
            password: this.state.password,
            // confirmPassword: this.state.confirmPassword,
        }
        axios
        .post("http://localhost:3000/user/signup", user)
        .then((response) => {
            console.log(response);
            alert
            // this.setState({userId:response.data.userId})
        })
        .catch((error) => {
            console.log(error);
        });
        
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
                            <input type="text" value={this.state.username} onChange={this.usernamehandler} className="form-control" placeholder="Username" id="username" required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Phone Number</label>
                            <input type="text" value={this.state.mobile} onChange={this.phonehandler} className="form-control" placeholder="Enter Phone No." id="mobileNumber" required/>
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
// import {axios} from './axios';
// axios.create({
//     baseURL:"https://localhost:8080",
//     headers:{
//         "Content-type":"application/json"
//     }
// });
