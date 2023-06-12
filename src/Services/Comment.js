import api from "./api";
export const getCommentsByPostId = (postId) => {
  return api.get(`/posts/${postId}/comments`);
};
export const getCommentsByPostIdQuery = (postId) => {
  return api.get(`/comments`, { params: { postId } });
};
