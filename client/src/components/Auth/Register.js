import React, { useState } from "react";
import { connect } from "react-redux";
import { Form, Col, Row } from "react-bootstrap";
import { Card, CardContent, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { registerAction } from "./actions";

const RegisterContainer = styled.div`
  text-align: center;
  margin-top: 10px;
  padding: 10px;
  -webkit-box-shadow: 37px 25px 99px -6px rgba(170, 174, 247, 1);
  -moz-box-shadow: 37px 25px 99px -6px rgba(170, 174, 247, 1);
  box-shadow: 37px 25px 99px -6px rgba(170, 174, 247, 1);
`;

const useStyles = makeStyles({
  root: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

const Register = props => {
  const [user, setUser] = useState({});
  const [validated, setValidated] = useState(false);
  const classes = useStyles();
  //   handle Register action
  const handleLogin = e => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      props.registerAction(user);
    }
    setValidated(true);
  };
  return (
    <RegisterContainer className="container">
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h2">
            New Registeration
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Dreams are comming to <b>non-sense</b> productivity{" "}
            <span role="img">🔥</span>
          </Typography>
          <Form onSubmit={handleLogin} validated={validated} noValidate>
            <Form.Group as={Row} controlId="formPlaintextEmail">
              <Form.Label column sm="2">
                Full name
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  placeholder="Enter full name"
                  onChange={e => setUser({ name: e.target.value })}
                  required
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  name is empty.
                </Form.Control.Feedback>
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formPlaintextEmail">
              <Form.Label column sm="2">
                Email
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  onChange={e => setUser({ ...user, email: e.target.value })}
                  required
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  email is empty.
                </Form.Control.Feedback>
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formPlaintextPassword">
              <Form.Label column sm="2">
                Password
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={e => setUser({ ...user, password: e.target.value })}
                  required
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  password is must.
                </Form.Control.Feedback>
              </Col>
            </Form.Group>
            <Button
              type="submit"
              variant="outlined"
              color="primary"
              disableElevation
            >
              Register
            </Button>
            <Link to="/login" className="btn btn-link">
              already have an account?
            </Link>
          </Form>
        </CardContent>
      </Card>
    </RegisterContainer>
  );
};

const mapDispatchToProps = {
  registerAction
};

function mapStateToProps(state) {
  const { AuthReducer } = state;
  return {
    loginStatus: AuthReducer.login
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
