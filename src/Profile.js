import React, { useState } from 'react';
import {
    Avatar,
    Button,
    Container,
    Grid,
    Paper,
    Typography,
    Link,
    TextField,
    List,
    ListItem,
    ListItemText,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { Upload, Notifications } from '@mui/icons-material';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const upcomingClasses = [
    { id: 1, title: 'Introduction to React', date: '2024-06-01', time: '10:00 AM' },
    { id: 2, title: 'Advanced JavaScript', date: '2024-06-02', time: '1:00 PM' },
];

const upcomingEvents = [
    { id: 1, title: 'Faculty Meeting', date: '2024-06-05', time: '3:00 PM', },
    { id: 2, title: 'Tech Conference', date: '2024-06-10', time: '9:00 AM' },
];

const projectReports = [
    { id: 1, title: 'AI Research Project', status: 'In Progress' },
    { id: 2, title: 'Web Development Project', status: 'Completed' },
];

const userProfile = {
    name: 'User',
    email: 'abc@gmail.com',
    phone: '+9999999999',
    picture: '/images/user.jpg',
    linkedin: 'https://www.linkedin.com/in/user',
    college: 'https://www.examplecollege.com',
    techLink: 'https://www.exampletech.com',
    designation: 'Professor of Computer Science'
};

const chartData = {
    labels: ['Sem 1: Sec A', 'Sem 1: Sec B', 'Sem 2: Sec A', 'Sem 3: Sec B', 'Sem 4: Sec A', 'Sem 6: Sec B'],
    datasets: [
        {
            label: 'Pass',
            data: [65, 59, 80, 81, 56, 55],
            backgroundColor: 'rgba(75,192,192,1)',
            barPercentage: 0.6,
            categoryPercentage: 0.7,
        },
        {
            label: 'Fail',
            data: [28, 48, 40, 19, 86, 27],
            backgroundColor: 'rgba(153,102,255,1)',
            barPercentage: 0.6,
            categoryPercentage: 0.7,
        },
    ],
};

const dummyChartData1 = {
    labels: ['Male', 'Female', 'Other'],
    datasets: [
        {
            label: 'Number of Male',
            data: [350, 450, 50],
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 206, 86, 0.2)',
            ],
            borderColor: [
                
                'rgba(54, 162, 235, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 1,
        },
    ],
};

const dummyChartData2 = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'Number of Classes',
            data: [20, 22, 25, 18, 15, 10, 5],
            fill: false,
            borderColor: 'rgb(255, 92, 192)',
            tension: 0.1,
        },
        {
            label: 'Number of Holidays',
            data: [3, 2, 4, 2, 1, 0, 0],
            fill: false,
            borderColor: 'rgb(255, 99, 132)',
            tension: 0.1,
            backgroundColor: 'rgba(25, 99, 132, 0.2)'
        },
    ],
};

const Profile = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [newPicture, setNewPicture] = useState('');
    const [editedProfile, setEditedProfile] = useState({});

    const handleEdit = () => {
        setIsEditing(true);
        setEditedProfile(userProfile);
    };

    const handleCancelEdit = () => {
        setIsEditing(false);
        setNewPicture('');
    };

    const handlePictureChange = (event) => {
        setNewPicture(URL.createObjectURL(event.target.files[0]));
    };

    const handleSaveChanges = () => {
        console.log('Edited Profile:', editedProfile);
        setIsEditing(false);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setEditedProfile({ ...editedProfile, [name]: value });
    };

    return (
        <Container sx={{ minHeight: '100vh' }}>
            <Typography variant="h4" gutterBottom>
                My Profile
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={3}>
                    <Paper sx={{ p: 3, textAlign: 'center', height: '100%', width: '100%' }}>
                        <Avatar
                            alt={editedProfile.name}
                            src={isEditing ? newPicture || userProfile.picture : userProfile.picture}
                            sx={{ width: 150, height: 150, margin: '0 auto 20px' }}
                        />
                        <Typography variant="h6" sx={{ mb: 2 }}>
                            {editedProfile.name || userProfile.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" paragraph>
                            Email: <Link href={`mailto:${editedProfile.email || userProfile.email}`}>{editedProfile.email || userProfile.email}</Link>
                        </Typography>
                        <Typography variant="body2" color="textSecondary" paragraph>
                            Phone: {editedProfile.phone || userProfile.phone}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" paragraph>
                            LinkedIn: <Link href={editedProfile.linkedin || userProfile.linkedin} target="_blank" rel="noopener">{editedProfile.linkedin || userProfile.linkedin}</Link>
                        </Typography>
                        {isEditing && (
                            <>
                                <TextField
                                    name="name"
                                    label="Name"
                                    value={editedProfile.name || ''}
                                    onChange={handleChange}
                                    fullWidth
                                    margin="normal"
                                    sx={{ mb: 2 }}
                                />
                                <TextField
                                    name="designation"
                                    label="Designation"
                                    value={editedProfile.designation || ''}
                                    onChange={handleChange}
                                    fullWidth
                                    margin="normal"
                                    sx={{ mb: 2 }}
                                />
                            </>
                        )}
                        {!isEditing && (
                            <Button
                                variant="contained"
                                color="primary"
                                startIcon={<EditIcon />}
                                onClick={handleEdit}
                                sx={{ marginRight: 1 }}
                            >
                                Edit
                            </Button>
                        )}
                        {isEditing && (
                            <>
                                <input
                                    accept="image/*"
                                    id="contained-button-file"
                                    type="file"
                                    style={{ display: 'none' }}
                                    onChange={handlePictureChange}
                                />
                                <label htmlFor="contained-button-file">
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        startIcon={<Upload />}
                                        component="span"
                                        sx={{ marginRight: 1 }}
                                    >
                                        Upload image
                                    </Button>
                                </label>
                                <Button
                                    variant="contained"
                                    onClick={handleSaveChanges}
                                    sx={{ marginTop: 1, marginRight: 1 }}
                                >
                                    Save
                                </Button>
                                <Button
                                    variant="contained"
                                    onClick={handleCancelEdit}
                                    sx={{ marginTop: 1, marginRight: 1 }}
                                >
                                    Cancel
                                </Button>
                            </>
                        )}
                    </Paper>
                </Grid>
                <Grid item xs={12} md={9}>
                    <Paper sx={{ p: 1, height: '100%', width: '95%' }}>
                        <Typography variant="h6" gutterBottom>
                            Student Performance Chart
                        </Typography>
                        <Bar data={chartData} height={300} width={600} />
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper sx={{ p: 2 }}>
                        <Typography variant="h6" gutterBottom>
                            <Notifications /> Upcoming Classes
                        </Typography>
                        <List>
                            {upcomingClasses.map((classItem) => (
                                <ListItem key={classItem.id}>
                                    <ListItemText
                                        primary={classItem.title}
                                        secondary={`${classItem.date} at ${classItem.time}`}
                                    />
                                </ListItem>
                            ))}
                        </List>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper sx={{ p: 2 }}>
                        <Typography variant="h6" gutterBottom>
                            <Notifications /> Upcoming Events
                        </Typography>
                        <List>
                            {upcomingEvents.map((event) => (
                                <ListItem key={event.id}>
                                    <ListItemText
                                        primary={event.title}
                                        secondary={`${event.date} at ${event.time}`}
                                    />
                                </ListItem>
                            ))}
                        </List>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={3}>
                    {/* <Paper sx={{ p: 3, textAlign: 'center', height: '100%', width: '100%' }}>
                        <Button
                            variant="outlined"
                            color="primary"
                            onClick={() => {
                                alert('Dummy timetable for the teacher');
                            }}
                            sx={{ marginBottom: 2 }}
                        >
                            View Timetable
                        </Button>
                        <Typography variant="h6" gutterBottom>
                            Dummy Classes
                        </Typography>
                        <List>
                            <ListItem>
                                <ListItemText
                                    primary="Introduction to React"
                                    secondary="Monday, 10:00 AM - 12:00 PM"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="Advanced JavaScript"
                                    secondary="Wednesday, 1:00 PM - 3:00 PM"
                                />
                            </ListItem>
                        </List>
                    </Paper> */}
                </Grid>
                <Grid item xs={12}>
                    <Paper sx={{ display: 'flex', justifyContent: 'space-between', p: 1, height: '100%' }}>
                        <div style={{ width: '48%' }}>
                            <Typography variant="h6" gutterBottom>
                                Student Demography
                            </Typography>
                            <Bar data={dummyChartData1} height={200} width={400} />
                        </div>
                        <div style={{ width: '48%' }}>
                            <Typography variant="h6" gutterBottom>
                                Semester Overview
                            </Typography>
                            <Bar data={dummyChartData2} height={200} width={400} />
                        </div>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Profile;
