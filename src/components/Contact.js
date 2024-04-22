'use client';
import React from 'react';
import { Grid, Divider, Typography, Link } from '@mui/material';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function Contact() {
    return (
        <Grid
            container
            spacing={4}
            fontFamily={"SF-Pro-Display-Regular"}
            style={{alignText: "center", backgroundColor: "black", color: "white", height: "40px", marginTop: "15px", marginBottom: "15px"}}
            id="Contato"
        >
            <Grid item xs={12}
                sx={{ display: 'flex', justifyContent: "center" }}
            >
                <div>
                    <Typography variant="h3" fontFamily={"SF-PRo-Display-Regular"} style={{textAlign: "center"}}>
                        Contato
                    </Typography>

                    <Grid item xs={12}>
                        <Divider
                            sx={{
                                display: "flex",
                                width: "40%",
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
                    mb: 4,
                    justifyContent: "center"
                }}
                style={{ textAlign: "center" }}
                xs={12}
            >
                <Grid item xs={12}>
                        <ContactMailIcon sx={{width: "40px", height: "40px"}} style={{ color: 'white', paddingRight: "5px" }}/>
                        italomatos@usp.br
                </Grid>
                <Grid item xs={12}>
                    <Link href="https://wa.me/559298813812?text=Ol%C3%A1%21+Vim+por+meio+do+seu+portfolio.+Podemos+trocar+uma+ideia%3F">
                        <WhatsAppIcon sx={{width: "40px", height: "40px"}} style={{ color: 'white' }}/>
                         +55 92 98812-8182
                    </Link>
                </Grid>

                <Grid item xs={12}>
                    <Link href="https://github.com/itMatos">
                        <GitHubIcon sx={{width: "40px", height: "40px"}} style={{ color: 'white' }}/>
                    </Link>
                </Grid>

                <Grid item xs={12}>
                    <Link href="https://www.linkedin.com/in/italo-de-matos/">
                        <LinkedInIcon sx={{width: "40px", height: "40px"}} style={{ color: 'white' }}/>
                    </Link>
                </Grid>

            </Grid>
        </Grid>
    )
}