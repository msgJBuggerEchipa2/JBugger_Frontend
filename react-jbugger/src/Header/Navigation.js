import React from 'react';
import {Link,useNavigate} from 'react-router-dom';
import './Navigation.css';

const Navigation = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout logic (clear authentication state, etc.)
    onLogout();
    // Redirect to login page after logout
    navigate('/login');
  };
  return (
    <nav>
      <ul className='horizontal-list'>
        <li>
          <Link to="/createUser">Create User</Link>
        </li>
        <li>
          <Link to="/inspectUsers">Inspect Users</Link>
        </li>
        <li>
          <button onClick={handleLogout}>Logout</button>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation