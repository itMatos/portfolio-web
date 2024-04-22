'use client';

import React from 'react';
import { Grid, Divider, Typography, Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Main() {
    return (
        <Grid
            container
            spacing={4}
            style={{alignText: "center", backgroundColor: "white", color: "black", marginTop: "1px", height: "95vh"}}
        >
            <Grid item xs={12}
                sx={{ display: 'flex', justifyContent: "center" }}
            >
            <div>
                <Typography variant="h3" fontFamily={"SF-PRo-Display-Regular"} style={{textAlign: "center"}}>
                    Olá, eu sou<br />Ítalo Matos
                </Typography>
                
                <Grid item xs={12}>
                    <Divider
                        sx={{
                            display: "flex",
                            width: "60%",
                            height:"8px",
                            borderRadius: "10px",
                        }}
                        style={{margin: "auto"}}
                        color="#FF9E00"
                        variant='middle'
                    />
                </Grid> 
                </div>
            </Grid>

            <Grid
                item
                sx={{
                    flexGrow: 1,
                    display: { sm: 'flex' },
                    mx: 4,
                    justifyContent: "center" }
                }
                xs={12}
            >
                    <Typography
                        variant="h4"
                        fontFamily={"SF-Pro-Display-Regular"}
                        textAlign="center">
                        Sou um Desenvolvedor Full Stack apaixonado <br /> por construir soluções web robustas
                    </Typography>
            </Grid>

            <Grid
                item
                sx={{
                    flexGrow: 1,
                    display: { sm: 'flex' },
                    mx: 4,
                    justifyContent: "center"
                }}
                style={{ textAlign: "center" }}
                xs={12}
            >
                <Link href="https://github.com/itMatos">
                    <GitHubIcon sx={{width: "40px", height: "40px"}} style={{ color: 'black' }}/>
                </Link>

                <Link href="https://www.linkedin.com/in/italo-de-matos/">
                    <LinkedInIcon sx={{width: "40px", height: "40px"}} style={{ color: 'black' }}/>
                </Link>
            </Grid>

            
        </Grid>
    )
}