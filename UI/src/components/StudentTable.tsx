import React, { useState } from 'react';
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  TableSortLabel,
} from '@mui/material';
import { student } from "../types/student";
import ConfirmationModal from './ConfirmationModal';

type Props = { students: student[], onDeleteStudent: (id: number) => void };

const StudentTable = ({ students, onDeleteStudent }: Props) => {
  const [deleteMessage, setDeleteMessage] = useState("");
  const [deleteStudentId, setDeleteStudentId] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [order, setOrder] = useState<'asc' | 'desc'>('asc');
  const [orderBy, setOrderBy] = useState('');

  const handleDelete = (studentId: number) => {
    setIsModalOpen(true);
    setDeleteStudentId(studentId);
    setDeleteMessage("Are you sure you want to delete this student?");
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleOkModal = () => {
    setIsModalOpen(false);
    onDeleteStudent(deleteStudentId);
    setDeleteStudentId(0);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleRequestSort = (property: string) => (event: React.MouseEvent<unknown>) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const sortedStudents = students.slice().sort((a:any, b:any) => {
    if (a[orderBy] < b[orderBy]) {
      return order === 'asc' ? -1 : 1;
    }
    if (a[orderBy] > b[orderBy]) {
      return order === 'asc' ? 1 : -1;
    }
    return 0;
  });

  const paginatedStudents = sortedStudents.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <>
      <TableContainer component={Paper}>
        <Table className="student-table">
          <TableHead>
            <TableRow>
              <TableCell sortDirection={orderBy === 'academic_year' ? order : false}>
                <TableSortLabel
                  active={orderBy === 'academic_year'}
                  direction={orderBy === 'academic_year' ? order : 'asc'}
                  onClick={handleRequestSort('academic_year')}
                >
                  Academic Year
                </TableSortLabel>
              </TableCell>
              <TableCell sortDirection={orderBy === 'category_name' ? order : false}>
                <TableSortLabel
                  active={orderBy === 'category_name'}
                  direction={orderBy === 'category_name' ? order : 'asc'}
                  onClick={handleRequestSort('category_name')}
                >
                  Evaluation Category
                </TableSortLabel>
              </TableCell>
              <TableCell sortDirection={orderBy === 'name' ? order : false}>
                <TableSortLabel
                  active={orderBy === 'name'}
                  direction={orderBy === 'name' ? order : 'asc'}
                  onClick={handleRequestSort('name')}
                >
                  Student Name
                </TableSortLabel>
              </TableCell>
              <TableCell>
                Student Photo
              </TableCell>
              <TableCell sortDirection={orderBy === 'grade' ? order : false}>
                <TableSortLabel
                  active={orderBy === 'grade'}
                  direction={orderBy === 'grade' ? order : 'asc'}
                  onClick={handleRequestSort('grade')}
                >
                  Grade
                </TableSortLabel>
              </TableCell>
              <TableCell sortDirection={orderBy === 'total_vote' ? order : false}>
                <TableSortLabel
                  active={orderBy === 'total_vote'}
                  direction={orderBy === 'total_vote' ? order : 'asc'}
                  onClick={handleRequestSort('total_vote')}
                >
                  Total Votes
                </TableSortLabel>
              </TableCell>
              <TableCell>
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedStudents.map((student: any, index: number) => (
              <TableRow key={index}>
                <TableCell>{student.academic_year}</TableCell>
                <TableCell><strong>{student.category_name}</strong></TableCell>
                <TableCell>{student.name}</TableCell>
                <TableCell className="center-align">
                  <img src={student.photo} title={`${student.name}`} alt={`${student.name}'s photo`} className="student-photo" />
                </TableCell>
                <TableCell className="right-align">{student.grade}</TableCell>
                <TableCell className="right-align">{student.total_vote}</TableCell>
                <TableCell className="center-align">
                  <Button variant="contained" color="secondary" onClick={() => handleDelete(student.id)}>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          component="div"
          count={students.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          rowsPerPageOptions={[5, 10, 25]}
        />
      </TableContainer>

      <ConfirmationModal
        isOpen={isModalOpen}
        title="Confirm Delete"
        message={deleteMessage}
        onCancel={handleCloseModal}
        onConfirm={handleOkModal}
      />
    </>
  );
};

export default StudentTable;
