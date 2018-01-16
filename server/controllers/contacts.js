const Contact = require('../models/contact')

exports.getAll = async (req, res, next) => {
  try {
    res.json(await Contact.findAll())
  } catch (error) {
    res.status(500).json(error)
  }
}

exports.getOne = async (req, res, next) => {
  try {
    const contact = await Contact.findById(req.params.id)
    if (!contact) {
      return res.status(404).json({ message: 'Contact does not exist' })
    }
    res.json(contact)
  } catch (error) {
    res.status(500).json(error)
  }
}

exports.create = async (req, res, next) => {
  if (!req.body.firstName && !req.body.lastName) {
    return res.status(400).json({ message: 'Contact requires first or last name' })
  }

  const attributes = Contact.cleanAttributes(req.body)

  try {
    res.json(await Contact.create(attributes))
  } catch (error) {
    res.status(500).json(error)
  }
}

exports.update = async (req, res, next) => {
  if (!req.params.id) {
    return res.status(400).json({ message: 'Contact id required' })
  }
  
  const attributes = Contact.cleanAttributes(req.body)

  try {
    const contact = await Contact.findById(req.params.id)
    if (!contact) {
      return res.status(404).json({ message: 'Contact does not exist' })
    }

    if (req.body.firstName === '' && req.body.lastName === '') {
      return res.status(400).json({ message: 'Contact requires first or last name' })
    }
    
    if (!contact.firstName) {
      if (!req.body.firstName && req.body.lastName === '') {
        return res.status(400).json({ message: 'Contact requires first or last name' })
      }
    }

    if (!contact.lastName) {
      if (req.body.firstName === '' && !req.body.lastName) {
        return res.status(400).json({ message: 'Contact requires first or last name' })
      }
    }

    res.json(await contact.update(attributes))
  } catch (error) {
    res.status(500).json(error)
  } 
}

exports.delete = async (req, res, next) => {
  if (!req.params.id) {
    return res.status(400).json({ message: 'Contact id required' })
  }

  try {
    const contact = await Contact.findById(req.params.id)
    if (!contact) {
      return res.status(404).json({ message: 'Contact does not exist' })
    }
    res.json(await contact.destroy())
  } catch (error) {
    res.status(500).json(error)
  }
}
