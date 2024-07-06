const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const studentRoutes = require('./routes/studentRoutes');
const categoriesRoutes = require('./routes/categoriesRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb' }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/v1/students', studentRoutes);
app.use('/api/v1/categories', categoriesRoutes);
app.use("/", (req, res) => {
    res.send("Application up and running!");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// app.listen(PORT, '0.0.0.0', () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });
