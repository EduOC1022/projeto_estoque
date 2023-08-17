import React, {useEffect, useState} from "react";
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Headin from "../componentes/Typographies/Headin";
import AddIcon from '@mui/icons-material/Add';
import axios from'axios';
import {Container, Box, Button, Grid, TextField, Typography } from "@mui/material";

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
    }

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    ];

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
            <Headin icones={icones} pagina='Cadastro Cliente'/>
                <Grid container spacing={2} >
                    <Grid item  xs={12} md={4}>
                    <Box sx={{backgroundColor: 'primary.dark', display: 'flex', justifyContent: 'center'}}>
                        <Container sx={{padding: 8, backgroundColor: 'secondary.light', margin: 8}}>
                            <form onSubmit={handleSubmit}>
                            <Grid container spacing={2} justifyContent='center' alignItems='center'>
                                <Grid item  md={12}>
                                    <TextField  fullWidth label= 'Nome Completo' value={nome} onChange={(e) => setNome(e.target.value)}/>
                                </Grid>
                                <Grid item  md={6}>
                                     <TextField fullWidth label= 'CPF' value={cpf} onChange={(e) => setCpf(e.target.value)}/> 
                                </Grid>
                                <Grid item md={6}>
                                    <TextField fullWidth label= 'Contato' value={contato} onChange={(e) => setContato(e.target.value)}/>
                                </Grid>
                                <Grid item md={12}>
                                    <TextField fullWidth label= 'Detalhes' value={detalhes} onChange={(e) => setDetalhes(e.target.value)}/>
                                </Grid>
                            <Button variant="contained" sx={{marginTop:2}} type="submit">Cadastrar</Button>
                            </Grid>
                            </form>
                        </Container>
                        </Box>
                    </Grid>
                    <Grid item  xs={12} md={6}>
                        <Box>{
                            clientes.map((cliente, index) => (
                                <Typography>{cliente.nome}</Typography>
                            ))
                            }
                            
                        </Box>
                    </Grid>
                </Grid>
                
        </>

    );
}