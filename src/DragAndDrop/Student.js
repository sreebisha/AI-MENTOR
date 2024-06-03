import React from 'react';
import { useDrag } from 'react-dnd';
import './style.css';

const placeholderImageUrl = 'https://via.placeholder.com/150';  
const Student = ({ student }) => {              // std component as fucntional component which accepts a std object a a prop
  
  const [{ isDragging }, drag] = useDrag(() => ({       // react dnd-> useDrag hook 
    type: 'student',
    item: { id: student.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      className="student-card"
      ref={drag}
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      <div className="student-photo">
        <img
          src={student.photo || placeholderImageUrl}
          alt={student.name}
          style={{ width: '40px', height: '40px', borderRadius: '50%' }}
        />
      </div>
      <div className="student-name">{student.name}</div>
    </div>
  );
};

export default Student;
