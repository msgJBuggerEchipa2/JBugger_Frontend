import React, { useState } from 'react';
import Header from "./Header/Header";
import UserForm from "./UserCreationForm/UserForm";
import Login from "./LogIn/Login";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };
  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <>
      <Header isAuthenticated={isAuthenticated} onLogout={handleLogout} />
      {!isAuthenticated && <Login onLogin={handleLogin} />}
    </>
  );
}


export default App;