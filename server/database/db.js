const Sequelize = require('sequelize')
const db = {}
sequelize = new Sequelize('api', 'carlos', '123456' , {
  host: 'localhost',
  dialect: 'mysql',
  ssl: true,
  dialectOptions: {
    ssl: true
  },
  define: {
    timestamps: false
  },
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
})
db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db