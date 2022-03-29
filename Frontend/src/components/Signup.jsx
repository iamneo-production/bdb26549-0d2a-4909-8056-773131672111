import React, { Component } from 'react';
import axios from "axios";

import "./Styles.css";

export class Signup extends Component {
    constructor() {
        super()

        this.state = {
            email: "",
            password: "",
            username: "",
            mobileNumber:"",
            confirmPassword: "",
            role:[""],
            errors: {
                email: "",
                username:"",
                mobileNumber:"",
                password:"",
                confirmPassword:""
              }       
        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    isEmailValid = email => {
        //eslint-disable-next-line
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
      };
    
    
    validateEmail = email => {
        const errors = {
          email: "",
        };
    
        if (!this.isEmailValid(email)) {
          errors.email = "Email is invalid";
        }

        this.setState(state => ({ ...state, errors }));
    };
    validateUsername=username=>{
        const errors={
            username:""
        };
        if (this.state.username.length<3  ) {
           errors.username= "Username should be of minimum length 3";
         }
         
   
       this.setState(state => ({ ...state, errors }));

    }
    validateMobile=mobileNumber=>{
         const errors={
             mobileNumber:""
         };
         if (this.state.mobileNumber.length!==9  ) {
            errors.mobileNumber= "Mobile number should be of length 10";
          }
          
    
        this.setState(state => ({ ...state, errors }));

     }
     validatePassword=(password,confirmPassword)=>{
         const errors={
             password:"",
             confirmPassword:""
         }
         if(this.state.password.toString().length <6){
             errors.password="Password must contain atleast 6 characters."
         }
         //eslint-disable-next-line
         else if(this.state.password.search(/[0-9]/)===-1 || this.state.password.search(/[a-z]/)===-1 ||
                    this.state.password.search(/[A-Z]/)===-1 || 
                    //eslint-disable-next-line
                    this.state.password.search(/[!\@\#\$\^\&\*\(\)\+\=\-\/\?\.\,\>\<\}\{\]\[\'\"\;\:\]\}\{\`\~]/)===-1 )
                    {   
            errors.password="Password must contain atleast 1 number, 1 Uppercase, 1 Lowercase & 1 Special character."
        }
        else if(this.state.password!==this.state.confirmPassword)
        {
            errors.confirmPassword="password and confirm password must be same"
        }
        this.setState(state => ({ ...state, errors }));
     }
    
     
      handleChange = ({ target: { name, value } }) => {
        this.setState({ [name]: value });
    
        switch (name) {
          case "email":
            this.validateEmail(value);
            break;
          case "mobileNumber":
            this.validateMobile(value);
            break;
            case "username":
                this.validateUsername(value);
                break;
          case "password":
              this.validatePassword(value);
              break;
          default:
            break;
        }
      };
    

    onChangeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleValidations=(event)=>{
        if(this.state.password>0)
            return true;
    }

    

  
    handleSubmit = (event) => {

        this.setState({
            role:"",
            email: "",
            username: "",
            mobileNumber: "",
            password: "",
            confirmPassword: "",
        })
        alert(`Congratulations! "${this.state.username}" you are registered successfully.`)
        
        event.preventDefault();
        
        console.log(this.state);
        const user = {
            email: this.state.email,
            username: this.state.username,
            mobileNumber: this.state.mobileNumber,
            password: this.state.password,
            role:this.state.role
        }
        axios
        .post('http://localhost:8080/signup', user)
        .then((response) => {
            console.log(response);
            window.location.href='/login';
            // this.setState({userId:response.data.userId})
        })
        .catch((error) => {
            console.log(error);
        });
        
    }
    
  render() {
      const {role,email,username,mobileNumber,password,confirmPassword}=this.state
      const isEnabled =this.isEmailValid(email) && this.state.username.length>3 &&this.state.mobileNumber.length==10
                               

    return(
            <div className="login">
                <div className="head">
                <h3 id='h'>Register </h3>
                </div>
                <div className="RegBox">
                    <form className='Regform'onSubmit={this.handleSubmit}>
                        <p> *all fields are mandatory to fill.</p>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Role</label>
                            <input type="text" value={role[""]} name='role[]' onChange={this.onChangeHandler} className="form-control" 
                            placeholder="Enter role" id="role" required/>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" value={email} name='email' onChange={this.handleChange} className="form-control" placeholder="Enter Email" id="email" autocomplete="off" required/>
                            {this.state.errors.email && <span style={{color:"#FF004F"}}>{this.state.errors.email}</span>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
                            <input type="text" value={username} name='username' onChange={this.handleChange} className="form-control" placeholder="Username" id="username" autocomplete="off" required/>
                            {this.state.errors.username && <span style={{color:"#FF004F"}}>{this.state.errors.username}</span>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Phone Number</label>
                            <input type="text" value={mobileNumber} name='mobileNumber' onChange={this.handleChange} className="form-control" placeholder="Enter Phone No." id="mobileNumber" autoComplete='off'  required/>
                            {this.state.errors.mobileNumber && <span style={{color:"#FF004F"}}>{this.state.errors.mobileNumber}</span>}

                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" value={password} name='password' onChange={this.handleChange} className="form-control" placeholder="Enter Password" id="password" required/>
                            {this.state.errors.password && <span style={{color:"#FF004F"}}>{this.state.errors.password}</span>}

                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password</label>
                            <input type="password" value={confirmPassword} name='confirmPassword' onChange={this.handleChange} className="form-control" placeholder="Re Enter Password" id="confirmPassword" required/>


                        </div>
                        <button disabled={!isEnabled} type="submit" value="Submit" className="btn btn-primary">Register</button>
                        <p>Already a User/Admin ? <a href='login'>Login</a></p>
                        
                    </form>
                </div>
                
            </div>
        )
    }
}





