import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getTopics } from "../utils/api";


const NavigationBar = () => {

const [topics,setTopics] = useState([])

useEffect(() => {
    getTopics()
      .then((response) => {
        setTopics(response.data.topics); 
      })
    }, []);

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
  }
  
  export default NavigationBar;