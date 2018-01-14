const express = require('express')
const contacts = require('../controllers/contacts')
const router = express.Router()

router.get('/contacts', contacts.getAll)
router.get('/contacts/:id', contacts.getOne)
router.post('/contacts', contacts.create)
router.put('/contacts/:id', contacts.update)
router.delete('/contacts/:id', contacts.delete)

module.exports = router;
