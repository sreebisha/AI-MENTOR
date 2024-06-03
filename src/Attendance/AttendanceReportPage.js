// AttendanceReportPage.js
import React from 'react';

const AttendanceReportPage = ({ students }) => {
  // Calculate attendance percentage for each student
  const calculateAttendancePercentage = (student) => {
    const totalClasses = students.length;
    const presentClasses = students.filter((s) => s.status === 'Present').length;
    return ((presentClasses / totalClasses) * 100).toFixed(2);
  };

  return (
    <div>
      <h2>Attendance Report</h2>
      <table>
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Department</th>
            <th>Semester</th>
            <th>Total Percentage</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.department}</td> {/* Add department field to your initialStudents data */}
              <td>{student.semester}</td> {/* Add semester field to your initialStudents data */}
              <td>{calculateAttendancePercentage(student)}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AttendanceReportPage;
