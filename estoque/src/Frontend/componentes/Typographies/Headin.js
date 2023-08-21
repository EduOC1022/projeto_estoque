import React from "react";
import Tittle from "./Tittle";
import IconeButton from "../Botoes/IconButton";
import { Box}  from "@mui/material";

export default function Headin(props) {
    const {pagina, icones} = props

    return (
        <Box sx={{backgroundColor: 'secondary.main', padding: 2, display: 'flex', alignItems: 'center'}}>
            <Tittle sx={{marginLeft: 30, flexGrow: 1}} >{pagina}</Tittle>
            {
                icones.map(icon => (
                    <IconeButton titulo={icon.nome} icone={icon.icone}/>
                ))
            }
            
        </Box>
    );
}