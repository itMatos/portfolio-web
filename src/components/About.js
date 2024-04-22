'use client';

import React, { useState } from 'react';
import {
    Chip,
    Grid,
    Stack,
    Typography,
    Paper,
    Divider,
} from '@mui/material';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "unset",
    boxShadow: "none",
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    flexGrow: 1,
  }));

export default function About() {
    const habilidades = [
        "HTML",
        "CSS",
        "Javascript",
        "Typescript",
        "React",
        "Redux",
        "NextJS",
        "NodeJS",
        "Python",
        "SQL",
        "MySQL",
        "PostgreSQL",
        "AWS",
        "Cloud",
        "Docker",
        "Kubernetes",
        "Git",
        "Github",
        "Material UI",
        "Metodologias ágeis",
        "S.O.L.I.D",
    ];

    return (
        <Grid
            container
            spacing={4}
            fontFamily={"SF-Pro-Display-Regular"}
            style={{alignText: "center", backgroundColor: "#F9F9F9", color: "black", height: "100vh"}}
            id="Sobre"
        >
            <Grid item xs={12}
                sx={{ display: 'flex', justifyContent: "center" }}
            >
                <div>
                <Typography variant="h3" fontFamily={"SF-PRo-Display-Regular"} style={{textAlign: "center"}}>
                    Sobre mim
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

            <Grid item xs={12}>

            <Grid
                item
                xs={12}
                sx={{
                    flexGrow: 1,
                    display: { sm: 'flex' },
                    px: 2,
                    justifyContent: "center" 
                    }
                }
                px={4}
            >
                <Typography
                    variant="h5"
                    fontFamily={"SF-Pro-Display-Regular"}
                    textAlign="justify"
                >
                    Sou um desenvolvedor com experiência em front-end, back-end e infraestrutura. <br />
                    Atualmente trabalho na OLX Brasil, no time de PaaS (Platform as a Service). <br />
                    Sou de Manaus - AM e moro em São Carlos - SP, onde estou cursando Sistemas de Informação na Universidade de São Paulo (USP). <br />
                </Typography>
            </Grid>

            <Grid item xs={12}>
                <Grid item xs={12} textAlign="center" sx={{mt: 2, mx: 6}}>
                    <h2>Habilidades</h2>
                </Grid>

                <Stack 
                    direction={{ xs: 'column', sm: 'column' }}
                    spacing={{ sm: 1, md: 2 }}
                    sx={{ px: 6 }}
                >
                    <Item sx={{ mx: 1 }}>
                    {habilidades.map((habilidade) => {
                            return <Chip key={habilidade} label={habilidade} color="warning" sx={{ mx: 1, my:'2px' }}/>
                        })}
                    </Item>
                </Stack>
            </Grid>
            </Grid>
        </Grid>
    );
}