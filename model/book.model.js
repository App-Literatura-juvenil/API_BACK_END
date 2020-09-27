module.exports = (sequelize, Sequelize) => {
    const Book = sequelize.define("book", {
        idBook: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nameBook: Sequelize.STRING,
        image: Sequelize.STRING
    }, {
        tableName: "books"
    });
    return Book;
}