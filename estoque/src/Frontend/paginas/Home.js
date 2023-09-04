import React, {useEffect, useState} from "react";
import TabelaEditavel from "../componentes/Tabela";
import axios from "axios";
import Headin from "../componentes/Typographies/Headin";
import AddIcon from '@mui/icons-material/Add';
import { Box, Container} from "@mui/material";
import { Link } from "react-router-dom";


export default function Home() {
    const icones =[{
                    nome: 'Adicionar',
                    icone: <Link to="/compra">
                            <AddIcon fontSize="large" />
                            </Link>}];

    const [pecas, setPecas] = useState([]);    

    //colunas das tabelas
    const columns = [
        { field: 'nome', headerName: 'Nome', width: 230, editable: true },
        { field: 'grupo', headerName: 'Grupo', width: 180, editable: true} ,
        {
            field: "quantidade",
            headerName: "Qtd",
            width: 120,
            editable: true,
            renderCell: (params) => {
              const quantidadeAtual = parseInt(params.row.quantidade);
              const quantidadeMinima = parseInt(params.row.qtdminima);
      
              const cellStyle = {
                color: quantidadeAtual <= quantidadeMinima ? "red" : "inherit",
              };
      
              return (
                <div style={cellStyle}>
                  {params.row.quantidade}
                </div>
              );
            },
          },
        { field: 'descricao', headerName: 'Descrição', width: 230, editable: true},
        { field: 'valorp', headerName: 'Valor Compra', width: 200, editable: false}
        ];

    

    const getRowId = (pecas) => pecas.id;

    //restorna a lista de Peças
    useEffect(() => {
        axios
            .get('http://localhost:3001/listaPeca')
            .then((response) => {
                if (response.data) {
                    const dados = response.data;
                    setPecas(dados);
                }
            })
            .catch(err => console.log(err));
    }, []);

    //forca recarregar os peças
    const carregarDados = async () => {
        try {

        axios
            .get('http://localhost:3001/listaPeca')
            .then((response) => {
                setPecas(response.data);
        })
        } catch (error) {
        console.error(error);
        }
    };

    // Editar peça
    const handleUpdate = async (data) => {
        const dados = {
            id: data.id,
            nome: data.nome,
            grupo: data.grupo,
            quantidade: data.quantidade,
            descricao: data.descricao,
            valorp: data.valorp
        }

        axios
            .put('http://localhost:3001/editarPeca', dados)
            .then((response) => {
            })
            .catch (err => console.log(err));
        
            // carregarDados();
    };

    return (
        <>
        <Headin icones={icones} pagina='Home / Estoque'/>
        <Box sx={{backgroundColor: 'primary.dark', justifyContent: 'center', height: '92vh', padding: '20px'}}>  
            <Container disableGutters={true} sx={{backgroundColor: 'secondary.light', height: '75vh', padding: '20px', borderRadius: '5px'}} >
                    <TabelaEditavel                
                        dados={pecas}
                        colunas={columns}
                        salvar={handleUpdate}
                        getRowId={getRowId}
                    /> 
            </Container>
        </Box>
        </>
    );
}






// import React from "react";
// import {Container, Box, Grid, Typography} from '@mui/material';

// export default function Home() {

    

//     return(
//         <Box sx={{flexGrow: 1}}>
//             <Grid container spacing={1}>
//                 <Grid item xs={6}>
//                     <Container sx={{backgroundColor: 'secondary.main', borderRadius: '5px'}}>
//                         <Box sx={{backgroundColor: 'primary.dark'}}>
//                             <Grid container>
//                                 <Grid item xs={1}>
//                                     <Typography>Peças </Typography>

//                                 </Grid>
//                             </Grid>
//                         </Box>
//                         <h1>Teste</h1>
//                     </Container>
//                 </Grid>
//                 <Grid item xs={6}>
//                     <Container sx={{backgroundColor: 'secondary.main', borderRadius: '5px'}}>
//                         <h1>Teste</h1>
//                     </Container>
//                 </Grid>
//             </Grid>
//         </Box>
//     )
// }
