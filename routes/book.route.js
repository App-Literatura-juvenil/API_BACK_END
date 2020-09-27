var express = require('express');
var router = express.Router();

const bookController = require('../modules/controller/book.controller')

router.get('/', bookController.findAllBooks);

router.get('/:id', bookController.findByIdBook);

router.get('/:idAuthor', bookController.findByIdAuthorBook);

router.post('/', bookController.addBook);

router.put('/:id', bookController.updateBook);

router.delete('/:id', bookController.deleteBook);


module.exports = router;