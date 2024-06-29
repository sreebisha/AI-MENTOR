import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import { Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import FlagIcon from '@mui/icons-material/Flag';

const tasks = [
    { title: "Task 1", description: "This is the description for Task 1.", number: 1 },
    { title: "Task 2", description: "This is the description for Task 2.", number: 2 },
    { title: "Task 3", description: "This is the description for Task 3.", number: 3 },
    { title: "Task 4", description: "This is the description for Task 4.", number: 4 },
    { title: "Task 5", description: "This is the description for Task 5.", number: 5 },
    { title: "Finish Line", description: "This is the description for Task 6.", number: <FlagIcon /> },
];

const theme = createTheme({
    palette: {
        primary: {
            main: '#3f51b5',
        },
    },
});

const WebdevTask = () => {
    const [selectedTask, setSelectedTask] = React.useState(tasks[0]);

    return (
        <ThemeProvider theme={theme}>
            <Grid container justifyContent="center" sx={{ marginTop: '4rem' }}>
                <Grid item xs={10}>
                    <Paper elevation={3} sx={{ padding: '2rem', borderRadius: '15px', background: '#f9f9f9' }}>
                        <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', marginBottom: '2rem', color: '#3f51b5' }}>
                            Task for Python Development Internship
                        </Typography>
                        <Grid container spacing={3} sx={{ display: 'flex', height: '100%' }}>
                            <Grid item xs={4} sx={{ display: 'flex', flexDirection: 'column' }}>
                                <Paper elevation={2} sx={{ padding: '1rem', flex: 1, borderRadius: '10px' }}>
                                    <Typography variant="h6" sx={{ marginBottom: '1rem', color: '#3f51b5' }}>
                                        List of Tasks
                                    </Typography>
                                    <List component="nav" sx={{ flex: 1, overflowY: 'auto' }}>
                                        {tasks.map((task, index) => (
                                            <React.Fragment key={index}>
                                                <ListItem button onClick={() => setSelectedTask(task)}>
                                                    <IconButton edge="start" sx={{ marginRight: '1rem', backgroundColor: '#3f51b5', color: '#fff', borderRadius: '50%', width: '40px', height: '40px' }}>
                                                        <Typography variant="body1" sx={{ fontSize: '1.2rem' }}>{task.number}</Typography>
                                                    </IconButton>
                                                    <ListItemText primary={task.title} />
                                                </ListItem>
                                                <Divider />
                                            </React.Fragment>
                                        ))}
                                    </List>
                                </Paper>
                            </Grid>
                            <Grid item xs={8} sx={{ display: 'flex', flexDirection: 'column' }}>
                                <Paper elevation={2} sx={{ padding: '1rem', flex: 1, borderRadius: '10px' }}>
                                    <Typography variant="h6" sx={{ marginBottom: '1rem', color: '#3f51b5' }}>
                                        Task Description
                                    </Typography>
                                    <Box sx={{ flex: 1 }}>
                                        <Typography variant="body1" sx={{ color: '#555' }}>
                                            {selectedTask.description}
                                        </Typography>
                                    </Box>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
};

export default WebdevTask;
