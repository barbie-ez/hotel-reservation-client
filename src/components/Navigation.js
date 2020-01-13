import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import SignUp from "./SignUp";
import { connect } from "react-redux";
import { signUpUser } from "../actions/signUpActions";
import PropTypes from "prop-types";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
  }
  handleClose = () => {
    this.setState({ show: false });
    console.log(this.state.show);
  };
  handleShow = () => {
    this.setState({ show: true });
    console.log(this.state.show);
  };

  render() {
    const signUpUser = this.props;
    return (
      <>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">Hotel Reservation</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Nav>
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="#" onClick={this.handleShow}>
                Sign Up
              </Nav.Link>
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <SignUp
          signUpUser={signUpUser}
          showModal={this.state.show}
          handleClose={this.handleClose}
        />
      </>
    );
  }
}
//const mapStateToProps = ({ signUpUser }) => ({ ...signUpUser });

export default connect(
  state => {
    return {};
  },
  { signUpUser }
)(Navigation);
