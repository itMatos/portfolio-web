'use client';
import React from 'react';
import { Container, Grid, Typography, Paper, List, ListItem, ListItemText, Chip, Divider } from '@mui/material';
import './Resume.css';

function Resume() {
    const expOLX = [
        "React", "Javascript", "Typescript", "NodeJS", "AWS", "Kubernetes", "Testes", "Material UI"
    ]
    const expDeliveryDireto = [
        "Javascript", "Typescript", "SASS", "Testes", "MySQL", "PHP"
    ]

    return (
        <Grid
            container
            id="Experiência"
            style={{alignText: "center", backgroundColor: "white", color: "black", marginTop: "-1px"}}
        >
            <Grid
                item
                xs={12}
                sx={{ display: 'flex', justifyContent: "center" }}
            >
                <Grid item xs={12}> 
                <Typography variant="h3" fontFamily={"SF-PRo-Display-Regular"} style={{textAlign: "center"}}>
                    Experiência
                </Typography>

                <Grid item xs={12}>
                    <Divider
                        sx={{
                            display: "flex",
                            width: "10%",
                            height:"8px",
                            borderRadius: "10px",
                        }}
                        style={{margin: "auto", marginBottom: "20px"}}
                        color="#FF9E00"
                        variant='middle'
                    />
                </Grid>
                </Grid>
            </Grid>

            <Grid item xs={12}>

            <section id="resume" className="resume">
                <Container>
                <Grid container spacing={3}>

                    <Grid item xs={12} lg={6}>
                        <Typography variant="h3" className="resume-title" >Experiência Profissional</Typography>
                        <Paper elevation={3} className="resume-item" sx={{ pt: 3, mt: 2, boxShadow: "none"}}>
                        
                            <Typography variant="h4" style={{ marginTop: '2px' }}>
                                Estagiário de Engenharia de Software
                            </Typography>
                            
                            <Chip label="abr 2023 - presente" />
                            <Typography variant="body1">OLX Brasil</Typography>
                            <List>
                                <ListItem>
                                    <ListItemText primary="Implementação de features de front-end e back-end para o PaaS interno da OLX." />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Resolução de bugs e suporte aos usuários do PaaS." />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Planejamento de melhorias e escalabilidade do Paas." />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Testes automatizados de back-end." />
                                </ListItem>
                            </List>
                            {expOLX.map((item) => {
                                return <Chip key={item} label={item} sx= {{ my:'1px', mx: '1px' }}/>
                            })}
                        </Paper>

                        <Paper elevation={3} className="resume-item" sx={{ py: 3, my: 2, boxShadow: "none", px: 1, my: 1}}>
                            <Typography variant="h4">Estagiário de Desenvolvimento Web</Typography>
                            <Chip label="mar 2022 - mar 2023"/>
                            <Typography variant="body1">Locaweb</Typography>
                            <List>
                                <ListItem>
                                    <ListItemText primary="Implementação de features e correção de bugs de front-end e back-end." />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Testes automatizados em front-end e back-end." />
                                </ListItem>
                                <ListItem>
                                <   ListItemText primary="Manutenção de pipelines." />
                                </ListItem>
                            </List>
                            {expDeliveryDireto.map((item) => {
                                return <Chip key={`DD-${item}`} label={item} sx= {{ my:'1px', mx: '1px' }}/>
                            })
                            
                            }
                        </Paper>
                    </Grid>

                    <Grid item xs={12} lg={6}>
                    <Typography variant="h3" className="resume-title">Formação Acadêmica</Typography>

                    <Paper elevation={3} className="resume-item" sx={{ py: 3, my: 4, boxShadow: "none"}}>
                        <Typography variant="h4">Bacharelado em Sistemas de Informação</Typography>
                        <Chip label="2022 - presente" />
                        <Typography variant="body1">Universidade de São Paulo, São Carlos, SP</Typography>
                        <Typography variant="body1">
                        Curso na área de computação, voltado para o desenvolvimento, implantação e gerenciamento de sistemas de informação (SI). O curso fornece sólida formação em matemática e em computação, principalmente de técnicas de programação e metodologias para o desenvolvimento de sistemas de informação.
                        </Typography>
                    </Paper>
                    </Grid>
                    
                </Grid>
                </Container>
            </section>
        </Grid>
        </Grid>
        );
}

export default Resume;