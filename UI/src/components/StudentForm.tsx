import { useState, useRef } from 'react';
import axios from 'axios';
import { student } from '../types/student';

// create type for the argument
export type StudentFormProps = {
    onSuccess : (id: string) => void
}

const StudentForm = ({onSuccess} : StudentFormProps) => {
    const year = new Date().getFullYear();
    const photoInputRef = useRef(null);

    const [newStudent, setNewStudent] = useState({
        academic_year: year,
        category_id : 0,
        name : "",
        rollno : "",
        image :  null,
        grade : ""
    } as student);

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setNewStudent({ ...newStudent, [name]: value });
    };

    const handleFileChange = (e: any) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setNewStudent({ ...newStudent, image: reader.result });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e : any) => {
        e.preventDefault();
        // addStudent(newStudent);
        newStudent.elected = newStudent.elected == "on" ? 'Y' : '';
        //newStudent.image = newStudent.image?.toString().split('data:image/jpeg;base64,')[1];
        axios.post('http://localhost:5000/students', newStudent)
        .then(response => {
            setNewStudent({
                academic_year: year,
                category_id : 0,
                name : "",
                rollno : "",
                image :  "",
                grade : "",
                elected: ""
            } as student);
            if(photoInputRef != null && photoInputRef.current != null){
                (photoInputRef.current as HTMLInputElement).value  = '';
            }
            onSuccess(response.data["id"]);
        })
        .catch(error => {
            console.error('There was an error adding the student!', error);
        });        
      };
      

    return (
        <form onSubmit={handleSubmit} className="student-form">
            <div className="form-row">
                <label className="form-label">Academic Year:</label>
                <input
                    type="text"
                    name="academic_year"
                    value={newStudent.academic_year}
                    readOnly
                    autoComplete='off'
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-row">
                <label className="form-label">Evaluation Category:</label>
                <select
                    name="category_id"
                    onChange={handleChange}
                    value={newStudent.category_id}
                    required
                >
                    <option value="">Select Category</option>
                    <option value="1">Head Boy</option>
                    <option value="2">Head Girl</option>
                </select>
            </div>
            <div className="form-row">
                <label className="form-label">Student Name:</label>
                <input
                    type="text"
                    name="name"
                    value={newStudent.name}
                    onChange={handleChange}
                    autoComplete='off'
                    required
                />
            </div>
            <div className="form-row">
                <label className="form-label">Roll No:</label>
                <input
                    type="text"
                    name="rollno"
                    value={newStudent.rollno}
                    onChange={handleChange}
                    autoComplete='off'
                    required
                />
            </div>
            <div className="form-row">
                <label className="form-label">Student Photo:</label>
                <input
                    type="file"
                    id="photo"
                    name="photo"
                    onChange={handleFileChange}
                    ref={photoInputRef}
                    required
                />
            </div>
            <div className="form-row">
                <label className="form-label">Grade:</label>
                <input
                    type="text"
                    name="grade"
                    value={newStudent.grade}
                    onChange={handleChange}
                    autoComplete='off'
                    required
                />
            </div>
            <div className="form-row">
                <label className="form-label">Elected:</label>
                <input
                    type="checkbox"
                    name="elected"
                    onChange={handleChange}
                />
            </div>
            <br/>
            <button className='add-student-btn' type="submit">Add Student</button>
        </form>
    )
}
export default StudentForm;
