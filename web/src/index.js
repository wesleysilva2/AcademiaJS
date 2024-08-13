import React from 'react';
import ReactDOM from 'react-dom/client'; // DA a habilidade pro react de se comunicar com a arvore de elementos da aplicação, como HTML(HEAD, BOFY, ETC.)
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Cadastro from './cadastro';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Cadastro" element={<Cadastro />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
