import React from 'react';
import { Link } from 'react-router-dom';
import {
    AppBar,
    Box,
    IconButton,
    InputBase,
    Toolbar} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
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
          <IconButton component={Link} to="/" color= "inherit" sx={{flexGrow: 0.1}}>
            <HomeIcon />
          </IconButton>
          <SearchIcon/>
          <Box sx={{flexGrow: 1}}>
            
            <InputBase
            sx={{backgroundColor: 'primary.light', paddingLeft:'10px', borderRadius: '10px'}}
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}/>
          </Box>
          
        <Box sx={{display: 'flex', flexGrow: 0.3, justifyContent: 'space-between'}}>
          <MenuButton component={Link} to="/compra">Compra</MenuButton>
          <MenuButton component={Link} to="/venda">Venda</MenuButton>
          <MenuButton component={Link} to="/historico">Histórico</MenuButton>
          <MenuButton component={Link} to="/estoque">Estoque</MenuButton>
        </Box>        
        </Toolbar>
      </AppBar>      
    </Box>   
    </>
    );
}