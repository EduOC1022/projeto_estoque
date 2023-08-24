// import React, {useEffect, useState} from "react";
// import TabelaEditavel from "../componentes/Tabela";
// import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
// import FilterAltIcon from '@mui/icons-material/FilterAlt';
// import Headin from "../componentes/Typographies/Headin";
// import AddIcon from '@mui/icons-material/Add';
// import { Container, TextField } from "@mui/material";


// export default function Estoque() {
//     const icones =[{
//                     nome: 'Adicionar',
//                     icone: <AddIcon fontSize="large"/>,},
//                 {
//                     nome: 'Selecionar',
//                     icone: <LibraryAddCheckIcon fontSize="large"/>},
//                 {
//                     nome: 'Filtrar',
//                     icone: <FilterAltIcon fontSize="large"/>}];

//     const [peca, setPeca] = useState([]);    
    
//     //colunas das tabelas
//     const columns = [
//         { field: 'nome', headerName: 'Nome', width: 300, editable: true },
//         { field: 'grupo', headerName: 'Grupo', width: 200, editable: true} ,
//         { field: 'quantidade', headerName: 'Qtd', width: 200, editable: false },
//         { field: 'descricao', headerName: 'Descrição', width: 200, editable: true},
//         { field: 'valorP', headerName: 'Valor Compra', width: 200, editable: false}
//         ];

//     const getRowId = (clientes) => clientes.id;

//     return (
//         <>
//         <Headin icones={icones} pagina='Estoque'/>
//         <Container disableGutters={true} sx={{backgroundColor: 'primary.dark'}}>
//             <TextField label="Peça"/>
//             <TabelaEditavel
//                         dados={peca}
//                         colunas={columns}
//                         salvar={handleUpdate}
//                         excluir={handleDelete}
//                         getRowId={getRowId}/>
//         </Container>
//         </>
//     );
// }