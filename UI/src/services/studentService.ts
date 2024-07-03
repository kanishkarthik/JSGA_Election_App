import axios from 'axios';
import { student } from '../types/student';

const API_URL = 'http://localhost:5000/students'; 

const getStudents = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        throw error;
    }
};

const addStudent = async (student: student) => {
    try {
        const response = await axios.post(API_URL, student);
        return response.data;
    } catch (error) {
        throw error;
    }
};

const voteStudent = async (studentId: number) => {
    try {
        const response = await axios.put(`${API_URL}/vote/${studentId}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export default {
    getStudents,
    addStudent,
    voteStudent
};
