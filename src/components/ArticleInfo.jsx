import { getArticleById } from "../utils/api.js";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CommentsByArticle from "./CommentsByArticle.jsx";

const ArticleInfo = () => {

    const { articleId } = useParams()
    const [article, setArticle] = useState ({})
    const [isLoading, setIsLoading] = useState (true)

    useEffect(() => {
        getArticleById(articleId).then((response) => {
            setArticle(response.data.article)
            setIsLoading(false)
        })
    }, [articleId])

    return (
        <div>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
        <div className="article-list"> 
            <h2>{article.title}</h2>
            <img src={article.article_img_url} alt={article.title} className="article-image" />
            <p><strong>Author:</strong> {article.author}</p>
            <p><strong>Topic:</strong> {article.topic}</p>
            <p><strong>Created at:</strong> {new Date(article.created_at).toLocaleDateString()}</p>
            <p>{article.body}</p>
            <CommentsByArticle />
        </div>
            )}
        </div>
    )
}

export default ArticleInfo