const dbManager = require('../database/db.manager');
const questionController = {};

//List Question for Id
questionController.findByIdQuestion = async function(req, res) {
    const idQuestion = req.params.id;
    const question = await dbManager.Question.findOne({
        where: {
            idQuestion: idQuestion
        }
    });
    res.json({ question: question })
}

//List All Question for id Book
questionController.findByIdBookQuestion = async function(req, res) {

    const idBook = req.params.idBook;
    const Questions = await dbManager.Question.findAll({
        where: {
            idBook: idBook
        }
    });
    res.json({ data: Questions })

}
questionController.findByIdBookQuestionsAnswer = async function(req, res) {
    let result = [];
    const idBook = req.params.idBook;
    const Questions = await dbManager.Question.findAll({
        where: {
            idBook: idBook
        }
    });
    for(let item of Questions){
        let answers = await dbManager.Answer.findAll({
            where: {
                idQuestion: item.idQuestion
            }
        });
        let QuestionAnswer = item;
        QuestionAnswer.listAnswers = answers;
        result.push(QuestionAnswer)
    }
    res.json({ data: result })

}
//Add Question
questionController.addQuestion = async function(req, res) {
    if (!req.body) {
        res.status(400).send({
            message: "Request body is empty!!!!"
        });
        return;
    }
    const newQuestionObject = req.body;
    dbManager.Question.create(newQuestionObject).then(
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

//Update Question
questionController.updateQuestion = async function(req, res) {
    if (!req.body) {
        res.status(400).send({
            message: "Request body is empty!!!!"
        });
        return;
    }
    const updateQuestionObject = req.body;
    const idQuestion = req.params.id;
    dbManager.Question.update(updateQuestionObject, {
        where: {
            idQuestion: idQuestion
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

//Delete Question
/**
 * Delete an exist Question by id
 * @param {*} req 
 * @param {*} res 
 */
questionController.deleteQuestion = async function(req, res) {
    const idQuestion = req.params.id;
    dbManager.Question.destroy({ where: { idQuestion: idQuestion } }).then(
        data => {
            res.status(200).json({ message: "Question was delete" });
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

module.exports = questionController;