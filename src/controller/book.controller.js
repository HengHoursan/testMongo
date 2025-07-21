const Book = require("../model/book.model.js");

// GET all books
const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    if (!books || books.length === 0) {
      return res.status(404).json({ message: "No books found" });
    }
    res.status(200).json({
      data: books,
    });
  } catch (error) {
    console.error("Error in getAllBooks:", error);
    res.status(500).json({ message: error.message });
  }
};

// CREATE a new book
const createBook = async (req, res) => {
  const { title, author, publishedYear, genre, inStock } = req.body;
  try {
    const newBook = new Book({ title, author, publishedYear, genre, inStock });
    await newBook.save();
    res.status(201).json(newBook);
  } catch (error) {
    console.error("Error in createBook:", error);
    res.status(500).json({ message: error.message });
  }
};

// UPDATE book
const updateBook = async (req, res) => {
  const { _id, title, author, publishedYear, genre, inStock } = req.body;

  if (!_id) {
    return res.status(400).json({ message: "Book ID is required" });
  }

  if (!title || !author || !publishedYear || !genre) {
    return res.status(400).json({
      message: "All fields (title, author, publishedYear, genre) are required",
    });
  }

  try {
    const result = await Book.updateOne({
      _id,
      title,
      author,
      publishedYear,
      genre,
      inStock,
    });

    if (result.matchedCount === 0) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.status(200).json({ message: "Book updated successfully" });
  } catch (error) {
    console.error("Error in updateBook:", error);
    res.status(500).json({ message: error.message });
  }
};

// DELETE book
const deleteBook = async (req, res) => {
  const { _id } = req.params;
  if (!_id) {
    return res.status(400).json({ message: "Book ID is required" });
  }
  try {
    const result = await Book.deleteOne({_id});

    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.status(200).json({ message: "Book deleted successfully" });
  } catch (error) {
    console.error("Error in deleteBook:", error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllBooks,
  createBook,
  updateBook,
  deleteBook,
};
