import React, {useState} from "react";
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from 'react-router-dom';
import { Divider, IconButton, Menu, MenuItem} from "@mui/material";

export default function MenuBox(props) {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return(
    <>
        <IconButton onClick={handleClick} edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
        </IconButton>
        <Menu 
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}>
            {/* <MenuItem component={Link} to="/clientes">Clientes</MenuItem>
            <MenuItem component={Link} to="/fornecedores">Fornecedores</MenuItem> */}
            <MenuItem component={Link} to="/compra">Compra</MenuItem>
            <MenuItem component={Link} to="/venda">Venda</MenuItem>
            <Divider/>
            <MenuItem onClick={handleClose}>Faturamento</MenuItem>
        </Menu>
    </>
    );
}