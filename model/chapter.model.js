module.exports = (sequelize, Sequelize) => {
    const Chapter = sequelize.define("chapter", {
        idChapter: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        titleChapter: Sequelize.STRING,
        textChapter: Sequelize.STRING,
    }, {
        tableName: "chapters"
    });
    return Chapter;
}