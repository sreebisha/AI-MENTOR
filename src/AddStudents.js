import React, { useState } from 'react';
import {
    Box,
    Button,
    Container,
    FormControlLabel,
    Grid,
    Paper,
    Switch,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
    Typography
} from '@mui/material';

const AddStudents = () => {
    // Define initial student data
    const initialStudents = [
        { id: 1, academicYear: '2024', program: 'Computer Science', course: 'Web Development', studentName: 'John Doe', registration: '2024001', isEnabled: true },
        { id: 2, academicYear: '2024', program: 'Computer Science', course: 'Database Management', studentName: 'Jane Doe', registration: '2024002', isEnabled: false },
        { id: 3, academicYear: '2024', program: 'Computer Science', course: 'Data Structures', studentName: 'Alice Smith', registration: '2024003', isEnabled: true },
        { id: 4, academicYear: '2024', program: 'Computer Science', course: 'Algorithms', studentName: 'Bob Johnson', registration: '2024004', isEnabled: true },
    ];

    // State to manage student data
    const [students, setStudents] = useState(initialStudents);

    // State to manage new student data
    const [newStudentData, setNewStudentData] = useState({
        academicYear: '',
        program: '',
        course: '',
        studentName: '',
        registration: ''
    });

    // Function to toggle student status (enable/disable)
    const toggleStudentStatus = (id) => {
        setStudents(prevStudents =>
            prevStudents.map(student =>
                student.id === id ? { ...student, isEnabled: !student.isEnabled } : student
            )
        );
    };

    // Function to validate if all fields are filled
    const validateFields = () => {
        for (const key in newStudentData) {
            if (!newStudentData[key]) {
                alert(`Please fill in the ${key.replace(/([A-Z])/g, ' $1').trim()}`);
                return false;
            }
        }
        return true;
    };

    // Function to add a new student
    const addStudent = () => {
        if (validateFields()) {
            const newStudent = {
                id: students.length + 1, // Increment ID for new student
                ...newStudentData,
                isEnabled: true // New students are enabled by default
            };
            setStudents(prevStudents => [...prevStudents, newStudent]);
            setNewStudentData({
                academicYear: '',
                program: '',
                course: '',
                studentName: '',
                registration: ''
            });
        }
    };

    // Function to delete a student
    const deleteStudent = (id) => {
        setStudents(prevStudents => prevStudents.filter(student => student.id !== id));
    };

    // Define a placeholder function for editing student data
    const editStudent = (id) => {
        console.log(`Editing student with ID ${id}`);
    };

    return (
        <Container>
             <Typography variant="h4" gutterBottom sx={{ fontFamily: 'Segoe UI, Tahoma, sans-serif', fontSize: '2.5rem', fontWeight:'600' }}>
                Add Students
            </Typography>
            <Box sx={{ mb: 2, mr: 1}}>
               
                <TextField
                    label="Academic Year"
                    variant="outlined"
                    sx={{ mr: 1, width:'10em ', marginRight:'2em' }}
                    value={newStudentData.academicYear}
                    onChange={(e) => setNewStudentData({ ...newStudentData, academicYear: e.target.value })}
                    required
                />
                <TextField
                    label="Program"
                    variant="outlined"
                    sx={{ mr: 1,width:'10em ', marginRight:'2em' }}
                    value={newStudentData.program}
                    onChange={(e) => setNewStudentData({ ...newStudentData, program: e.target.value })}
                    required
                />
                <TextField
                    label="Course"
                    variant="outlined"
                    sx={{ mr: 1, width:'10em ' , marginRight:'2em' }}
                    value={newStudentData.course}
                    onChange={(e) => setNewStudentData({ ...newStudentData, course: e.target.value })}
                    required
                />
                <TextField
                    label="Student Name"
                    variant="outlined"
                    sx={{ mr: 1, width:'10em ' , marginRight:'2em'  }}
                   
                    value={newStudentData.studentName}
                    onChange={(e) => setNewStudentData({ ...newStudentData, studentName: e.target.value })}
                    required
                />
                <TextField
                    label="Registration"
                    variant="outlined"
                    sx={{ mr: 1, width:'10em ', marginRight:'10em ' }}
                    value={newStudentData.registration}
                    onChange={(e) => setNewStudentData({ ...newStudentData, registration: e.target.value })}
                    required
                />
                <Button variant="contained" color="primary" onClick={addStudent} sx={{ mt: 1 }}>
                    Add Student
                </Button>
            </Box>
            <TableContainer component={Paper} sx={{ mt: 1}}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Academic Year</TableCell>
                            <TableCell>Program</TableCell>
                            <TableCell>Course</TableCell>
                            <TableCell>Student Name</TableCell>
                            <TableCell>Registration</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {/* Render student data */}
                        {students.map((student) => (
                            <TableRow key={student.id}>
                                <TableCell>{student.academicYear}</TableCell>
                                <TableCell>{student.program}</TableCell>
                                <TableCell>{student.course}</TableCell>
                                <TableCell>{student.studentName}</TableCell>
                                <TableCell>{student.registration}</TableCell>
                                <TableCell>
                                    {/* FormControlLabel with Switch for toggling student status */}
                                    <FormControlLabel
                                        control={
                                            <Switch
                                                checked={student.isEnabled}
                                                onChange={() => toggleStudentStatus(student.id)}
                                                color="primary"
                                            />
                                        }
                                        label={student.isEnabled ? 'Enabled' : 'Disabled'}
                                    />
                                </TableCell>
                                <TableCell>

                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={() => editStudent(student.id)}
                                        disabled={!student.isEnabled} // Disable if student is not enabled
                                        sx={{ mr: 1 }}
                                    >
                                        Edit
                                    </Button>
                                    {/* Button to delete student */}
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        onClick={() => deleteStudent(student.id)}
                                        sx={{ ml: 1 }}
                                    >
                                        Delete
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default AddStudents;
