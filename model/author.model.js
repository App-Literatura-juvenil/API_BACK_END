module.exports = (sequelize, Sequelize) => {
    const Author = sequelize.define("author", {
        idAuthor: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nameAuthor: Sequelize.STRING,
        surnameAuthor: Sequelize.STRING,
        biography: Sequelize.STRING,
        imageAuthor: Sequelize.STRING
    }, {
        tableName: "authors"
    });
    return Author;
}