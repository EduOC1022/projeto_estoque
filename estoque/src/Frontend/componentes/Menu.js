import React from 'react';
import {
    AppBar,
    Box,
    Button,
    IconButton,
    InputAdornment,
    InputBase,
    TextField,
    Toolbar,
    Tooltip,
    Typography} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MenuButton from './Botoes/MenuButton';


export default function Menu() {
    return (

    <Box sx={{ flexGrow: 1, display: 'flex'}}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <SearchIcon/>
          <Box sx={{flexGrow: 1}}>
            
            <InputBase
            sx={{backgroundColor: 'primary.light', paddingLeft:'10px', borderRadius: '10px'}}
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}/>
          </Box>
          
        <Box sx={{display: 'flex', flexGrow: 0.3, justifyContent: 'space-between'}}>
          <MenuButton>Compra</MenuButton>
          <MenuButton>Venda</MenuButton>
          <MenuButton>Histórico</MenuButton>
          <MenuButton>Estoque</MenuButton>
        </Box>
        
        </Toolbar>
      </AppBar>
      
    </Box>

    

    );
}