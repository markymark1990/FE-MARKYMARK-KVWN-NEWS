import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getTopics } from "../utils/api";

const NavigationBar = () => {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getTopics()
      .then((response) => {
        setTopics(response.data.topics);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <nav className="topics-navigation">
      <ul>
        <li>
          <Link to="/">All</Link>
        </li>
        {topics.map((topic) => (
          <li key={topic.slug}>
            <Link to={`/topics/${topic.slug}`}>{topic.slug}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationBar;
