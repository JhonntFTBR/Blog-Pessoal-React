import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';
import './App.css';
import ListaTema from './components/temas/listatema/ListaTema';
import ListaPostagem from './components/postagens/listapostagem/ListaPostagem';
import CadastroPost from './components/postagens/cadastroPost/CadastroPost';
import CadastroTema from './components/temas/cadastroTema/CadastroTema';
import DeletarPostagem from './components/postagens/deletarPostagem/DeletarPostagem';
import DeletarTema from './components/temas/deletarTema/DeletarTema';


function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ minHeight: '100vh' }}>
        <Routes> // Antigo Switch
          <Route path="/" element={<Login />} />

          <Route path="/home" element={<Home />} />

          <Route path="/login" element={<Login />} />

          <Route path="/cadastrousuario" element={<CadastroUsuario />} />

          <Route path="/temas" element={<ListaTema />} />

          <Route path="/posts" element={<ListaPostagem />} />
        </Routes>

        <Route path='/formularioPostagem'>
          <CadastroPost />
        </Route>
        <Route path='/formularioPostagem/:id'>
          <CadastroPost />
        </Route>
        <Route path='/formularioTema'>
          <CadastroTema />
        </Route>
        <Route path='/formularioTema/:id'>
          <CadastroTema />
        </Route>
        <Route path='/deletarPostagem/:id'>
          <DeletarPostagem />
        </Route>
        <Route path='/deletarTema/:id'>
          <DeletarTema />
        </Route>
      </div>
      <Footer />
    </Router>
  )
}

export default App;
