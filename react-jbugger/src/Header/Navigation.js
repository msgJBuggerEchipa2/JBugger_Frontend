import React from 'react';
import {Link} from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav>
      <ul className='horizontal-list'>
        <li>
          <Link to="/createUser">Create User</Link>
        </li>
        <li>
          <Link to="/inspectUsers">Inspect Users</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation