const Contact = require('../models/contact')

exports.getAll = async (req, res, next) => {
  try {
    res.json(await Contact.findAll())
  } catch (error) {
    res.json(error)
  }
}

exports.getOne = async (req, res, next) => {
  try {
    const contact = await Contact.findById(req.params.id)
    if (contact) {
      return res.json(contact)
    }
    res.status(404).json({ error: 'Contact does not exist' })
  } catch (error) {
    res.json(error)
  }
}

exports.new = async (req, res, next) => {
  const { body } = req
  if (!body.firstName) {
    res.status(400).json({ error: 'Contact requires first name' })
  }

  if (!body.userId) { // todo: get this from logged in user
    res.status(400).json({ error: 'Contact requires user id' })
  }

  const attributes = {
    userId: body.userId, // todo: get this from logged in user
    firstName: body.firstName,
    lastName: body.lastName,
    company: body.company,
    email: body.company,
    phone: body.phone,
    address: body.address
  }

  try {
    res.json(await Contact.create(attributes))
  } catch (error) {
    res.json(error)
  }
}
