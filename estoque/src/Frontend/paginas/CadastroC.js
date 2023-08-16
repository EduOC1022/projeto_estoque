import React, {useState} from "react";
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Headin from "../componentes/Typographies/Headin";
import AddIcon from '@mui/icons-material/Add';
import axios from'axios';
import {Container, Box, Button, Grid, TextField } from "@mui/material";


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

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:3001/cliente', {
                cpf: cpf,
                nome: nome,
                contato: contato,
                detalhes: detalhes
            });
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <>
            <Headin icones={icones} pagina='Cadastro Cliente'/>
            
                <Grid container spacing={2} >
                    <Grid item  xs={12} md={6}>
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
                        <Box>

                        </Box>
                    </Grid>
                </Grid>
           
            
        </>

    );
}