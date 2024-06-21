import { getArticleById, voteOnArticle } from "../utils/api.js";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CommentsByArticle from "./CommentsByArticle.jsx";

const ArticleInfo = () => {
  const { articleId } = useParams();
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [voted, setVoted] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    getArticleById(articleId)
      .then((response) => {
        setArticle(response.data.article);
        setIsLoading(false);
      })
      .catch((error) => {
        setError("Error fetching article. Please try again later.");
        setIsLoading(false);
      });
  }, [articleId]);

  const vote = (voteType) => {
    if (voted) {
      return;
    }

    setVoted(true);

    voteOnArticle(articleId, voteType)
      .then((response) => {
        setArticle(response.data.article);
      })
      .catch((error) => {
        setError("Error voting on article. Please try again later.");
        setVoted(false);
      });
  };

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="article-list">
          <h2>{article.title}</h2>
          <img
            src={article.article_img_url}
            alt={article.title}
            className="article-image"
          />
          <p>
            <strong>Author:</strong> {article.author}
          </p>
          <p>
            <strong>Topic:</strong> {article.topic}
          </p>
          <p>
            <strong>Created at:</strong>{" "}
            {new Date(article.created_at).toLocaleDateString()}
          </p>
          <p>{article.body}</p>
          <p>
            <strong>Votes:</strong>
            {article.votes}
          </p>
          <button onClick={() => vote("up")}>Vote Up</button>
          <button onClick={() => vote("down")}>Vote Down</button>
          <CommentsByArticle />
        </div>
      )}
    </div>
  );
};

export default ArticleInfo;
