import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com";


export const getCommentsByPostId = (postId) => {
  return axios.get(`${BASE_URL}/posts/${postId}/comments`);
};

export const getCommentsByPostIdQuery = (postId) => {
  return axios.get(`${BASE_URL}/comments`, { params: { postId } });
};
