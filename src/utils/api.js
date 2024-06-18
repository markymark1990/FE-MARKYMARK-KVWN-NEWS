import axios from 'axios';

const api = axios.create({
    baseURL: 'https://markymark-kvwn-news.onrender.com/api'
})

export const getArticles = () => api.get('/articles');
export const getArticleById = (id) => api.get(`/articles/${id}`);

export default api;