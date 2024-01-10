import React from 'react'
import Navigation from './Navigation'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import UserForm, { addUserAction } from '../UserCreationForm/UserForm';
import UserInspection from '../UserInspection/UserInspection';
import EditUserForm from '../EditUserPage/EditUserForm';
import Home from '../Home/Home';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navigation />} >
      <Route path="createUser" element={<UserForm />} action={addUserAction} />
      <Route path="inspectUsers" element={<UserInspection />}>
        <Route path=":username" element={<EditUserForm />} />
      </Route>
    </Route>
  )
)

const Header = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default Header