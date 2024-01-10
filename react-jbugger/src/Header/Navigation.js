import React from 'react';
import {NavLink, Outlet } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <div>
      <nav>
      <ul className='horizontal-list'>
        <li>
          <NavLink to="createUser">Create User</NavLink>
        </li>
        <li>
          <NavLink to="inspectUsers">Inspect Users</NavLink>
        </li>
      </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
    
  )
}

export default Navigation