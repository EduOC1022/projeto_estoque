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

    const [nomeEmpresa, setNomeEmpresa] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [contato, setContato] = useState('');
    const [complemento, setComplemento] = useState('');
  

    // eslint-disable-next-line no-unused-vars
    const handleSubmit = () => {
      const dados = {nomeEmpresa, cnpj, contato, complemento}

      axios
        .post(`http://localhost:3001/cadastro-fornecedor`, {dados})
        .then((response) =>{    
          if(response) {
            console.log('entrou ') 
          }
               
        })
        .catch(err => console.log(err));}
      
  
      /* try {
        const response = await fetch('/cadastro-fornecedor', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
  
        if (response.ok) {
          console.log('Dados do fornecedor inseridos com sucesso.');
          // Faça algo após o sucesso, como redirecionar ou exibir uma mensagem
        } else {
          console.error('Erro ao inserir os dados do fornecedor.');
        }
      } catch (error) {
        console.error(error);
      }
    }; */
  
    return (
    <>
    <Headin icones={icones} pagina='Cadastro Fornecedor'/>
        <form sx={{marginTop:6}} onSubmit={handleSubmit} >
            <Grid container spacing={2} sx={{alignItems:"center", flexDirection:"column"}}>
                <Grid item xs={6} md={6}>
                    <TextField id="outlined-basic" label="Nome da Empresa" variant="outlined" value={nomeEmpresa} onChange={(e) => setNomeEmpresa(e.target.value)}/>
                </Grid>
                <Grid item xs={6} md={6}>
                    <TextField id="outlined-basic" label="CNPJ" variant="outlined" value={cnpj} onChange={(e) => setCnpj(e.target.value)}/>
                </Grid>
                <Grid item xs={6} md={6}>
                    <TextField id="outlined-basic" label="Contato" variant="outlined" value={contato} onChange={(e) => setContato(e.target.value)}/>
                </Grid>
                <Grid item xs={6} md={6}>
                    <TextField id="outlined-basic" label="Complemento" variant="outlined" value={complemento} onChange={(e) => setComplemento(e.target.value)}/>
                </Grid>
             <Button sx={{marginTop:2}} variant="contained" type="submit">Cadastrar</Button>
             </Grid>
        </form>
    </>
    );
  }
  
  export default CadastroFornecedor;