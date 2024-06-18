import { getArticleById } from "../utils/api.js";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ArticleInfo = () => {

    const { articleId } = useParams()
    const [article, setArticle] = useState ({})

    useEffect(() => {
        getArticleById(articleId).then((response) => {
            setArticle(response.data.article)
        })
    }, [articleId])

    return (
        <div className="article-list"> 
            <h2>{article.title}</h2>
            <img src={article.article_img_url} alt={article.title} className="article-image" />
            <p><strong>Author:</strong> {article.author}</p>
            <p><strong>Topic:</strong> {article.topic}</p>
            <p><strong>Created at:</strong> {new Date(article.created_at).toLocaleDateString()}</p>
            <p>{article.body}</p>
        </div>
    )
}

export default ArticleInfo