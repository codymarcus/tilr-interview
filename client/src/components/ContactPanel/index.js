import React from 'react'
import { connect } from 'react-redux'
import ContactAttributeList from './ContactAttributeList'
import './style.css'

const ContactPanel = ({ contact }) => {
  if (!contact) {
    return null
  }

  return (
    <div className='card contact-panel'>
      <div className='card-body'>
        <h3 className='card-title'>{contact.firstName} {contact.lastName}</h3>
        <ContactAttributeList contact={contact} />
      </div>
    </div>
  )
}

const mapStateToProps = ({ contacts }) => ({
  contact: contacts.selected
})

export default connect(mapStateToProps)(ContactPanel)
