import React from "react";
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Headin from "../componentes/Typographies/Headin";
import AddIcon from '@mui/icons-material/Add';
//import Input from "../componentes/Input/Input";
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
    
     const handleSubmit = () => { 

     }


    return (
        <>
            <Headin icones={icones} pagina='Cadastro Cliente'/>
            
                <Grid container spacing={2} >
                    <Grid item  xs={12} md={6}>
                    <Box sx={{backgroundColor: 'primary.dark', display: 'flex', justifyContent: 'center'}}>
                        <Container sx={{padding: 8, backgroundColor: 'secondary.light', margin: 8}}>
                            <Grid container spacing={2} justifyContent='center' alignItems='center'>
                                <Grid item  md={12}>
                                    <TextField  fullWidth label= 'Nome Completo'/>
                                </Grid>
                                <Grid item  md={6}>
                                     <TextField pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"  inputProps={{
                                            inputMode: 'numeric',
                                        }}fullWidth label= 'CPF'/> 
                                </Grid>
                                <Grid item md={6}>
                                    <TextField maxlength="12" OnKeyPress="formatar('##-#####-#####',this)" fullWidth label= 'Contato'/>
                                </Grid>
                                <Grid item md={12}>
                                    <TextField  multiline rows={2} fullWidth label= 'Detalhes'/>
                                </Grid>
                            </Grid>
                            <Button/>
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