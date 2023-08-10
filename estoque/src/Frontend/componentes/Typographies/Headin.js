import React from "react";
import Tittle from "./Tittle";
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import AddIcon from '@mui/icons-material/Add';
import IconeButton from "../Botoes/IconButton";
import { Box, IconButton, Tooltip } from "@mui/material";

/*
<Tooltip title='Adicionar'>
                <AddIcon tittle="Adicionar" fontSize="large" sx={{color: 'primary.dark', margin: 1}}/> 
            </Tooltip>
            <Tooltip title='Selecionar'>
                <LibraryAddCheckIcon fontSize="large" sx={{color: 'primary.dark', margin: 1}}/>
            </Tooltip>
            <Tooltip title='Filtrar'>
                <FilterAltIcon fontSize="large" sx={{color: 'primary.dark', margin: 1}}/>
            </Tooltip>
*/

export default function Headin(props) {
    const {pagina, icones} = props

    return (
        <Box sx={{backgroundColor: 'secondary.main', padding: 2, display: 'flex', alignItems: 'center'}}>
            <Tittle sx={{marginLeft: 10, flexGrow: 1}} >{pagina}</Tittle>
            {
                icones.map(icon => (
                    <IconeButton titulo={icon.nome} icone={icon.icone}/>
                ))
            }
            
        </Box>
    );
}