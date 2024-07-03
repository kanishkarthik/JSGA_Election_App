import { useEffect, useState } from 'react';
import StudentCard from './StudentCard';
import { student } from '../types/student';
import studentService from '../services/studentService';

const HeadBoy = () => {
  const [studentList, setStudentList] = useState([] as student[]);
  const [successMessage, setSuccessMessage] = useState("");
  useEffect(() => {
    studentService.getStudentsByCategory(1)
      .then(data => {
        if (data && Array.isArray(data)) {
          setStudentList(data);
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
      <h2>Head Boy</h2>
      {successMessage && <div className="success-message">{successMessage}</div>}
      <div className="student-cards-container">
        {studentList.map((student: student) => (
          <StudentCard key={student.id} student={student} onVote={handleVote} />
        ))}
      </div>
    </div>
  );
};

export default HeadBoy;
