const express = require('express');
const router = express.Router();
const answerController = require('../modules/controller/answer.controller')

router.get('/:id', answerController.findByIdAnswer);

router.get('/answerQuestion/:idQuestion', answerController.findByIdQuestionAnswer);

router.post('/', answerController.addAnswer);

router.put('/:id', answerController.updateAnswer);

router.delete('/:id', answerController.deleteAnswer);

module.exports = router;