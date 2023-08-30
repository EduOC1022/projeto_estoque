import React, {useEffect, useState} from "react";
import axios from'axios';
import Headin from "../componentes/Typographies/Headin";
import { Autocomplete, Box, Container, Grid, TextField } from "@mui/material";


export default function Compra() {

    const [pecas, setPecas] = useState('');
    const [fornecedores, setFornecedores] = useState('');
    

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

    return (        
        <>
        <Headin icones={[]} pagina='Compra'/>
        <Box sx={{backgroundColor: 'primary.dark', justifyContent: 'center', height: '92vh', padding: '20px'}}>  
            <Container disableGutters={true} sx={{backgroundColor: 'secondary.light', height: '75vh', padding: '20px', borderRadius: '5px'}} >
                <Autocomplete
                    options={pecas}
                    getOptionLabel={(peca) => peca.nome}
                    renderInput={(params) => (
                        <TextField {...params} label="Peça" variant="outlined" />)}
                    />
            </Container>
        </Box>
        </>
    );
}