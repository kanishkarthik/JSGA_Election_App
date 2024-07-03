const { query } = require('express');
const db = require('./db');

const Categories = {   
    getCategories: (callback) => {
        const query = 'SELECT * FROM evaluation_category';
        db.query(query, callback);
    }
};

module.exports = Categories;


