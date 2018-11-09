const Sequelize = require('sequelize')
const db = require("../database/db.js")

module.exports = db.sequelize.define(
    'posts',
    {
        ID: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: Sequelize.STRING 
        },
        last_name: {
            type: Sequelize.STRING
        },
        user_post: {
            type: Sequelize.TEXT
        }
    },
    {
        timestamps: false
    }
)