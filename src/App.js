import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import HomeScreen from "./components/HomeScreen/HomeScreen";
import { increment } from "./components/counterSlice";


class App extends Component {

  constructor(props) {
    super(props)
    {

    }
  }
  componentDidMount() {
    const token = window.localStorage.getItem('jwt');

  }

  render() {
    return (
      <div className="appContainer">
        <HomeScreen />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  count: state.counter.value
});

const mapDispatchToProps = { increment };

export default connect(mapStateToProps, mapDispatchToProps)(App);
