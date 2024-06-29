import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import SchoolIcon from '@mui/icons-material/School';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import QuizIcon from '@mui/icons-material/Quiz';
import VerifiedIcon from '@mui/icons-material/Verified';
import WorkIcon from '@mui/icons-material/Work';
import FeedbackIcon from '@mui/icons-material/Feedback';
import AssignmentIcon from '@mui/icons-material/Assignment';
import '../App.css';
import { DownloadDone } from '@mui/icons-material';


function HowItWorks() {
    const coursesSteps = [
        {   
            
            icon: <SchoolIcon className="howItWorksIcon" />,
            title: "Get Started",
            content: ["Sign up and choose your desired program.", "Access the learning materials and resources."],
        },
        {
            
            icon: <LocalLibraryIcon className="howItWorksIcon" />,
            title: "Learn",
            content: ["Engage with interactive lessons and materials.", "Attend virtual classes and workshops."],
        },
        {
            
            icon: <AssignmentTurnedInIcon className="howItWorksIcon" />,
            title: "Complete Tasks",
            content: ["Participate in assignments and quizzes.", "Track your progress through the dashboard."],
        },
        {
            
            icon: <QuizIcon className="howItWorksIcon" />,
            title: "Test Your Knowledge",
            content: ["Take assessments to evaluate your understanding.", "Get feedback on your performance."],
        },
        {
            
            icon: <VerifiedIcon className="howItWorksIcon" />,
            title: "Gain Certification",
            content: ["Complete the program successfully.", "Earn a certificate to showcase your skills."],
        },
        {
            
            icon: <CardGiftcardIcon className="howItWorksIcon" />,
            title: "Get Rewards",
            content: ["Receive rewards for your achievements.", "Use your certificate to advance your career."],
        },
    ];

    const internshipSteps = [
        {
            
            icon: <WorkIcon className="howItWorksIcon" />,
            title: "Enroll in Internship",
            content: ["Submit your application and resume.", "Choose your preferred internship program."],
        },
        {
            
            icon: <AssignmentIcon className="howItWorksIcon" />,
            title: "Complete Tasks",
            content: ["Work on assigned tasks and projects.", "Collaborate with team members and mentors."],
        },
        {
            
            icon: <QuizIcon className="howItWorksIcon" />,
            title: "Give Assessment",
            content: ["Participate in assessments to evaluate your understanding.", "Submit your work for evaluation."],
        },
        {
            
            icon: <FeedbackIcon className="howItWorksIcon" />,
            title: "Get Feedback",
            content: ["Receive feedback on your performance.", "Identify areas for improvement."],
        },
        {
            
            icon: <VerifiedIcon className="howItWorksIcon" />,
            title: "Submit Final project",
            content: ["Complete the internship program successfully."],
        },
        {
            
            icon: <VerifiedIcon className='howItWorksIcon' />,
            title: "Gain Internship Certification",
            content: ["Receive a certificate of completion."]
        }
    ];

    return (
        <Box className="howItWorksSection">
            <Typography variant="h2" component="h2" sx={{ mb: 8, textAlign: 'center', fontWeight: 'bold', color: 'BLACK' }}>
                How It Works
            </Typography>
            <Typography variant="h4" component="h4" sx={{ mb: 4, textAlign: 'center', fontWeight: 'bold', color: 'black' }}>
                For Courses
            </Typography>
            <Grid container spacing={4}>
                {coursesSteps.map((item, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Box className="howItWorksColumn" sx={{ p: 3, boxShadow: 2, borderRadius: 12, textAlign: 'center', transition: 'transform 0.2s', '&:hover': { transform: 'translateY(-5px)', height: '100%' } }}>
                            {item.icon}
                            <Typography variant="h4" component="h3" sx={{ fontWeight: 'bold', mb: 2 }}>
                                {item.title}
                            </Typography>
                            {item.content.map((text, idx) => (
                                <Typography component="p" key={idx} sx={{ mb: 1, textAlign: 'center' }}>
                                    {text}
                                </Typography>
                            ))}
                        </Box>
                    </Grid>
                ))}
            </Grid>
            <Typography variant="h4" component="h4" sx={{ my: 4, mt: 12, textAlign: 'center', fontWeight: 'bold', color: 'black' }}>
                For Internships
            </Typography>
            <Grid container spacing={4}>
                {internshipSteps.map((item, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Box className="howItWorksColumn" sx={{ p: 3, boxShadow: 3, borderRadius: 12, textAlign: 'center', transition: 'transform 0.2s', '&:hover': { transform: 'translateY(-5px)', height: '100%' } }}>
                            {item.icon}
                            <Typography variant="h4" component="h3" sx={{ fontWeight: 'bold', mb: 2 }}>
                                {item.title}
                            </Typography>
                            {item.content.map((text, idx) => (
                                <Typography component="p" key={idx} sx={{ mb: 1, textAlign: 'center' }}>
                                    {text}
                                </Typography>
                            ))}
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default HowItWorks;