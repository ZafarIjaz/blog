import React, { useState, useEffect } from "react";
import { Card, Container, Col } from "react-bootstrap";
import { getPostById } from "../Services/Post";
import { getCommentsByPostId } from "../Services/Comment";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Loadar from "../components/Spinner";

// Comment component

// SinglePost component
const SinglePost = () => {
  const { id } = useParams(); // Retrieve the post ID from the params
  console.log(id);
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // Fetch the post by its ID
    getPostById(id)
      .then((response) => {
        setPost(response.data); // Assuming the response contains the post data
      })
      .catch((error) => {
        console.error("Error fetching post:", error);
      });

    // Fetch the comments for the post
    getCommentsByPostId(id)
      .then((response) => {
        setComments(response.data); // Assuming the response contains the comments data
      })
      .catch((error) => {
        console.error("Error fetching comments:", error);
      });
  }, [id]); // Dependency on postId to re-run the effect when it changes

  if (!post) {
    return <Loadar />; // Render a loading state while fetching the post
  }

  return (
    <>
      <Header />
      <Container>
        <Card>
          <Card.Body>
            <h1>SinglePost</h1>
            <Card.Title>{post.title}</Card.Title>
            <Card.Text>{post.content}</Card.Text>
          </Card.Body>
        </Card>

        <h2>Comments</h2>
        {comments.map((comments) => (
          <Col key={comments.id} md={6}>
            <Card>
              <Card.Body>
                <h3>Name of user who comment</h3>
                <Card.Title>{comments.name}</Card.Title>
                <h3>Email</h3>
                <Card.Title>{comments.email}</Card.Title>
                <h3>Comment</h3>
                <Card.Text>{comments.body}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Container>
    </>
  );
};

export default SinglePost;
