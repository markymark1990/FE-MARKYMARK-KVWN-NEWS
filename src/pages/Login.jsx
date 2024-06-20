import { useState, useContext } from "react";
import { UserContext } from "../UserContext";
import { getUsers } from "../utils/api";
import { Navigate, useNavigate } from "react-router-dom";
import UserStatus from '../components/UserStatus.jsx';
import newsTeam from '../images/news-team.jpg'

const Login = () => {

  const [username, setUsername] = useState("tickle122");
  const [error, setError] = useState(null);
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate()

const handleLogin = () => {
    getUsers().then((response) => {
        const users = response.data.users 
        const user = users.find((u) => u.username === username)
        if (user) {
            setUser(user)
            navigate("/")
        } else {
            setError("User not found")
        }
     })
}

return (
    <div className="login-page-container">
        <div className="image-container">
        <img src={newsTeam} alt="News Team" className="news-team" />
      </div>
    <div className="login-container">
      <h2>Login</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter your username"
      />
      <button onClick={handleLogin}>Login</button>
      {error && <p>{error}</p>}
      </div>
      <div className="user-status-container">
      <UserStatus />
      </div>
    </div>

  );
}

export default Login