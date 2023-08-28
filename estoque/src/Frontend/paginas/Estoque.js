import React, {useEffect, useState} from "react";
import TabelaEditavel from "../componentes/Tabela";
import axios from "axios";
import Headin from "../componentes/Typographies/Headin";
import AddIcon from '@mui/icons-material/Add';
import { Box, Button, Container, Grid, TextField} from "@mui/material";


export default function Estoque() {
    const icones =[{
                    nome: 'Adicionar',
                    icone: <AddIcon fontSize="large" onClick= {() => setAddin(!addin)}/>}];

    const [pecas, setPecas] = useState([]);    
    const [nome, setNome] = useState('');
    const [grupo, setGrupo] = useState('');
    const [quantidade, setQuantidade] = useState('');
    const [descricao, setDescricao] = useState('');
    const [valorP, setValorP] = useState('');
    const [valorT, setValorT] = useState('');
    const [addin, setAddin] = useState(false);
    
    //colunas das tabelas
    const columns = [
        { field: 'nome', headerName: 'Nome', width: 200, editable: true },
        { field: 'grupo', headerName: 'Grupo', width: 150, editable: true} ,
        { field: 'quantidade', headerName: 'Qtd', width: 100, editable: false },
        { field: 'descricao', headerName: 'Descrição', width: 200, editable: true},
        { field: 'valorP', headerName: 'Valor Compra', width: 200, editable: false},
        { field: 'valorV', headerName: 'Valor Venda', width: 200, editable: false}
        ];

    const getRowId = (pecas) => pecas.id;

    //restorna a lista de Peças
    useEffect(() => {
        axios
            .get('http://localhost:3001/listaPeca')
            .then((response) => {
                if (response.data) {
                    const dados = response.data.map((peca) => ({
                        ...peca,
                        valorV: (peca.valorP * 1.15)
                    }))
                    /* dados.forEach((peca) => {
                        peca.valorP 
                    }) */
                    setPecas(dados)
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
            setPecas(response.data);
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

    // Editar peça
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

    return (
        <>
        <Headin icones={icones} pagina='Estoque'/>
        <Box sx={{backgroundColor: 'primary.dark', justifyContent: 'center', height: '92vh', padding: '20px'}}>  
            {addin ? (
                <Box sx={{margin: '10px'}}>
               <Container sx={{justifyContent: 'center', borderRadius: '5px', alignItems:'center', backgroundColor: 'secondary.light'}}>
                    <form onSubmit={handleSubmit} >
                        <Grid container spacing={2} sx={{ alignItems:'center', justifyContent: 'center'}}>
                            <Grid item xs={12} md={3}>
                                <TextField fullWidth label="Peça" margin="dense" variant="filled" sx={{backgroundColor: 'secondary.light' }} value={nome} onChange={(e) => setNome(e.target.value)}/>
                            </Grid>
                            <Grid item xs={12} md={2.3}>
                                <TextField label="CPF" variant="filled" margin="dense" sx={{backgroundColor: 'secondary.light' }} /* value={cpf} onChange={} *//>
                            </Grid>
                            <Grid item xs={12} md={2}>
                                <TextField label="Contato" variant="filled" margin="dense" sx={{backgroundColor: 'secondary.light' }} /* value={contato} onChange={} *//>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <TextField id="outlined-basic" fullWidth label="Detalhes" margin="dense" sx={{backgroundColor: 'secondary.light' }} variant="filled" /* value={detalhes} onChange={(e) => setDetalhes(e.target.value)} *//>
                            </Grid>
                            <Grid item xs={12} md={2} >
                                <Button sx={{margin:2}} variant="contained" type="submit" >Cadastrar</Button>
                            </Grid>
                        </Grid>
                    </form>
                </Container>
                </Box>
            ) : null}
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