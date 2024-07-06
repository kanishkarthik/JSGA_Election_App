import { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Drawer,
  MenuItem,
  InputLabel,
  FormControl,
  Typography,
  Snackbar,
  Alert,
  Select,
} from '@mui/material';
import StudentTable from './StudentTable';
import { student } from '../types/student';
import studentService from '../services/studentService';
import StudentForm from './StudentForm';
import categoryService from '../services/categoryService';

const initialValues: student[] = [];
// const currentYear = new Date().getFullYear();
// const academicYears: number[] = [...Array(3).keys()].map((i: number) => currentYear - i);
const grades: number[] = [...Array(12).keys()].map((i: number) => i + 1).reverse();

const ManageStudents = () => {
  const [students, setStudents] = useState(initialValues);
  const [allStudents, setAllStudents] = useState(initialValues);
  const [successMessage, setSuccessMessage] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [fetchStudent, setFetchStudent] = useState("");
  // const [filterAcademicYear, setFilterAcademicYear] = useState(0);
  const [filterEvaluationCategory, setFilterEvaluationCategory] = useState(0);
  const [filterGrade, setFilterGrade] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    categoryService.getCategories()
      .then((categories: any) => {
        setCategories(categories);
      }).catch((error) => {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    studentService.getStudents()
      .then(data => {
        if (data && Array.isArray(data)) {
          setStudents(data);
          setAllStudents(data);
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
  const clearSuccessMessage = () => {
    // setTimeout(() => {
    //   setSuccessMessage('');
    // }, 5000);
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
  const handleFilter = () => {
    let filteredStudents = [...allStudents];

    // if (filterAcademicYear) {
    //   filteredStudents = filteredStudents.filter(student => student.academic_year === filterAcademicYear);
    // }

    if (filterEvaluationCategory) {
      filteredStudents = filteredStudents.filter(student => student.category_id === filterEvaluationCategory);
    }

    if (filterGrade) {
      filteredStudents = filteredStudents.filter(student => student.grade === filterGrade);
    }

    setStudents(filteredStudents);
  };

  // const handleResetFilters = () => {
  //   setFilterAcademicYear(0);
  //   setFilterEvaluationCategory(0);
  //   setFilterGrade('');
  // };
  return (
    <div>
      <h2>Manage Students</h2>
      {/* {successMessage && <div className="success-message">{successMessage}</div>} */}
      <Snackbar open={Boolean(successMessage)} autoHideDuration={5000} onClose={() => setSuccessMessage('')}>
        <Alert onClose={() => setSuccessMessage('')} severity="success" sx={{ width: '100%' }}>
          {successMessage}
        </Alert>
      </Snackbar>
      {/* <Button variant="contained" color="primary" className='add-student-btn' onClick={toggleDrawer(true)}>
        Add Student
      </Button> */}
      <Box p={2}>
        <Box display="flex" justifyContent="space-between" mb={2}>
          <Button variant="contained" color="primary" onClick={toggleDrawer(true)}>
            <strong>Add Student</strong>
          </Button>
          <Box display="flex" gap={2}>
            {/* <FormControl variant="outlined">
              <InputLabel>Academic Year</InputLabel>
              <Select
                value={filterAcademicYear}
                onChange={(e: any) => setFilterAcademicYear(e.target.value)}
                label="Academic Year"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {
                  academicYears.map((year: number) => <MenuItem value={year}>{year}</MenuItem>)
                }
              </Select>
            </FormControl> */}
            <FormControl variant="outlined">
              <InputLabel>Evaluation Category</InputLabel>
              <Select
                value={filterEvaluationCategory}
                onChange={(e: any) => setFilterEvaluationCategory(e.target.value)}
                label="Evaluation Category"
              >
                <MenuItem key={"category_None"} value="">
                  <em>None</em>
                </MenuItem>
                {
                  categories.map((category: any) => <MenuItem key={category.id} value={category.id}>{category.name}</MenuItem>)
                }
              </Select>
            </FormControl>
            <FormControl variant="outlined">
              <InputLabel>Grade</InputLabel>
              <Select
                value={filterGrade}
                onChange={(e) => setFilterGrade(e.target.value)}
                label="Grade"
              >
                <MenuItem key={"Grade_None"} value="">
                  <em>None</em>
                </MenuItem>
                {
                  grades.map((grade: any) => <MenuItem key={grade} value={grade}>{grade}</MenuItem>)
                }
              </Select>
            </FormControl>
            <Button variant="contained" color="secondary" onClick={handleFilter}>
              Filter
            </Button>
          </Box>
        </Box>
        <Box className='grid-container'>
          <StudentTable students={students} onDeleteStudent={handleDeleteStudent} />
        </Box>
        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
          <div style={{ width: 500, padding: 20 }}>
            <Typography variant="h4">
              <strong>Create Student</strong>
            </Typography>
            <br />
            <StudentForm onSuccess={handleSuccess} />
          </div>
        </Drawer>
      </Box>
    </div>
  );


};

export default ManageStudents;
