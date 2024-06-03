// src/components/StudentMarks.js
import React, { useEffect, useState } from 'react';
import { Container, Typography, Avatar, Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

// Function to generate dummy student data
const generateDummyStudents = () => {
    const students = [];
    for (let i = 1; i <= 30; i++) {
        students.push({
            id: i,
            registrationNumber: `REG${1000 + i}`, // Dummy registration number
            name: `Student ${i}`,
            picture: `https://randomuser.me/api/portraits/thumb/men/${i}.jpg`,
            marks: Math.floor(Math.random() * 101) // Random marks between 0 and 100
        });
    }
    return students;
};

const StudentMarks = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        setStudents(generateDummyStudents());
    }, []);

    const handleEditCellChange = ({ id, field, props }) => {
        if (field === 'marks') {
            const data = props; // Correct type from the props
            setStudents((prevStudents) =>
                prevStudents.map((student) =>
                    student.id === id ? { ...student, marks: data.value } : student
                )
            );
        }
    };

    const columns = [
        {
            field: 'picture',
            headerName: 'Picture',
            width: 100,
            renderCell: (params) => <Avatar alt={params.row.name} src={params.value} />
        },
        { field: 'registrationNumber', headerName: 'Registration Number', width: 200 },
        { field: 'name', headerName: 'Name', width: 200 },
        {
            field: 'marks',
            headerName: 'Marks',
            width: 150,
            editable: true
        }
    ];

    return (
        <Container>
            <Typography variant="h4" gutterBottom sx={{ fontFamily: 'Segoe UI, Tahoma, sans-serif', fontSize: '2.5rem', fontWeight:'600' }}>
                Student Marks
            </Typography>
            <Box sx={{ height: 600, width: '100%' }}>
                <DataGrid
                    rows={students}
                    columns={columns}
                    pageSize={10}
                    rowsPerPageOptions={[10]}
                    onEditCellPropsChange={handleEditCellChange}
                />
            </Box>
        </Container>
    );
};

export default StudentMarks;
