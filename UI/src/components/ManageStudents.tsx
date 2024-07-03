import { useEffect, useState } from 'react';
import { Button, Drawer, Typography } from '@mui/material';
import axios from 'axios';

import StudentTable from './StudentTable';
import { student } from '../types/student';
import StudentForm from './StudentForm';

const initialValues: student[] = [];

const ManageStudents = () => {
  const [students, setStudents] = useState(initialValues);
  const [successMessage, setSuccessMessage] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [fetchStudent, setFetchStudent] = useState("");

  useEffect(() => {
    axios.get('http://localhost:5000/students')
      .then(response => {
        if (response && Array.isArray(response.data)) {
          setStudents(response.data);
        }
      })
      .catch(error => {
        console.error('There was an error fetching the students!', error);
      });
  }, [fetchStudent]);

  const handleDeleteStudent = (studentId: number) => {
    axios.delete('http://localhost:5000/students/delete/'+studentId)
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
