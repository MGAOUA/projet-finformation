import React from "react";
import style from "./style.css";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useState } from "react";
const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const connecter = async () => {
    console.log(password);
    console.log(email);
    try {
      const getResult = await axios.get(
        "http://localhost:5000/users/connect",
        email
      );
      console.log(getResult);
    } catch (error) {
      console.log("erreur");
      console.log(error);
    }
  };
  return (
    <div className="cardLog">
      <Form
        className="cardlogin"
        onSubmit={(e) => {
          e.preventDefault();
          connecter();
        }}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Login;
