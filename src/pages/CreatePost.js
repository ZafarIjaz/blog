import React, { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import { createPost } from "../Services/Post";

const CreatePostPage = ({ showModal, handleModalClose }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleBodyChange = (e) => {
    setBody(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await createPost(title, body);
      console.log("New post created:", response);

      // Reset the form
      setTitle("");
      setBody("");
      handleModalClose();
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <Modal show={showModal} onHide={handleModalClose}>
      <Modal.Header closeButton>
        <Modal.Title>Create New Post</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter title"
              value={title}
              onChange={handleTitleChange}
            />
          </Form.Group>

          <Form.Group controlId="body">
            <Form.Label>Body</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter body"
              value={body}
              onChange={handleBodyChange}
            />
          </Form.Group>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleModalClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Create Post
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default CreatePostPage;
