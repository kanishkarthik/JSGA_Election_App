import { student } from "../types/student";
import ConfirmationModal from './ConfirmationModal';
import { useState } from 'react';

type Props = { students: student[], onDeleteStudent: (id: number) => void }
const StudentTable = ({ students, onDeleteStudent }: Props) => {
  const [deleteMessage, setDeleteMessage] = useState("");
  const [deleteStudentId, setDeleteStudentId] = useState(0);

  const handleDelete = (studentId: number) => {
    setIsModalOpen(true);
    setDeleteStudentId(studentId);
    setDeleteMessage("Are you sure you want to delete this student?");
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handelOkModal = () => {
    setIsModalOpen(false);
    onDeleteStudent(deleteStudentId);
    setDeleteStudentId(0);
  };
  return (
    <>
      <table className="student-table">
        <thead>
          <tr>
            <th>Academic Year</th>
            <th>Evaluation Category</th>
            <th>Student Name</th>
            <th>Student Photo</th>
            <th>Grade</th>
            <th>Total Votes</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student: any, index: number) => (

            <tr key={index}>
              <td>{student.academic_year}</td>
              <td><strong>{student.category_name}</strong></td>
              <td>{student.name}</td>
              <td><img src={student.photo} title={`${student.name}`} alt={`${student.name}'s photo`} className="student-photo" /></td>
              <td>{student.grade}</td>
              <td>{student.total_vote}</td>
              <td>
                {/* <button>Edit</button> |  */}
                <button onClick={() => handleDelete(student.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <ConfirmationModal
        isOpen={isModalOpen}
        title="Confirm Delete"
        message={deleteMessage}
        onCancel={handleCloseModal}
        onConfirm={handelOkModal}
      />
    </>
  );
};

export default StudentTable;
