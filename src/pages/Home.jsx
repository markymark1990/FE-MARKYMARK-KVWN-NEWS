import Header from "../components/Header.jsx";
import ArticleTitles from "../components/ArticleTitles.jsx";
import ronBurgundy from "../images/ron2.png";
import UserStatus from "../components/UserStatus.jsx";
import NavigationBar from "../components/NavigationBar.jsx";
import SortBy from "../components/SortBy.jsx";
import OrderBy from "../components/OrderBy.jsx";
import { useState } from "react";

const Home = () => {
  const [sortBy, setSortBy] = useState("created_at");
  const [orderBy, setOrderBy] = useState("desc");

  return (
    <div>
      <div className="page-container">
        <Header />
        <div className="articles-section">
          <div className="articles-header">
            <div className="sort-controls">
              <SortBy sortBy={sortBy} setSortBy={setSortBy} />
              <OrderBy orderBy={orderBy} setOrderBy={setOrderBy} />
            </div>
            <h2 className="sub-heading">Articles</h2>
            <img src={ronBurgundy} alt="Ron Burgundy" className="ron" />
          </div>
        </div>

        <div className="articles-section">
          <NavigationBar />
        </div>

        <div className="articles-section">
          <ArticleTitles sortBy={sortBy} orderBy={orderBy} />
        </div>
      </div>
      <div>
        <UserStatus />
      </div>
    </div>
  );
};

export default Home;
