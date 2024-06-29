import React from 'react';
import { Grid, Avatar, Typography, Box, IconButton, Divider } from '@mui/material';
import { LinkedIn } from '@mui/icons-material';

const teamMembers = [
    {
        name: 'B Sharanya',
        role: 'Software Developer',
        image: '../images/bsharanya.jpeg',
        linkedin: 'https://www.linkedin.com/in/b-sharanya-5077b1203/'
    },
    {
        name: 'Sreebisha',
        role: 'Software Developer',
        image: '../images/sreebishak.jpeg',
        linkedin: 'https://www.linkedin.com/in/sreebisha-k-a5251720a'
    }

];

const TeamSection = () => {
    return (
        <div style={{ padding: '20px 5px', margin: 0, fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif' }}>
            <Typography
                variant="h3"
                component="h6"
                align='center'
                gutterBottom
                fontWeight="bold"
                marginTop={2}
                marginBottom={2}
                color="#333"
            >
                <span style={{ color: 'black' }}>Meet</span> <span style={{ color: 'black' }}>Our</span> <span style={{ color: 'black' }}>Team</span>
            </Typography>
            <Typography
                variant="h4"
                component="h2"
                align='center'
                gutterBottom
                fontWeight="bold"
                marginTop={2}
                marginBottom={2}
                color="#333"
            >
                <span style={{ color: '#B0E0E6' }}>Un</span>leashing  <span style={{ color: '#4169E1' }}>Ex</span>cellence <span style={{ color: '#00BFFF' }}>Th</span>rough  <span style={{ color: '#6495ED' }}>Col</span>lective <span style={{ color: '#7B68EE ' }}>Bri</span>lliance
            </Typography>
            <Divider />

            <Grid container spacing={4} marginTop={3}>
                {teamMembers.map((member, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Box
                            display="flex"
                            flexDirection="column"
                            alignItems="center"
                            marginBottom={2}
                            sx={{ transition: '0.3s', '&:hover': { transform: 'scale(1.05)' } }}
                        >
                            <Avatar
                                alt={member.name}
                                src={member.image}
                                sx={{
                                    width: 150,
                                    height: 150,
                                    marginBottom: 2,
                                    filter: 'grayscale(100%)',
                                    transition: 'filter 0.1s',
                                    '&:hover': {
                                        filter: 'none'
                                    }
                                }}
                            />
                            <Typography variant="h5" align="center" color="darkblue" gutterBottom fontWeight="bold">
                                {member.name}
                            </Typography>
                            <Typography variant="subtitle1" color="orange" gutterBottom fontWeight="bold">
                                {member.role}
                            </Typography>
                            <IconButton href={member.linkedin} target="_blank" rel="noopener noreferrer">
                                <LinkedIn />
                            </IconButton>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default TeamSection;
