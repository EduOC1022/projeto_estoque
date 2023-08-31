import React, {useEffect, useState} from "react";
import TabelaEditavel from "../componentes/Tabela";
import axios from "axios";
import Headin from "../componentes/Typographies/Headin";
import AddIcon from '@mui/icons-material/Add';
import { Box, Container} from "@mui/material";
import { Link } from "react-router-dom";


export default function Estoque() {
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
        { field: 'quantidade', headerName: 'Qtd', width: 120, editable: false },
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
                    const dados = response.data
                    setPecas(dados)
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
        <Headin icones={icones} pagina='Estoque'/>
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