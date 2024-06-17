import { getArticles } from "../utils/api.js";
import { useState, useEffect } from "react";

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
                <li key={article.article_id}>{article.title}</li>
            ))}
        </ul>
    )
}

export default ArticleTitles