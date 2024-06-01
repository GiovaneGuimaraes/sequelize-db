const Sequelize = require('sequelize');
const banco = require('../config/db');
const sequelize = require('../config/db');

export const User = banco.define('user', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name:{
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
    },
    password:{
        type: Sequelize.STRING,
        allowNull: false,
    }
}, 
{
    timestamps: false
})