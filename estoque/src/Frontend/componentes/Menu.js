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


export default function Menu() {
    return (

    <Box sx={{ flexGrow: 1, display: 'flex'}}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Box sx={{flexGrow: 1}}>
          <SearchIcon/>
            <InputBase
            sx={{backgroundColor: 'primary.light', paddingLeft:'10px', borderRadius: '10px'}}
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}/>
          </Box>
          
        <Box sx={{display: 'flex', flexGrow: 0.3, justifyContent: 'space-between'}}>
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Button sx={{ color: '#fff' }}>Compra</Button>
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Button sx={{ color: '#fff' }}>Venda</Button>
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Button sx={{ color: '#fff' }}>Histórico</Button>
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
            <Button sx={{ color: '#fff' }}>Estoque</Button>
          </Box>     

        </Box>
        
        </Toolbar>
      </AppBar>
    </Box>

    );
}