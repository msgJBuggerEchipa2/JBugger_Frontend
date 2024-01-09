import { Routes, Route, Navigate } from 'react-router-dom';
import React from 'react'
import Navigation from './Navigation'
import UserForm from '../UserCreationForm/UserForm';
import UserInspection from '../UserInspection/UserInspection';
import EditUserForm from '../EditUserPage/EditUserForm';

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
      </Routes>
    </>
        
  )
}

export default Header