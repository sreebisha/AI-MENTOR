import React from 'react';
import { Box, Typography } from '@mui/material';

const Dashboard = () => {
    return (
        <Box sx={{ maxWidth: 600, margin: '0 auto', padding: 2 }}>
            <Typography variant="h4" component="div" gutterBottom>
                Dashboard
            </Typography>
            <Typography variant="body1" component="div" gutterBottom>
                Welcome to your dashboard. Here you can see an overview of your activities and progress.
            </Typography>
        </Box>
    );
};

export default Dashboard;
