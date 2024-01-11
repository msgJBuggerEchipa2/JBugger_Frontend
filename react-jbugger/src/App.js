import React, { useState } from 'react';
import Header from "./Header/Header";
import UserForm from "./UserCreationForm/UserForm";
import Login from "./LogIn/Login";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loggedUser, setLoggedUser] = useState('');
  const [tokenUser, setTokenUser] = useState('');

  const handleLogin = (user, token) => {
    setIsAuthenticated(true);
	setLoggedUser(user);
	setTokenUser(token);
  };
  const handleLogout = () => {
    setIsAuthenticated(false);
	setLoggedUser("");
	setTokenUser("");
  };

  return (
    <>
      <Header isAuthenticated={isAuthenticated} onLogout={handleLogout} user={loggedUser} token={tokenUser} />
      {!isAuthenticated && <Login onLogin={handleLogin} />}
    </>
  );
}


export default App;