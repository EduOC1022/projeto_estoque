import React from "react";
import Headin from "../componentes/Typographies/Headin";
import AddIcon from '@mui/icons-material/Add';
import axios from "axios";


export default function Venda() {
    const icones =[{
                    nome: 'Adicionar',
                    icone: <AddIcon fontSize="large"/>}];

    const handleSubmit = async (data) => {
        const dados = {
            idpeca: data.idPeca,
            idcliente: data.idCliente,
            qtd: data.qtd,
            valoru: data.valorU,
            valortotal: data.valorTotal}
            console.log('dados: ', dados)

        axios
            .post('http://localhost:3001/venda', dados)
            .then((response) => {
                console.log(response.data);
            })
            .catch (err => console.log(err));
    };
    return (
        <Headin icones={icones} pagina='Venda'/>
    );
}