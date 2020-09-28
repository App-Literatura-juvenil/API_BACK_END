const express = require('express');
const router = express.Router();
const chapterController = require('../modules/controller/chapter.controller')

router.get('/:id', chapterController.findByIdChapter);

router.get('/:idBook', chapterController.findByIdBookChapter);

router.post('/', chapterController.addChapter);

router.put('/:idChapter', chapterController.updateChapter);

router.delete('/:idChapter', chapterController.deleteChapter);

module.exports = router;