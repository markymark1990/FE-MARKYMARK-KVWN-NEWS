import './App.css'
import Home from './pages/Home.jsx'
import Article from './pages/Article.jsx';
import { Routes, Route } from 'react-router-dom';

function App() {
  return(
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article/:articleId" element={<Article />} />
      </Routes>
    </div>
  )
}

export default App
