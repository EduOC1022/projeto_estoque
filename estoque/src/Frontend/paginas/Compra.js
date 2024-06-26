import React, {useEffect, useState} from "react";
import axios from'axios';
import Headin from "../componentes/Typographies/Headin";
import dayjs from 'dayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Autocomplete, Box, Button, Container,  Grid,  TextField } from "@mui/material";


export default function Compra() {

    const [pecas, setPecas] = useState([]);
    const [fornecedores, setFornecedores] = useState('');
    const [pecaBD, setPecaBD] = useState({quantidade: '0'})
    const [novaPeca, setNovaPeca] = useState();

    const [pecaSelecionada, setPecaSelecionada] = useState();
    const [tipoSelecionado, setTipoSelecionado] = useState();
    const [descrSelecionado, setDescrSelecionado] = useState();
    const [fornSelecionada, setFornSelecionada] = useState();
    const [dataSelecionada, setDataSelecionada] = useState();
    const [qtdSelecionada, setQtdSelecionada] = useState(0);    
    const [valorSelecionado, setValorSelecionado] = useState('0.00');
    const [valorTSelecionado, setValorTSelecionado] = useState('0.00');
    const [qtdMin, setQtdMin] = useState('1')
    

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


    const handleSubmit = async () => {
        console.log('pecaDP: ', pecaBD)
        console.log('peca: ', pecaSelecionada)
        console.log('fornecedor: ', fornSelecionada)
        console.log('tipo: ', tipoSelecionado)
        console.log('desc: ', descrSelecionado)
        console.log('data: ', dataSelecionada)
        console.log('qtd: ', qtdSelecionada)
        console.log('valor: ', valorSelecionado)
        console.log('valorT: ', valorTSelecionado)       

        if (novaPeca) {
        const dadosP = {
            nome: pecaSelecionada,
            grupo: tipoSelecionado,
            quantidade: qtdSelecionada,
            descricao: descrSelecionado,
            valorp: valorSelecionado,
            qtdminima: qtdMin              
        }
        console.log('dados:', dadosP)
        console.log('dados:', novaPeca)

        axios
            .post('http://localhost:3001/peca', dadosP)
                .then((response) => {
                    setPecaSelecionada(response.data)
                    console.log('response',response.data);
                })
                .catch (err => console.log(err));

        } else {
        const dadosP = {
            id: pecaSelecionada.id,
            nome: pecaSelecionada.nome,
            grupo: tipoSelecionado,
            quantidade: (pecaSelecionada.quantidade + qtdSelecionada),
            descricao: descrSelecionado,
            valorp: valorSelecionado,
            qtdminima: qtdMin 
        }

        axios
            .put('http://localhost:3001/editarPeca', dadosP)
            .then((response) => {
            })
            .catch (err => console.log(err));

        }

        const dadosC = {            
        idforn: fornSelecionada.id,
        idpeca: pecaSelecionada.id,
        data: dataSelecionada,
        qtdcompra: (parseInt(qtdSelecionada)),
        valoru: (parseFloat(valorSelecionado)),
        valortotal: valorTSelecionado        }
        console.log('teste',dadosC)

        axios
            .post('http://localhost:3001/compra', dadosC)
            .then((response) => {
                console.log(response.data);
            })
            .catch (err => console.log(err));
    };
 
     const handlePeca = async (pecaselecionada) => {
            
        setPecaBD (pecaselecionada);
        setTipoSelecionado(pecaselecionada.grupo);
        setDescrSelecionado(pecaselecionada.descricao);
        setValorSelecionado(pecaselecionada.valorp);
        
        
    }

      const handleChange = (event) => {
        setValorTSelecionado((event.target.value * pecaSelecionada.valorp).toFixed(2));
      };

      const handleEdit = (event) => {
        setValorTSelecionado((event.target.value * qtdSelecionada).toFixed(2));
      };
   
    return (        
        <>
        <Headin icones={[]} pagina='Compra'/>
        <Box sx={{backgroundColor: 'primary.dark', justifyContent: 'center', height: '92vh', padding: '20px'}}>  
            <Container disableGutters={true} sx={{backgroundColor: 'secondary.light', height: '75vh', padding: '20px', borderRadius: '5px'}} >
                <form onSubmit={handleSubmit} >
                    <Grid container spacing={2} sx={{ alignItems:'center', justifyContent: 'center'}}>
                        <Grid item xs={8}>
                            <Autocomplete
                            options={fornecedores}
                            getOptionLabel={(fornecedores) => fornecedores.nome}
                            value={fornSelecionada}
                            renderInput={(params) => (
                                <TextField {...params} label="Fornecedor" variant="outlined" />)}
                            onChange={(event, value) => {
                                setFornSelecionada(value);           
                            }}
                            />
                        </Grid>
                        <Grid item xs={8}>
                            <Autocomplete
                            options={pecas}
                            getOptionLabel={(pecas) => pecas.nome}
                            value={pecaSelecionada}
                            onChange={(e, value) => {
                                setPecaSelecionada(value);
                                handlePeca(value);                     
                            }}                        
                            freeSolo
                            renderInput={(params) => (
                                <TextField {...params} label="Peça" variant="outlined" 
                                onChange={(e) => {setPecaSelecionada(e.target.value); 
                                                    setNovaPeca(true);}}/>)}
                            />
                        </Grid>
                        <Grid item xs={8}>
                            <Autocomplete
                            options={pecas}
                            getOptionLabel={(pecas) => pecas.grupo}
                            value={tipoSelecionado}
                            onChange={(e, value) => {
                                setTipoSelecionado(value.grupo);
                            }}
                            freeSolo
                            renderInput={(params) => (
                                <TextField {...params} label="Grupo" variant="outlined" 
                                onChange={(e) => setTipoSelecionado(e.target.value)}/>)}
                             />  
                        </Grid>
                        <Grid item xs={8}>
                            <Autocomplete
                            options={pecas}
                            getOptionLabel={(pecas) => pecas.descricao}
                            value={descrSelecionado}
                            onChange={(event, value) => {
                                setDescrSelecionado(value.descricao);
                            }}
                            freeSolo
                            renderInput={(params) => (
                                <TextField {...params} label="Descrição" variant="outlined" 
                                onChange={(e) => setDescrSelecionado(e.target.value)}/>)}
                            />               
                        </Grid>
                    </Grid>     
                    <Grid container spacing={2} marginTop= {1} sx={{ alignItems:'center', justifyContent: 'center'}}>
                        <Grid item xs={2}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                //defaultValue={dayjs('2022-04-17')}
                                label={"Data da Compra"}
                                value={dataSelecionada}
                                onChange={(newValue) => setDataSelecionada(newValue)}
                                />
                            </LocalizationProvider>                 

                        </Grid>
                        <Grid item xs={2}>
                            <TextField
                                    label={'Quantidade'}
                                    value={qtdSelecionada}
                                    onChange={(event) => {setQtdSelecionada(event.target.value); handleChange(event)}}
                            />                                
                        </Grid>
                        <Grid item  xs={2}>
                            <TextField
                                label={'Valor Unitário'}
                                value={valorSelecionado}
                                onChange={(event) => {handleEdit(event); setValorSelecionado(event.target.value)}}
                            />                                
                        </Grid>
                        <Grid item xs={2} >
                            <TextField
                                label={'Valor Total'}
                                value={valorTSelecionado}
                                onChange={(event) => {setValorTSelecionado(event.target.value); handleSubmit()}}                            
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} sx={{ alignItems:'center', justifyContent: 'center'}}>
                        <Grid item xs={3}>
                            <Button sx={{margin:2}}  variant="contained" type="submit">Enviar</Button>
                        </Grid>
                    </Grid>
                    
                </form>
            </Container>
        </Box>
        </>
    );
}