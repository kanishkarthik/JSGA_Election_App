const { query } = require('express');
const db = require('./db');

const Student = {
    getAllStudents: ( callback) => {
        academic_year = new Date().getFullYear();
        const query = `SELECT e.*,c.name as category_name,
        e.student_name as name, e.image as photo,
        e.student_roll_no as rollno FROM evaluation e 
        inner join evaluation_category c on c.id=e.category_id        
        order by e.academic_year desc,e.category_id,e.grade desc,e.student_name`;
        db.query(query, callback);
        // where e.academic_year=`+academic_year+`
    },
    getAllStudentsByCateogry: (categoryId, callback) => {
        academic_year = new Date().getFullYear();
        const query = `SELECT e.*,c.name as category_name,
        e.student_name as name, e.image as photo,
        e.student_roll_no as rollno FROM evaluation e 
        inner join evaluation_category c on c.id=e.category_id
        where e.academic_year=`+academic_year+` and e.category_id=`+categoryId+`
        order by e.academic_year desc,e.category_id,e.grade desc,e.student_name`;
        db.query(query, callback);
    },
    createStudent: (data, callback) => {
        const query = `INSERT INTO evaluation 
        (student_name, student_roll_no, grade, academic_year, category_id,  image, elected) 
                                VALUES ('${data['name']}', 
                                        '${data['rollno']}',
                                        '${data['grade']}',
                                        '${data['academic_year']}',
                                        '${data['category_id']}',
                                        '${data['image']}',
                                        '${data['elected']}')`;
                        
    
        db.query(query, callback);
    },
    updateVotes: (id, callback) => {
        const query = 'UPDATE evaluation SET total_vote = total_vote + 1 WHERE id = ?';
        db.query(query, [id], callback);
    },
    deleteStudent: (id, callback) => {
        const query = 'DELETE FROM evaluation WHERE id =?';
        db.query(query, [id], callback);
    }
};

module.exports = Student;


