import React from 'react'
import { connect } from 'react-redux'
import ContactView from '../ContactView'
import ContactEdit from '../ContactEdit'
import './style.css'

const ContactPanel = ({ contact, isEditing }) => {
  if (!contact) {
    return null
  }

  return (
    <div className='card contact-panel'>
      <div className='card-body'>
        {isEditing ? <ContactEdit /> : <ContactView contact={contact} />}
      </div>
    </div>
  )
}

const mapStateToProps = ({ contacts }) => ({
  contact: contacts.selected,
  isEditing: contacts.isEditing
})

export default connect(mapStateToProps)(ContactPanel)
