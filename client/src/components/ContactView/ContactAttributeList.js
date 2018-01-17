import React from 'react'
import PropTypes from 'prop-types'
import ContactAttribute from './ContactAttribute'

const contactAttributes = ['company', 'address', 'phone', 'email']

const ContactAttributeList = ({ contact }) =>
  contactAttributes.map(attr => <ContactAttribute key={attr} attribute={attr} value={contact[attr]} />)

ContactAttributeList.propTypes = {
  contact: PropTypes.object.isRequired
}

export default ContactAttributeList
