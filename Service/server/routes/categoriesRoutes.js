const express = require('express');
const router = express.Router();
const Categories = require('../models/categoriesModel');

router.get('/', (req, res) => {
    Categories.getCategories((err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
});

module.exports = router;
