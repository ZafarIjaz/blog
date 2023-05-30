import React from "react";
import { Card } from "react-bootstrap";

const CommentCard = ({ comment }) => {
  return (
    <Card key={comment.id}>
      <Card.Body>{comment.body}</Card.Body>
    </Card>
  );
};

export default CommentCard;
