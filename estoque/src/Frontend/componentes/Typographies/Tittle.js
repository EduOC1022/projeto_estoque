import React from "react";
import { Typography } from "@mui/material";
import '@fontsource/roboto/400.css';

export default function Tittle(props) {
    return(
        <Typography fontFamily='Roboto' fontWeight= 'bold' color='primary.dark' variant="h3" {...props}/>
    );
}