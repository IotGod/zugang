import React, { useState } from 'react';
import axios from 'axios';

export default function Login({ setToken }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/token', new URLSearchParams({ username, password }));
      localStorage.setItem('token', res.data.access_token);
      setToken(res.data.access_token);
    } catch (err) {
      alert('Login fehlgeschlagen');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>
      <input placeholder="Benutzername" value={username} onChange={e => setUsername(e.target.value)} />
      <input type="password" placeholder="Passwort" value={password} onChange={e => setPassword(e.target.value)} />
      <button type="submit">Anmelden</button>
    </form>
  );
}
