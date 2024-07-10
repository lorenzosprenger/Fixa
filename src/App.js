import React from 'react';
import { AuthProvider } from './components/AuthContext.jsx';
import Login from './components/Login.jsx';
import Perfil from './components/Perfil.jsx';

const App = () => (
  <AuthProvider>
    <Login />
    <Perfil />
  </AuthProvider>
);

export default App;