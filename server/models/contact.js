const Sequelize = require('sequelize')
const db = require('../db')
const User = require('./user')

const Contact = db.define('contact', {
  userId: {
    type: Sequelize.INTEGER,
    field: 'user_id',
    allowNull: false
  },
  firstName: {
    type: Sequelize.STRING,
    field: 'first_name'
  },
  lastName: {
    type: Sequelize.STRING,
    field: 'last_name'
  },
  company: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  phone: {
    type: Sequelize.STRING
  },
  address: {
    type: Sequelize.STRING
  }
}, {
  underscored: true
})

Contact.belongsTo(User)

module.exports = Contact
