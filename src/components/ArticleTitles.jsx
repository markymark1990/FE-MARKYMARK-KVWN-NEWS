import { getArticles } from "../utils/api.js";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ArticleTitles = () => {

    const [articles, setArticles] = useState ([])

    useEffect(() => {
        getArticles().then((response) => {
            setArticles(response.data.articles)
        })
    }, [])

    return (
        <ul className="article-list"> 
            {articles.map((article) => (
                <li key={article.article_id} className="article-item">
                    <Link to={`/article/${article.article_id}`}>{article.title}</Link>
                </li>
            ))}
        </ul>
    )
}

export default ArticleTitles