import React, {useEffect, useState} from "react";
import TabelaEditavel from "../componentes/Tabela";
import Headin from "../componentes/Typographies/Headin";
import AddIcon from '@mui/icons-material/Add';
import axios from "axios";
import {Container, Box, Button, Grid, TextField} from "@mui/material";

export default function CadastroC() {
    const icones =[{
                    nome: 'Adicionar',
                    icone: <AddIcon fontSize="large" onClick= {() => setAddin(!addin)}/>}
                ];
    
    const [cpf, setCpf] = useState('');
    const [nome, setNome] = useState('');
    const [contato, setContato] = useState('');
    const [detalhes, setDetalhes] = useState('');
    const [clientes, setClientes] = useState([]);
    const [addin, setAddin] = useState(false)
    
    //colunas das tabelas
    const columns = [
        { field: 'nome', headerName: 'Nome', width: 300, editable: true },
        { field: 'cpf', headerName: 'CPF', width: 200, editable: true} ,
        { field: 'contato', headerName: 'Contato', width: 200, editable: true},
        { field: 'detalhes', headerName: 'Detalhes', width: 200, editable: true}
        
        ];

    const getRowId = (clientes) => clientes.id;
    
    //restorna a lista de Clientes
    useEffect(() => {
        axios
            .get('http://localhost:3001/listaCliente')
            .then((response) => {
                if (response.data) {
                    const dados = response.data
                    setClientes(dados)
                }
            })
            .catch(err => console.log(err));
    }, []);

    //forca recarregar os dados
    const carregarDados = async () => {
        try {

          axios
          .get('http://localhost:3001/listaCliente')
          .then((response) => {
            setClientes(response.data);
          })
        } catch (error) {
          console.error(error);
        }
      };

    // cadastra um novo cliente
    const handleSubmit = async () => {
        const dados = {
            cpf: cpf,
            nome: nome,
            contato: contato,
            detalhes: detalhes}

            console.log('dados:',dados)

        axios
            .post('http://localhost:3001/cliente', dados)
            .then((response) => {
                console.log(response.data);
            })
            .catch (err => console.log(err));
    };

    // Editar cliente
    const handleUpdate = async (data) => {
        const dados = {
            id: data.id,
            cpf: data.cpf,
            nome: data.nome,
            contato: data.contato,
            detalhes: data.detalhes}

        axios
            .put('http://localhost:3001/editarCliente', dados)
            .then((response) => {
                console.log(response.data);
            })
            .catch (err => console.log(err));
    };

    return (
        <>
        <Headin icones={icones} pagina='Clientes'/>

        <Box sx={{backgroundColor: 'primary.dark', justifyContent: 'center', height: '92vh', padding: '20px'}}>  
        
        {addin ? (
            <Box sx={{margin: '10px'}}>
            <Container sx={{justifyContent: 'center', borderRadius: '5px', alignItems:'center', backgroundColor: 'secondary.light'}}>
                <form onSubmit={handleSubmit} >
                    <Grid container spacing={2} sx={{ alignItems:'center', justifyContent: 'center'}}>
                        <Grid item xs={12} md={3}>
                            <TextField fullWidth label="Nome Completo" margin="dense" variant="filled" sx={{backgroundColor: 'secondary.light' }} value={nome} onChange={(e) => setNome(e.target.value)}/>
                        </Grid>
                        <Grid item xs={12} md={2.3}>
                            <TextField label="CPF" variant="filled" margin="dense" sx={{backgroundColor: 'secondary.light' }} value={cpf} onChange={(e) => setCpf(e.target.value)}/>
                        </Grid>
                        <Grid item xs={12} md={2}>
                            <TextField label="Contato" variant="filled" margin="dense" sx={{backgroundColor: 'secondary.light' }} value={contato} onChange={(e) => setContato(e.target.value)}/>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <TextField id="outlined-basic" fullWidth label="Detalhes" margin="dense" sx={{backgroundColor: 'secondary.light' }} variant="filled" value={detalhes} onChange={(e) => setDetalhes(e.target.value)}/>
                        </Grid>
                        <Grid item xs={12} md={2} >
                            <Button sx={{margin:2}} variant="contained" type="submit" >Cadastrar</Button>
                        </Grid>
                    </Grid>
                </form>
            </Container>
            </Box>
        ) : null}

            <Container sx={{backgroundColor: 'secondary.light', height: '75vh', padding: '20px', borderRadius: '5px'}}>
                <TabelaEditavel                
                    dados={clientes}
                    colunas={columns}
                    salvar={handleUpdate}
                    // excluir={handleDelete}
                    carregar={carregarDados}
                    getRowId={getRowId}
                />  
            </Container>                
        </Box>                
        </>
    );
}