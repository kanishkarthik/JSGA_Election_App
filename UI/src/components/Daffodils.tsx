import { useEffect, useState } from 'react';
import StudentCard from './StudentCard';
import { student } from '../types/student';
import studentService from '../services/studentService';
import { Divider } from '@mui/material';

const Daffodils = () => {
  const [studentCaptainList, setStudentCaptainList] = useState([] as student[]);
  const [studentViceCaptainList, setStudentViceCaptainList] = useState([] as student[]);
  const [successMessage, setSuccessMessage] = useState("");
  useEffect(() => {
    studentService.getStudentsByCategory(12)
      .then(data => {
        if (data && Array.isArray(data)) {
            setStudentCaptainList(data);
        }
      })
      .catch(error => {
        console.error('There was an error fetching the students!', error);
      });
      studentService.getStudentsByCategory(13)
      .then(data => {
        if (data && Array.isArray(data)) {
            setStudentViceCaptainList(data);
        }
      })
      .catch(error => {
        console.error('There was an error fetching the students!', error);
      });
  }, []);

  const handleVote = (status: boolean, message: string) => {
    if (status) {
      setSuccessMessage(message);
    }
    setTimeout(() => {
      setSuccessMessage('');
    }, 5000);
  };

  return (
    <div>
      <h2>Student Election Council - Daffodils Captain</h2>
      {successMessage && <div className="success-message">{successMessage}</div>}
      <div className="student-cards-container">
        {studentCaptainList.map((student: student) => (
          <StudentCard key={student.id} student={student} onVote={handleVote} categoryMessage={"Daffodils Captain"} />
        ))}
      </div>
      <Divider/>
      <h2>Student Election Council - Daffodils Vice Captain</h2>
      <div className="student-cards-container">
        {studentViceCaptainList.map((student: student) => (
          <StudentCard key={student.id} student={student} onVote={handleVote} categoryMessage={"Daffodils Vice Captain"} />
        ))}
      </div>
    </div>
  );
};

export default Daffodils;
