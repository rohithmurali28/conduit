import React, { Component } from "react";
import "./App.css";

import HomeScreen from "./components/HomeScreen/HomeScreen";

export default class App extends Component {
  constructor(props)
  {
  super(props)
{
  
}
}
componentDidMount(){
  const token = window.localStorage.getItem('jwt');
}
  
  render() {
    return (
      <div>
       <HomeScreen/>
      </div>
    );
  }
}
