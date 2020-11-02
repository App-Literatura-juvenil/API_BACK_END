//IMPORT SEQUELIZE
const Sequelize = require("sequelize");
//IMPORT SEQUELIZE CONNECTION
const sequelizeConnection = require('./db.connection');

//IMPORT MODELS
const AuthorModel = require("../../model/author.model");
const BookModel = require("../../model/book.model");
const ChapterModel = require("../../model/chapter.model");
const QuestionModel = require("../../model/question.model");
const AnswerModel = require("../../model/answer.model");

//INITIALIZE MODELS
const Author = AuthorModel(sequelizeConnection, Sequelize);
const Book = BookModel(sequelizeConnection, Sequelize);
const Chapter = ChapterModel(sequelizeConnection, Sequelize);
const Question = QuestionModel(sequelizeConnection, Sequelize);
const Answer = AnswerModel(sequelizeConnection, Sequelize);

//CREATE RELATIONS BETWEEN MODELS
Author.hasMany(Book, { foreignKey: 'idAuthor', sourceKey: 'idAuthor' });
Book.belongsTo(Author, { foreignKey: 'idAuthor', sourceKey: 'idBook' });

Book.hasMany(Chapter, { foreignKey: 'idBook', sourceKey: 'idBook' });
Chapter.belongsTo(Book, { foreignKey: 'idBook', sourceKey: 'idChapter' });

Book.hasMany(Question, { foreignKey: 'idBook', sourceKey: 'idBook' });
Question.belongsTo(Book, { foreignKey: 'idBook', sourceKey: 'idQuestion' });

Question.hasMany(Answer, { foreignKey: 'idQuestion', sourceKey: 'idQuestion' });
Answer.belongsTo(Question, { foreignKey: 'idQuestion', sourceKey: 'idAnswer' });


//GROUP MODELS
const models = {
    Author: Author,
    Book: Book,
    Chapter: Chapter,
    Question: Question,
    Answer: Answer
};


/**
 * Create object to manage the models and database
 */
const db = {
    ...models,
    sequelizeConnection
};

// EXPORT CONSTANT DB
module.exports = db;