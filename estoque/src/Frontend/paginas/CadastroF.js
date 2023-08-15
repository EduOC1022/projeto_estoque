import React from "react";
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Headin from "../componentes/Typographies/Headin";
import AddIcon from '@mui/icons-material/Add';
import {TextField, Grid, Container} from '@mui/material/';




export default function CadastroF() {
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

    return (
        <>
        <Headin icones={icones} pagina='Cadastro Fornecedor'/>
            <Grid container sx={{justifyContent:"center"}}>
                <Grid item md={2}>
                    <TextField></TextField>
                </Grid>
                <Grid item md={2}>
                    <TextField></TextField>
                </Grid>
                <Grid item md={2}>
                    <TextField></TextField>
                </Grid>
                <Grid item md={2}>
                    <TextField></TextField>
                </Grid>
            </Grid>
        </>
    );
}