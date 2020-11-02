const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors')

const indexRouter = require('./routes/index');
const authorRouter = require('./routes/author.route');
const chapterRouter = require('./routes/chapter.route');
const bookRouter = require('./routes/book.route');
const questionRouter = require('./routes/question.route');
const answerRouter = require('./routes/answer.route');

const dbManager = require("./modules/database/db.manager");

const app = express();

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/author', authorRouter);
app.use('/book', bookRouter);
app.use('/chapter', chapterRouter);
app.use('/question', questionRouter);
app.use('/answer', answerRouter);


dbManager.sequelizeConnection.authenticate().then(
    () => {
        console.log('****Connection has been established successfully.****');
        // recreate the models if the tables does not exists
        dbManager.sequelizeConnection.sync().then(() => {
            console.log("Database Synced");
        });
    }
).catch(
    err => {
        console.error('Unable to connect to the database:', err);
    }
);

module.exports = app;