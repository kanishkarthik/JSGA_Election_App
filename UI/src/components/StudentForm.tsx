import { useState, useRef, useEffect } from 'react';
import { student } from '../types/student';
import studentService from '../services/studentService';
import categoryService from '../services/categoryService';

// create type for the argument
export type StudentFormProps = {
    onSuccess: (id: string) => void
}
const currentYear = new Date().getFullYear();
const grades: number[] = [...Array(12).keys()].map((i: number) => i + 1).reverse();
const StudentForm = ({ onSuccess }: StudentFormProps) => {
    const [categories, setCategories] = useState([]);
    const photoInputRef = useRef(null);

    useEffect(() => {
        categoryService.getCategories()
            .then((categories) => {
                setCategories(categories);
            }).catch((error) => {
                console.log(error);
            });
    }, []);

    const [newStudent, setNewStudent] = useState({
        academic_year: currentYear,
        category_id: 0,
        name: "",
        rollno: "",
        image: null,
        grade: ""
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

    const handleSubmit = (e: any) => {
        e.preventDefault();
        // addStudent(newStudent);
        newStudent.elected = newStudent.elected == "on" ? 'Y' : '';
        //newStudent.image = newStudent.image?.toString().split('data:image/jpeg;base64,')[1];
        studentService.addStudent(newStudent)
            .then(response => {
                setNewStudent({
                    academic_year: currentYear,
                    category_id: 0,
                    name: "",
                    rollno: "",
                    image: "",
                    grade: "",
                    elected: ""
                } as student);
                if (photoInputRef != null && photoInputRef.current != null) {
                    (photoInputRef.current as HTMLInputElement).value = '';
                }
                onSuccess(response["id"]);
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
                    {
                        categories.map((category: any) => <option value={category.id}>{category.name}</option>)
                    }

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
                <select
                    name="grade"
                    onChange={handleChange}
                    value={newStudent.grade}
                    required
                >
                    <option value="">Select Grade</option>
                    {
                        grades.map((grade: any) => <option value={grade}>{grade}</option>)
                    }

                </select>
                {/* <input
                    type="text"
                    name="grade"
                    value={newStudent.grade}
                    onChange={handleChange}
                    autoComplete='off'
                    required
                /> */}
            </div>
            <div className="form-row">
                <label className="form-label">Elected:</label>
                <input
                    type="checkbox"
                    name="elected"
                    onChange={handleChange}
                />
            </div>
            <br />
            <button className='add-student-btn' type="submit">Add Student</button>
        </form>
    )
}
export default StudentForm;
