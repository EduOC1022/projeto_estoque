import React from "react";
import Tittle from "../componentes/Typographies/Tittle";
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Headin from "../componentes/Typographies/Headin";
import AddIcon from '@mui/icons-material/Add';
import IconeButton from "../componentes/Botoes/IconButton";
import { 
    Box, 
    Tooltip} from "@mui/material";


export default function Historico() {
    const icones =[{
                    nome: 'Filtrar',
                    icone: <FilterAltIcon fontSize="large"/>}];

    return (
        <>
        <Headin icones={icones} pagina='Historico'/>
        <Container sx={{backgroundColor: 'secondary.light', height: '75vh', padding: '20px', borderRadius: '5px'}}>
            <TabelaEditavel
                dados={fornecedores}
                colunas={columns}
                salvar={handleUpdate}
                excluir={handleDelete}
                carregar={carregarDados}
                getRowId={getRowId}
            />  
        </Container>
        </>
    );
}