const express = require('express');
const router = express.Router();
const bookController = require('../controller/book.controller.js');

router.get('/', bookController.getAllBooks);
router.post('/', bookController.createBook);
router.put('/', bookController.updateBook);
router.delete('/:_id', bookController.deleteBook);

module.exports = router;