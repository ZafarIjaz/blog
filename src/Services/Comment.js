import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com";

// Get comments for a specific post by post ID
export const getCommentsByPostId = (postId) => {
  return axios.get(`${BASE_URL}/posts/${postId}/comments`);
};

// Get comments by post ID using query parameter
export const getCommentsByPostIdQuery = (postId) => {
  return axios.get(`${BASE_URL}/comments`, { params: { postId } });
};
