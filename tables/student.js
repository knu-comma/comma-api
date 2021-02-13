const Sequelize = require('sequelize')

module.exports = ((sequelize, Datatypes) => {
    return sequelize.define('student', {
        id:{
            type: Sequelize.STRING(40),
            allowNull: false,
            unique: true
        },
        clubname:{
            type: Sequelize.STRING(40),
            allowNull: false,
        },
        password: {
            type: Sequelize.STRING(100),
            allowNull: false,
        },
    })
})