import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getPostById } from "../../Services/Post";
import { getCommentsByPostId } from "../../Services/Comment";

export const useFetchData = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postResponse = await getPostById(id);
        setPost(postResponse.data);

        const commentsResponse = await getCommentsByPostId(id);
        setComments(commentsResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return { post, comments, isLoading };
};
