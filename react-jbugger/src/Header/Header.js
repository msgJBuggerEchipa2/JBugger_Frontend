import { Routes, Route, Navigate } from 'react-router-dom';
import React from 'react'
import Navigation from './Navigation'
import UserForm from '../UserCreationForm/UserForm';
import UserInspection from '../UserInspection/UserInspection';
import EditUserForm from '../EditUserPage/EditUserForm';
import BugForm from '../BugCreationForm/BugForm';
import BugInspection from '../BugInspection/BugInspection';

const Header = ({ isAuthenticated, onLogout, user, token}) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  console.log(user);
  return (
    <>
      <Navigation onLogout={onLogout} />
      <Routes>
          <Route path="/createUser" element={<UserForm authToken={token} />} />
          <Route path="/inspectUsers" element={<UserInspection authToken={token} />} />
          <Route path="/editUser" element={<EditUserForm />} />
          <Route path="/createBug" element={<BugForm authToken={token} />} />
          <Route path="/inspectBugs" element={<BugInspection authToken={token} />} />
      </Routes>
    </>
        
  )
}

export default Header