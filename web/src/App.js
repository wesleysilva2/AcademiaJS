import React, { useEffect, useState } from 'react';
import api from './services/api'

import './global.css'
import './App.css'
import './Main.css'


function App() {

  const [academias, setAcademias] = useState([]);

  useEffect(() => {
    async function loadAcademias() {
      const response = await api.get('/academias');

      setAcademias(response.data); // Tudo que vem de academias la da api 
    }

    loadAcademias();
  }, []);
  
  return (
   <div id="App">
    <main>
    <button
        className="irParaCadastro"
        onClick={() => window.location.href = "/Cadastro"}
      >
        Cadastrar-se
    </button>
    <button
        className="irParalogin"
        onClick={() => window.location.href = "/Cadastro"}
      >
        Logar-se
    </button>
      <ul>
        {academias.map(academia => (
        <li key={academia._id}className='academy-item'>
          <header>
            <img src={academia.img_academy_url} alt={academia.name} />
            <div className='academy-info'>
              <strong>{academia.name}</strong>
            </div>
          </header>
          <p>{academia.endereco}</p>
          <p>{academia.cidade}</p>
        </li>
        ))}
      </ul>
    </main>
   </div>
  );
}

export default App;
