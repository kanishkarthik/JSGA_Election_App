import { useState, useRef } from 'react';
import {
    TextField, Select, MenuItem, FormControl,
    InputLabel, Button, Box, Checkbox, FormControlLabel,
    Divider
} from '@mui/material';
import { student } from '../types/student';
import studentService from '../services/studentService';
// import categoryService from '../services/categoryService';
import { useAppContext } from '../context/AppContext';

export type StudentFormProps = {
    onSuccess: (id: string) => void
}

const currentYear = new Date().getFullYear();
const grades: number[] = [...Array(12).keys()].map((i: number) => i + 1).reverse();

const StudentForm = ({ onSuccess }: StudentFormProps) => {
    const { categories } = useAppContext();

    // const [categories, setCategories] = useState([]);
    const photoInputRef = useRef(null);

    // useEffect(() => {
    //     categoryService.getCategories()
    //         .then((categories) => {
    //             setCategories(categories);
    //         }).catch((error) => {
    //             console.log(error);
    //         });
    // }, []);

    const [newStudent, setNewStudent] = useState({
        academic_year: currentYear,
        category_id: 0,
        name: "",
        rollno: "",
        image: null,
        grade: "",
        elected: ""
    } as student);

    const handleChange = (e: any) => {
        let { name, value } = e.target;
        if (['name', 'rollno'].includes(name) && value) {
            value = (value as string).toUpperCase();
        }
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
        newStudent.elected = newStudent.elected === "on" ? 'Y' : '';
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
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                maxWidth: 600,
                margin: 'auto',
                padding: 3,
                border: '1px solid #ccc',
                borderRadius: 2
            }}
        >
            <TextField
                label="Academic Year"
                name="academic_year"
                value={newStudent.academic_year}
                InputProps={{
                    readOnly: true,
                }}
                variant="outlined"
                fullWidth
                required
            />
            <FormControl fullWidth variant="outlined">
                <InputLabel id="category-label">Evaluation Category *</InputLabel>
                <Select
                    labelId="category-label"
                    name="category_id"
                    value={newStudent.category_id}
                    onChange={handleChange}
                    label="Evaluation Category"
                    required
                >
                    <MenuItem value="">
                        <em>Select Category</em>
                    </MenuItem>
                    {categories.map((category: any) => (
                        <MenuItem key={category.id} value={category.id}>
                            {category.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <TextField
                label="Student Name"
                name="name"
                value={newStudent.name}
                onChange={handleChange}
                autoComplete='off'
                variant="outlined"
                className='upper'
                fullWidth
                required
            />
            <TextField
                label="Roll No"
                name="rollno"
                value={newStudent.rollno}
                onChange={handleChange}
                autoComplete='off'
                variant="outlined"
                className='upper'
                fullWidth
                required
            />
            <Button
                variant="contained"
                component="label"
                fullWidth
            >
                Upload Photo
                <input
                    type="file"
                    hidden
                    onChange={handleFileChange}
                    ref={photoInputRef}
                    required
                />
            </Button>
            <FormControl fullWidth variant="outlined">
                <InputLabel id="grade-label">Grade</InputLabel>
                <Select
                    labelId="grade-label"
                    name="grade"
                    value={newStudent.grade}
                    onChange={handleChange}
                    label="Grade"
                    required
                >
                    <MenuItem value="">
                        <em>Select Grade</em>
                    </MenuItem>
                    {grades.map((grade) => (
                        <MenuItem key={grade} value={grade}>
                            {grade}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <FormControlLabel
                control={
                    <Checkbox
                        name="elected"
                        onChange={handleChange}
                    />
                }
                label="Elected"
            />
            <Divider />
            <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
                <Button variant="contained"
                    sx={{ borderRadius: "50px", padding: "20px", width: 200, fontSize: "1rem" }}
                    color="primary" type="submit">
                    Add Student
                </Button>
            </Box>
        </Box>
    );
}

export default StudentForm;
