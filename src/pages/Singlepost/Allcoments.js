import React from "react";
import { Card, Col } from "react-bootstrap";
export function Allcoments({ comment }) {
  return (
    <Col key={comment.id} md={6}>
      <Card className="comment-card">
        <Card.Body>
          <div className="comment-header">
            <span className="comment-email">{comment.email}</span>
          </div>
          <hr />
          <p className="comment-body">{comment.body}</p>
        </Card.Body>
      </Card>
    </Col>
  );
}
