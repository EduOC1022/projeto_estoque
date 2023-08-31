import React, {useEffect, useState} from "react";
import axios from'axios';
import Headin from "../componentes/Typographies/Headin";
import { Autocomplete, Box, Container, Grid, TextField } from "@mui/material";


export default function Compra() {
    const [pecaSelecionada, setPecaSelecionada] = useState(null);
    const [fornSelecionada, setFornSelecionada] = useState(null);
    const [pecas, setPecas] = useState('');
    const [fornecedores, setFornecedores] = useState('');
    const [porcentagem, setPorcentagem] = useState('15');
    const [valorFinal, setValorFinal] = useState('0.00');
    

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
            .get('http://localhost:3001/listaFornecedor')
            .then((response) => {
                if (response.data) {
                    const dados = response.data
                    setFornecedores(dados)
                }
            })
            .catch(err => console.log(err));
    }, []);


    /* useEffect(() => {
        if (pecaSelecionada && porcentagem !== '' ) {
            console.log('porcentagemIn: ', porcentagem)
            console.log('peca: ', pecaSelecionada)
          const valorInicial = pecaSelecionada.valorp;
          console.log('valorIni: ', valorInicial)
          const porcentagemFloat = parseFloat(porcentagem);
          const valorAcrescido = (valorInicial * (porcentagemFloat / 100 + 1)).toFixed(2);
          setValorFinal(valorAcrescido);
          console.log('valorfianl: ', valorAcrescido)
        }
      }, [pecaSelecionada, porcentagem]);
    
      useEffect(() => {
        if (pecaSelecionada && valorFinal !== '' ) {
          const valorInicial = pecaSelecionada.valorp;
          const valorFinalFloat = parseFloat(valorFinal);
          const porcentagemCalculada = ((valorFinalFloat / valorInicial - 1) * 100).toFixed(2);
          setPorcentagem(porcentagemCalculada);
        }
      }, [pecaSelecionada, valorFinal]);

      const alteraValor = async (porcentagemV, pecaSelecionada) =>{
        console.log('porc',porcentagem)
        const valorInicial = pecaSelecionada.valorp;
          console.log('valorIni: ', valorInicial)
          const porcentagemFloat = parseFloat(porcentagem);
          const valorAcrescido = (valorInicial * ((porcentagem / 100) + 1)).toFixed(2);
          setValorFinal(valorAcrescido);
    }
*/

    const handleSubmit = async (data) => {
        const dados = {
            idPeca: data.idPeca,
            idCliente: data.idCliente,
            qtd: data.qtd,
            valorU: data.valorU,
            valorTotal: data.valorTotal}
        
            console.log('dados: ', dados)

        axios
            .post('http://localhost:3001/compra', dados)
            .then((response) => {
                console.log(response.data);
            })
            .catch (err => console.log(err));
    };
    useEffect(() => {
        if (pecaSelecionada && porcentagem !== '' ) {
            console.log('porcentagemIn: ', porcentagem)
            console.log('peca: ', pecaSelecionada)
          const valorInicial = pecaSelecionada.valorp;
          console.log('valorIni: ', valorInicial)
          const porcentagemFloat = parseFloat(porcentagem);
          const valorAcrescido = (valorInicial * (porcentagemFloat / 100 + 1)).toFixed(2);
          setValorFinal(valorAcrescido);
          console.log('valorfianl: ', valorAcrescido)
        }
      }, [pecaSelecionada, porcentagem]);

    
   
    return (        
        <>
        <Headin icones={[]} pagina='Compra'/>
        <Box sx={{backgroundColor: 'primary.dark', justifyContent: 'center', height: '92vh', padding: '20px'}}>  
            <Container disableGutters={true} sx={{backgroundColor: 'secondary.light', height: '75vh', padding: '20px', borderRadius: '5px'}} >
                <Autocomplete
                    options={pecas}
                    getOptionLabel={(peca) => peca.nome}
                    value={pecaSelecionada}
                    freeSolo
                    onChange={(event, newValue) => {
                        setPecaSelecionada(newValue);
                      }}
                    renderInput={(params) => (
                        <TextField {...params} label="Peça" variant="outlined" />)}
                />

                <TextField
                    label="Porcentagem"
                    variant="outlined"
                    value={porcentagem}
                    onChange={(e, value) => {setPorcentagem(e.target.value);
                   }}
                />

                <TextField
                    label="Valor Final"
                    variant="outlined"
                    value={valorFinal}
                    InputProps={{
                        readOnly: true,
                      }}
                    onChange={(e) => setValorFinal(e.target.value)}
                />
                
                <TextField
                    label="Quantidade"
                    variant="outlined"
                />
                
                <Autocomplete
                    options={fornecedores}
                    getOptionLabel={(fornecedores) => fornecedores.nome}
                    value={fornSelecionada}
                    renderInput={(params) => (
                        <TextField {...params} label="Fornecedor" variant="outlined" />)}
                    />
            </Container>
        </Box>
        </>
    );
}