import React, { useState } from 'react';
import api from './services/api'

import './global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'

// esses sets abaixo é agente armazenando todas as informações do formulario dentro dessas variaveis
function App() {
  const[nomeUsuario, setnomeUsuario] = useState('');
  const[emailUsuario, setemailUsuario] = useState('');
  const[dataNascimento, setdataNascimento] = useState('');
  const[avatarUsuario, setavatarUsuario] = useState('');
  const[funcionario, setfuncionario] = useState('');

  async function handleAddUser(e){
    e.preventDefault();

    const response = await api.post('/users', {
      nomeUsuario,
      emailUsuario,
      dataNascimento,
      funcionario,
      avatarUsuario,
    })
    
    console.log(response.data)
  };

  const handleChange = (e) => {
    setfuncionario(e.target.checked); // Define o estado como o valor de verificação do checkbox
  };
  
  
  return (
   <div id="App">
    <aside>
      <strong>Cadastrar</strong>
      <form onSubmit={handleAddUser}>
        <div class="input-block">
          <label htmlFor="nomeUsuario">Nome do Usuario</label>
          <input 
            name="nomeUsuario" 
            id="nomeUsuario" 
            required
            value={nomeUsuario}
            onChange={e => setnomeUsuario(e.target.value)}
          />
        </div>
        <div class="input-block">
          <label htmlFor="emailUsuario">Email do Usuario</label>
          <input 
            name="emailUsuario" 
            id="emailUsuario" 
            required
            value={emailUsuario}
            onChange={e => setemailUsuario(e.target.value)}
          />
        </div>
        <div class="input-block">
          <label htmlFor="dataNascimento">Data de Nascimento do Usuario</label>
          <input 
            name="dataNascimento" 
            id="dataNascimento" 
            required
            value={dataNascimento}
            onChange={e => setdataNascimento(e.target.value)}
          />
        </div>
        <div class="input-block">
          <label htmlFor="avatarUsuario">Avatar URL</label>
          <input 
            name="avatarUsuario" 
            id="avatarUsuario" 
            required
            value={avatarUsuario}
            onChange={e => setavatarUsuario(e.target.value)}
          />
        </div>
        <div class="input-block">
          <label for="funcionario">É Funcionário?</label>
          <input 
            type="checkbox" 
            name="funcionario" 
            id="funcionario"
            value={funcionario}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Salvar</button>
      </form>
    </aside>

    <main>
      <ul>
        <li className='academy-item'>
          <header>
            <img src="https://www.26fit.com.br/fotos/produtos/gd_05d362.jpg" alt="Academia De Castelo" />
            <div className='academy-info'>
              <strong>Academia De Castelo</strong>
            </div>
          </header>
          <p>Ruas Augusta 13, Castelo Branco</p>
          <p>Salvador</p>
        </li>
        <li className='academy-item'>
          <header>
            <img src="https://www.26fit.com.br/fotos/produtos/gd_05d362.jpg" alt="Academia De Castelo" />
            <div className='academy-info'>
              <strong>Academia De Castelo</strong>
            </div>
          </header>
          <p>Ruas Augusta 13, Castelo Branco</p>
          <p>Salvador</p>
        </li>
        <li className='academy-item'>
          <header>
            <img src="https://www.26fit.com.br/fotos/produtos/gd_05d362.jpg" alt="Academia De Castelo" />
            <div className='academy-info'>
              <strong>Academia De Castelo</strong>
            </div>
          </header>
          <p>Ruas Augusta 13, Castelo Branco</p>
          <p>Salvador</p>
        </li>
        <li className='academy-item'>
          <header>
            <img src="https://www.26fit.com.br/fotos/produtos/gd_05d362.jpg" alt="Academia De Castelo" />
            <div className='academy-info'>
              <strong>Academia De Castelo</strong>
            </div>
          </header>
          <p>Ruas Augusta 13, Castelo Branco</p>
          <p>Salvador</p>
        </li>
      </ul>
    </main>
   </div>
  );
}

export default App;
