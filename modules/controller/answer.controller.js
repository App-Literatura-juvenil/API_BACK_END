const { Answer } = require('../database/db.manager');
const dbManager = require('../database/db.manager');
const answerController = {};

//List Answer for Id
answerController.findByIdAnswer = async function(req, res) {
    const idAnswer = req.params.id;
    const answer = await dbManager.Answer.findOne({
        where: {
            idAnswer: idAnswer
        }
    });
    res.json({ answer: answer })
}

//List All Answer for id Book
answerController.findByIdQuestionAnswer = async function(req, res) {

    const idQuestion = req.params.idQuestion;
    const Answers = await dbManager.Answer.findAll({
        where: {
            idQuestion: idQuestion
        }
    });
    res.json({ data: Answers })

}

//Add Answer
answerController.addAnswer = async function(req, res) {
    if (!req.body) {
        res.status(400).send({
            message: "Request body is empty!!!!"
        });
        return;
    }
    const newAnswerObject = req.body;
    dbManager.Answer.create(newAnswerObject).then(
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

//Update Answer
answerController.updateAnswer = async function(req, res) {
    if (!req.body) {
        res.status(400).send({
            message: "Request body is empty!!!!"
        });
        return;
    }
    const updateAnswerObject = req.body;
    const idQuestion = req.params.id;
    dbManager.Answer.update(updateAnswerObject, {
        where: {
            idAnswer: idAnswer
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

//Delete Answer
/**
 * Delete an exist Answer by id
 * @param {*} req 
 * @param {*} res 
 */
answerController.deleteAnswer = async function(req, res) {
    const idAnswer = req.params.id;
    dbManager.Answer.destroy({ where: { idAnswer: idAnswer } }).then(
        data => {
            res.status(200).json({ message: "Answer was delete" });
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

module.exports = answerController;