const dbManager = require('../database/db.manager');
const bookController = {};

//List All Books
bookController.findAllBooks = async function(req, res) {
    const Books = await dbManager.Book.findAll();
    res.json({ data: books });

}

//List Book for Id
bookController.findByIdBook = async function(req, res) {
    const idBook = req.params.id;
    const book = await dbManager.Book.findOne({
        where: {
            idBook: idBook
        }
    });
    res.json({ book: book })

}

//List Books for idAuthor
bookController.findByIdAuthorBook = async function(req, res) {
    const idAuthor = req.params.id;
    const books = await dbManager.Book.findAll({
        where: {
            idAuthor: idAuthor
        }
    });
    res.json({ data: books })

}

//List Books for name Book
bookController.findByNameBook = async function(req, res) {
    const nameBook = req.params.name;
    const books = await dbManager.Book.findAll({
        where: {
            nameBook: nameBook
        }
    });
    res.json({ data: books })

}

//Add Book
bookController.addBook = async function(req, res) {
    if (!req.body) {
        res.status(400).send({
            message: "Request body is empty!!!!"
        });
        return;
    }
    const newBookObject = req.body;
    dbManager.Book.create(newBookObject).then(
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

//Update Book
bookController.updateBook = async function(req, res) {
    if (!req.body) {
        res.status(400).send({
            message: "Request body is empty!!!!"
        });
        return;
    }
    const updateBookObject = req.body;
    const idBook = req.params.id;
    dbManager.Book.update(updateBookObject, {
        where: {
            idBook: idBook
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

//Delete Book
bookController.deleteBook = async function(req, res) {
    const idBook = req.params.id;
    dbManager.Book.destroy({ 
        where: { idBook: idBook } 
    }).then(
        data => {
            res.status(200).json({      
                message: "Book was delete" 
            });
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


module.exports = bookController;