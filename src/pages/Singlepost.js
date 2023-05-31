import React, { useState, useEffect } from "react";
import { Card, Container, Col } from "react-bootstrap";
import { getPostById } from "../Services/Post";
import { getCommentsByPostId } from "../Services/Comment";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Loader from "../components/Spinner";
import "./SinglePost.css";

const SinglePost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getPostById(id)
      .then((response) => {
        setPost(response.data);
      })
      .catch((error) => {
        console.error("Error fetching post:", error);
      });

    getCommentsByPostId(id)
      .then((response) => {
        setComments(response.data);
      })
      .catch((error) => {
        console.error("Error fetching comments:", error);
      });
  }, [id]);

  if (!post) {
    return <Loader />;
  }

  return (
    <>
      <Header />
      <Container>
        <Card className="post-card headerrr">
          <Card.Body>
            <h1 className="post-title">Single Post</h1>
            <Card.Title className="post-details">{post.title}</Card.Title>
            <Card.Text className="post-details">{post.content}</Card.Text>
          </Card.Body>
        </Card>

        <h2 className="comments-heading">Comments</h2>
        {comments.map((comment) => (
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
        ))}
      </Container>
    </>
  );
};

export default SinglePost;
