import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com";

// Get all posts
export const getPosts = () => {
  return axios.get(`${BASE_URL}/posts`);
};

// Get a specific post by ID
export const getPostById = (postId) => {
  return axios.get(`${BASE_URL}/posts/${postId}`);
};

// Create a new post
export const createPost = (postData) => {
  return axios.post(`${BASE_URL}/posts`, postData);
};

// Update a post by ID
export const updatePostById = (postId, postData) => {
  return axios.put(`${BASE_URL}/posts/${postId}`, postData);
};

// Partially update a post by ID
export const updatePartialPostById = (postId, postData) => {
  return axios.patch(`${BASE_URL}/posts/${postId}`, postData);
};

// Delete a post by ID
export const deletePostById = (postId) => {
  return axios.delete(`${BASE_URL}/posts/${postId}`);
};
