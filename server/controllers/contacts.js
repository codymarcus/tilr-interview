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
    if (!contact) {
      return res.status(404).json({ error: 'Contact does not exist' })
    }
    res.json(contact)
  } catch (error) {
    res.json(error)
  }
}

exports.create = async (req, res, next) => {
  if (!req.body.firstName) {
    return res.status(400).json({ error: 'Contact requires first name' })
  }

  if (!req.body.userId) { // todo: get this from logged in user
    return res.status(400).json({ error: 'Contact requires user id' })
  }

  const attributes = Contact.cleanAttributes(req.body)

  // todo: get this from logged in user
  attributes.userId = req.body.userId

  try {
    res.json(await Contact.create(attributes))
  } catch (error) {
    res.json(error)
  }
}

exports.update = async (req, res, next) => {
  if (!req.params.id) {
    return res.status(400).json({ error: 'Contact id required' })
  }
  
  const attributes = Contact.cleanAttributes(req.body)

  try {
    const contact = await Contact.findById(req.params.id)
    if (!contact) {
      return res.status(404).json({ error: 'Contact does not exist' })
    }
    res.json(await contact.update(attributes))
  } catch (error) {
    res.json(error)
  } 
}

exports.delete = async (req, res, next) => {
  if (!req.params.id) {
    return res.status(400).json({ error: 'Contact id required' })
  }

  try {
    const contact = await Contact.findById(req.params.id)
    if (!contact) {
      return res.status(404).json({ error: 'Contact does not exist' })
    }
    res.json(await contact.destroy())
  } catch (error) {
    res.json(error)
  }
}
