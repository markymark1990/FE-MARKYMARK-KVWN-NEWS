import { useParams } from "react-router-dom";
import ArticleTitles from "../components/ArticleTitles";
import Header from "../components/Header";
import ronBurgundy from "../images/ron2.png";
import NavigationBar from "../components/NavigationBar";
import UserStatus from "../components/UserStatus";

const TopicArticles = () => {
  const { topicSlug } = useParams();

  return (
    <div>
      <div className="page-container">
        <Header />
        <div className="articles-section">
          <div className="articles-header">
            <h2 className="sub-heading">Articles</h2>
            <img src={ronBurgundy} alt="Ron Burgundy" className="ron" />
          </div>
        </div>

        <div className="articles-section">
          <NavigationBar />
        </div>

        <div className="articles-section">
          <ArticleTitles topicSlug={topicSlug} />
        </div>
      </div>
      <div>
        <UserStatus />
      </div>
    </div>
  );
};

export default TopicArticles;
