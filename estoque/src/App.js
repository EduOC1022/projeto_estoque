import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Menu from "./Frontend/componentes/Menu";
import Home from "./Frontend/paginas/Home";
import Estoque from "./Frontend/paginas/Estoque";
import Historico from "./Frontend/paginas/Historico";
import Venda from "./Frontend/paginas/Venda";
import Compra from "./Frontend/paginas/Compra";
import './App.css'
import CadastroFornecedor from "./Frontend/paginas/CadastroF";
import CadastroCliente from "./Frontend/paginas/CadastroC";




function App() {

  return (
    <BrowserRouter>  
      <Menu/>  
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/estoque" element={<Estoque/>}/>
        <Route path="/cadastro-fornecedor" element={<CadastroFornecedor/>}/>
        <Route path="/cadastro-cliente" element={<CadastroCliente/>}/>
        <Route path="/historico" element={<Historico/>}/>
        <Route path="/venda" element={<Venda/>}/>
        <Route path="/compra" element={<Compra/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
