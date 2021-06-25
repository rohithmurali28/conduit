import React, { Component } from "react";
import "./HomeScreenstyle.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SignIn from "../Signin/SignIn";
import Signup from "../Signin/Signup";
import Home from "./Home";


export default class HomeScreen extends Component {
  render() {
    return (
      <Router>
      <div>
       
          <div className="header">
            <div className="leftheader">conduit</div>
            <div className="rightheader">
            <Link className="navlinks" to="/">Home</Link>
            <Link className="navlinks" to="/signin">Sign in</Link>
            <Link className="navlinks" to="/signup">Sign up</Link>
            </div>
          </div>     
       
      </div>
      <Switch>
          <Route exact path="/">
          <Home/>
          </Route>
          <Route path="/signin">
            <SignIn/>
          </Route>
          <Route path="/signup">
            <Signup token={this.props.token}/>
          </Route>
        </Switch>
      </Router>
    );
  }
}
