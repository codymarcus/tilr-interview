import React from 'react'
import ContactAttribute from './ContactAttribute'

const contactAttributes = ['company', 'address', 'phone', 'email']

const ContactAttributeList = ({ contact }) =>
  contactAttributes.map(attr => <ContactAttribute key={attr} attribute={attr} value={contact[attr]} />)

export default ContactAttributeList