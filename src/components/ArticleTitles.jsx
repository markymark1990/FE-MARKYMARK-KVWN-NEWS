import { getArticles } from "../utils/api.js";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ArticleTitles = ({ topicSlug, sortBy, orderBy }) => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = () => {
      const params = topicSlug
        ? { topic: topicSlug, sort_by: sortBy, order: orderBy }
        : { sort_by: sortBy, order: orderBy };
      getArticles(params).then((response) => {
        setArticles(response.data.articles);
        setIsLoading(false);
      });
    };
    fetchArticles();
  }, [topicSlug, sortBy, orderBy]);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul className="article-list">
          {articles.map((article) => (
            <li key={article.article_id} className="article-item">
              <Link to={`/article/${article.article_id}`}>
                <span className="list-text-class">{article.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ArticleTitles;
