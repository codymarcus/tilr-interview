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
  underscored: true,
  paranoid: true
})

Contact.belongsTo(User)

Contact.cleanAttributes = (contact) => {
  const updatable = ['firstName', 'lastName', 'company', 'email', 'phone', 'address']
  return updatable.reduce((acc, cur) =>
    contact[cur] !== null ? { ...acc, [cur]: contact[cur] } : acc
  , {})
} 

module.exports = Contact
