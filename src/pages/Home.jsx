import Header from "../components/Header.jsx";
import ArticleTitles from "../components/ArticleTitles.jsx";

const Home =() => {

    return (
        <div>
            <Header />
            <div className="articles-section">
                <h2>Articles</h2>
            </div>
            <div className="articles-section">
                <ArticleTitles />
            </div>
        </div>
    )
}

export default Home