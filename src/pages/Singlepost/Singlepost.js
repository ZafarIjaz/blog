import { Allcoments } from "./Allcoments";
import React from "react";

import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import Loader from "../../components/Spinner";
import "./SinglePost.css";
import { Card, Container } from "react-bootstrap";
import { useFetchData } from "./singlepostHook";

const SinglePost = () => {
  const { id } = useParams();
  const { post, comments, isLoading } = useFetchData(id);

  if (isLoading) {
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
          <Allcoments comment={comment} />
        ))}
      </Container>
    </>
  );
};

export default SinglePost;
