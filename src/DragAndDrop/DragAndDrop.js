import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Student from './Student';
import GroupBucket from './GroupBucket';
import './style.css';


const initialStudents = [  // inilialize std id, name, pic url
  { id: 1, name: 'Student 1', photo: 'https://picsum.photos/40?random=1' },
  { id: 2, name: 'Student 2', photo: 'https://picsum.photos/40?random=2' },
  { id: 3, name: 'Student 3', photo: 'https://picsum.photos/40?random=3' },
  { id: 4, name: 'Student 4', photo: 'https://picsum.photos/40?random=4' },
  { id: 5, name: 'Student 5', photo: 'https://picsum.photos/40?random=5' },
  { id: 6, name: 'Student 6', photo: 'https://picsum.photos/40?random=6' },
  { id: 7, name: 'Student 7', photo: 'https://picsum.photos/40?random=7' },
  { id: 8, name: 'Student 8', photo: 'https://picsum.photos/40?random=8' },
  { id: 9, name: 'Student 9', photo: 'https://picsum.photos/40?random=9' },
  { id: 10, name: 'Student 10', photo: 'https://picsum.photos/40?random=10' },
  { id: 11, name: 'Student 11', photo: 'https://picsum.photos/40?random=11' },
  { id: 12, name: 'Student 12', photo: 'https://picsum.photos/40?random=12' },
  { id: 13, name: 'Student 13', photo: 'https://picsum.photos/40?random=13' },
  { id: 14, name: 'Student 14', photo: 'https://picsum.photos/40?random=14' },
  { id: 15, name: 'Student 15', photo: 'https://picsum.photos/40?random=15' },
];


const initialGroups = [   // grp data with id, name, an empty array[]
  { id: 1, name: 'Group 1', students: [] },
  { id: 2, name: 'Group 2', students: [] },
  { id: 3, name: 'Group 3', students: [] },

];


const DragAndDrop = () => {   //dnd function
  const [students, setStudents] = useState(initialStudents);     // state variables for std nd grp and they have initial val is initialStudents & initialGroups
  const [groups, setGroups] = useState(initialGroups);

  const handleDrop = (studentId, groupId) => {    // handle dropping std into a grp
    setStudents((prevStudents) =>
      prevStudents.filter((student) => student.id !== studentId)
    );

    setGroups((prevGroups) => 
      prevGroups.map((group) => {
        if (group.id === groupId) {
          const student = initialStudents.find((s) => s.id === studentId);
          return {
            ...group,
            students: [...group.students, student],
          };
        }
        return group;
      })
    );
  };


  const handleRedo = (studentId) => {      // func to handle removing a student back to the student container
    const student = initialStudents.find((s) => s.id === studentId);
    setGroups((prevGroups) =>
      prevGroups.map((group) => ({
        ...group,
        students: group.students.filter((student) => student.id !== studentId)
      }))
    );
    setStudents((prevStudents) => [...prevStudents, student]);
  };


  const addGroup = () => {      // func to add a new grp
    const newGroupId = groups.length + 1;
    const newGroup = { id: newGroupId, name: `Group ${newGroupId}`, students: [] };
    setGroups([...groups, newGroup]);
  };


  return (
    <DndProvider backend={HTML5Backend}>
      <h1 className="main-header">Assign Group to Students</h1>
      <div className="drag-and-drop-container">
        <div className="students-container">
          <h2 className="section-header">Students</h2>
          {students.map((student) => (
            <Student key={student.id} student={student} handleRedo={handleRedo} />
          ))}
        </div>
        <div className="groups-container">
          <h2 className="section-header">Groups</h2>
          <div className="group-grid">
            {groups.map((group) => (
              <GroupBucket key={group.id} group={group} handleDrop={handleDrop} handleRedo={handleRedo} />
            ))}
          </div>
          <div className="button-container">
            <button onClick={addGroup} className="add-group-button">Add Group</button>
          </div>
        </div>
      </div>
    </DndProvider>
  );
};


export default DragAndDrop;
