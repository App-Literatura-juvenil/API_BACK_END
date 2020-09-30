const dbManager = require('../database/db.manager');
const chapterController = {};

//List Chapter for Id
chapterController.findByIdChapter = async function(req, res) {
    const idChapter = req.params.id;
    const chapter = await dbManager.Chapter.findOne({
        where: {
            idChapter: idChapter
        }
    });
    res.json({ chapter: chapter })
}

//List All Chapter for id Book
chapterController.findByIdBookChapter = async function(req, res) {

    const idBook = req.params.idBook;
    const chapters = await dbManager.Chapter.findAll({
        where: {
            idBook: idBook
        }
    });
    res.json({ data: chapters })

}

//Add Chapter
chapterController.addChapter = async function(req, res) {
    if (!req.body) {
        res.status(400).send({
            message: "Request body is empty!!!!"
        });
        return;
    }
    const newChapterObject = req.body;
    dbManager.Chapter.create(newChapterObject).then(
        data => {
            res.send(data);
        }
    ).catch(
        err => {
            // Print error on console
            console.log(err);
            // Send error message as a response 
            res.status(500).send({
                message: "Some error occurred"
            });
        }
    );
}

//Update Chapter
chapterController.updateChapter = async function(req, res) {
    if (!req.body) {
        res.status(400).send({
            message: "Request body is empty!!!!"
        });
        return;
    }
    const updateChapterObject = req.body;
    const idChapter = req.params.id;
    dbManager.Chapter.update(updateChapterObject, {
        where: {
            idChapter: idChapter
        }
    }).then(
        data => {
            res.send(data);
        }
    ).catch(
        e => {
            // Print error on console
            console.log(e);
            // Send error message as a response 
            res.status(500).send({
                message: "Some error occurred"
            });
        }
    )
}

//Delete Author
/**
 * Delete an exist author by id
 * @param {*} req 
 * @param {*} res 
 */
chapterController.deleteChapter = async function(req, res) {
    const idChapter = req.params.id;
    dbManager.Chapter.destroy({ where: { idChapter: idChapter } }).then(
        data => {
            res.status(200).json({ message: "Chapter was delete" });
        }
    ).catch(
        e => {
            // Print error on console
            console.log(e);
            // Send error message as a response 
            res.status(500).json({
                message: "Some error occurred"
            });
        }
    )
}

module.exports = chapterController;