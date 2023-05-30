import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import PostForm from "./state/PostForm";
import PostCard from "./state/PostCard";
import CommentCard from "./state/CommentCard";
import Header from "./components/Header";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [currentPost, setCurrentPost] = useState({});
  const [comment, setComment] = useState("");

  const handleTitleChange = (e) => {
    setCurrentPost({ ...currentPost, title: e.target.value });
  };

  const handleBodyChange = (e) => {
    setCurrentPost({ ...currentPost, body: e.target.value });
  };

  const handleSubmit = () => {
    if (currentPost.id) {
      // Edit post
      const updatedPosts = posts.map((post) =>
        post.id === currentPost.id ? currentPost : post
      );
      setPosts(updatedPosts);
    } else {
      // Create post
      const newPost = { ...currentPost, id: Date.now(), comments: [] };
      setPosts([...posts, newPost]);
    }
    setCurrentPost({});
  };

  const handleDelete = (postId) => {
    const updatedPosts = posts.filter((post) => post.id !== postId);
    setPosts(updatedPosts);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = (postId) => {
    const updatedPosts = posts.map((post) => {
      if (post.id === postId) {
        const newComment = { id: Date.now(), body: comment };
        const updatedComments = post.comments
          ? [...post.comments, newComment]
          : [newComment];
        return { ...post, comments: updatedComments };
      }
      return post;
    });
    setComment("");
    setPosts(updatedPosts);
  };

  const handlePostClick = (postId) => {
    const selectedPost = posts.find((post) => post.id === postId);
    setCurrentPost(selectedPost ? { ...selectedPost } : {});
  };

  return (
    <>
      <Header />
      <Container>
        <h1>Post Form</h1>
        <PostForm
          currentPost={currentPost}
          handleTitleChange={handleTitleChange}
          handleBodyChange={handleBodyChange}
          handleSubmit={handleSubmit}
        />

        <h1>All Posts</h1>
        {posts.map((post) => (
          <PostCard
            key={post.id}
            post={post}
            handleDelete={handleDelete}
            handlePostClick={handlePostClick}
          />
        ))}

        {currentPost.id && (
          <div>
            <h1>Single Post</h1>
            <PostCard
              post={currentPost}
              handleDelete={handleDelete}
              handlePostClick={handlePostClick}
            />

            <h2>Comments</h2>
            {currentPost.comments && currentPost.comments.length > 0 ? (
              currentPost.comments.map((comment) => (
                <CommentCard key={comment.id} comment={comment} />
              ))
            ) : (
              <p>No comments yet.</p>
            )}

            <Form>
              <Form.Group controlId="formComment">
                <Form.Label>Comment</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={comment}
                  onChange={handleCommentChange}
                />
              </Form.Group>
              <Button
                variant="primary"
                onClick={() => handleCommentSubmit(currentPost.id)}
              >
                Add Comment
              </Button>
            </Form>
          </div>
        )}
      </Container>
    </>
  );
};

export default App;
