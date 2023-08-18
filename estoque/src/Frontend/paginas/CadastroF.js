import React, {useState} from "react";
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Headin from "../componentes/Typographies/Headin";
import AddIcon from '@mui/icons-material/Add';
import axios from'axios';
import {TextField, Grid, Button, Table, TableBody, TableCell, TableContainer,   
  TableHead, TableRow, Paper, Box} from '@mui/material/';

function CadastroFornecedor() {

    const icones =[{
        nome: 'Adicionar',
        icone: <AddIcon fontSize="large"/>},
    {
        nome: 'Filtrar',
        icone: <FilterAltIcon fontSize="large"/>},
    {
        nome: 'Selecionar',
        icone: <LibraryAddCheckIcon fontSize="large"/>
    }
    ]

    const [cnpj, setCnpj] = useState('');
    const [nome, setNome] = useState('');
    const [tipo, setTipo] = useState('');
    const [contato, setContato] = useState('');
  
    function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
    }
    
    const rows = [
      createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
      createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
      createData('Eclair', 262, 16.0, 24, 6.0),
      createData('Cupcake', 305, 3.7, 67, 4.3),
      createData('Gingerbread', 356, 16.0, 49, 3.9),
      ];

    const handleSubmit = async (event) => {
      axios
        .post('http://localhost:3001/fornecedor', { 
          cnpj: cnpj, 
          nome: nome, 
          tipo: tipo, 
          contato: contato 
        })
        .then((response) =>{    
          if(response) {
            console.log('entrou ') 
          }
               
        })
        .catch(err => console.log(err));}
        

    return (
    <>
    <Headin icones={icones} pagina='Cadastro Fornecedor'/>
        
        <Grid container spacing={2} sx={{flexDirection: 'column', alignItems:'space-between'}}>
          <form onSubmit={handleSubmit} >
            <Grid item xs={6} md={6}>
                <TextField id="outlined-basic" label="Nome da Empresa" variant="outlined" value={nome} onChange={(e) => setNome(e.target.value)}/>
            </Grid>
            <Grid item xs={6} md={6}>
                <TextField id="outlined-basic" label="CNPJ" variant="outlined" value={cnpj} onChange={(e) => setCnpj(e.target.value)}/>
            </Grid>
            <Grid item xs={6} md={6}>
                <TextField id="outlined-basic" label="Contato" variant="outlined" value={contato} onChange={(e) => setContato(e.target.value)}/>
            </Grid>
            <Grid item xs={6} md={6}>
                <TextField id="outlined-basic" label="Complemento" variant="outlined" value={tipo} onChange={(e) => setTipo(e.target.value)}/>
            </Grid>
            <Grid item xs={6} md={6}>
                <Button sx={{marginTop:2}} variant="contained" type="submit">Cadastrar</Button>
            </Grid>
          </form>
            <Grid item  xs={12} md={6}>
                        <Box>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                <TableRow>
                                    <TableCell>Dessert (100g serving)</TableCell>
                                    <TableCell align="right">Calories</TableCell>
                                    <TableCell align="right">Fat&nbsp;(g)</TableCell>
                                    <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                                    <TableCell align="right">Protein&nbsp;(g)</TableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                {rows.map((row) => (
                                    <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.calories}</TableCell>
                                    <TableCell align="right">{row.fat}</TableCell>
                                    <TableCell align="right">{row.carbs}</TableCell>
                                    <TableCell align="right">{row.protein}</TableCell>
                                    </TableRow>
                                ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        </Box>
                    </Grid>
                </Grid>
        
        
    </>
    );
  }
  
  export default CadastroFornecedor