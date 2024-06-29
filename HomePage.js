import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import AboutUs from './AboutUs';
import HowItWorks from './HowItWorks';
import '../App.css';
import TeamSection from './TeamSection';

function HomePage() {
    return (
        <>
            <Box className="mainHeading">
                <Box className="content">
                    <span className="title">Master the Next Wave:<br /> AI-Enabled Courses, <br />Virtual Internship Experience, <br />and Projects</span>
                    <h3>Unlock Your Potential: Virtual Paths to Real-World Skills with Our Courses and Projects</h3>
                    <Box className='button' color='orange' sx={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
                        <Button
                            variant="contained"
                            component={Link}
                            to="/view-program"
                            sx={{
                                color: 'white',
                                backgroundColor: 'teal',
                                borderColor: 'teal',
                                borderWidth: 1,
                                '&:hover': {
                                    backgroundColor: 'transparent',
                                    borderColor: 'transparent',
                                    color: 'black'
                                },
                                marginRight: '10px'
                            }}
                        >
                            View Programs
                        </Button>
                        <Button
                            variant="contained"
                            component={Link}
                            to="/internship"
                            sx={{
                                color: 'white',
                                backgroundColor: 'darkblue',
                                borderColor: 'darkblue',
                                borderWidth: 1,
                                '&:hover': {
                                    backgroundColor: 'transparent',
                                    borderColor: 'transparent',
                                    color: 'black'
                                },
                                marginRight: '10px'
                            }}
                        >
                            View Internships
                        </Button>
                        <Button
                            variant="contained"
                            component={Link}
                            to="/how-it-works"
                            sx={{
                                color: 'white',
                                backgroundColor: 'purple',
                                borderColor: 'purple',
                                borderWidth: 1,
                                '&:hover': {
                                    backgroundColor: 'transparent',
                                    borderColor: 'transparent',
                                    color: 'black'
                                }
                            }}
                        >
                            How it Works
                        </Button>
                    </Box>
                </Box>
            </Box>

            <AboutUs />
            <HowItWorks />
            <TeamSection />
        </>
    );
}

export default HomePage;
