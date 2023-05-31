import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com";

export const getPosts = () => {
  return axios.get(`${BASE_URL}/posts`);
};

export const getPostById = (postId) => {
  return axios.get(`${BASE_URL}/posts/${postId}`);
};

export const createPost = (postData) => {
  return axios.post(`${BASE_URL}/posts`, postData);
};

export const updatePostById = (postId, postData) => {
  return axios.put(`${BASE_URL}/posts/${postId}`, postData);
};

export const updatePartialPostById = (postId, postData) => {
  return axios.patch(`${BASE_URL}/posts/${postId}`, postData);
};

export const deletePostById = (postId) => {
  return axios.delete(`${BASE_URL}/posts/${postId}`);
};
