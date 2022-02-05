import React, { Component } from 'react';
import"./Style.css";

export class Login extends Component {
  render() {
    return(
            <div className="login">
                <div className="head">
                <h3 id='h'>Login </h3>
                </div>
                <div className="loginBox">
                <form className='form'>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" placeholder="Enter Email" id="email"/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" placeholder="Enter Password" id="password"/>
                    </div>
                    <div class="loginbtn">
                    <button type="submit" class="btn btn-primary">Login</button>
                    <p>New User/Admin ? <a href='Signup'>Sign up</a></p>
                    </div>
                </form>
                </div>
                
            </div>
        )
    }
}

