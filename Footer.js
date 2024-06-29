import React from 'react';
import { Box, Container, Typography, Link, Grid, TextField, Button } from '@mui/material';

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                py: 6,
                px: 2,
                mt: 'auto',
                backgroundColor: '#0D47A1',
                borderTop: '1px solid #bdbdbd',
                color: 'white',
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={4} justifyContent="space-between">
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" fontFamily="Segoe UI, Tahoma, Geneva, Verdana, sans-serif" fontWeight="bold" gutterBottom>
                            Contact Us
                        </Typography>
                        <TextField
                            label="Email"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            sx={{
                                backgroundColor: 'white',
                                borderRadius: 1,
                                '& .MuiInputBase-input': {
                                    color: '#0D47A1',
                                },
                                '& .MuiInputLabel-root': {
                                    color: '#0D47A1',
                                },
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: '#0D47A1',
                                    },
                                    '&:hover fieldset': {
                                        borderColor: '#0D47A1',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#0D47A1',
                                    },
                                },
                            }}
                        />
                        <TextField
                            label="Message"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            multiline
                            rows={1}
                            sx={{
                                backgroundColor: 'white',
                                borderRadius: 1,
                                '& .MuiInputBase-input': {
                                    color: '#0D47A1',
                                },
                                '& .MuiInputLabel-root': {
                                    color: '#0D47A1',
                                },
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: '#0D47A1',
                                    },
                                    '&:hover fieldset': {
                                        borderColor: '#0D47A1',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#0D47A1',
                                    },
                                },
                            }}
                        />
                        <Button variant="contained" color="secondary" sx={{ mt: 2 }}>
                            Subscribe
                        </Button>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center' }}>
                            Quick Links
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Link href="/" color="inherit" variant="body2" sx={{ display: 'block', mb: 2 }}>
                                Home
                            </Link>
                            <Link href="/view-program" color="inherit" variant="body2" sx={{ display: 'block', mb: 2 }}>
                                View Programs
                            </Link>
                            <Link href="/about-us" color="inherit" variant="body2" sx={{ display: 'block', mb: 2 }}>
                                About Us
                            </Link>
                            <Link href="/our-team" color="inherit" variant="body2" sx={{ display: 'block', mb: 2 }}>
                                Our Team
                            </Link>
                            <Link href="/contact" color="inherit" variant="body2" sx={{ display: 'block', mb: 2 }}>
                                Contact
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'left' }}>
                            Contact Information
                        </Typography>
                        <Typography variant="body2" sx={{ textAlign: 'left', mb: 2 }}>
                            Email: <Link href="mailto:campustech@gmail.com" color="inherit">campustech@gmail.com</Link>
                        </Typography>
                        <Typography variant="body2" sx={{ textAlign: 'left', mb: 2 }}>
                            Phone: <Link href="tel:+9999999999" color="inherit">9999999999</Link>
                        </Typography>
                        <Typography variant="body2" sx={{ textAlign: 'left', mb: 2 }}>
                            Address: Campus Technology, HBR Layout, Bangalore East-560043, Karnataka
                        </Typography>
                    </Grid>
                </Grid>
                <Box textAlign="center" mt={2}>
                    <Typography variant="body2">
                        &copy; {new Date().getFullYear()} AI Mentor. All rights reserved.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
