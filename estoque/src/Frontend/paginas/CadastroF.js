import React from "react";
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Headin from "../componentes/Typographies/Headin";
import AddIcon from '@mui/icons-material/Add';
import {TextField, Grid, Container, Box} from '@mui/material/';




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
        <Box sx={{marginTop:6}}>
            <Grid container spacing={2} sx={{alignItems:"center", flexDirection:"column"}}>
                <Grid item xs={6} md={6}>
                    <TextField id="outlined-basic" label="Nome da Empresa" variant="outlined" />
                </Grid>
                <Grid item xs={6} md={6}>
                    <TextField id="outlined-basic" label="CNPJ" variant="outlined" />
                </Grid>
                <Grid item xs={6} md={6}>
                    <TextField id="outlined-basic" label="Contato" variant="outlined" />
                </Grid>
                <Grid item xs={6} md={6}>
                    <TextField id="outlined-basic" label="Complemento" variant="outlined" />
                </Grid>
            </Grid>
        </Box>
        </>
    );
}