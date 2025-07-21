// bookCategory.routes.js

const express = require('express');
const router = express.Router();

const bookCategoryController = require('./bookCategory.controller');

// Create a new category
router.post('/', bookCategoryController.createCategory);

// Get all categories
router.get('/', bookCategoryController.getAllCategories);

// Get a category by ID
router.get('/:id', bookCategoryController.getCategoryById);

// Update a category by ID
router.put('/', bookCategoryController.updateCategory);

// Delete a category by ID
router.delete('/:id', bookCategoryController.deleteCategory);

module.exports = router;
