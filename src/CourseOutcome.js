// src/components/CourseOutcomes.js
import React, { useState } from 'react';
import { Container, Typography, Card, CardContent, Grid, Button, Dialog, DialogTitle, DialogContent, DialogActions, Box } from '@mui/material';

const courseOutcomes = [
  {
    id: 1,
    title: 'Introduction to Computer Science',
    description: 'Students will be able to understand the fundamental concepts of computer science.',
    duration: '4 weeks',
    detailedDescription: 'Covers the basics of computer science including data structures, algorithms, and programming paradigms.'
  },
  {
    id: 2,
    title: 'Applied Mathematics for Computer Science',
    description: 'Students will be able to apply mathematical foundations, algorithmic principles, and computer science theory.',
    duration: '6 weeks',
    detailedDescription: 'Focuses on applying mathematical concepts and algorithmic principles in computer science, including discrete mathematics and computational theory.'
  },
  {
    id: 3,
    title: 'System Design and Implementation',
    description: 'Students will be able to design, implement, and evaluate a computer-based system to meet desired needs.',
    duration: '5 weeks',
    detailedDescription: 'Students work on projects to design and implement computer-based systems, covering software engineering principles and project management.'
  },
  {
    id: 4,
    title: 'Advanced System Design',
    description: 'Students will be able to design, implement, and evaluate a computer-based system to meet desired needs.',
    duration: '5 weeks',
    detailedDescription: 'Emphasis on real-world applications and advanced design techniques.'
  },
  {
    id: 5,
    title: 'System Evaluation Techniques',
    description: 'Students will be able to design, implement, and evaluate a computer-based system to meet desired needs.',
    duration: '5 weeks',
    detailedDescription: 'Focus on advanced system design and evaluation techniques, including performance analysis and user experience.'
  },
  {
    id: 6,
    title: 'Lifecycle of System Development',
    description: 'Students will be able to design, implement, and evaluate a computer-based system to meet desired needs.',
    duration: '5 weeks',
    detailedDescription: 'Covers the full lifecycle of system development from design to deployment, with a focus on best practices and methodologies.'
  },
  // Add more outcomes as needed
];

const CourseOutcomes = () => {
  const [open, setOpen] = useState(false);
  const [selectedOutcome, setSelectedOutcome] = useState(null);

  const handleClickOpen = (outcome) => {
    setSelectedOutcome(outcome);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedOutcome(null);
  };

  return (
    <Container sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom sx={{ fontFamily: 'Segoe UI, Tahoma, sans-serif', fontSize: '2.5rem', fontWeight: '600', mb: 3 }}>
        Course Outcomes
      </Typography>
      <Grid container spacing={4}>
        {courseOutcomes.map((outcome) => (
          <Grid item xs={12} sm={6} md={4} key={outcome.id}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <Typography variant="h5" component="h3" sx={{ mb: 2 }}>
                  {outcome.title}
                </Typography>
                <Typography variant="body2" component="p" sx={{ mb: 1 }}>
                  {outcome.description}
                </Typography>
                <Typography variant="body2" component="p" color="textSecondary" sx={{ mb: 1 }}>
                  Duration: {outcome.duration}
                </Typography>
                <Typography variant="body2" component="p" sx={{ mb: 2, flexGrow: 1 }}>
                  {outcome.detailedDescription}
                </Typography>
                <Box sx={{ mt: 'auto' }}>
                  <Button variant="contained" color="primary" onClick={() => handleClickOpen(outcome)}>
                    View Details
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      {selectedOutcome && (
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>{selectedOutcome.title}</DialogTitle>
          <DialogContent>
            <Typography variant="body1" sx={{ mt: 2 }}>
              {selectedOutcome.detailedDescription}
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </Container>
  );
};

export default CourseOutcomes;
