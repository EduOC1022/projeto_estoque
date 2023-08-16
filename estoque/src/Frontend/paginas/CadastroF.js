import React, {useState} from "react";
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Headin from "../componentes/Typographies/Headin";
import AddIcon from '@mui/icons-material/Add';
import axios from'axios';
import {TextField, Grid, Button} from '@mui/material/';

function CadastroFornecedor() {

    const icones =[{
        nome: 'Adicionar',
        icone: <AddIcon fontSize="large"/>},
    {
        nome: 'Filtrar',
        icone: <FilterAltIcon fontSize="large"/>},
    {
        nome: 'Selecionar',
        icone: <LibraryAddCheckIcon fontSize="large"/>
    }
    ]

    const [cnpj, setCnpj] = useState('');
    const [nome, setNome] = useState('');
    const [tipo, setTipo] = useState('');
    const [contato, setContato] = useState('');
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      try {
        const response = await axios.post('http://localhost:3001/fornecedor', { 
          cnpj: cnpj, 
          nome: nome, 
          tipo: tipo, 
          contato: contato 
        });
        console.log(response.data); // Recurso criado com sucesso
      } catch (error) {
        console.error(error);
      }
    };

    return (
    <>
    <Headin icones={icones} pagina='Cadastro Fornecedor'/>
      {/* <div id="formulario"> */}
        <form onSubmit={handleSubmit} >
        <Grid container spacing={2} sx={{alignItems: 'center', flexDirection: 'column'}}>
                <Grid item sx={{}} xs={6} md={6}>
                    <TextField id="outlined-basic" label="Nome da Empresa" variant="outlined" value={nome} onChange={(e) => setNome(e.target.value)}/>
                </Grid>
                <Grid item xs={6} md={6}>
                    <TextField id="outlined-basic" label="CNPJ" variant="outlined" value={cnpj} onChange={(e) => setCnpj(e.target.value)}/>
                </Grid>
                <Grid item xs={6} md={6}>
                    <TextField id="outlined-basic" label="Contato" variant="outlined" value={contato} onChange={(e) => setContato(e.target.value)}/>
                </Grid>
                <Grid item xs={6} md={6}>
                    <TextField id="outlined-basic" label="Complemento" variant="outlined" value={tipo} onChange={(e) => setTipo(e.target.value)}/>
                </Grid>
             <Button sx={{marginTop:2}} variant="contained" type="submit">Cadastrar</Button>
             </Grid>
        </form>
      {/* </div> */}
    </>
    );
  }
  
  export default CadastroFornecedor;