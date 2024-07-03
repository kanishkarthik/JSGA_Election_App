import { useEffect, useState } from 'react';
import { Button, Drawer, Typography } from '@mui/material';

import StudentTable from './StudentTable';
import { student } from '../types/student';
import StudentForm from './StudentForm';
import studentService from '../services/studentService';

const initialValues: student[] = [];

const ManageStudents = () => {
  const [students, setStudents] = useState(initialValues);
  const [successMessage, setSuccessMessage] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [fetchStudent, setFetchStudent] = useState("");

  useEffect(() => {
    studentService.getStudents()
      .then(data => {
        if (data && Array.isArray(data)) {
          setStudents(data);
        }
      })
      .catch(error => {
        console.error('There was an error fetching the students!', error);
      });
  }, [fetchStudent]);

  const handleDeleteStudent = (studentId: number) => {
    studentService.deleteStudent(studentId)
      .then(() => {
        setSuccessMessage('Student deleted successfully!');
        setFetchStudent(studentId.toString());   
        clearSuccessMessage();  
      })
      .catch(error => {
        console.error('There was an error fetching the students!', error);
      });
  };
  const clearSuccessMessage  = () =>{
    setTimeout(() => {
      setSuccessMessage('');
    }, 5000);
  }
  const handleSuccess = (id: string) => {
    setSuccessMessage('Student added successfully!');
    setDrawerOpen(false);
    setFetchStudent(id);   
    clearSuccessMessage(); 
  };


  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };
  return (
    <div>
      <h2>Manage Students</h2>
      {successMessage && <div className="success-message">{successMessage}</div>}
      <Button variant="contained" color="primary" className='add-student-btn' onClick={toggleDrawer(true)}>
        Add Student
      </Button>
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <div style={{ width: 500, padding: 20 }}>
          <Typography variant="h4">
            <strong>Create Student</strong>
          </Typography>
          <br />
          <StudentForm onSuccess={handleSuccess} />
        </div>
      </Drawer>
      <StudentTable students={students} onDeleteStudent={handleDeleteStudent} />
    </div>
  );
};

export default ManageStudents;
