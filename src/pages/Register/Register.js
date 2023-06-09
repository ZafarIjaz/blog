import React, { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import Header from "../../components/Header";
function newFunction(setName, setEmail, setPassword) {
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  return { handleNameChange, handleEmailChange, handlePasswordChange };
}

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);

  const { handleNameChange, handleEmailChange, handlePasswordChange } =
    newFunction(setName, setEmail, setPassword);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === "" || email === "" || password === "") {
      setShowError(true);
    } else {
      // Perform registration logic
      setShowError(false);
      // Reset the form
      setName("");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <>
      <Header />
      <Container>
        <h1 className="mt-4">Register</h1>
        {showError && (
          <Alert variant="danger">Please fill in all fields.</Alert>
        )}
        <Form onSubmit={handleSubmit} className="mt-4">
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              value={name}
              onChange={handleNameChange}
            />
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={handleEmailChange}
            />
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="mt-3">
            Register
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default RegisterPage;
