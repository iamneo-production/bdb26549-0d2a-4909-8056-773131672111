import React, { Component } from "react";
import axios from "axios";
import "./Styles.css";
import authHeader from "./auth-header";

export class Login extends Component {

  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChangeHandler = (event) => {
    this.setState({
        [event.target.name]: event.target.value
    })
}


  handleSubmit = (event) => {
    if (this.state.password.toString().length <= 8) {
      alert(`Password must contain atleast 8 characters.`);
    } else if (
      this.state.password.search(/[0-9]/) === -1 ||
      this.state.password.search(/[a-z]/) === -1 ||
      this.state.password.search(/[A-Z]/) === -1 ||
      this.state.password.search(
        //eslint-disable-next-line
        /[!\@\#\$\^\&\*\(\)\+\=\-\/\?\.\,\>\<\}\{\]\[\'\"\;\:\]\}\{\`\~]/
      ) === -1
    ) {
      alert(
        `Password must contain atleast 1 number, 1 Uppercase, 1 Lowercase and 1 Special character.`
      );
    } else {
      console.log(this.state);
      this.setState({
        email: "",
        password: "",
      });
    }

    event.preventDefault();

    


    const user = {
      email: this.state.email,
      password: this.state.password,
    };
    axios
        .post("http://localhost:8080/signin", user,{ headers: authHeader() })
        .then((response) => {
             console.log(response);
             this.state.loggedIn=true;
             console.log(this.state.loggedIn);
             console.log(response.data.roles[0]);
            if(response.data.roles[0]==="ROLE_ADMIN"){
              window.location.href="/admin/viewInstitutes";
            }
            else {
              window.location.href="/user/viewacademy";
            }
        })
        .catch((error) => {
            console.log(error);
        });
  };

  

  

  render() {
    const {email,password}=this.state
    return (
      <div className="login">
        <div className="head">
          <h3 id="h">Login </h3>
        </div>
        <div className="loginBox">
          <form className="form" onSubmit={this.handleSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input type="email" value={email} onChange={this.onChangeHandler} className="form-control"
                      placeholder="Enter Email"  id="email" name="email" required />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input type="password" value={password} onChange={this.onChangeHandler} className="form-control"
                placeholder="Enter Password" id="password" name="password" required/>
            </div>
            <div className="loginbtn">
              <button type="submit" value="Submit" className="btn btn-primary">
                Login
              </button>
              <p>
                New User/Admin ? <a href="signup">Sign up</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    );
  }
}


































