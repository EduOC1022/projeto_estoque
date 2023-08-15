import React from "react";
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Headin from "../componentes/Typographies/Headin";
import AddIcon from '@mui/icons-material/Add';
import {Container,Button, Grid, TextField } from "@mui/material";


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
    
     const handleSubmit = () => { 

     }


    return (
        <>
            <Headin icones={icones} pagina='Cadastro Cliente'/>
            <Container sx={{padding: 8, backgroundColor: 'primary.dark'}}>
                <Grid container spacing={2}>
                    <Grid item  md={2}>
                        <TextField sx={{flexGrow: 1}} label= 'Nome'/>
                    </Grid>
                    <Grid item md={4}>
                        <TextField sx={{flexGrow: 1}} label= 'Sobrenome'/>
                    </Grid>
                    <Grid item  md={3}>
                        <TextField label= 'CPF'/>
                    </Grid>
                    <Grid item md={3}>
                        <TextField label= 'Telefone'/>
                    </Grid>
                </Grid>
                <Button/>
            </Container>
        </>

    );
}