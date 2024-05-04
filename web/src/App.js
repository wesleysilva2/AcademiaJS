import React from 'react';

import './global.css'
import './App.css'
import './Sidebar.css'

function App() {
  return (
   <div id="App">
    <aside>
      <strong>Cadastrar</strong>
      <form>
        <div class="input-block">
          <label htmlFor="nomeUsuario">Nome do Usuario</label>
          <input name="nomeUsuario" id="nomeUsuario" required/>
        </div>
        <div class="input-block">
          <label htmlFor="emailUsuario">Email do Usuario</label>
          <input name="emailUsuario" id="emailUsuario" required/>
        </div>
        <div class="input-block">
          <label htmlFor="dataUsuario">Data de Nascimento do Usuario</label>
          <input name="dataUsuario" id="dataUsuario" required/>
        </div>
        <div class="input-block">
          <label htmlFor="avatarUsuario">Avatar URL</label>
          <input name="avatarUsuario" id="avatarUsuario" required/>
        </div>
        <div class="input-block">
          <label for="funcionario">É Funcionário?</label>
          <input type="checkbox" name="funcionario" id="funcionario" />
        </div>
        <button type="submit">Salvar</button>
      </form>
    </aside>
    <main>

    </main>
   </div>
  );
}

export default App;
