import React, { useState, useEffect } from 'react';
import { Box, Button, Card, CardContent, Avatar, Typography, ThemeProvider, Snackbar, Divider, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import theme from './theme';

const initialStudents = [
  { id: 1, name: 'John Doe', image: 'https://randomuser.me/api/portraits/men/1.jpg', status: 'Present' },
  { id: 2, name: 'Jane Smith', image: 'https://randomuser.me/api/portraits/women/2.jpg', status: 'Present' },
  { id: 3, name: 'Alice Johnson', image: 'https://randomuser.me/api/portraits/women/3.jpg', status: 'Present' },
  { id: 4, name: 'Sree', image: 'https://randomuser.me/api/portraits/men/4.jpg', status: 'Present' },
  { id: 5, name: 'Mark Brown', image: 'https://randomuser.me/api/portraits/men/5.jpg', status: 'Present' },
  { id: 6, name: 'John Doe', image: 'https://randomuser.me/api/portraits/men/1.jpg', status: 'Present' },
  { id: 7, name: 'Jane Smith', image: 'https://randomuser.me/api/portraits/women/2.jpg', status: 'Present' },
  { id: 8, name: 'Alice Johnson', image: 'https://randomuser.me/api/portraits/women/3.jpg', status: 'Present' },
  { id: 9, name: 'Sree', image: 'https://randomuser.me/api/portraits/men/4.jpg', status: 'Present' },
  { id: 10, name: 'Mark Brown', image: 'https://randomuser.me/api/portraits/men/5.jpg', status: 'Present' },
  { id: 11, name: 'John Doe', image: 'https://randomuser.me/api/portraits/men/1.jpg', status: 'Present' },
  { id: 12, name: 'Jane Smith', image: 'https://randomuser.me/api/portraits/women/2.jpg', status: 'Present' },
  { id: 13, name: 'Alice Johnson', image: 'https://randomuser.me/api/portraits/women/3.jpg', status: 'Present' },
  { id: 14, name: 'Sree', image: 'https://randomuser.me/api/portraits/men/4.jpg', status: 'Present' },
  { id: 15, name: 'Mark Brown', image: 'https://randomuser.me/api/portraits/men/5.jpg', status: 'Present' },
  { id: 16, name: 'John Doe', image: 'https://randomuser.me/api/portraits/men/1.jpg', status: 'Present' },
  { id: 17, name: 'Jane Smith', image: 'https://randomuser.me/api/portraits/women/2.jpg', status: 'Present' },
  { id: 18, name: 'Alice Johnson', image: 'https://randomuser.me/api/portraits/women/3.jpg', status: 'Present' },
  { id: 19, name: 'Sree', image: 'https://randomuser.me/api/portraits/men/4.jpg', status: 'Present' },
  { id: 20, name: 'Mark Brown', image: 'https://randomuser.me/api/portraits/men/5.jpg', status: 'Present' },
  { id: 21, name: 'John Doe', image: 'https://randomuser.me/api/portraits/men/1.jpg', status: 'Present' },
  { id: 22, name: 'Jane Smith', image: 'https://randomuser.me/api/portraits/women/2.jpg', status: 'Present' },
  { id: 23, name: 'Alice Johnson', image: 'https://randomuser.me/api/portraits/women/3.jpg', status: 'Present' },
  { id: 24, name: 'Sree', image: 'https://randomuser.me/api/portraits/men/4.jpg', status: 'Present' },
  { id: 25, name: 'Mark Brown', image: 'https://randomuser.me/api/portraits/men/5.jpg', status: 'Present' },
  { id: 26, name: 'John Doe', image: 'https://randomuser.me/api/portraits/men/1.jpg', status: 'Present' },
  { id: 27, name: 'Jane Smith', image: 'https://randomuser.me/api/portraits/women/2.jpg', status: 'Present' },
  { id: 28, name: 'Alice Johnson', image: 'https://randomuser.me/api/portraits/women/3.jpg', status: 'Present' },
  { id: 29, name: 'Sree', image: 'https://randomuser.me/api/portraits/men/4.jpg', status: 'Present' },
  { id: 30, name: 'Mark Brown', image: 'https://randomuser.me/api/portraits/men/5.jpg', status: 'Present' }
];

const StudentAttendance = () => {
  const [students, setStudents] = useState(initialStudents);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [presentCount, setPresentCount] = useState(0);
  const [absentCount, setAbsentCount] = useState(0);
  const [showCounts, setShowCounts] = useState(false);
  const [selectedSemester, setSelectedSemester] = useState('');
  const [selectedSection, setSelectedSection] = useState('');
  const [selectionDone, setSelectionDone] = useState(false);

  useEffect(() => {
    console.log('Students:', students);
  }, [students]);

  const handleAttendanceToggle = (id) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === id
          ? { ...student, status: student.status === 'Present' ? 'Absent' : 'Present' }
          : student
      )
    );
  };

  const handleMarkAllPresent = () => {
    setStudents((prevStudents) =>
      prevStudents.map((student) => ({ ...student, status: 'Present' }))
    );
  };

  const handleDone = () => {
    const presentCount = students.filter((student) => student.status === 'Present').length;
    const absentCount = students.length - presentCount;
    setPresentCount(presentCount);
    setAbsentCount(absentCount);
    setShowCounts(true);
    setSnackbarOpen(true);
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  const handleSelectionDone = () => {
    setSelectionDone(true);
  };

  const data = [
    { name: 'Present', count: presentCount, fill: '#209c05' },
    { name: 'Absent', count: absentCount, fill: '#ff0000' },
  ];

  if (!selectionDone) {
    return (
      <ThemeProvider theme={theme}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', p: 2 }}>
          <Typography variant="h4" gutterBottom sx={{ fontFamily: 'Segoe UI, Tahoma, sans-serif', fontSize: '2.5rem', fontWeight: '600' }}>
            Select Semester, and Section
          </Typography>
          <FormControl sx={{ m: 2, minWidth: 200 }}>
            <InputLabel id="select-semester-label">Semester</InputLabel>
            <Select
              labelId="select-semester-label"
              value={selectedSemester}
              onChange={(e) => setSelectedSemester(e.target.value)}
              label="Semester"
            >
              <MenuItem value="Semester 1">Semester 1</MenuItem>
              <MenuItem value="Semester 2">Semester 2</MenuItem>
              <MenuItem value="Semester 3">Semester 3</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ m: 2, minWidth: 200 }}>
            <InputLabel id="select-section-label">Section</InputLabel>
            <Select
              labelId="select-section-label"
              value={selectedSection}
              onChange={(e) => setSelectedSection(e.target.value)}
              label="Section"
            >
              <MenuItem value="Section A">Section A</MenuItem>
              <MenuItem value="Section B">Section B</MenuItem>
              <MenuItem value="Section C">Section C</MenuItem>
            </Select>
          </FormControl>
          <Button variant="contained" color="primary" onClick={handleSelectionDone} sx={{ mt: 2 }}>
            Done
          </Button>
        </Box>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', p: 2 }}>
        <Typography variant="h4" gutterBottom sx={{ fontFamily: 'Segoe UI, Tahoma, sans-serif', fontSize: '2.5rem', fontWeight: '600' }}>
          Students Attendance
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={handleMarkAllPresent}
          sx={{ mb: 2 }}
        >
          Mark All Present
        </Button>
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', p: 2 }}>
          <Box sx={{ flex: 1, pr: 2, maxHeight: '500px', overflowY: 'auto' }}>
            {students.map((student) => (
              <Card key={student.id} sx={{ display: 'flex', alignItems: 'center', mb: 2, p: 1 }}>
                <Avatar alt={student.name} src={student.image} sx={{ width: 48, height: 48, mr: 2 }} />
                <CardContent sx={{ flex: 1, display: 'flex', justifyContent: 'space-between' }}>
                  <Typography component="div" variant="body1">
                    {student.name}
                  </Typography>
                  <Button
                    variant="contained"
                    color={student.status === 'Present' ? 'success' : 'error'}
                    onClick={() => handleAttendanceToggle(student.id)}
                    sx={{ mx: 1 }}
                  >
                    {student.status}
                  </Button>
                </CardContent>
              </Card>
            ))}
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Button variant="contained" color="primary" onClick={handleDone} sx={{ mt: 2 }}>
                Done
              </Button>
            </Box>
          </Box>
          <Divider orientation="vertical" flexItem />
          <Box sx={{ flex: 1, pl: 2 }}>
            <Typography variant="h6" gutterBottom>
              Attendance Report
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="count" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
            {showCounts && (
              <Box sx={{ mt: 2 }}>
                <Typography variant="h6">Total Present: {presentCount}</Typography>
                <Typography variant="h6">Total Absent: {absentCount}</Typography>
              </Box>
            )}
          </Box>
        </Box>
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
          message="Attendance marked successfully!"
        />
      </Box>
    </ThemeProvider>
  );
};

export default StudentAttendance;

