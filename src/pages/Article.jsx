import Header from "../components/Header.jsx";
import ArticleInfo from "../components/ArticleInfo.jsx";

const Article =() => {

    return (
        <div className="page-container">
            <Header />
            <div className="articles-section">
                <ArticleInfo />
            </div>
        </div>
    )
}

export default Article