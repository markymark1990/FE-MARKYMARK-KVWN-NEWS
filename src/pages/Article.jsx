import Header from "../components/Header.jsx";
import ArticleInfo from "../components/ArticleInfo.jsx";
import UserStatus from "../components/UserStatus.jsx";

const Article =() => {

    return (
        <div>
        <div className="page-container">
            <Header />
            <div className="articles-section">
                <ArticleInfo />
            </div>
        </div>
           <div>
           <UserStatus />
           </div>
       </div>
    )
}

export default Article