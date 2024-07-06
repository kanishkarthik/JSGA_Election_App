import { useState } from "react";
import { student } from "../types/student";
import ConfirmationModal from "./ConfirmationModal";
import studentService from "../services/studentService";

type PropsData = {
  student: student,
  onVote: (status: boolean, message: string) => void
  categoryMessage: string  
}
const StudentCard = ({ student, onVote , categoryMessage}: PropsData) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleVoteClick = () => {
    setIsModalOpen(true);
  };

  const handleConfirmVote = () => {
    setIsModalOpen(false);
    studentService.voteStudent(student.id).then(() => {
      onVote(true, `You have successfully voted for ${student.name}!`);
    }).catch(error => {
        console.error('There was an error fetching the students!', error);
      });
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="student-card">
      <img src={student.image?.toString()} alt={student.name} className="student-photo" />
      <div className="student-details">
        <h3>{student.name}</h3>
        <p>Grade: <span className="grade">{student.grade}</span></p>
        {student.elected && <span className="student-elected">Elected as {categoryMessage}</span>}
        {!student.elected && <button onClick={handleVoteClick}>Vote</button>}
      </div>
      <ConfirmationModal
        isOpen={isModalOpen}
        title="Confirm Your Vote"
        message={`Are you sure you want to vote for  ${student.name}?`}
        onCancel={handleCloseModal}
        onConfirm={handleConfirmVote}
      />
    </div>
  );
};

export default StudentCard;
