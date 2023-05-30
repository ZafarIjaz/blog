import React from "react";
import { Form, Button } from "react-bootstrap";

const PostForm = ({
  currentPost,
  handleTitleChange,
  handleBodyChange,
  handleSubmit,
}) => {
  return (
    <Form>
      <Form.Group controlId="formTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          value={currentPost.title || ""}
          onChange={handleTitleChange}
        />
      </Form.Group>
      <Form.Group controlId="formBody">
        <Form.Label>Body</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={currentPost.body || ""}
          onChange={handleBodyChange}
        />
      </Form.Group>
      <Button variant="primary" onClick={handleSubmit}>
        {currentPost.id ? "Update Post" : "Create Post"}
      </Button>
    </Form>
  );
};

export default PostForm;
