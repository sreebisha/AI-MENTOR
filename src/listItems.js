// src/listItems.js
import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import { Link as RouterLink } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AssignmentIcon from '@mui/icons-material/Assignment';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SchoolIcon from '@mui/icons-material/School';
import QuizIcon from '@mui/icons-material/Quiz';
import GradeIcon from '@mui/icons-material/Grade';
import BarChartIcon from '@mui/icons-material/BarChart';


export const mainListItems = (
    <div>
        <ListItem button component={RouterLink} to="/">
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={RouterLink} to="/add-students">
            <ListItemIcon>
                <PersonAddIcon />
            </ListItemIcon>
            <ListItemText primary="Add Students" />
        </ListItem>
        <ListItem button component={RouterLink} to="/drag-and-drop">
            <ListItemIcon>
                <GroupAddIcon />
            </ListItemIcon>
            <ListItemText primary="Add Student Group" />
        </ListItem>
        <ListItem button component={RouterLink} to="/attendance">
            <ListItemIcon>
                <CheckCircleIcon />
            </ListItemIcon>
            <ListItemText primary="Attendance" />
        </ListItem>
        <ListItem button component={RouterLink} to="/course-outcome">
            <ListItemIcon>
                <SchoolIcon />
            </ListItemIcon>
            <ListItemText primary="Course Outcome" />
        </ListItem>
        <ListItem button component={RouterLink} to="/assessment-questions">
            <ListItemIcon>
                <QuizIcon />
            </ListItemIcon>
            <ListItemText primary="Assessment Questions" />
        </ListItem>
        <ListItem button component={RouterLink} to="/marks">
            <ListItemIcon>
                <GradeIcon />
            </ListItemIcon>
            <ListItemText primary="Marks" />
        </ListItem>
        {/* <ListItem button component={RouterLink} to="/reports">
            <ListItemIcon>
                <BarChartIcon />
            </ListItemIcon>
            <ListItemText primary="Reports" />
        </ListItem> */}
        {/* <ListItem button component={RouterLink} to="/lms"> 
             <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary={
                <Typography component="span" variant="body2">
                    Learning management<br />System
                </Typography>
            } /> 
        </ListItem>  */}
    </div>
);

// export const secondaryListItems = (
//     <div>
//         <ListSubheader inset>Saved reports</ListSubheader>
//         <ListItem button>
//             <ListItemIcon>
//                 <AssignmentIcon />
//             </ListItemIcon>
//             <ListItemText primary="Current month" />
//         </ListItem>
//         <ListItem button>
//             <ListItemIcon>
//                 <AssignmentIcon />
//             </ListItemIcon>
//             <ListItemText primary="Last quarter" />
//         </ListItem>
//         <ListItem button>
//             <ListItemIcon>
//                 <AssignmentIcon />
//             </ListItemIcon>
//             <ListItemText primary="Year-end sale" />
//         </ListItem>
//     </div>
// );
