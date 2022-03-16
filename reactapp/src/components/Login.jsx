import React, { Component } from 'react';
import axios from "axios";
import"./Style.css";
import { Link } from 'react-router-dom';

export class Login extends Component {
    constructor() {
        super()

        this.state = {
            email: "",
            password: "",
        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    emailhandler = (event) => {
        this.setState({
            email: event.target.value
        })
    }
    
    passwordhandler = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    handleSubmit = (event) => {

        if(this.state.password.toString().length <=8)
        {
            alert(`Password must contain atleast 8 characters.`)
        }
        else if(this.state.password.search(/[0-9]/)===-1 || this.state.password.search(/[a-z]/)===-1 
        || this.state.password.search(/[A-Z]/)===-1 || this.state.password.search(/[!\@\#\$\^\&\*\(\)\+\=\-\/\?\.\,\>\<\}\{\]\[\'\"\;\:\]\}\{\`\~]/)===-1 )
        {
            alert(`Password must contain atleast 1 number, 1 Uppercase, 1 Lowercase and 1 Special character.`)
        }
        else{
            console.log(this.state);
            this.setState({
            email: "",
            password: "",
        })
        alert(`You are Logged in !`)
        }
        
        event.preventDefault();
        
        console.log(this.state);
        const user = {
            email: this.state.email,
            password: this.state.password,
        }
        axios
        .post("http://localhost:8080/user/signin", user)
        .then((response) => {
            console.log(response);
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
                    <h3 id='h'>Login </h3>
                    </div>
                    <div className="loginBox">
                    <form className='form' onSubmit={this.handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" value={this.state.email} onChange={this.emailhandler} className="form-control" placeholder="Enter Email" id="email" required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" value={this.state.password} onChange={this.passwordhandler} className="form-control" placeholder="Enter Password" id="password" required/>
                        </div>
                        <div className="loginbtn">
                        <button type="submit" value="Submit" className="btn btn-primary">Login</button>
                        <p>New User/Admin? <Link to="/signup">Signup</Link></p>
                        </div>
                    </form>
                    </div>
                    
                </div>
            )
        }
    }