import React from 'react';
import { TextField, Button, Box, Typography, Grid } from '@mui/material';
import '../App.css';

const ContactForm = () => {
    return (
        <Box component="form" noValidate autoComplete="off" className="contact-form-container">
            <Typography variant="h3" fontFamily="Segoe UI, Tahoma, Geneva, Verdana, sans-serif" fontWeight="bold" component="h2" gutterBottom marginTop='10px'>
                Contact Us
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField label="Name" variant="outlined" fullWidth margin="normal" sx={{ width: '80%', mx: 'auto',ml:15 }} />
                </Grid>
                <Grid item xs={12}>
                    <TextField label="Email" variant="outlined" fullWidth margin="normal" sx={{ width: '80%', mx: 'auto' ,ml:15}} />
                </Grid>
                <Grid item xs={12}>
                    <TextField label="Message" variant="outlined" fullWidth margin="normal" multiline rows={4} sx={{ width: '80%', mx: 'auto',ml:15 }} />
                </Grid>
                <Grid item xs={12}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', mb:3 }}>
                        <Button variant="contained" color="primary">
                            Send Message
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ContactForm;
