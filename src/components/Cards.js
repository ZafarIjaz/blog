import React from "react";
import { Card, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const Cards = (post) => {
  const { posts } = post;
  return (
    <Col key={posts.id} md={6}>
      <Card className="post-card">
        <Card.Body>
          <Card.Title>
            {posts.title.length > 20
              ? posts.title.substring(0, 20) + "..."
              : posts.title}
          </Card.Title>
          <Card.Text>
            {posts.body.length > 100
              ? posts.body.substring(0, 100) + "..."
              : posts.body}
          </Card.Text>

          <Link to={`/posts/${posts.id}`}>
            <Button variant="primary">Read More</Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Cards;
