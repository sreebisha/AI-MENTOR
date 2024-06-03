import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemText,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AssessmentIcon from '@mui/icons-material/Assessment';

const semesters = [
  {
    name: 'Semester 1',
    modules: [
      {
        name: 'Module 1',
        studyMaterials: null,
        questions: ['What is the capital of France?', 'Who wrote Hamlet?', 'What is the chemical symbol for gold?'],
      },
      {
        name: 'Module 2',
        studyMaterials: null,
        questions: ['What is the square root of 25?', 'Who painted the Mona Lisa?', 'What is the powerhouse of the cell?'],
      },
    ],
  },
  {
    name: 'Semester 1',
    modules: [
      {
        name: 'Module 1',
        studyMaterials: null,
        questions: ['What is the capital of France?', 'Who wrote Hamlet?', 'What is the chemical symbol for gold?'],
      },
      {
        name: 'Module 2',
        studyMaterials: null,
        questions: ['What is the square root of 25?', 'Who painted the Mona Lisa?', 'What is the powerhouse of the cell?'],
      },
    ],
  },
  {
    name: 'Semester 2',
    modules: [
      {
        name: 'Module 1',
        studyMaterials: null,
        questions: ['What is the capital of France?', 'Who wrote Hamlet?', 'What is the chemical symbol for gold?'],
      },
      {
        name: 'Module 2',
        studyMaterials: null,
        questions: ['What is the square root of 25?', 'Who painted the Mona Lisa?', 'What is the powerhouse of the cell?'],
      },
    ],
  },
  {
    name: 'Semester 3',
    modules: [
      {
        name: 'Module 1',
        studyMaterials: null,
        questions: ['What is the capital of France?', 'Who wrote Hamlet?', 'What is the chemical symbol for gold?'],
      },
      {
        name: 'Module 2',
        studyMaterials: null,
        questions: ['What is the square root of 25?', 'Who painted the Mona Lisa?', 'What is the powerhouse of the cell?'],
      },
    ],
  },
  // Add more semesters and modules as needed
];

const AssessmentSections = () => {
  const [selectedSemester, setSelectedSemester] = useState(null);
  const [selectedModule, setSelectedModule] = useState(null);
  const [fileUploadDialogOpen, setFileUploadDialogOpen] = useState(false);
  const [fileUploadMessage, setFileUploadMessage] = useState('');
  const [file, setFile] = useState(null);

  const handleAddStudyMaterialsClick = (semester, module) => {
    setSelectedSemester(semester);
    setSelectedModule(module);
    setFileUploadDialogOpen(true);
  };

  const handleFileUpload = (event) => {
    const uploadedFile = event.target.files[0];
    setFile(uploadedFile);
    setFileUploadMessage('File uploaded successfully.');

    if (selectedSemester && selectedModule) {
      const updatedModules = selectedSemester.modules.map((mod) =>
        mod.name === selectedModule.name ? { ...mod, studyMaterials: uploadedFile } : mod
      );

      setSelectedSemester({
        ...selectedSemester,
        modules: updatedModules,
      });
    }
  };

  const handleFileUploadDialogClose = () => {
    setFileUploadDialogOpen(false);
  };

  const handleViewStudyMaterialsClick = (module) => {
    if (module && module.studyMaterials) {
      window.open(URL.createObjectURL(module.studyMaterials));
    }
  };

  return (
    <Container maxWidth="md">
       <Typography variant="h4" gutterBottom sx={{ fontFamily: 'Segoe UI, Tahoma, sans-serif', fontSize: '2.5rem', fontWeight:'600' }}>
               Assessment
            </Typography>
      {semesters.map((semester, index) => (
        <Box key={index} mb={2}>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">{semester.name}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List>
                {semester.modules.map((module, idx) => (
                  <ListItem key={idx}>
                    <ListItemText primary={module.name} />
                    <Button
                      variant="outlined"
                      color="primary"
                      startIcon={<AssessmentIcon />}
                      onClick={() => handleAddStudyMaterialsClick(semester, module)}
                      style={{ marginRight: '10px' }}
                    >
                      Add Assessment
                    </Button>
                    {/* <Button
                      variant="outlined"
                      color="secondary"
                      onClick={() => handleViewStudyMaterialsClick(module)}
                      style={{ marginLeft: '10px' }}
                    >
                      View Study Materials
                    </Button> */}
                    <Button
                      variant="outlined"
                      color="primary"
                      startIcon={<AssessmentIcon />}
                      onClick={() => handleAddStudyMaterialsClick(semester, module)}
                    >
                      Add Study materials
                    </Button>
                  </ListItem>
                ))}
              </List>
            </AccordionDetails>
          </Accordion>
        </Box>
      ))}
      <Dialog open={fileUploadDialogOpen} onClose={handleFileUploadDialogClose}>
        <DialogTitle>Upload Study Materials</DialogTitle>
        <DialogContent>
          <input
            style={{ display: 'none' }}
            id="file-upload"
            type="file"
            onChange={handleFileUpload}
            accept=".pdf,.xls,.xlsx,.doc,.docx,.txt"
          />
          <label htmlFor="file-upload">
            <Button variant="contained" component="span">
              Choose File
            </Button>
          </label>
          {fileUploadMessage && (
            <Typography variant="body1" color="textSecondary">
              {fileUploadMessage}
            </Typography>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleFileUploadDialogClose}>Cancel</Button>
          <Button onClick={handleFileUploadDialogClose} color="primary">
            Upload
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default AssessmentSections;