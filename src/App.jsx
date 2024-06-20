import './App.css'
import Home from './pages/Home.jsx'
import Article from './pages/Article.jsx';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import TopicArticles from './pages/TopicArticles.jsx';

function App() {

  return(
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/article/:articleId" element={<ProtectedRoute><Article /></ProtectedRoute>} />
        <Route path="/topics/:topicSlug" element={<ProtectedRoute><TopicArticles /></ProtectedRoute>} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </div>
  )
}

export default App
