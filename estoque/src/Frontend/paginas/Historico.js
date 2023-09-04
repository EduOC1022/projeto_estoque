import React, {useState, useEffect} from "react";
import axios from "axios";
import Tittle from "../componentes/Typographies/Tittle"; 
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
import FilterAltIcon from '@mui/icons-material/FilterAlt'
import Headin from "../componentes/Typographies/Headin";
import TabelaEditavel from "../componentes/Tabela";
import AddIcon from '@mui/icons-material/Add';
import IconeButton from "../componentes/Botoes/IconButton";
import { 
    Box, 
    Tooltip,
    Container} from "@mui/material";


export default function Historico() {
    const icones =[{}];

    const [compras, setCompras] = useState('');
    const [vendas, setVendas] = useState('');

    const columnsCompra = [
        { field: 'nomepeca', headerName: 'Peça', width: 180, editable: true },
        { field: 'qtdcompra', headerName: 'Qtd', width: 50, editable: true} ,
        { field: 'data_formatada', headerName: 'Data', width: 100, editable: true},
        { field: 'nomefornecedor', headerName: 'Fornecedor', width: 180, editable: true},
        { field: 'valoru', headerName: 'Unidade', width: 125, editable: true},
        { field: 'valortotal', headerName: 'Total', width: 125, editable: true}
    ];
                                                                                       
    const columnsVenda = [
        { field: 'nomepeca', headerName: 'Peça', width: 180, editable: true },
        { field: 'qtdvenda', headerName: 'Qtd', width: 50, editable: true} ,
        { field: 'data_formatada', headerName: 'Data', width: 100, editable: true},
        { field: 'nomecliente', headerName: 'Cliente', width: 180, editable: true},
        { field: 'valoru', headerName: 'Unidade', width: 125, editable: true},
        { field: 'valortotal', headerName: 'Total', width: 125, editable: true}
    ];

    const getRowIdCompra = (compras) => compras.id;
    const getRowIdVenda = (vendas) => vendas.id;

    // Recuperar elementos de compra
    useEffect(() => {

        axios
            .get('http://localhost:3001/listaCompra')
            .then((response) => {
                if (response.data) {
                    const dados = response.data
                    setCompras(dados)
                    console.log("dados",dados)
                }
            })
            .catch(err => console.log(err));
    }, []);

    // Recuperar elementos de venda
    useEffect(() => {

        axios
            .get('http://localhost:3001/listaVenda')
            .then((response) => {
                if (response.data) {
                    const dados = response.data
                    setVendas(dados)
                    console.log("dados",dados)
                }
            })
            .catch(err => console.log(err));
    }, []);
    
    // //forca recarregar os dados
    // const carregarDados = async () => {
    //     try {
    //         console.log('atualizar')
    //         axios
    //         .get('http://localhost:3001/listaCompra')
    //         .then((response) => {
    //         setCompras(response.data);
    //         })
    //     } catch (error) {
    //         console.error(error);
    //     }
    //     };

    // Editar compra
    const handleUpdateCompra = async (data) => {
        const dados = {
            id: data.id,
            nomePeca: data.nomePeca,
            qtdCompra: data.qtdCompra,
            data_formatada: data.data,
            nomeFornecedor: data.nomeFornecedor,
            valorU: data.valorU,
            valorTotal: data.valorTotal
            }
        
            console.log('dados: ', dados)

        axios
            .put('http://localhost:3001/editarCompra', dados)
            .then((response) => {
                console.log(response.data);
            })
            .catch (err => console.log(err));
    };

    // Editar venda
    const handleUpdateVenda = async (data) => {
        const dados = {
            id: data.id,
            nomePeca: data.nomePeca,
            qtdVenda: data.qtdVenda,
            data_formatada: data.data_formatada,
            nomeCliente: data.nomeCliente,
            valorU: data.valorU,
            valorTotal: data.valorTotal
            }
        
            console.log('dados: ', dados)

        axios
            .put('http://localhost:3001/editarVenda', dados)
            .then((response) => {
                console.log(response.data);
            })
            .catch (err => console.log(err));
    };

    return (
        <>
        <Headin icones={icones} pagina='Historico'/>
        <Box sx={{backgroundColor: 'primary.dark', display:'flex', flexWrap:'wrap', justifyContent: 'center', padding: '20px', rowGap:'2vh'}}> 
        <Container md={6} sx={{backgroundColor: 'secondary.light', height: '75vh', width:'95vh', padding: '20px', borderRadius: '5px'}}>
        <Tittle sx={{marginBottom:"10px"}}><h6>Compras</h6></Tittle>
            <TabelaEditavel
                dados={compras}
                colunas={columnsCompra}
                salvar={handleUpdateCompra}
                // carregar={carregarDados}
                getRowId={getRowIdCompra}
            />  
            
        </Container>
        <Container sx={{backgroundColor: 'secondary.light', height: '75vh', width:'95vh', padding: '20px', borderRadius: '5px'}}>
        <Tittle sx={{marginBottom:"10px"}}><h6>Vendas</h6></Tittle>
            <TabelaEditavel
                dados={vendas}
                colunas={columnsVenda}
                salvar={handleUpdateVenda}
                // carregar={carregarDados}
                getRowId={getRowIdVenda}
            />  
        </Container>
        </Box>

        </>
    );
}