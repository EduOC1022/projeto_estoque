import React, {useState} from "react";
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Headin from "../componentes/Typographies/Headin";
import AddIcon from '@mui/icons-material/Add';
import axios from'axios';
import TabelaEditavel from "../componentes/Tabela";
import {Box, Container, TextField, Grid, Button} from '@mui/material/';

function CadastroFornecedor() {

    const icones =[{
        nome: 'Adicionar',
        icone: <AddIcon fontSize="large"/>}];

    const [id, setId] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [nome, setNome] = useState('');
    const [tipo, setTipo] = useState('');
    const [contato, setContato] = useState('');

    const teste = [
        {nome: "Ana", cnpj: "123", contato: "123", tipo: 'ok', id: 1},
        {nome: "Ana", cnpj: "222", contato: "123", tipo: 'ok',id: 2},
        {nome: "Ana", cnpj: "333", contato: "123", tipo: 'ok',id: 3}
    ]

    const columns = [
        { field: 'nome', headerName: 'Nome', width: 300, editable: true },
        { field: 'cnpj', headerName: 'CNPJ', width: 200, editable: true} ,
        { field: 'contato', headerName: 'Contato', width: 200, editable: true},
        { field: 'tipo', headerName: 'Tipo', width: 200, editable: true}
    ];

    //envio para cadastro
    const handleSubmit = async (event) => {
        const dados = {
            cnpj: cnpj,
            nome: nome,
            tipo: tipo,
            contato: contato}
        
            console.log('dados: ', dados)

        axios
            .post('http://localhost:3001/fornecedor', dados)
            .then((response) => {
                console.log(response.data);
            })
            .catch (err => console.log(err));
    };
        
    // Editar fornecedor
    const handleUpdate = async (event) => {
        const dados = {
            id:id}
        
            console.log('dados: ', dados)

        axios
            .put('http://localhost:3001/editarFornecedor', dados)
            .then((response) => {
                console.log(response.data);
            })
            .catch (err => console.log(err));
    };

    // Excluir fornecedor
    const handleDelete = async (event) => {
        const dados = {
            id:id}
        
            console.log('dados: ', dados)

        axios
            .delete('http://localhost:3001/excluirFornecedor', dados)
            .then((response) => {
                console.log(response.data);
            })
            .catch (err => console.log(err));
    };

    return (
    <>
    <Headin icones={icones} pagina='Cadastro Fornecedor'/>
        <Box sx={{backgroundColor: 'primary.dark', display: 'flex', justifyContent: 'center', height: '85vh'}}>
                <Container sx={{backgroundColor: 'secondary.light'}}>
                    <TabelaEditavel
                        dados={teste}
                        colunas={columns}
                        
                        
                    />  
                </Container>
        </Box>
        <form onSubmit={handleSubmit} >
        <Grid container spacing={2} sx={{flexDirection: 'column', alignItems:'center'}}>
            <Grid item xs={6} md={6}>
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
            <Grid item xs={6} md={6}>
                <Button sx={{marginTop:2}} variant="contained" type="submit">Cadastrar</Button>
            </Grid>
        </Grid>
        </form>
        
    </>
    );
  }
  
  export default CadastroFornecedor