import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import CreatePostPage from "../pages/CreatePost";

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [username, setUsername] = useState(localStorage.getItem("user"));

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handlePostLinkClick = () => {
    setShowModal(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUsername(null);
  };

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Blog App</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">
            {username && (
              <Nav className="me-auto">
                <Nav.Link onClick={handlePostLinkClick}>Post</Nav.Link>
                <Nav.Link href="/Post">State Handling</Nav.Link>
              </Nav>
            )}
            <Nav>
              {username ? (
                <>
                  <Nav.Link>{username}</Nav.Link>
                  <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link>
                    <Link to={`/login`}>Login</Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to={`/register`}>Register</Link>
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {showModal && (
        <CreatePostPage
          showModal={showModal}
          handleModalClose={handleModalClose}
        />
      )}
    </div>
  );
};

export default Header;
