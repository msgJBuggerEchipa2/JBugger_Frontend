import React from 'react'
import Navigation from './Navigation'
import { Routes, Route } from 'react-router-dom';
import UserForm from '../UserCreationForm/UserForm';
import UserInspection from '../UserInspection/UserInspection';
import EditUserForm from '../EditUserPage/EditUserForm';

const Header = () => {
  return (
    <>
      <Navigation />
      <Routes>
          <Route path="/createUser" element={<UserForm />} />
          <Route path="/inspectUsers" element={<UserInspection />} />
          <Route path="/editUser" element={<EditUserForm />} />
      </Routes>
    </>
        
  )
}

export default Header