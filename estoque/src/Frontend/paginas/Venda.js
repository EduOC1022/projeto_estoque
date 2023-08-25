import React from "react";
import axios from "axios";
import Tittle from "../componentes/Typographies/Tittle";
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Headin from "../componentes/Typographies/Headin";
import AddIcon from '@mui/icons-material/Add';


export default function Venda() {
    const icones =[{
                    nome: 'Adicionar',
                    icone: <AddIcon fontSize="large"/>},
                {
                    nome: 'Filtrar',
                    icone: <FilterAltIcon fontSize="large"/>}
                ]
    const handleSubmit = async (data) => {
        const dados = {
            idPeca: data.idPeca,
            idCliente: data.idCliente,
            qtd: data.qtd,
            valorU: data.valorU,
            valorTotal: data.valorTotal}
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