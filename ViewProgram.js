import * as React from 'react';
import { useLocation } from 'react-router-dom';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Button from '@mui/material/Button';
import SchoolIcon from '@mui/icons-material/School'; // Example icon

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#bbdefb',
    ...theme.typography.body2,
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    minHeight: '150px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: theme.shadows[5],
    borderRadius: theme.shape.borderRadius,
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
    width: '250px',
    height: '250px',
    margin: theme.spacing(1),
}));

const programs = [
    { title: 'Artificial Intelligence Ethics', description: 'Explore ethical considerations in AI.', domain: 'CSE', icon: <SchoolIcon /> },
    { title: 'Cloud DevOps', description: 'Master CI/CD, IaC, and cloud operations.', domain: 'CSE', icon: <SchoolIcon /> },
    { title: 'Azure Fundamentals', description: 'Learn the basics of Microsoft Azure.', domain: 'CSE', icon: <SchoolIcon /> },
    { title: 'Advanced Azure Solutions', description: 'Deep dive into advanced Azure topics.', domain: 'CSE', icon: <SchoolIcon /> },
    { title: 'Data Structures and Algorithms', description: 'Master essential data structures and algorithms.', domain: 'CSE', icon: <SchoolIcon /> },
    { title: 'Database Management Systems', description: 'Learn about relational databases and SQL.', domain: 'CSE', icon: <SchoolIcon /> },
    { title: 'Network Security', description: 'Understand principles of network security.', domain: 'CSE', icon: <SchoolIcon /> },
    { title: 'Augmented Reality and Virtual Reality', description: 'Create immersive AR and VR experiences.', domain: 'CSE', icon: <SchoolIcon /> },
    { title: 'Content Writing using AI', description: 'Use AI tools for content generation.', domain: 'CSE', icon: <SchoolIcon /> },
    { title: 'Software Development Engineer', description: 'Prepare for a career in software development.', domain: 'CSE', icon: <SchoolIcon /> },
    { title: 'Software Development Engineer in Test', description: 'Learn automated testing and QA practices.', domain: 'CSE', icon: <SchoolIcon /> },
    { title: 'Full Stack Development', description: 'Become a full-stack developer.', domain: 'CSE', icon: <SchoolIcon /> },
    { title: 'Cyber Security', description: 'Protect systems and networks from attacks.', domain: 'CSE', icon: <SchoolIcon /> },
    { title: 'Internet of Things (IoT)', description: 'Connect devices and systems over the internet.', domain: 'CSE', icon: <SchoolIcon /> },
    { title: 'Cloud Computing', description: 'Understand cloud infrastructure and services.', domain: 'CSE', icon: <SchoolIcon /> },
    { title: 'Blockchain Technology', description: 'Dive into blockchain and its applications.', domain: 'CSE', icon: <SchoolIcon /> },
    { title: 'Embedded Systems', description: 'Understand microcontroller programming and RTOS.', domain: 'ECE', icon: <SchoolIcon /> },
    { title: 'Digital Signal Processing', description: 'Study Fourier transforms and signal analysis.', domain: 'ECE', icon: <SchoolIcon /> },
    { title: 'VLSI Design', description: 'Explore CMOS technology and logic gate design.', domain: 'ECE', icon: <SchoolIcon /> },
    { title: 'Microelectronics', description: 'Learn about microelectronic devices and circuits.', domain: 'ECE', icon: <SchoolIcon /> },
    { title: 'Wireless Communication', description: 'Understand principles of wireless communication.', domain: 'ECE', icon: <SchoolIcon /> },
    { title: 'Digital Image Processing', description: 'Study techniques for digital image processing.', domain: 'ECE', icon: <SchoolIcon /> },
    { title: 'Analog Circuits', description: 'Learn about the design of analog circuits.', domain: 'ECE', icon: <SchoolIcon /> },
    { title: 'Control Systems Engineering', description: 'Learn about feedback and stability analysis.', domain: 'Mechanical', icon: <SchoolIcon /> },
    { title: 'Robotics', description: 'Explore design and operation of robots.', domain: 'Mechanical', icon: <SchoolIcon /> },
    { title: 'Mechanical Engineering Design', description: 'Learn CAD modeling and finite element analysis.', domain: 'Mechanical', icon: <SchoolIcon /> },
    { title: 'Thermodynamics', description: 'Study the principles of thermodynamics.', domain: 'Mechanical', icon: <SchoolIcon /> },
    { title: 'Fluid Mechanics', description: 'Understand the behavior of fluids at rest and in motion.', domain: 'Mechanical', icon: <SchoolIcon /> },
    { title: 'Manufacturing Processes', description: 'Learn about different manufacturing processes.', domain: 'Mechanical', icon: <SchoolIcon /> },
    { title: 'Heat Transfer', description: 'Study the principles of heat transfer.', domain: 'Mechanical', icon: <SchoolIcon /> },
    { title: 'Construction Management', description: 'Learn project planning and risk management.', domain: 'Civil', icon: <SchoolIcon /> },
    { title: 'Social Survey and Civil Engineering', description: 'Explore survey methodologies in civil projects.', domain: 'Civil', icon: <SchoolIcon /> },
    { title: 'Geoinformatics', description: 'Learn about GIS and spatial data analysis.', domain: 'Civil', icon: <SchoolIcon /> },
    { title: 'Structural Analysis', description: 'Understand the analysis of structures.', domain: 'Civil', icon: <SchoolIcon /> },
    { title: 'Transportation Engineering', description: 'Study the principles of transportation engineering.', domain: 'Civil', icon: <SchoolIcon /> },
    { title: 'Environmental Engineering', description: 'Learn about environmental impact and sustainability.', domain: 'Civil', icon: <SchoolIcon /> },
    { title: 'Water Resources Engineering', description: 'Study the management of water resources.', domain: 'Civil', icon: <SchoolIcon /> },
    { title: 'Marketing and Finance', description: 'Understand marketing and financial analysis.', domain: 'Finance', icon: <SchoolIcon /> },
    { title: 'Financial Technology', description: 'Explore innovations in finance and technology.', domain: 'Finance', icon: <SchoolIcon /> },
    { title: 'Investment Analysis', description: 'Learn about investment analysis and portfolio management.', domain: 'Finance', icon: <SchoolIcon /> },
    { title: 'Corporate Finance', description: 'Understand corporate finance principles.', domain: 'Finance', icon: <SchoolIcon /> },
    { title: 'International Finance', description: 'Study finance on a global scale.', domain: 'Finance', icon: <SchoolIcon /> },
    { title: 'Risk Management', description: 'Learn about financial risk management.', domain: 'Finance', icon: <SchoolIcon /> },
    { title: 'Financial Markets and Institutions', description: 'Understand the role of financial markets and institutions.', domain: 'Finance', icon: <SchoolIcon /> },
    { title: 'Digital Marketing', description: 'Learn SEO, social media, and online advertising.', domain: 'Marketing', icon: <SchoolIcon /> },
    { title: 'Market Research', description: 'Gain expertise in market research methods.', domain: 'Marketing', icon: <SchoolIcon /> },
    { title: 'Brand Management', description: 'Understand the principles of brand management.', domain: 'Marketing', icon: <SchoolIcon /> },
    { title: 'Consumer Behavior', description: 'Study consumer behavior and psychology.', domain: 'Marketing', icon: <SchoolIcon /> },
    { title: 'Marketing Analytics', description: 'Learn about data-driven marketing strategies.', domain: 'Marketing', icon: <SchoolIcon /> },
    { title: 'Sales Management', description: 'Understand the principles of sales management.', domain: 'Marketing', icon: <SchoolIcon /> },
    { title: 'Integrated Marketing Communications', description: 'Study integrated marketing communication strategies.', domain: 'Marketing', icon: <SchoolIcon /> },
    { title: 'Supply Chain Management', description: 'Understand logistics and supply chain optimization.', domain: 'Business', icon: <SchoolIcon /> },
    { title: 'Strategic Consulting', description: 'Gain insights into market analysis and strategy.', domain: 'Business', icon: <SchoolIcon /> },
    { title: 'Product Management', description: 'Learn product lifecycle and market research.', domain: 'Business', icon: <SchoolIcon /> },
    { title: 'Project Management', description: 'Master project planning and execution.', domain: 'Business', icon: <SchoolIcon /> },
    { title: 'Entrepreneurship', description: 'Learn the fundamentals of starting and running a business.', domain: 'Business', icon: <SchoolIcon /> },
    { title: 'Operations Management', description: 'Understand the principles of operations management.', domain: 'Business', icon: <SchoolIcon /> },
    { title: 'Business Analytics', description: 'Study the use of data and analytics in business.', domain: 'Business', icon: <SchoolIcon /> },
];

const domains = {
    CSE: 'Computer Science Engineering',
    ECE: 'Electronics and Communication Engineering',
    Mechanical: 'Mechanical Engineering',
    Civil: 'Civil Engineering',
    Finance: 'Finance',
    Marketing: 'Marketing',
    Business: 'Business',
};

const ViewProgram = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const selectedDomain = queryParams.get('domain');
    const theme = useTheme();

    const scrollLeft = (ref) => {
        ref.current.scrollBy({ left: -300, behavior: 'smooth' });
    };

    const scrollRight = (ref) => {
        ref.current.scrollBy({ left: 300, behavior: 'smooth' });
    };

    const DomainSection = ({ domainKey }) => {
        const scrollContainer = React.useRef(null);

        return (
            <Box key={domainKey} sx={{ mb: 6 }}>
                <Typography variant="h4" fontFamily="Segoe UI, Tahoma, Geneva, Verdana, sans-serif" fontWeight="bold" component="div" gutterBottom sx={{ textAlign: 'left', mb: 4, color: 'black' }}>
                    {domains[domainKey]}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <IconButton onClick={() => scrollLeft(scrollContainer)}>
                        <ArrowBackIosIcon />
                    </IconButton>
                    <Box sx={{ display: 'flex', overflowX: 'auto', paddingBottom: theme.spacing(5), flexGrow: 1 }} ref={scrollContainer}>
                        <Grid container spacing={3} wrap="nowrap">
                            {programs
                                .filter((program) => program.domain === domainKey)
                                .map((program, index) => (
                                    <Grid item key={index} sx={{ minWidth: 250, height: 250, margin: '0 8px' }}>
                                        <Item>
                                            <Box sx={{ mb: 2 }}>{program.icon}</Box>
                                            <Typography variant="h5" fontFamily="Segoe UI, Tahoma, Geneva, Verdana, sans-serif" fontWeight="bold" component="div" sx={{ mb: 2, color: 'black' }}>
                                                {program.title}
                                            </Typography>
                                            <Typography variant="body2" sx={{ mb: 3, whiteSpace: 'pre-line', color: theme.palette.text.primary }}>
                                                {program.description}
                                            </Typography>
                                        </Item>
                                    </Grid>
                                ))}
                        </Grid>
                    </Box>
                    <IconButton onClick={() => scrollRight(scrollContainer)}>
                        <ArrowForwardIosIcon />
                    </IconButton>
                </Box>
            </Box>
        );
    };

    return (
        <Box sx={{ flexGrow: 1, padding: theme.spacing(5), fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif' }}>
            <Typography variant="h3" fontFamily="Segoe UI, Tahoma, Geneva, Verdana, sans-serif" fontWeight="bold" component="div" gutterBottom sx={{ textAlign: 'center', mb: 4 }}>
                Learn from Our Industry Experts and Gain Real-World Experience
            </Typography>

            <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
                <img src="/aimentor.png" alt="AI Mentor" style={{ width: '100%', maxHeight: '5%', borderRadius: '10px', marginBottom: '2rem' }} />
            </Box>

            {selectedDomain ? (
                <DomainSection domainKey={selectedDomain} />
            ) : (
                Object.keys(domains).map((domainKey) => (
                    <DomainSection key={domainKey} domainKey={domainKey} />
                ))
            )}
        </Box>
    );
};

export default ViewProgram;
