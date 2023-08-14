import React from "react";
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Headin from "../componentes/Typographies/Headin";
import AddIcon from '@mui/icons-material/Add';
import { Container, TextField } from "@mui/material";


export default function Estoque() {
    const icones =[{
                    nome: 'Adicionar',
                    icone: <AddIcon fontSize="large"/>,},
                {
                    nome: 'Selecionar',
                    icone: <LibraryAddCheckIcon fontSize="large"/>},
                {
                    nome: 'Filtrar',
                    icone: <FilterAltIcon fontSize="large"/>}];

    return (
        <>
        <Headin icones={icones} pagina='Estoque'/>
        <Container disableGutters={true} sx={{backgroundColor: 'primary.dark'}}>
            <TextField label="Peça"/>
        </Container>
        </>
    );
}