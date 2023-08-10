import React from "react";
import {Button, Box} from '@mui/material';

export default function MenuButton(props) {
    return(
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Button tittle='compra' sx={{ color: '#fff' }} {...props}></Button>
        </Box>
    );
}