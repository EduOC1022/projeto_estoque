import React, {useEffect, useState} from "react";
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
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
                    icone: <AddIcon fontSize="large"/>},
                {
                    nome: 'Filtrar',
                    icone: <FilterAltIcon fontSize="large"/>},
                {
                    nome: 'Selecionar',
                    icone: <LibraryAddCheckIcon fontSize="large"/>
                }];
    
    const [cpf, setCpf] = useState('');
    const [nome, setNome] = useState('');
    const [contato, setContato] = useState('');
    const [detalhes, setDetalhes] = useState('');
    const [clientes, setClientes] = useState([]);

    
    const [rowModesModel, setRowModesModel] = React.useState({});
    //colunas das tabelas
    const columns = [
        { field: 'nome', headerName: 'Nome', width: 300, editable: true},
        { field: 'cpf', headerName: 'CPF', width: 200, editable: true },
        { field: 'contato', headerName: 'Contato', width: 200, editable: true },
        { field: 'detalhes', headerName: 'Detalhes', width: 200, editable: true },
        {field: 'actions', headerName: 'Ações', width: 100,
        renderCell: (params) => (
            <>
              <GridActionsCellItem
                icon={<EditIcon />}
                label="Edit"
            />
              <GridActionsCellItem
                icon={<DeleteIcon />}
                label="Delete"/>
            </>
          ),
        },
             
    ];

    const handleRowModesModelChange = (newRowModesModel) => {
        setRowModesModel(newRowModesModel);
      };

    const getRowId = (cliente) => cliente.cpf;

    const handleTeste = () => {
        console.log('deu certo')
    }
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

    //cadastra um novo cliente
    const handleSubmit = async (event) => {
        const dados = {
            cpf: cpf,
            nome: nome,
            contato: contato,
            detalhes: detalhes}
        
            console.log('dados: ', dados)

        axios
            .post('http://localhost:3001/cliente', dados)
            .then((response) => {
                console.log(response.data);
            })
            .catch (err => console.log(err));
    };

    


    return (
        <>
            <Headin icones={icones} pagina='Clientes'/>
                <Box sx={{backgroundColor: 'primary.dark', display: 'flex', justifyContent: 'center', height: '85vh'}}>
                        <Container sx={{backgroundColor: 'secondary.light'}}>
                            <DataGrid
                                columns={columns}
                                rows={clientes}
                                getRowId={getRowId}
                                editMode="row"
                                rowModesModel={rowModesModel}
                                onRowModesModelChange={handleRowModesModelChange}
                                
                            />  
                        </Container>
                </Box>
                
        </>

    );
}