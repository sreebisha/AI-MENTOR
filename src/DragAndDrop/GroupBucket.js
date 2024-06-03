import React from 'react';
import { useDrop } from 'react-dnd';
import { ItemTypes } from './ItemTypes';
import { FaRedo } from 'react-icons/fa'; // redo icon
import './style.css';

// Dummy placeholder image URL
const placeholderImageUrl = 'https://via.placeholder.com/150';

const GroupBucket = ({ group, handleDrop, handleRedo }) => {
  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.STUDENT,
    drop: (item) => handleDrop(item.id, group.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <div ref={drop} className="group-bucket" style={{ backgroundColor: isOver ? '#e0e0e0' : '#f9f9f9' }}>
      <h3 className="group-name">{group.name}</h3>
      <div className="group-students">
        {group.students.map((student) => (
          <div key={student.id} className="group-student">
            <img
              src={student.photo || placeholderImageUrl}
              alt={student.name}
              className="group-student-photo"
            />
            <span className="group-student-name">{student.name}</span>
            <FaRedo className="redo-icon" onClick={() => handleRedo(student.id)} /> 
          </div>
        ))}
      </div>
    </div>
  );
};

export default GroupBucket;
