import React, { Component } from "react";
import { Modal, Form, Row, Col, Card, Button } from "react-bootstrap";
import timezones from "../utils/timezones";
import { connect } from "react-redux";
import map from "lodash/map";
import PropTypes from "prop-types";
import { signUpUser } from "../actions/signUpActions";
import "../styles/signup.scss";
class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        email: "",
        currentWeight: "",
        height: "",
        dateOfBirth: new Date(),
        firstName: "",
        lastName: "",
        password: ""
        //passwordConfirmation: ""
      },
      show: false
    };
  }

  handleChange = event => {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;
    this.setState({ user });
    console.log(user[field]);
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.signUpUser(this.state).then(
      () => {},
      ({ data }) => this.setState({ data })
    );
  };

  render() {
    const { showModal, handleClose } = this.props;

    return (
      <>
        <Modal
          style={{ opacity: 1 }}
          animation={false}
          show={showModal}
          onHide={handleClose}
        >
          <Modal.Header closeButton>
            <Modal.Title>Sign Up</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.onSubmit}>
              <Row>
                <Col>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Control
                      type="email"
                      placeholder="Email"
                      name="email"
                      onChange={this.handleChange}
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicFirstName">
                    <Form.Control
                      type="text"
                      placeholder="First Name"
                      name="firstName"
                      onChange={this.handleChange}
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicLastName">
                    <Form.Control
                      type="text"
                      placeholder="Last Name"
                      name="lastName"
                      onChange={this.handleChange}
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicHeight">
                    <Form.Control
                      type="number"
                      placeholder="Height"
                      name="height"
                      onChange={this.handleChange}
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicWeight">
                    <Form.Control
                      type="number"
                      placeholder="Current Weight"
                      name="currentWeight"
                      onChange={this.handleChange}
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicDate">
                    <Form.Control
                      type="date"
                      placeholder="Date of birth"
                      name="dateOfBirth"
                      onChange={this.handleChange}
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Control
                      type="password"
                      password="password"
                      placeholder="Password"
                      name="password"
                      onChange={this.handleChange}
                    />
                  </Form.Group>
                  {/* <Form.Group controlId="formBasicPasswordConfirmation">
                    <Form.Control
                      type="password"
                      password="password"
                      placeholder="Password Confirmation"
                      name="passwordConfirmation"
                      onChange={this.handleChange}
                    />
                  </Form.Group> */}
                </Col>
              </Row>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.onSubmit}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default connect(
  state => {
    return {};
  },
  { signUpUser }
)(SignUp);
