import axios from 'axios'
import { backendUrl } from '../config/services'

const contactsUrl = `${backendUrl}/contacts`

export const getContacts = () => axios.get(contactsUrl)
