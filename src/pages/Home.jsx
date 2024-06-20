import Header from "../components/Header.jsx";
import ArticleTitles from "../components/ArticleTitles.jsx";
import ronBurgundy from '../images/ron2.png'
import UserStatus from "../components/UserStatus.jsx";

const Home = () => {

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
                <ArticleTitles />
            </div>
        </div>
            <div>
            <UserStatus />
            </div>
        </div>
    )
}

export default Home