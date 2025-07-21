// bookCategory.controller.js

const BookCategory = require('./bookCategory.model');

// Create a new category
exports.createCategory = async (req, res) => {
    try {
    const { name, description } = req.body;

    // Check if category name already exists
    const existingCategory = await BookCategory.findOne({ name });
    if (existingCategory) {
        return res.status(400).json({ message: 'Category already exists' });
    }

    const category = new BookCategory({ name, description });
    await category.save();

    res.status(201).json(category);
    } catch (error) {
    console.error('Create Category Error:', error);
    res.status(500).json({ message: 'Server error' });
    }
};

// Get all categories
exports.getAllCategories = async (req, res) => {
    try {
    const categories = await BookCategory.find();
    res.status(200).json(categories);
    } catch (error) {
    console.error('Get All Categories Error:', error);
    res.status(500).json({ message: 'Server error' });
    }
};

// Get a category by ID
exports.getCategoryById = async (req, res) => {
    try {
    const category = await BookCategory.findById(req.params.id);
    if (!category) {
        return res.status(404).json({ message: 'Category not found' });
    }
    res.status(200).json(category);
    } catch (error) {
    console.error('Get Category By ID Error:', error);
    res.status(500).json({ message: 'Server error' });
    }
};

// Update a category by ID
exports.updateCategory = async (req, res) => {
    try {
    const { name, description } = req.body;

    const category = await BookCategory.findByIdAndUpdate(
        req.params.id,
        { name, description },
        { new: true, runValidators: true }
    );

    if (!category) {
        return res.status(404).json({ message: 'Category not found' });
    }

    res.status(200).json(category);
    } catch (error) {
    console.error('Update Category Error:', error);
    res.status(500).json({ message: 'Server error' });
    }
};

// Delete a category by ID
exports.deleteCategory = async (req, res) => {
    try {
    const category = await BookCategory.findByIdAndDelete(req.params.id);

    if (!category) {
        return res.status(404).json({ message: 'Category not found' });
    }

    res.status(200).json({ message: 'Category deleted successfully' });
    } catch (error) {
    console.error('Delete Category Error:', error);
    res.status(500).json({ message: 'Server error' });
}
};
