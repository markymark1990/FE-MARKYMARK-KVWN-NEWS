import axios from "axios";

const api = axios.create({
  baseURL: "https://markymark-kvwn-news.onrender.com/api",
});

export const getUsers = () => api.get("/users");

export const getArticles = (params) => api.get("/articles", { params });

export const getTopics = () => api.get("/topics")

export const getArticleById = (id) => api.get(`/articles/${id}`);

export const getCommentsById = (id) => api.get(`/articles/${id}/comments`);

export const voteOnArticle = (id, voteType) => {
  const vote = voteType === "up" ? { inc_votes: 1 } : { inc_votes: -1 };
  return api.patch(`/articles/${id}`, vote);
};

export const addComment = (id, comment) => {
  return api.post(`/articles/${id}/comments`, comment);
};

export const deleteComment = (id) => {
    return api.delete(`/comments/${id}`)
}

export default api;
