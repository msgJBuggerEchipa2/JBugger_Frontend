import { Routes, Route, Navigate } from 'react-router-dom';
import React from 'react'
import Navigation from './Navigation'
import UserForm from '../UserCreationForm/UserForm';
import UserInspection from '../UserInspection/UserInspection';
import EditUserForm from '../EditUserPage/EditUserForm';
import BugForm from '../BugCreationForm/BugForm';
import BugInspection from '../BugInspection/BugInspection';

const Header = ({ isAuthenticated,onLogout}) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return (
    <>
      <Navigation onLogout={onLogout} />
      <Routes>
          <Route path="/createUser" element={<UserForm />} />
          <Route path="/inspectUsers" element={<UserInspection />} />
          <Route path="/editUser" element={<EditUserForm />} />
          <Route path="/createBug" element={<BugForm />} />
          <Route path="/inspectBugs" element={<BugInspection />} />
      </Routes>
    </>
        
  )
}

export default Header