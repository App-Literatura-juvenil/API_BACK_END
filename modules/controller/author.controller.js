const dbManager = require('../database/db.manager');
const authorController = {};

//List All Author
authorController.findAllAuthor = async function(req, res) {
    const authors = await dbManager.Author.findAll();
    res.json({ data: authors });

}

//List Author for Id
authorController.findByIdAuthor = async function(req, res) {
    const idAuthor = req.params.id;
    const author = await dbManager.Author.findOne({
        where: {
            idAuthor: idAuthor
        }
    });
    res.json({ author: author })
}

//List Author for name Author
authorController.findByNameAuthor = async function(req, res) {
    const nameAuthor = req.params.name;
    const authors = await dbManager.Author.findAll({
        where: {
            nameAuthor: nameAuthor
        }
    });
    res.json({ data: authors })
}

//List Author for surname
authorController.findBySurnameAuthor = async function(req, res) {
    const surnameAuthor = req.params.surname;
    const authors = await dbManager.Author.findAll({
        where: {
            surnameAuthor: surnameAuthor
        }
    });
    res.json({ data: authors })
}

//Add Author
authorController.addAuthor = async function(req, res) {
    if (!req.body) {
        res.status(400).send({
            message: "Request body is empty!!!!"
        });
        return;
    }
    const newAuthorObject = req.body;
    dbManager.Author.create(newAuthorObject).then(
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

//Update Author
authorController.updateAuthor = async function(req, res) {
    if (!req.body) {
        res.status(400).send({
            message: "Request body is empty!!!!"
        });
        return;
    }
    const updateAuthorObject = req.body;
    const idAuthor = req.params.id;
    dbManager.Author.update(updateAuthorObject, {
        where: {
            idAuthor: idAuthor
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
authorController.deleteAuthor = async function(req, res) {
    const idAuthor = req.params.id;
    dbManager.Author.destroy({ where: { idAuthor: idAuthor } }).then(
        data => {
            res.status(200).json({ message: "Author was delete" });
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

module.exports = authorController;