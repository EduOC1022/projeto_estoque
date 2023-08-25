import React, {useEffect, useState} from "react";
import TabelaEditavel from "../componentes/Tabela";
import axios from "axios";
import Headin from "../componentes/Typographies/Headin";
import AddIcon from '@mui/icons-material/Add';
import { Box, Container, TextField } from "@mui/material";


export default function Estoque() {
    const icones =[{
                    nome: 'Adicionar',
                    icone: <AddIcon fontSize="large" onClick= {() => setAddin(!addin)}/>}];

    const [peca, setPeca] = useState([]);    
    const [addin, setAddin] = useState(false);
    
    //colunas das tabelas
    const columns = [
        { field: 'nome', headerName: 'Nome', width: 300, editable: true },
        { field: 'grupo', headerName: 'Grupo', width: 200, editable: true} ,
        { field: 'quantidade', headerName: 'Qtd', width: 200, editable: false },
        { field: 'descricao', headerName: 'Descrição', width: 200, editable: true},
        { field: 'valorP', headerName: 'Valor Compra', width: 200, editable: false}
        ];

    const getRowId = (pecas) => peca.id;

    //restorna a lista de Peças
    useEffect(() => {
        axios
            .get('http://localhost:3001/listaPeca')
            .then((response) => {
                if (response.data) {
                    const dados = response.data
                    setPeca(dados)
                }
            })
            .catch(err => console.log(err));
    }, []);

    //forca recarregar os peças
    const carregarDados = async () => {
        try {
            console.log('atualizar')
        axios
        .get('http://localhost:3001/listaPeca')
        .then((response) => {
            setPeca(response.data);
        })
        } catch (error) {
        console.error(error);
        }
    };

    // cadastra um nova peça
    const handleSubmit = async (data) => {
        const dados = {
            nome: data.nome,
            grupo: data.grupo,
            quantidade: data.quantidade,
            descricao: data.descricao,
            valorP: data.valorP
        }
        
            console.log('dados: ', dados)

        axios
            .post('http://localhost:3001/peca', dados)
            .then((response) => {
                console.log(response.data);
            })
            .catch (err => console.log(err));
        carregarDados();
    };

    // Editar cliente
    const handleUpdate = async (data) => {
        const dados = {
            id:data.id,
            nome: data.nome,
            grupo: data.grupo,
            quantidade: data.quantidade,
            descricao: data.descricao,
            valorP: data.valorP
        }
        
            console.log('dados: ', dados)

        axios
            .put('http://localhost:3001/editarPeca', dados)
            .then((response) => {
                console.log(response.data);
            })
            .catch (err => console.log(err));
        
            carregarDados();
    };

    // Excluir cliente
    const handleDelete = async (data) => {
        const dados = {id: data}
            console.log('dados: ', dados)

        axios
            .delete('http://localhost:3001/excluirCliente', dados)
            .then((response) => {
                console.log(response.data);
            })
            .catch (err => console.log(err));
        carregarDados();
    };


    return (
        <>
        <Headin icones={icones} pagina='Estoque'/>
        <Box sx={{backgroundColor: 'primary.dark'}}>            
            <Container disableGutters={true} sx={{backgroundColor: 'secondary.light'}} >
                <TabelaEditavel
                            dados={peca}
                            colunas={columns}
                            
                            getRowId={getRowId}/>
            </Container>
        </Box>
        </>
    );
}