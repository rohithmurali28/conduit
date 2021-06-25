
import React, { Component } from 'react'
import "./SignInstyles.css"
import {Link } from "react-router-dom"
import axios from 'axios';

export default class Signup extends Component {
constructor(props)
{
    super(props)
    this.state={
        email:"",
        password:"",
        username:"",
        errors:{}
    }
}


// tokenPluggin=(req)={
//     if(token)
//     {
//         req.set('authorization',`Token ${this.props.token}`)
//     }
// }

setInput=(event)=>{
    this.setState
({[event.target.className]:event.target.value})

}

onSignUp=()=>{
    axios.post('https://conduit.productionready.io/api/users', {user:{ 
            username:this.state.username,
            email:this.state.email,
            password:this.state.password}
           
}
       )
      .then( (response)=> {
        console.log( response   );
      },
      (response)=>{
          console.log( response.response.data.errors);
          this.setState({errors:response.response.data.errors})
        })
      .catch( (error) =>{
        console.log(error);
      })
     
}
    render() {
        return (
            
            <div className="signInContainer">
                <div className="signInHeader">Sign Up</div>  
                <Link className="signInsubheading" to="/signin">Have an account?</Link>
                {this.state.errors ?Object.keys(this.state.errors).map((errorMessage)=>{return <li className="error"> {errorMessage +" "+this.state.errors[errorMessage]}</li> }): null}
                <input type="text" value={this.state.username} onChange={this.setInput} className="username" placeholder="User Name"/>
                <input type="text" value={this.state.email} onChange={this.setInput} className="email" placeholder="Email"/>
                <input type="text" value={this.state.password} onChange={this.setInput} className="password" placeholder="Password"/>             

            
             <button type="button" className="signInBtn" onClick={this.onSignUp}>Sign up</button></div>
        )
    }
}


