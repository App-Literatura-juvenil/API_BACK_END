const dbManager = require('../database/db.manager');
const chapterController = {};

//List Chapter for Id
chapterController.findByIdChapter = async function(req, res) {
    try {
        const { idChapter } = req.params;
        console.log(idChapter);


        //Execute query
        const book = await dbManager.Chapter.findOne({
            where: {
                idChapter: idChapter
            }
        });
        //Send response
        res.json(book);


    } catch (e) {
        // Print error on console
        console.log(e);
        // Send error message as a response 
        res.status(500).send({
            message: "Some error occurred"
        });
    }
}


//List All Chapter for id Book
chapterController.findByIdBookChapter = async function(req, res) {
    try {
        //Execute query
        const chapter = await dbManager.Chapter.findAll(
            { where: { idBook: req.params.idBook } }
        );


        //Send response
        res.json({
            data: chapter
        });


    } catch (e) {
        // Print error on console
        console.log(e);
        // Send error message as a response 
        res.status(500).send({
            message: "Some error occurred"
        });
    }
}


//Add Chapter
chapterController.addChapter = async function(req, res) {
    console.log(req.body);
    chapter.push(req.body);
    res.send ('CHAPTER ADDED');

}

//Update Chapter
chapterController.updateChapter = async function(req, res) {
    if (!req.body) {
        res.status(400).send({
            message: "Request body is empty!!!!"
        });
        return;
    }


    // CREATING THE OBJECT TO PERSIST
    const updateChapterObject = {
        idBook: req.body.idBook,
        name: req.body.name,
        author: req.body.author
    }


    // EXECUTING THE CREATE QUERY - INSERT THE OBJECT INTO DATABASE 
    dbManager.Chapter.updateChapter(updateChapterObject,
        { where: { idChapter: req.params.idChapter } })
        .then(
            data => {
                console.log(data);
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
        );
}

//Delete Chapter
chapterController.deleteChapter = async function(req, res) {
    dbManager.Chapter.destroy(
        { where: { idChapter: req.params.idChapter } }
    ).then(
        data => {
            console.log(data);
            res.json(data);


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
    );
}

module.exports = chapterController;