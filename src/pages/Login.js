import React, { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import Header from "../components/Header";
import "./Login.css"; // Import custom CSS for styling

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      setShowError(true);
    } else {
      setShowError(false);

      // Dummy users array
      const users = [
        { email: "user1@example.com", password: "password1", name: "zafar" },
        { email: "user2@example.com", password: "password2", name: "ali" },
        { email: "user3@example.com", password: "password3", name: "niazi" },
      ];

      // Check if user exists in the dummy users array
      const user = users.find(
        (user) => user.email === email && user.password === password
      );

      if (user) {
        // Store the users array in local storage
        localStorage.setItem("user", JSON.stringify(user.name));

        // Redirect to the post page
        // Replace the following line with your desired navigation logic
        window.location.href = "/";
      } else {
        setShowError(true);
      }

      // Reset the form
      setEmail("");
      setPassword("");
    }
  };

  return (
    <>
      <Header />
      <Container>
        <div className="login-container">
          <h1>Login</h1>
          {showError && (
            <Alert variant="danger">Invalid email or password.</Alert>
          )}
          <Form onSubmit={handleSubmit}>
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

            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </div>
      </Container>
    </>
  );
};

export default Login;
