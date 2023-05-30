import React from "react";
import { Card, Button } from "react-bootstrap";

const PostCard = ({ post, handleDelete, handlePostClick }) => {
  return (
    <Card key={post.id}>
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Card.Text>{post.body}</Card.Text>
        <Button variant="danger" onClick={() => handleDelete(post.id)}>
          Delete
        </Button>
        <Button variant="primary" onClick={() => handlePostClick(post.id)}>
          View
        </Button>
      </Card.Body>
    </Card>
  );
};

export default PostCard;
