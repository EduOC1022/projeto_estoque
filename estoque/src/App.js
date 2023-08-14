import React from "react";
import Menu from "./Frontend/componentes/Menu";
import Home from "./Frontend/paginas/Home";
import Estoque from "./Frontend/paginas/Estoque";
import axios from 'axios';
import Cadastro from "./Frontend/paginas/Cadastro";
import './App.css'


axios.get('http://localhost:3000/db')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Erro na requisição:', error);
  });

function App() {
  return (
    <>
    <Menu/>
    <Cadastro/>
    </>
  );
}

export default App;
