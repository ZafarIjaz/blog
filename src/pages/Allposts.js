import React, { useState, useEffect } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { getPosts } from "../Services/Post";
import Loader from "../components/Spinner";
import "./AllPosts.css"; // Import custom CSS for styling

const AllPosts = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6); // Number of posts to display per page

  useEffect(() => {
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

  // Calculate the indexes of the posts to display based on the current page
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (!posts) {
    return <Loader />;
  }

  return (
    <div className="all-posts-container">
      <Container>
        <Row>
          {currentPosts.map((post) => (
            <Col key={post.id} md={6}>
              <Card className="post-card">
                <Card.Body>
                  <Card.Title>
                    {post.title.length > 20
                      ? post.title.substring(0, 20) + "..."
                      : post.title}
                  </Card.Title>
                  <Card.Text>
                    {post.body.length > 100
                      ? post.body.substring(0, 100) + "..."
                      : post.body}
                  </Card.Text>

                  <Link to={`/posts/${post.id}`}>
                    <Button variant="primary">Read More</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <div className="parent-container">
        <div className="pagination">
          <Button
            variant="outline-primary"
            disabled={currentPage === 1}
            onClick={() => paginate(currentPage - 1)}
          >
            Previous
          </Button>

          <Button
            variant="outline-primary"
            disabled={currentPosts.length < postsPerPage}
            onClick={() => paginate(currentPage + 1)}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AllPosts;
