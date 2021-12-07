module.exports = (sequelize,DataTypes) =>{

    const user = sequelize.define("user",{
        user_id: {
            type : DataTypes.INTEGER,
            allowNull : false,
        },
        user_name: {
            type : DataTypes.STRING,
            allowNull : false,
        },
        password: {
            type : DataTypes.STRING,
            allowNull : false,
        }

    })
    return user;
}