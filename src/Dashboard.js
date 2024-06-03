import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Profile from './Profile';

const mdTheme = createTheme();

function DashboardContent() {
    return (
        <ThemeProvider theme={mdTheme}>
            <CssBaseline />
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Profile />
                    </Grid>
                </Grid>
            </Container>
        </ThemeProvider>
    );
}

export default function Dashboard() {
    return <DashboardContent />;
}
