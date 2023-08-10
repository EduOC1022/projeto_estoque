import React from "react";
import {Container, Box, Grid, Typography} from '@mui/material';

export default function Home() {

    return(
        <Box sx={{flexGrow: 1}}>
            <Grid container spacing={1}>
                <Grid item xs={6}>
                    <Container sx={{backgroundColor: 'secondary.main', borderRadius: '5px'}}>
                        <Box sx={{backgroundColor: 'primary.dark'}}>
                            <Grid container>
                                <Grid item xs={1}>
                                    <Typography>Produto</Typography>

                                </Grid>
                            </Grid>
                        </Box>
                        <h1>Teste</h1>
                    </Container>
                </Grid>
                <Grid item xs={6}>
                    <Container sx={{backgroundColor: 'secondary.main', borderRadius: '5px'}}>
                        <h1>Teste</h1>
                    </Container>
                </Grid>
            </Grid>
        </Box>
    )
}
