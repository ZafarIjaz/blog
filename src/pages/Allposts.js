import React, { useState, useEffect } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { getPosts } from "../Services/Post";
import Loadar from "../components/Spinner";

const AllPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch all posts on component mount
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await getPosts();
      setPosts(response.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };
  if (!posts) {
    return <Loadar />;
  }
  return (
    <div>
      <Container>
        <Row>
          {posts.map((post) => (
            <Col key={post.id} md={6}>
              <Card>
                <Card.Body>
                  <Card.Title>{post.title}</Card.Title>
                  <Card.Text>{post.body}</Card.Text>
                  <Link to={`/posts/${post.id}`}>
                    <Button variant="primary">Read More</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default AllPosts;
