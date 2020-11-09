const express = require('express');
const router = express.Router();
const questionController = require('../modules/controller/question.controller')

router.get('/:id', questionController.findByIdQuestion);

router.get('/questionBook/:idBook', questionController.findByIdBookQuestion);

router.get('/questionsAnswer/:idBook', questionController.findByIdBookQuestionsAnswer);

router.post('/', questionController.addQuestion);

router.put('/:id', questionController.updateQuestion);

router.delete('/:id', questionController.deleteQuestion);

module.exports = router;