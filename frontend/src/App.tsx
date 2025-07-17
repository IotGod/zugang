import React, { useState, useEffect } from 'react';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));

  return token ? <Dashboard token={token} setToken={setToken} /> : <Login setToken={setToken} />;
}

export default App;
