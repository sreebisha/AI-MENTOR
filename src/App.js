// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Dashboard from './Dashboard';
import AddStudents from './AddStudents';
import DragAndDrop from './AddStudentGroup/DragAndDrop';
import Attendance from './Attendance/StudentAttendance.js';
import CourseOutcome from './CourseOutcome';
import AssessmentQuestions from './AssessmentQuestions';
import Marks from './Marks';
import Reports from './Reports';

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/add-students" element={<AddStudents />} />
                    <Route path="/drag-and-drop" element={<DragAndDrop />} />
                    <Route path="/attendance" element={<Attendance />} />
                    <Route path="/course-outcome" element={<CourseOutcome />} />
                    <Route path="/assessment-questions" element={<AssessmentQuestions />} />
                    <Route path="/marks" element={<Marks />} />
                    <Route path="/reports" element={<Reports />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
