import React, { useState } from 'react';
import api from './services/api'

import './global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'

// esses sets abaixo é agente armazenando todas as informações do formulario dentro dessas variaveis
function Cadastro() {
    
    const[nomeUsuario, setnomeUsuario] = useState('');
    const[emailUsuario, setemailUsuario] = useState('');
    const[dataNascimento, setdataNascimento] = useState(''); // UseState é uma função dentro do React utilizada para criar um estado
    const[avatarUsuario, setavatarUsuario] = useState(''); // Eu nunca pego um Estado e o altero diretamente, eu uso o seu SET pra isso
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
      <div>
        <aside>
        <strong>Cadastrar</strong>
        <form onSubmit={handleAddUser}>
            <div className="input-block">
            <label htmlFor="nomeUsuario">Nome</label>
            <input 
                name="nomeUsuario" 
                id="nomeUsuario" 
                required
                value={nomeUsuario}
                onChange={e => setnomeUsuario(e.target.value)}
            />
            </div>
            <div className="input-block">
            <label htmlFor="emailUsuario">Email</label>
            <input 
                name="emailUsuario" 
                id="emailUsuario" 
                required
                value={emailUsuario}
                onChange={e => setemailUsuario(e.target.value)}
            />
            </div>
            <div className="input-block">
            <label htmlFor="dataNascimento">Data de Nascimento</label>
            <input 
                name="dataNascimento" 
                id="dataNascimento" 
                required
                value={dataNascimento}
                onChange={e => setdataNascimento(e.target.value)}
            />
            </div>
            <div className="input-block">
            <label htmlFor="avatarUsuario">Avatar URL</label>
            <input 
                name="avatarUsuario" 
                id="avatarUsuario" 
                required
                value={avatarUsuario}
                onChange={e => setavatarUsuario(e.target.value)}
            />
            </div>
            <div className="input-block">
            <label htmlFor="funcionario">É Funcionário?</label>
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
      </div>
    );
  }
  
  export default Cadastro;