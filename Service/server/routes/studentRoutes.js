const express = require('express');
const router = express.Router();
const Student = require('../models/studentModel');

router.get('/', (req, res) => {
    Student.getAllStudents((err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
});

router.get('/category/:id', (req, res) => {
    const categoryId = req.params.id;
    Student.getAllStudentsByCateogry(categoryId, (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
});

router.post('/', (req, res) => {
    const studentData = req.body;
    Student.createStudent(studentData, (err, results) => {
        if (err) return res.status(500).send(err);
        res.status(201).json({ id: results.insertId, ...studentData });
    });
});

router.put('/vote/:id', (req, res) => {
    const studentId = req.params.id;
    Student.updateVotes(studentId, (err, results) => {
        if (err) return res.status(500).send(err);
        res.json({ message: 'Vote added successfully' });
    });
});

router.delete('/delete/:id', (req, res) => {
    const studentId = req.params.id;
    Student.deleteStudent(studentId, (err, results) => {
        if (err) return res.status(500).send(err);
        res.json({ message: 'Student deleted successfully' });
    });
});

module.exports = router;
