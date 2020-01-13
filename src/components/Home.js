import React, { Component } from "react";
import Navigation from "./Navigation";
import SignUp from "./SignUp";

class Home extends Component {
  render() {
    return (
      <>
        <Navigation />
        <SignUp />
      </>
    );
  }
}

export default Home;
