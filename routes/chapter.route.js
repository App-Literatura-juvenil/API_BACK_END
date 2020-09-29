const express = require('express');
const router = express.Router();
const chapterController = require('../modules/controller/chapter.controller')

router.get('/:id', chapterController.findByIdChapter);

router.get('/chapterBook/:idBook', chapterController.findByIdBookChapter);

router.post('/', chapterController.addChapter);

router.put('/:id', chapterController.addChapter);

router.delete('/:id', chapterController.addChapter);

module.exports = router;