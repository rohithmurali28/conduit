import React, { Component } from 'react'
import "./SignInstyles.css"
import {Link } from "react-router-dom"

export default class SignIn extends Component {
constructor(props)
{
    super(props)
    this.state={
        email:"",
        password:"",
        error:false,
        errorMessage:""
    }
}
setInput=(event)=>{
    this.setState
({[event.target.className]:event.target.value})
}

onSignIn=()=>{
    if(!this.state.email || !this.state.password)
    {
        this.setState({error:true,errorMessage:"email or password is invalid"})
    }
  
}

componentWillUnmount(){
this.setState({error:false})
}

    render() {
        return (
            <div className="signInContainer">
             <div className="signInHeader">Sign In</div>  
                <Link className="signInsubheading" to="/signup">Need an account?</Link>
                {this.state.error ?<li className="error"> {this.state.errorMessage}</li> : null}
                <input type="text" value={this.state.email} onChange={this.setInput} className="email"  placeholder="Email"/>
                <input type="text" value={this.state.password} onChange={this.setInput} className="password" placeholder="Password"/>            

          
             <button type="button" onClick={this.onSignIn} className="signInBtn">Sign in</button>  </div>
        )
    }
}
