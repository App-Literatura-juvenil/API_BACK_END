module.exports = (sequelize, Sequelize) => {
    const Answer = sequelize.define("answer", {
        idAnswer: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        textAnswer: Sequelize.STRING,
        isCorrect: Sequelize.INTEGER,
    }, {
        tableName: "answers"
    });
    return Answer;
}