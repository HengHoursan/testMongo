// bookCategory.model.js

const mongoose = require('mongoose');

const bookCategorySchema = new mongoose.Schema({
    name: {
    type: String,
    required: true,
    trim: true,
    unique: true // category names should be unique
    },
    description: {
    type: String,
    default: '',
    trim: true
    },
    createdAt: {
    type: Date,
    default: Date.now
    }
});

// Export as 'BookCategory' model
module.exports = mongoose.model('BookCategory', bookCategorySchema);
