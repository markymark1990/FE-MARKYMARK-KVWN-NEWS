import axios from 'axios';

const api = axios.create({
    baseURL: 'https://markymark-kvwn-news.onrender.com/api'
})

export const getArticles = () => api.get('/articles');
export const getArticleById = (id) => api.get(`/articles/${id}`);
export const getCommentsById = (id) => api.get(`/articles/${id}/comments`);
export const voteOnArticle = (id, voteType) => {
    const vote = voteType === 'up' ? {inc_votes:1} : {inc_votes: -1};
    return api.patch(`/articles/${id}`, vote);
} 

export default api;