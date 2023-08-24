import React, {useEffect, useState} from "react";
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import TabelaEditavel from "../componentes/Tabela";
import Headin from "../componentes/Typographies/Headin";
import AddIcon from '@mui/icons-material/Add';
import axios from'axios';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import { DataGrid, GridRowModes,
    GridToolbarContainer,
    GridActionsCellItem,
    GridRowEditStopReasons,} from '@mui/x-data-grid';
import {Container, Box, Button, Grid, TextField, Typography } from "@mui/material";

export default function CadastroC() {
    const icones =[{
                    nome: 'Adicionar',
                    icone: <AddIcon fontSize="large" onClick= {() => setAddin(!addin)}/>}
                ];
    
    const [id, setId] = useState('');
    const [cpf, setCpf] = useState('');
    const [nome, setNome] = useState('');
    const [contato, setContato] = useState('');
    const [detalhes, setDetalhes] = useState('');
    const [clientes, setClientes] = useState([]);

    const [addin, setAddin] = useState(false)
    
    //colunas das tabelas
    const columns = [
        { field: 'nome', headerName: 'Nome', width: 300, editable: true },
        { field: 'cpf', headerName: 'CPF', width: 200, editable: true} ,
        { field: 'contato', headerName: 'Contato', width: 200, editable: true},
        { field: 'detalhes', headerName: 'Detalhes', width: 200, editable: true}
        
        ];


    const getRowId = (clientes) => clientes.id;
    
    //restorna a lista de Clientes
    useEffect(() => {
        axios
            .get('http://localhost:3001/listaCliente')
            .then((response) => {
                if (response.data) {
                    const dados = response.data
                    console.log('nome:', dados)
                    console.log('teste', response.nome)
                    setClientes(dados)
                }
            })
            .catch(err => console.log(err));
    }, []);

    // cadastra um novo cliente
    const handleSubmit = async (data) => {
        const dados = {
            cpf: data.cpf,
            nome: data.nome,
            contato: data.contato,
            detalhes: data.detalhes}
        
            console.log('dados: ', dados)

        axios
            .post('http://localhost:3001/cliente', dados)
            .then((response) => {
                console.log(response.data);
            })
            .catch (err => console.log(err));
    };

    // Editar cliente
    const handleUpdate = async (data) => {
        const dados = {
            id:data.id,
            cpf: data.cpf,
            nome: data.nome,
            contato: data.contato,
            detalhes: data.detalhes
        }
        
            console.log('dados: ', dados)

        axios
            .put('http://localhost:3001/editarCliente', dados)
            .then((response) => {
                console.log(response.data);
            })
            .catch (err => console.log(err));
    };

    // Excluir cliente
    const handleDelete = async (data) => {
        const dados = {id: data}
            console.log('dados: ', dados)

        axios
            .delete('http://localhost:3001/excluirCliente', dados)
            .then((response) => {
                console.log(response.data);
            })
            .catch (err => console.log(err));
    };



    return (
        <>
            <Headin icones={icones} pagina='Clientes'/>
            {addin ? (
                <Box sx={{backgroundColor: 'primary.dark', justifyContent: 'center', alignItems:'center', padding:'10px'}}>
                    <Container sx={{justifyContent: 'center', alignItems:'center'}}>
                    <form onSubmit={handleSubmit} >
                        <Grid container spacing={2} sx={{ alignItems:'center', justifyContent: 'center'}}>
                            <Grid item xs={12} md={3}>
                                <TextField fullWidth label="Nome Completo" margin="dense" variant="filled" sx={{backgroundColor: 'secondary.light' }} value={nome} onChange={(e) => setNome(e.target.value)}/>
                            </Grid>
                            <Grid item xs={12} md={2.3}>
                                <TextField label="CPF" variant="filled" margin="dense" sx={{backgroundColor: 'secondary.light' }} value={cpf} onChange={(e) => setCpf(e.target.value)}/>
                            </Grid>
                            <Grid item xs={12} md={2}>
                                <TextField label="Contato" variant="filled" margin="dense" sx={{backgroundColor: 'secondary.light' }} value={contato} onChange={(e) => setContato(e.target.value)}/>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <TextField id="outlined-basic" fullWidth label="Detalhes" margin="dense" sx={{backgroundColor: 'secondary.light' }} variant="filled" value={detalhes} onChange={(e) => setDetalhes(e.target.value)}/>
                            </Grid>
                            <Grid item xs={12} md={2} >
                                <Button sx={{marginTop:2}} variant="contained" type="submit" >Cadastrar</Button>
                            </Grid>
                        </Grid>
                    </form>
                    </Container>
                </Box>
            ) : null}
            <Box sx={{backgroundColor: 'primary.dark', display: 'flex', justifyContent: 'center', height: '85vh'}}>
                <Container sx={{backgroundColor: 'secondary.light'}}>
                    
                    <TabelaEditavel
                        dados={clientes}
                        colunas={columns}
                        salvar={handleUpdate}
                        excluir={handleDelete}
                        getRowId={getRowId}
                    />  
                </Container>
                
            </Box>                
        </>
    );
}