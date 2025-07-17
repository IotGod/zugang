import MapView from './Map';
import React, { useState } from 'react';
import axios from 'axios';

export default function Dashboard({ token, setToken }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
  };

  const createUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/users/create', new URLSearchParams({ username, password }), {
        headers: { Authorization: 'Bearer ' + token }
      });
      alert('Benutzer erstellt');
    } catch {
      alert('Fehlgeschlagen oder keine Berechtigung');
    }
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={logout}>Abmelden</button>
      <h2>Benutzer anlegen</h2>
      <form onSubmit={createUser}>
        <input placeholder="Neuer Benutzer" value={username} onChange={e => setUsername(e.target.value)} />
        <input placeholder="Passwort" type="password" value={password} onChange={e => setPassword(e.target.value)} />
        <button type="submit">Anlegen</button>
      </form>
    <MapView /></div>
  );
}
