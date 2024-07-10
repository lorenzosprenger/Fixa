import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthProvider } from './components/AuthContext.jsx';
import FactorialComponent from './components/Fatorial.jsx';
import Counter from './components/FormularioLimpar.jsx';
import Gerenciamento from './components/GerenciamentoOrcamento.jsx';
import Relogio from './components/RelogioMensagem.jsx';
import ToDoList from './components/ToDoList.jsx';

const MainApp = () => {
  return (
    <AuthProvider>
      <div>
        <App />
        <FactorialComponent />
        <Counter />
        <Relogio />
        <ToDoList />
        <Gerenciamento />

      </div>
    </AuthProvider>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainApp />
  </React.StrictMode>
);