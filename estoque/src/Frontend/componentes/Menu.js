import React from 'react';
import { Link } from 'react-router-dom';
import {
    AppBar,
    Box,
    IconButton,
    Toolbar} from '@mui/material';
import MenuButton from './Botoes/MenuButton';
import HomeIcon from '@mui/icons-material/Home';
import MenuBox from './MenuBox';


export default function Menu() {
    return (
    <>
    <Box sx={{ flexGrow: 1, display: 'flex'}}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <MenuBox/>
          <IconButton component={Link} to="/" color= "inherit" sx={{flexGrow: 1, justifyContent: 'left'}}>
            <HomeIcon />
          </IconButton>
          
        <Box sx={{display: 'flex', flexGrow: 0.2, justifyContent: 'space-between'}}>
          <MenuButton component={Link} to="/fornecedores">Fornecedores</MenuButton>
          <MenuButton component={Link} to="/clientes">Clientes</MenuButton>
          <MenuButton component={Link} to="/historico">Histórico</MenuButton>
          {/* <MenuButton component={Link} to="/estoque">Estoque</MenuButton> */}
        </Box>        
        </Toolbar>
      </AppBar>      
    </Box>   
    </>
    );
}