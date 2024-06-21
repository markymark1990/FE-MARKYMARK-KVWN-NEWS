import { useContext } from "react";
import { UserContext } from "../UserContext.jsx";

const LogoutButton = () => {
  const { setUser } = useContext(UserContext);

    const handleLogout = () => {
    setUser(null);
  };

  return <button onClick={handleLogout} className="logout-button">Logout</button>;

};

export default LogoutButton;