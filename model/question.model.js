module.exports = (sequelize, Sequelize) => {
    const Question = sequelize.define("question", {
        idQuestion: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        textQuestion: Sequelize.STRING,
    }, {
        tableName: "questions"
    });
    return Question;
}