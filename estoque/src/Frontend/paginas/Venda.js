import React, {useState, useEffect} from "react";
import axios from "axios";
import Headin from "../componentes/Typographies/Headin";
import { Autocomplete, Box, Button, Container,  Grid,  TextField } from "@mui/material";

export default function Venda() {
    const icones =[{}];

    const [pecas, setPecas] = useState([]);
    const [pecaSelecionada, setPecaSelecionada] = useState();
    const [porcentagem, setPorcentagem] = useState('15');
    const [quantidade, setQuantidade] = useState('0')
    const [valorU, setValorU] = useState('0.00');
    const [valorFinal, setValorFinal] = useState('0.00');    
    const [clientes, setClientes] = useState([]);
    const [clienteSelecionado, setClienteSelecionado] = useState([]);


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

    const handleSubmit = async () => {
        const dados = {
            idpeca: pecaSelecionada.id,
            idcliente: clienteSelecionado.id,
            qtd: quantidade,
            valoru: valorU,
            valortotal: valorFinal}
            console.log('dados: ', dados)

        axios
            .post('http://localhost:3001/venda', dados)
            .then((response) => {
                console.log(response.data);
            })
            .catch (err => console.log(err));
    };

    useEffect(() => {
        if (pecaSelecionada) {
            console.log('porcentagemIn: ', porcentagem)
            console.log('peca: ', pecaSelecionada)
          const valorInicial = pecaSelecionada.valorp;
          console.log('valorIni: ', valorInicial)
          const valorAcrescido = (valorInicial * (porcentagem / 100 + 1)).toFixed(2);
          setValorU(valorAcrescido);
          console.log('valorfianl: ', valorAcrescido)
        }
      }, [pecaSelecionada, porcentagem]);

      useEffect(() => {
        if (quantidade !== '0.00' ) {
            console.log(valorU)
            setValorFinal((quantidade*valorU).toFixed(2))
        }
      }, [quantidade,valorU]);

    return (
        <>
        <Headin icones={icones} pagina='Venda'/>
        <Box sx={{backgroundColor: 'primary.dark', justifyContent: 'center', height: '92vh', padding: '20px'}}>  
        <Container disableGutters={true} sx={{backgroundColor: 'secondary.light', height: '75vh', padding: '20px', borderRadius: '5px'}} >
            <Grid container spacing={2} sx={{ alignItems:'center', justifyContent: 'center'}}>
                <Grid item xs={8}>
                    <Autocomplete
                        options={clientes}
                        getOptionLabel={(clientes) => clientes.nome}
                        value={clienteSelecionado}
                        onChange={(event, newValue) => {
                            setClienteSelecionado(newValue);
                        }}
                        renderInput={(params) => (
                            <TextField {...params} label="Cliente" variant="outlined" />)}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Autocomplete
                        options={pecas}
                        getOptionLabel={(peca) => peca.nome}
                        value={pecaSelecionada}
                        onChange={(event, newValue) => {
                            setPecaSelecionada(newValue);
                        }}
                        renderInput={(params) => (
                            <TextField {...params} label="Peça" variant="outlined" />)}
                    />
                </Grid>
                <Grid item xs={2}>
                    <TextField
                        label="Porcentagem"
                        variant="outlined"
                        value={porcentagem}
                        onChange={(e, value) => {setPorcentagem(e.target.value);
                    }}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={2} sx={{ alignItems:'center', justifyContent: 'center'}}>
                <Grid item xs={3}>
                    <TextField
                        label="Valor Peça"
                        variant="outlined"
                        value={valorU}
                        InputProps={{
                            readOnly: true,
                        }}
                        onChange={(e) => setValorU(e.target.value)}
                    />
                </Grid>
                <Grid item xs={2}>
                    <TextField
                        label="Quantidade"
                        variant="outlined"
                        onChange={(e) => {setQuantidade(e.target.value); }}
                    />
                </Grid>
                <Grid item xs={3}>
                    <TextField
                        label="Valor Peça"
                        variant="outlined"
                        value={valorFinal}
                        onChange={(e) => {setValorFinal(e.target.value); handleSubmit()}}
                    />
                </Grid>
            </Grid>
        

            

           

            
            
           

            
            <Button variant="contained" onClick={() =>handleSubmit()}>Enviar</Button>
            
        </Container>
    </Box>
        </>
        
    );
}
