import api from "./api";
export const getPosts = () => {
  return api.get(`posts`);
};

export const getPostById = (postId) => {
  return api.get(`/posts/${postId}`);
};

export const createPost = (postData) => {
  return api.post(`/posts`, postData);
};

export const updatePostById = (postId, postData) => {
  return api.put(`/posts/${postId}`, postData);
};

export const updatePartialPostById = (postId, postData) => {
  return api.patch(`/posts/${postId}`, postData);
};

export const deletePostById = (postId) => {
  return api.delete(`/posts/${postId}`);
};
