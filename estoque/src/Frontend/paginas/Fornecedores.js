import React, {useState, useEffect} from "react";
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Headin from "../componentes/Typographies/Headin";
import AddIcon from '@mui/icons-material/Add';
import axios from'axios';
import TabelaEditavel from "../componentes/Tabela";
import {Box, Container, TextField, Grid, Button} from '@mui/material/';

function CadastroFornecedor() {

    const icones =[{
        nome: 'Adicionar',
        icone: <AddIcon fontSize="large" onClick= {() => setAddin(!addin)}/>}];

    
    const [cnpj, setCnpj] = useState('');
    const [nome, setNome] = useState('');
    const [tipo, setTipo] = useState('');
    const [contato, setContato] = useState('');
    const [fornecedores, setFornecedores] = useState('');
    const [addin, setAddin] = useState(false)

    const columns = [
        { field: 'nome', headerName: 'Nome', width: 300, editable: true },
        { field: 'cnpj', headerName: 'CNPJ', width: 200, editable: true} ,
        { field: 'contato', headerName: 'Contato', width: 200, editable: true},
        { field: 'tipo', headerName: 'Tipo', width: 200, editable: true}
    ];

    const getRowId = (fornecedores) => fornecedores.id;

    useEffect(() => {

        axios
            .get('http://localhost:3001/listaFornecedor')
            .then((response) => {
                if (response.data) {
                    const dados = response.data
                    setFornecedores(dados)
                }
            })
            .catch(err => console.log(err));
    }, []);
    
    //forca recarregar os dados
    const carregarDados = async () => {
        try {
            console.log('atualizar')
          axios
          .get('http://localhost:3001/listaFornecedor')
          .then((response) => {
            setFornecedores(response.data);
          })
        } catch (error) {
          console.error(error);
        }
      };

    //envio para cadastro
    const handleSubmit = async () => {

        setAddin(false);

        const dados = {
            cnpj: cnpj,
            nome: nome,
            tipo: tipo,
            contato: contato}
        
            console.log('dados: ', dados)

        axios
            .post('http://localhost:3001/fornecedor', dados)
            .then((response) => {
                console.log(response.data);
            })
            .catch (err => console.log(err));
        carregarDados();
    };
        
    // Editar fornecedor
    const handleUpdate = async (data) => {
        const dados = {
            id:data.id,
            cnpj: data.cnpj,
            nome: data.nome,
            tipo: data.tipo,
            contato: data.contato}
        
            console.log('dados: ', dados)

        axios
            .put('http://localhost:3001/editarFornecedor', dados)
            .then((response) => {
                console.log(response.data);
            })
            .catch (err => console.log(err));
    };

    // Excluir fornecedor
    const handleDelete = async (data) => {
        const dados = {
            id:data}
        
            console.log('dados: ', dados)

        axios
            .delete('http://localhost:3001/excluirFornecedor', {data: dados})
            .then((response) => {
                console.log(response.data);
            })
            .catch (err => console.log(err));
        carregarDados();
    };

    return (
    <>
    <Headin icones={icones} pagina='Fornecedores'/>
    <Box sx={{backgroundColor: 'primary.dark', justifyContent: 'center', height: '92vh', padding: '20px'}}>  
        {addin ? (
            <Box sx={{margin: '10px'}}>
                <Container sx={{justifyContent: 'center', borderRadius: '5px', alignItems:'center', backgroundColor: 'secondary.light'}}>
                    <form onSubmit={handleSubmit} >
                        <Grid container spacing={2} sx={{ alignItems:'center', justifyContent: 'center'}}>
                            <Grid item xs={12} md={3}>
                                <TextField fullWidth label="Nome da Empresa" margin="dense" variant="filled" sx={{backgroundColor: 'secondary.light' }} value={nome} onChange={(e) => setNome(e.target.value)}/>
                            </Grid>
                            <Grid item xs={12} md={2.3}>
                                <TextField label="CNPJ" variant="filled" margin="dense" sx={{backgroundColor: 'secondary.light' }} value={cnpj} onChange={(e) => setCnpj(e.target.value)}/>
                            </Grid>
                            <Grid item xs={12} md={2}>
                                <TextField label="Contato" variant="filled" margin="dense" sx={{backgroundColor: 'secondary.light' }} value={contato} onChange={(e) => setContato(e.target.value)}/>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <TextField id="outlined-basic" fullWidth label="Complemento" margin="dense" sx={{backgroundColor: 'secondary.light' }} variant="filled" value={tipo} onChange={(e) => setTipo(e.target.value)}/>
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
                dados={fornecedores}
                colunas={columns}
                salvar={handleUpdate}
                excluir={handleDelete}
                carregar={carregarDados}
                getRowId={getRowId}
            />  
        </Container>
    </Box>              
    </>
    );
  }
  
  export default CadastroFornecedor