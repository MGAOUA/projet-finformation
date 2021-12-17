import { create } from "@mui/material/styles/createTransitions";
import axios from "axios";
import React from "react";
import { useState } from "react";
import style from "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";

const Inscription = () => {
  const [user, setUser] = useState({});
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const compare = (first, two) => {
    if (first === two) return true;
    else return false;
  };

  const createNewUser = async () => {
    try {
      const result = await axios.post("http://localhost:5000/users", {
        name: name,
        phone: phone,
        email: email,
        contact: phone,
        password: password,
      });
      console.log("result", result);

      if (result.status == 201) alert("compte creer avec succes!");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="formInscription">
      <Form className="cards">
        <Form.Group className="mb-3" controlId="formGrid">
          <Form.Label>Name</Form.Label>
          <Form.Control
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="name..... "
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridphone">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="phone..... "
          />
        </Form.Group>
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

        <Button
          onClick={(e) => {
            e.preventDefault();
            createNewUser();
          }}
          variant="primary"
          type="submit"
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Inscription;
