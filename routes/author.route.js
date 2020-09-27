var express = require('express');
var router = express.Router();

const authorController = require('../modules/controller/author.controller')

router.get('/', authorController.findAllAuthor);

router.get('/:id', authorController.findByIdAuthor);

router.get('/:name', authorController.findByNameAuthor);

router.get('/:surname', authorController.findBySurnameAuthor);

router.post('/', authorController.addAuthor);

router.put('/:id', authorController.updateAuthor);

router.delete('/:id', authorController.deleteAuthor);

module.exports = router;