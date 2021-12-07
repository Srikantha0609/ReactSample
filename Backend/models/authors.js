module.exports = (sequelize,DataTypes) =>{

    const author = sequelize.define("author",{
        author_id: {
            type : DataTypes.INTEGER,
            allowNull : false,
        },
        author_name: {
            type : DataTypes.STRING,
            allowNull : false,
        },
        no_of_books: {
            type : DataTypes.INTEGER,
            allowNull : false,
        }

    })
    return author;
}