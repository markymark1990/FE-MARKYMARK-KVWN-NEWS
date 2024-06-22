import { useContext } from 'react';
import { UserContext } from '../UserContext.jsx';
import LogoutButton from './LogoutButton.jsx';

const UserStatus = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="userstatus-container">
    {user ? (
        <div>
        <p className='user-status-text'>Logged in as: {user.name}</p>
        <LogoutButton />
        </div>
      ) : (
        <p>Please log in</p>
      )}
      </div>
  )
}

export default UserStatus