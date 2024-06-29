import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FlagIcon from '@mui/icons-material/Flag';
import IntegrationInstructions from '@mui/icons-material/IntegrationInstructions';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

const tasks = [
  {
    title: "Read Instructions",
    description: "Given are the list of tasks that you must complete to successfully finish the internship and receive the certificate. Failure to complete these tasks will result in not receiving the certification. Ensure you understand each task fully before starting.",
    hints: "Make sure to read all instructions carefully before starting each task. Pay attention to the details and requirements.",
    number: <IntegrationInstructions />
  },

  {
  title: "Task 1: Set Up Your Environment",
    description: "Create an HTML file (e.g., index.html) and define the basic structure of your weather app. You can use the following HTML code as a starting point.",
    hints: "1. Choose a meaningful file name for your HTML file.\n2. Ensure your HTML structure is correct with DOCTYPE, html, head, and body tags.\n3. Make sure the file is saved in the correct directory.",
    number: 1
  },
  {
    title: "Task 2: Design the HTML Structure",
    description: "1. Create a new HTML file.\n2. Add the basic structure including DOCTYPE, html, head, and body tags.\n3. Add a title to the document.\n4. Create a basic layout with a header, main content area, and footer.",
    hints: "1. Use semantic HTML tags like <header>, <main>, and <footer>.\n2. Ensure each section is clearly defined and separated.\n3. Use meaningful names for classes and IDs to make your code readable.",
    number: 2
  },
  {
    title: "Task 3: Apply CSS Styles",
    description: "1. Create a new CSS file and link it to your HTML file.\n2. Style the header, main content area, and footer.\n3. Add styles for text, colors, and layout.\n4. Use flexbox or grid to create a responsive design.",
    hints: "1. Use external CSS for better organization.\n2. Experiment with colors and fonts to enhance the appearance.\n3. Use media queries to ensure the design is responsive.",
    number: 3
  },
  {
    title: "Task 4: Implement JavaScript Functionality",
    description: "1. Create a new JavaScript file and link it to your HTML file.\n2. Write a function to fetch weather data from an API.\n3. Display the fetched weather data in the main content area.\n4. Add interactivity such as updating the weather data based on user input.",
    hints: "1. Use the fetch API to get data from a weather API.\n2. Ensure you handle errors gracefully.\n3. Use console.log() to debug your code and verify data fetching.",
    number: 4
  },
  {
    title: "Task 5: Final Submission",
    description: "1. Review all your work to ensure it meets the project requirements and standards.\n2. Ensure all tasks and documentation are completed.\n3. Submit your completed project for final review and approval.\n4. Be prepared to make any final adjustments based on feedback.",
    hints: "1. Double-check each task to ensure completion.\n2. Validate your HTML and CSS.\n3. Make sure your code is clean and well-documented.",
    number: 5
  },
  {
    title: "Finish Line",
    description: "Congratulations! You have completed all the tasks for the web development internship. Ensure you have submitted all required documentation and project files to receive your certificate.",
    hints: "Review all submissions and ensure you have completed everything. Prepare for final feedback.",
    number: <FlagIcon />
  }
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
  const [openHintsDialog, setOpenHintsDialog] = React.useState(false);

  const handleOpenHintsDialog = () => {
    setOpenHintsDialog(true);
  };

  const handleCloseHintsDialog = () => {
    setOpenHintsDialog(false);
  };

  const handleNextTask = () => {
    const currentIndex = tasks.indexOf(selectedTask);
    const nextIndex = currentIndex + 1 < tasks.length ? currentIndex + 1 : currentIndex;
    setSelectedTask(tasks[nextIndex]);
  };

  const handlePrevTask = () => {
    const currentIndex = tasks.indexOf(selectedTask);
    const prevIndex = currentIndex - 1 >= 0 ? currentIndex - 1 : currentIndex;
    setSelectedTask(tasks[prevIndex]);
  };

  const handleViewHints = () => {
    handleOpenHintsDialog();
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container justifyContent="center" sx={{ marginTop: '4rem' }}>
        <Grid item xs={10}>
          <Paper elevation={3} sx={{ padding: '2rem', borderRadius: '15px', background: '#f9f9f9' }}>
            <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', marginBottom: '2rem', color: '#3f51b5' }}>
              Task for Web Development Internship
            </Typography>
            <Typography variant="h6" component="h1" sx={{ fontWeight: 'normal', marginBottom: '2rem', color: '#000000' }}>
              Build a Complete Weather App from Scratch with HTML, CSS, and JavaScript
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
                <Paper elevation={2} sx={{ padding: '1rem', flex: 1, borderRadius: '10px', display: 'flex', flexDirection: 'column' }}>
                  <Typography variant="h6" sx={{ marginBottom: '1rem', color: '#3f51b5' }}>
                    {selectedTask.title}
                  </Typography>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="body1" sx={{ color: '#555', whiteSpace: 'pre-line' }}>
                      {selectedTask.description}
                    </Typography>
                  </Box>
                  <Box sx={{ display : 'flex', justifyContent: 'space-between', marginTop: 'auto' }}>
                    {selectedTask.title !== "Read Instructions" && (
                      <Button variant="contained" color="primary" onClick={handlePrevTask}>
                        Back
                      </Button>
                    )}
                    {selectedTask.title !== "Finish Line" && (
                      <Button variant="contained" color="primary" onClick={handleNextTask}>
                        Next
                      </Button>
                    )}
                    {selectedTask.title !== "Finish Line" && selectedTask.title !== "Read Instructions" && (
                      <Button variant="outlined" color="primary" onClick={handleViewHints}>
                        Hints
                      </Button>
                    )}
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
      <Dialog open={openHintsDialog} onClose={handleCloseHintsDialog}>
        <DialogTitle>Hints</DialogTitle>
        <DialogContent>
          <Typography variant="body1">{selectedTask.hints}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseHintsDialog} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
};

export default WebdevTask;

