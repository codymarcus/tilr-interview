import axios from 'axios'
import { backendUrl } from '../config/services'

const contactsUrl = `${backendUrl}/contacts`

export const getContacts = () => axios.get(contactsUrl)

export const editContact = (id, editedContact) => axios.put(`${contactsUrl}/${id}`, editedContact)

export const deleteContact = id => axios.delete(`${contactsUrl}/${id}`)

export const createContact = newContact => axios.post(contactsUrl, newContact)
