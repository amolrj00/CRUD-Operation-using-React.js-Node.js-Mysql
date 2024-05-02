module.exports = (Sequelize, DataTypes) => {
    const StudentModels = Sequelize.define("StudentModels", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    });
       
    return StudentModels;
};
