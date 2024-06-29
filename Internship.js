import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const domains = [
    {
        title: "Web Development",
        description: "Learn to build modern web applications using HTML, CSS, JavaScript, and popular frameworks.",
        stack: "HTML, CSS, JavaScript, React, Node.js",
        link: "/WebdevTask"
    },
    {
        title: "Frontend Development",
        description: "Focus on building responsive and interactive user interfaces with advanced frontend technologies.",
        stack: "HTML, CSS, JavaScript, React, Redux",
        link: "/FrontendTask"
    },
    {
        title: "Data Analyst",
        description: "Analyze data and gain insights to help drive business decisions.",
        stack: "Python, SQL, Excel, Tableau",
        link: "/DataAnalystTask"
    },
    {
        title: "Business Analyst",
        description: "Bridge the gap between IT and business using data analytics to assess processes and deliver data-driven recommendations.",
        stack: "Excel, SQL, PowerBI, Tableau",
        link: "/BusinessAnalystTask"
    },
    {
        title: "Data Science",
        description: "Dive into data science concepts including machine learning, data analysis, and statistical modeling.",
        stack: "Python, R, SQL, TensorFlow",
        link: "/DataScienceTask"
    },
    {
        title: "AI/ML",
        description: "Explore artificial intelligence and machine learning techniques and applications.",
        stack: "Python, TensorFlow, Keras, PyTorch",
        link: "/AIMLTask"
    },
    {
        title: "UI/UX",
        description: "Design intuitive and user-friendly interfaces with a focus on user experience.",
        stack: "Sketch, Figma, Adobe XD, CSS",
        link: "/UIUXTask"
    },
    {
        title: "Python Developer",
        description: "Develop applications and scripts using Python programming.",
        stack: "Python, Django, Flask, SQLAlchemy",
        link: "/PythonDeveloperTask"
    },
    {
        title: "Java Developer",
        description: "Build robust applications using Java and related technologies.",
        stack: "Java, Spring, Hibernate, Maven",
        link: "/JavaDeveloperTask"
    },
    {
        title: "MERN Stack Development",
        description: "Master both frontend and backend development using the MERN stack.",
        stack: "MongoDB, Express.js, React, Node.js",
        link: "/MERNStackTask"
    },
    {
        title: "SDE Intern",
        description: "Gain experience in software development engineering roles.",
        stack: "Java, C++, Python, SQL",
        link: "/SDEInternTask"
    },
    {
        title: "SDET Intern",
        description: "Learn software development and testing to ensure high quality products.",
        stack: "Selenium, JUnit, TestNG, Python",
        link: "/SDETInternTask"
    },
    {
        title: "App Development",
        description: "Develop mobile applications for Android and iOS using latest technologies.",
        stack: "React Native, Flutter, Swift, Kotlin",
        link: "/AppDevelopmentTask"
    },
    {
        title: "Social Media Marketing",
        description: "Create and manage social media campaigns to promote products and services.",
        stack: "Facebook Ads, Instagram, Twitter, LinkedIn",
        link: "/SocialMediaMarketingTask"
    }
];

const Internship = () => {
    return (
        <>
            <Typography
                variant="h2"
                component="h2"
                sx={{
                    fontWeight: 'bold',
                    fontSize: '3.5rem',
                    textAlign: 'center',
                    marginTop: '6rem',
                    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif'
                }}
            >
                Choose Your Domain
            </Typography>
            <Grid container spacing={5} sx={{ flexGrow: 1, padding: 2, mt: 3 }}>
                {domains.map((domain, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Paper
                            sx={{
                                padding: 2,
                                borderRadius: 3,
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                textAlign: 'center',
                                // backgroundImage: 'linear-gradient(135deg, #e3f2fd 30%, #bbdefb 100%)',
                                transition: 'transform 0.2s',

                                '&:hover': {
                                    transform: 'scale(1.05)',
                                    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)'
                                }
                            }}
                        >
                            <Typography variant="h4" component="h4" sx={{ marginBottom: 1, color: '#000000' }}>
                                {domain.title}
                            </Typography>
                            <Typography variant="body1" component="p" sx={{ marginBottom: 1, textAlign: 'justify' }}>
                                {domain.description}
                            </Typography>
                            <Typography variant="body2" component="p" sx={{ marginBottom: 2, textAlign: 'justify' }}>
                                <strong>Tech Stack:</strong> {domain.stack}
                            </Typography>
                            <Button
                                variant="contained"
                                component={Link}
                                to={domain.link ? domain.link : "#"}
                                sx={{
                                    marginTop: 2,
                                    backgroundColor: '#0d47a1',
                                    '&:hover': {
                                        backgroundColor: '#0b3c85'
                                    }
                                }}
                            >
                                Enroll
                            </Button>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </>
    );
};

export default Internship;
