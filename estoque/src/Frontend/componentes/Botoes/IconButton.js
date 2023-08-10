import React from "react";
import { IconButton, Tooltip } from "@mui/material";

export default function IconeButton(props) {
    const {titulo, icone} = props
    return (
        <Tooltip title={titulo}>
            <IconButton  sx={{color: 'primary.dark', margin: 1}}>
                {icone}
            </IconButton>    
        </Tooltip>
    );
}