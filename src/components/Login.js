import React, { Component } from "react";
import { Container, Form, Row, Col, Card, Button } from "react-bootstrap";
import "../styles/signup.scss";
class Login extends Component {
  constructor() {
    super();

    this.state = {
      user: {
        email: "",
        password: ""
      }
    };
  }

  handleChange = event => {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;
    this.setState({ user });
  };

  onSubmit = event => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <Container>
        <Form onSubmit={this.onSubmit}>
          <h2>Sign In</h2>
          <Row>
            <Col>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  onChange={this.handleChange}
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  password="password"
                  name="password"
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    );
  }
}

export default Login;
