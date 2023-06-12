import React from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Cards from "../../components/Cards";
import { Customhook } from "./Customhook";
import "./AllPosts.css"; // Import custom CSS for styling
const AllPosts = () => {
  const { currentPage, postsPerPage, paginate, currentPosts } = Customhook();
  return (
    <div className="all-posts-container">
      <Container>
        <Row>
          {currentPosts && currentPosts.length > 0 ? (
            currentPosts.map((post) => <Cards posts={post} />)
          ) : (
            <p>No posts found.</p>
          )}
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
