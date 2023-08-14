import React, {useEffect} from "react";
import Menu from "./Frontend/componentes/Menu";
import Home from "./Frontend/paginas/Home";
import Estoque from "./Frontend/paginas/Estoque";
import axios from 'axios';
import Cadastro from "./Frontend/paginas/CadastroF";
import './App.css'




function App() {

  return (
    <>
    <Menu/>
    <Cadastro/>
    </>
  );
}

export default App;
